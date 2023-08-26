import { Grid, GridItem, GridProps, useBreakpointValue } from "@chakra-ui/react";
import { shallow } from "zustand/shallow";
import { useCollectionViewStore } from "@/views/collections/shared";
import { CollectionSearchInput } from "./CollectionSearchInput";
import { Filter } from "./Filter";
import { MobileSort, Sort } from "./Sort";
import { TimeFrame } from "./TimeFrame";

type CollectionTableFiltersProps = GridProps;

export const CollectionTableFilters = (props: CollectionTableFiltersProps) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const [isVerified, toggleIsVerified, term, updateTerm, clearTerm, sortLabel, setSortLabel, timeFrame, setTimeframe] =
    useCollectionViewStore(
      (state) => [
        state.isVerified,
        state.toggleIsVerified,
        state.term,
        state.updateTerm,
        state.clearTerm,
        state.sortLabel,
        state.setSortLabel,
        state.timeFrame,
        state.setTimeFrame,
      ],
      shallow
    );

  return (
    <Grid
      gridGap={3}
      gridTemplateAreas={{
        base: "'verified search sort' 'time time time'",
        lg: "'verified search sort time'",
      }}
      gridTemplateColumns={{ base: "auto minmax(0, 1fr) auto", lg: "auto minmax(0, 2fr) auto auto" }}
      {...props}
    >
      <GridItem gridArea="search">
        <CollectionSearchInput term={term} updateTerm={updateTerm} clearTerm={clearTerm} />
      </GridItem>
      <GridItem gridArea="sort">
        {isMobile ? <MobileSort onSelect={setSortLabel} /> : <Sort sortLabel={sortLabel} onSelect={setSortLabel} />}
      </GridItem>
      <GridItem gridArea="verified">
        <Filter isVerified={!!isVerified} toggleIsVerified={toggleIsVerified} />
      </GridItem>

      <GridItem gridArea="time">
        <TimeFrame timeFrame={timeFrame} setTimeframe={setTimeframe} sortLabel={sortLabel} />
      </GridItem>
    </Grid>
  );
};
