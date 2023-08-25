import { Box } from "@chakra-ui/react";
import times from "lodash/times";
import { useTranslation } from "next-i18next";
import { SectionPlaceholder } from "@/uikit";
// import { COLLECTIONS_PAGINATION_FIRST } from "@/hooks/graphql/collections";
import { CollectionBase, CollectionTimeframe } from "@/types/graphql";
import { CollectionRow } from "./CollectionRow";
import { CollectionHeader, CollectionRowSkeleton } from "./shared";

interface CollectionTableProps {
  collections: CollectionBase[];
  isLoading?: boolean;
  loadingRowCount?: number;
  timeframe: CollectionTimeframe;
}

export const CollectionTable = ({
  collections,
  isLoading = false,
  // loadingRowCount = COLLECTIONS_PAGINATION_FIRST,
  loadingRowCount = 10,
  timeframe,
}: CollectionTableProps) => {
  console.log(collections)
  const { t } = useTranslation();

  const renderBody = () => {
    if (isLoading) {
      return times(loadingRowCount).map((n) => <CollectionRowSkeleton key={n} />);
    }

    if (collections.length === 0) {
      return <SectionPlaceholder py={10}>{t("No Collections found")}</SectionPlaceholder>;
    }

    return collections.map((collection, index) => (
      <CollectionRow key={collection.address} collection={collection} rank={index + 1} timeframe={timeframe} />
    ));
  };

  return (
    <Box>
      <CollectionHeader />
      {renderBody()}
    </Box>
  );
};
