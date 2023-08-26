import { BigNumberish } from "ethers";
import { create, StateCreator } from "zustand";
import { immer } from "zustand/middleware/immer";
import { CollectionsSort, CollectionTimeframe, CollectionVolume } from "@/types/graphql";

type UpdateFunc = () => void;

interface CollectionViewState {
  isVerified?: true;
  term: string;
  sortLabel: string;
  timeFrame: CollectionTimeframe;
  toggleIsVerified: UpdateFunc;
  updateTerm: (newTerm: string) => void;
  clearTerm: UpdateFunc;
  setSortLabel: (newSortLabel: string) => void;
  setTimeFrame: (newTimeframe: CollectionTimeframe) => void;
  reset: () => void;
}

/**
 * @TODO This is only required because our current implementation
 * of the Dropdown component uses string values.
 */
export const VOL_DESC_LABEL = "Volume high to low";
export const VOL_CHANGE_ASC_LABEL = "Vol. change low to high";
export const VOL_CHANGE_DESC_LABEL = "Vol. change high to low";

const getCompositeKey = (label: string, timeFrame: CollectionTimeframe) => {
  return `${label}_${timeFrame}`; // Underscore is for legibility
};

/**
 * A map with a composite key of label and timeframe
 */
const sortMap = {
  // Total volume DESC
  [getCompositeKey(VOL_DESC_LABEL, CollectionTimeframe.DAY)]: CollectionsSort.VOL_24H_DESC,
  [getCompositeKey(VOL_DESC_LABEL, CollectionTimeframe.WEEK)]: CollectionsSort.VOL_7D_DESC,
  [getCompositeKey(VOL_DESC_LABEL, CollectionTimeframe.MONTH)]: CollectionsSort.VOL_1M_DESC,
  [getCompositeKey(VOL_DESC_LABEL, CollectionTimeframe.MAX)]: CollectionsSort.VOL_ALL_DESC,
  // Volume change ASC
  [getCompositeKey(VOL_CHANGE_ASC_LABEL, CollectionTimeframe.DAY)]: CollectionsSort.VOL_CHANGE_24H_ASC,
  [getCompositeKey(VOL_CHANGE_ASC_LABEL, CollectionTimeframe.WEEK)]: CollectionsSort.VOL_CHANGE_7D_ASC,
  [getCompositeKey(VOL_CHANGE_ASC_LABEL, CollectionTimeframe.MONTH)]: CollectionsSort.VOL_CHANGE_1M_ASC,
  // Volume change DESC
  [getCompositeKey(VOL_CHANGE_DESC_LABEL, CollectionTimeframe.DAY)]: CollectionsSort.VOL_CHANGE_24H_DESC,
  [getCompositeKey(VOL_CHANGE_DESC_LABEL, CollectionTimeframe.WEEK)]: CollectionsSort.VOL_CHANGE_7D_DESC,
  [getCompositeKey(VOL_CHANGE_DESC_LABEL, CollectionTimeframe.MONTH)]: CollectionsSort.VOL_CHANGE_1M_DESC,
};

export const getSortFromLabelAndTimeframe = (sortLabel: string, timeFrame: CollectionTimeframe) => {
  const compositeKey = getCompositeKey(sortLabel, timeFrame);
  return sortMap[compositeKey];
};

const DEFAULT_SORT_LABEL = VOL_DESC_LABEL;
const DEFAULT_TIME_FRAME = CollectionTimeframe.DAY;

export const DEFAULT_SORT = getSortFromLabelAndTimeframe(DEFAULT_SORT_LABEL, DEFAULT_TIME_FRAME);
export const DEFAULT_IS_VERIFIED = true;
export const DEFAULT_TERM = "";

interface CollectionTableStoreInitialState {
  isVerified?: true;
  term: string;
  sortLabel: string;
  timeFrame: CollectionTimeframe;
}
type CollectionTableStoreGenerator = (
  initialState: CollectionTableStoreInitialState
) => StateCreator<CollectionViewState, [["zustand/immer", never]]>;

/**
 * This functions returns a StateCreator that can be passed directly to zustand's create function.
 * Define this once and we can re-use it for various distinct collection tables.
 */
const collectionTableStoreGenerator: CollectionTableStoreGenerator = (initialState) => (set) => ({
  isVerified: initialState.isVerified,
  term: initialState.term,
  sortLabel: initialState.sortLabel,
  timeFrame: initialState.timeFrame,
  toggleIsVerified: () => {
    set((state) => {
      state.isVerified = state.isVerified ? undefined : true;
    });
  },
  updateTerm: (newTerm) => {
    set((state) => {
      state.term = newTerm;
    });
  },
  clearTerm: () => {
    set((state) => {
      state.term = "";
    });
  },
  setSortLabel: (newSortLabel) => {
    set((state) => {
      // Vol. Change does not support MAX so if it is selected and Max was selected already
      // update the timeframe to 24h
      if (
        [VOL_CHANGE_ASC_LABEL, VOL_CHANGE_DESC_LABEL].includes(newSortLabel) &&
        state.timeFrame === CollectionTimeframe.MAX
      ) {
        state.timeFrame = CollectionTimeframe.DAY;
      }

      state.sortLabel = newSortLabel;
    });
  },
  setTimeFrame: (newTimeframe) => {
    set((state) => {
      state.timeFrame = newTimeframe;
    });
  },
  reset: () => {
    set((state) => {
      state.isVerified = initialState.isVerified;
      state.term = "";
      state.sortLabel = DEFAULT_SORT_LABEL;
      state.timeFrame = DEFAULT_TIME_FRAME;
    });
  },
});

export const useCollectionViewStore = create(
  immer<CollectionViewState>(
    collectionTableStoreGenerator({
      isVerified: DEFAULT_IS_VERIFIED,
      term: DEFAULT_TERM,
      sortLabel: DEFAULT_SORT_LABEL,
      timeFrame: DEFAULT_TIME_FRAME,
    })
  )
);

export const useWatchlistCollectionsTableStore = create(
  immer<CollectionViewState>(
    collectionTableStoreGenerator({
      // @note watchlist collections entity does not support filters like `isVerified`. This will be ignored
      isVerified: undefined,
      term: "",
      sortLabel: DEFAULT_SORT_LABEL,
      timeFrame: DEFAULT_TIME_FRAME,
    })
  )
);

export const useRelativeVolume = (
  volume: CollectionVolume,
  timeframe: CollectionTimeframe
): { volume: BigNumberish | null; change?: number | null } => {
  if (timeframe === CollectionTimeframe.DAY) {
    return { volume: volume.volume24h, change: volume.change24h };
  }

  if (timeframe === CollectionTimeframe.WEEK) {
    return { volume: volume.volume7d, change: volume.change7d };
  }

  if (timeframe === CollectionTimeframe.MONTH) {
    return { volume: volume.volume1m, change: volume.change1m };
  }

  return { volume: volume.volumeAll };
};

interface CollectionSearchStoreState {
  term: string;
  setTerm: (newTerm: string) => void;
  clearTerm: UpdateFunc;
}

/**
 * Store for a single collection search. It is in multiple places
 */
export const useCollectionSearchStore = create(
  immer<CollectionSearchStoreState>((set) => ({
    term: "",
    setTerm: (newTerm) => {
      set((state) => {
        state.term = newTerm;
      });
    },
    clearTerm: () => {
      set((state) => {
        state.term = "";
      });
    },
  }))
);
