import { useRef } from "react";
import { useTranslation } from "next-i18next";
import { IconButton } from "@chakra-ui/react";
// import { useAccount } from "wagmi";
// import { useConnectModal } from "@rainbow-me/rainbowkit";
// import { formatAsCompactNumber } from "@/utils/format";
import {
  Button, ButtonProps,
  // Popover, StarFilledIcon, StarIcon,
  TooltipText
} from "@/uikit";
// import { useAddToMainWatchlist, useIsCollectionInMainWatchlist, useRemoveFromMainWatchlist } from "hooks/watchlists";
// import { useThrowConfettiFromElement } from "hooks/useConfetti";
// import { useToast } from "hooks/useToast";
// import { useSignInHandler } from "hooks/useSignInHandler";
// import { useGetFormattedErrorAndTitle } from "hooks/useGetFormattedErrorAndTitle";
// import { isAuthorized } from "utils/login";

interface Props extends ButtonProps {
  collectionAddress: string;
  // show confetti on "add" in collection page
  isCollectionPage?: boolean;
  isSingleTokenPage?: boolean;
  // if provided, display a number alongside the star. used in collection headers
  countWatchlists?: number;
}

export const WatchlistStarButton: React.FC<React.PropsWithChildren<Props>> = ({
  collectionAddress,
  isCollectionPage = false,
  isSingleTokenPage = false,
  countWatchlists,
  ...props
}) => {
  const { t } = useTranslation();
  // const { address } = useAccount();
  // const { openConnectModal } = useConnectModal();
  // const getFormattedErrorAndTitle = useGetFormattedErrorAndTitle();
  // const buttonRef = useRef<HTMLDivElement>(null);
  // const throwConfetti = useThrowConfettiFromElement(buttonRef);
  // const { toast } = useToast();

  /**
   * @note In most cases, the button is rendered as part of a collection table, and the query cache for `isInMainWatchlist` will be warmed
   * by the collections query. However, during the first client render, this query would run before the cache is warm because we suddenly
   * have the user's address available.
   * To wait until the collections query returns and sets the `isInMainWatchlist` cache, use the `useQueryCacheOnly` option.
   */
  const { data: isInMainWatchlist } = useIsCollectionInMainWatchlist(
    { address: collectionAddress, account: address!, useQueryCacheOnly: !isSingleTokenPage },
    { enabled: !!address }
  );

  const { mutate: addToMainWatchlist } = useAddToMainWatchlist({
    onSuccess: () => {
      if (isCollectionPage) {
        throwConfetti();
      }
      toast({
        title: t("Added to Watchlist"),
      });
    },
    onError: (error) => {
      const { title, description } = getFormattedErrorAndTitle(error);
      toast({ title, description, status: "error", dataIdSuffix: "watchlist-star-main-add" });
    },
  });
  const { mutate: removeFromMainWatchlist } = useRemoveFromMainWatchlist({
    onSuccess: () => {
      toast({
        title: t("Collection Removed"),
      });
    },
    onError: (error) => {
      const { title, description } = getFormattedErrorAndTitle(error);
      toast({ title, description, status: "error", dataIdSuffix: "watchlist-star-main-remove" });
    },
  });

  const formattedWatchlistCount = !!countWatchlists ? formatAsCompactNumber(countWatchlists) : null;

  const handleAddRemoveFromWatchlist = () => {
    if (isInMainWatchlist) {
      removeFromMainWatchlist([collectionAddress]);
    } else {
      addToMainWatchlist([collectionAddress]);
    }
  };

  const handleAuthFailure = (error: any) => {
    const { title, description } = getFormattedErrorAndTitle(error);
    toast({ title, description, status: "error", dataIdSuffix: "watchlist-star-auth-failure" });
  };

  const hasValidToken = isAuthorized(address);

  const { signInHandler } = useSignInHandler({
    onAuthSuccess: () => addToMainWatchlist([collectionAddress]),
    onAuthFailure: handleAuthFailure,
  });

  /**
   * If the user is not connected with a valid signature, always send an "add" mutation on auth success.
   * If the user is connected & has a valid signature, toggle add/remove
   */
  const handleClick = () => {
    if (!address) {
      return openConnectModal?.();
    }

    if (!hasValidToken) {
      return signInHandler();
    }

    handleAddRemoveFromWatchlist();
  };

  return (
    <Popover
      label={
        <TooltipText>{isInMainWatchlist ? t("Remove from Main Watchlist") : t("Add to Main Watchlist")}</TooltipText>
      }
    >
      <span>
        {!!formattedWatchlistCount ? (
          <Button
            data-id="watchlist-star-button"
            onClick={handleClick}
            leftIcon={isInMainWatchlist ? <StarFilledIcon color="link-01" /> : <StarIcon color="text-02" />}
            color={isInMainWatchlist ? "link-01" : "text-02"}
            ref={buttonRef}
            {...props}
          >
            {t(formattedWatchlistCount)}
          </Button>
        ) : (
          <IconButton
            data-id="watchlist-star-button"
            aria-label={isInMainWatchlist ? t("Remove from Main Watchlist") : t("Add to Main Watchlist")}
            onClick={handleClick}
            {...props}
          >
            {isInMainWatchlist ? <StarFilledIcon color="link-01" /> : <StarIcon color="text-02" />}
          </IconButton>
        )}
      </span>
    </Popover>
  );
};

WatchlistStarButton.defaultProps = {
  colorScheme: "secondary",
  variant: "outline",
};
