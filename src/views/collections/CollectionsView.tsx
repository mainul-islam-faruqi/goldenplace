import { useEffect, useState } from "react";
// import { useAccount } from "wagmi";
import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
// import { useInfiniteCollectionsBase } from "hooks/graphql/collections";
import { CollectionBase } from "@/types/graphql";
import { Button } from "@/uikit";
// import { useIsMounted } from "hooks/useIsMounted";
// import { useDebouncedValue } from "hooks/useDebouncedValue";
import { RankingsHeader } from "@/views/rankings/components/RankingsHeader";
import { Container } from "@/components/Layout/Container";
import { CollectionTableFilters } from "./components/CollectionTableFilters";
import { CollectionTable } from "./components/CollectionTable";
import { getSortFromLabelAndTimeframe, useCollectionViewStore } from "./shared";

type CollectionViewProps = {
  initialData: CollectionBase[];
};

const CollectionsView = ({ initialData }: CollectionViewProps) => {
  const { t } = useTranslation();
  // const { address } = useAccount();
  const address = '';
  const { events } = useRouter();
  // const isMounted = useIsMounted();
  const isMounted = true;

  const [isVerified, sortLabel, timeframe, term, reset] = useCollectionViewStore((state) => [
    state.isVerified,
    state.sortLabel,
    state.timeFrame,
    state.term,
    state.reset,
  ]);

  // const debouncedTerm = useDebouncedValue<string>(term);
  const sort = getSortFromLabelAndTimeframe(sortLabel, timeframe);

  // We only show the skeleton client-side and after the first successful fetch.
  // Before that, we use initialData in the collection table.
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);
  // const collectionsQuery = useInfiniteCollectionsBase(
  //   {
  //     filter: {
  //       isVerified,
  //     },
  //     sort,
  //     search: {
  //       term: debouncedTerm,
  //     },
  //     account: address,
  //   },
  //   {
  //     onSuccess: () => {
  //       if (!hasLoadedOnce) {
  //         setHasLoadedOnce(true);
  //       }
  //     },
  //   }
  // );

  // const collections = collectionsQuery.data ? collectionsQuery.data.pages.flat() : [];
  // const showSkeleton = isMounted && collectionsQuery.isLoading && hasLoadedOnce;

  // Reset filters when you leave the page
  useEffect(() => {
    const resetAllFilters = () => reset();
    events.on("routeChangeComplete", resetAllFilters);
    return () => {
      events.off("routeChangeComplete", resetAllFilters);
    };
  }, [events, reset]);

  return (
    <>
      <RankingsHeader tabIndex={0} />
      <Container pt={8} pb={{ base: 6, md: 8 }}>
        <CollectionTableFilters mb={6} />
        <CollectionTable
          // collections={isMounted && hasLoadedOnce ? collections : initialData}
          collections={initialData}
          // isLoading={showSkeleton}
          timeframe={timeframe}
        />
        {/* {collectionsQuery.hasNextPage && (
          <Box textAlign="center" py={6}>
            <Button
              isLoading={collectionsQuery.isFetching}
              size="sm"
              colorScheme="gray"
              disabled={!collectionsQuery.hasNextPage}
              onClick={() => collectionsQuery.fetchNextPage()}
            >
              {t("Load More")}
            </Button>
          </Box>
        )} */}
      </Container>
    </>
  );
};

export default CollectionsView;
