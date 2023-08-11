import {
  Box,
  Flex,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  IconButton,
} from "@chakra-ui/react";
// import { useTranslation } from "react-i18next";
import NextLink from "next/link";
// import { useUser } from "hooks/graphql/user";
// import { ChevronRightIcon, Button, DownloadIcon } from "uikit";
// import StaleOrdersActionBar from "views/account/components/StaleOrdersActionBar";
// import { Avatar, AvatarWithUsername } from "components/Avatar";
// import { DisconnectWalletButton } from "../Buttons/DisconnectWalletButton";
// import { AccountLink } from "./AccountLink";
// import { YourWalletInfo } from "./YourWalletInfo";

interface UserMenuProps {
  account: string;
}

const accountsPath = "/accounts/me";

const UserMenu = ({ account }: UserMenuProps) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  // const { t } = useTranslation();
  // const userQuery = useUser(account, { enabled: !!account });
  const sharedLinkProps = { onClick: onClose };

  return (
    <>
      <IconButton
        aria-label="connected wallet"
        colorScheme="gray"
        isRound
        variant="text"
        cursor="pointer"
        borderColor="border-01"
        bgColor="transparent"
        sx={{
          _hover: {
            bgColor: "transparent",
          },
        }}
        onClick={onToggle}
      >
        {/* <Avatar src={userQuery.data?.avatar?.image.src} address={account} size={32} /> */}
      </IconButton>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="lg" />
          <DrawerBody px={0}>
            <Box pt="96px">
              <NextLink href={accountsPath} passHref>
                <Flex as="a" alignItems="center" cursor="pointer" p={4} onClick={onClose}>
                  {/* <AvatarWithUsername
                    src={userQuery.data?.avatar?.image.src}
                    size={32}
                    address={account}
                    textProps={{ textStyle: "display-body" }}
                    flex={1}
                  />
                  <ChevronRightIcon /> */}
                  userName
                </Flex>
              </NextLink>
              {/* <StaleOrdersActionBar account={account} isNarrow forceVisible /> */}
              {/* <AccountLink uikitLinkProps={sharedLinkProps} path={accountsPath} hash="#owned">
                {t("My Items")}
              </AccountLink>
              <AccountLink uikitLinkProps={sharedLinkProps} path={accountsPath} hash="#activity">
                {t("Activity")}
              </AccountLink>
              <AccountLink uikitLinkProps={sharedLinkProps} path={accountsPath} hash="#offers">
                {t("Offers")}
              </AccountLink>
              <AccountLink uikitLinkProps={sharedLinkProps} path={accountsPath} hash="#collections">
                {t("My Collections")}
              </AccountLink> */}
              <NextLink href="/accounts/import" passHref>
                {/* <Button as="a" square onClick={onClose} rightIcon={<DownloadIcon />} width="100%">
                  {t("Import Listings")}
                </Button> */}
                Import Listings
              </NextLink>
              {/* <YourWalletInfo isOpen={isOpen} onClose={onClose} address={account} /> */}
            </Box>
            <Box px={4}>
              {/* <DisconnectWalletButton variant="outline" colorScheme="gray" isFullWidth /> */}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default UserMenu;
