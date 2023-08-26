import { Box, Flex } from "@chakra-ui/react";
// import { commify } from "ethers/lib/utils.js";
import { Avatar } from "@/components/Avatar";
import { CollectionBase, CollectionTimeframe } from "@/types/graphql";
import { GemIcon, Text, VerifiedIcon } from "@/uikit";
// import { useOsCollectionImages } from "@/views/collections/components/hooks/useOsCollectionImages";
import { useRelativeVolume } from "@/views/collections/shared";
import { GridTableRow, GridTableRowItem, GridTableRowProps } from "@/components/GridTable";
// import { WatchlistStarButton } from "@/components/Buttons";
import { NextLink } from "@/components/NextLink";
// import { useCollectionBase } from "hooks/graphql/collection";
// import { useRealtimeCollectionGlobalFloor } from "hooks/realtime/collections";
// import { getFloorChangePercent } from "@/utils/floorPricePercentHelpers";
import { AmountChangeDisplay, gridTemplateColumns, hideOnMobile, OwnerPercentageDisplay } from "./shared";

interface CollectionRowProps extends Omit<GridTableRowProps, "href"> {
  collection: CollectionBase;
  rank: number;
  timeframe: CollectionTimeframe;
}

export const CollectionRow = ({ collection, rank, timeframe, ...props }: CollectionRowProps) => {
  // const collectionQuery = useCollectionBase(collection.address, { enabled: false });
  // const { logo, floor, historicalFloor, countOwners, totalSupply, type } = collectionQuery.data || collection;
  console.log(collection)
  const {
    name,
    image_url,
    top_contracts,
    total_quantity,
    distinct_owner_count,
    floor_prices,
    chains,
  } = collection.collection;
  const { volume } = collection;
  const topCollection = {
    name,
    image_url,
    address: top_contracts[0],
    totalSupply: total_quantity,
    volume,
    countOwners: distinct_owner_count,
    floor: floor_prices[0]?.value,
  };
  const { address, floor, countOwners, totalSupply } = topCollection;

  // const liveGlobalFloor = useRealtimeCollectionGlobalFloor(collection.address);
  // const globalFloor = liveGlobalFloor !== undefined ? liveGlobalFloor : floor?.floorPriceGlobal;

  // const { volume, change } = useRelativeVolume(collection.volume, timeframe);
  // const osCollectionImagesQuery = useOsCollectionImages(collection.address, { enabled: !logo });
  // const logoImg = (() => {
  //   if (logo) {
  //     return logo;
  //   }

  //   if (osCollectionImagesQuery.isSuccess && osCollectionImagesQuery.data.logo) {
  //     return osCollectionImagesQuery.data.logo;
  //   }

  //   return undefined;
  // })();

  const timeframeFloorChangeMap = {
    // [CollectionTimeframe.DAY]: historicalFloor.floor24hAgo,
    // [CollectionTimeframe.WEEK]: historicalFloor.floor7dAgo,
    // [CollectionTimeframe.MONTH]: historicalFloor.floor30dAgo,
    [CollectionTimeframe.MAX]: undefined,
  };

  // const timeframeFloor = timeframeFloorChangeMap[timeframe];

  return (
    <GridTableRow
      as={NextLink}
      href={`/collections/${collection.address}`}
      gridTemplateColumns={gridTemplateColumns}
      {...props}
    >
      <GridTableRowItem display={hideOnMobile} textStyle="detail" fontWeight="bold" textAlign="center">
        {rank}
      </GridTableRowItem>
      <GridTableRowItem>
        <Flex alignItems="center">
          <Avatar
            // size={{ base: 32, md: 40 }}
            size={32}
            src={image_url}
            address={address}
            mr={4}
            flexShrink={0}
            borderRadius="mini"
          />
          <Text
            as="span"
            textStyle="detail"
            color="text-02"
            noOfLines={{ base: 2, lg: 1 }}
            bold
            title={name}
          >
            {name}
          </Text>
          {<VerifiedIcon boxSize={4} ml={1} />}
          {/* {collection.isEligible && <GemIcon boxSize={4} ml={1} />} */}
          {<GemIcon boxSize={4} ml={1} />}
        </Flex>
      </GridTableRowItem>
      <GridTableRowItem>
        <AmountChangeDisplay amount={floor}
          // change={getFloorChangePercent(globalFloor, timeframeFloor)}
        />
        <AmountChangeDisplay />
      </GridTableRowItem>
      <GridTableRowItem>
        <AmountChangeDisplay amount={volume}
          change={22}
        />
        <AmountChangeDisplay />
      </GridTableRowItem>
      <GridTableRowItem display={hideOnMobile} textStyle="detail" textAlign="right" fontWeight="bold">
        <OwnerPercentageDisplay countOwners={countOwners} totalSupply={totalSupply} isErc1155={true}          // isErc1155={type === "ERC1155"}
        
        />
      </GridTableRowItem>
      <GridTableRowItem display={hideOnMobile} textStyle="detail" textAlign="right" fontWeight="bold" pr={2}>
        {/* {commify( || "-")} */}
        {totalSupply?.toString()}
      </GridTableRowItem>
      <GridTableRowItem display={hideOnMobile} textAlign="center" pr={2}>
        <Box onClick={(e) => e.preventDefault()}>
          {/* <WatchlistStarButton
            size="sm"
            collectionAddress={collection.address}
            data-id="collection-row-watchlist-star"
          /> */}
        </Box>
      </GridTableRowItem>
    </GridTableRow>
  );
};
