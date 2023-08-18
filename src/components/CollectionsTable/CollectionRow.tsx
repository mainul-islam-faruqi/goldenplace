// import { Flex, Grid, GridItem } from "@chakra-ui/react";
// import { Avatar } from "components/Avatar";
// import PercentChangeLabel from "components/PercentChangeLabel";
// import Link from "next/link";
// import { CollectionBase } from "types/graphql";
// import { LogoPolygonIcon, Text, VerifiedIcon } from "uikit";
// import { formatNumberToLocale, formatToSignificant } from "utils/format";
// import { useOsCollectionImages } from "views/collections/components/hooks/useOsCollectionImages";
// import { Amount } from "./Amount";
// import { AmountVolumeDisplay, gridTemplateColumns } from "./shared";

import { Flex, Grid, GridItem } from '@chakra-ui/react';
import { Avatar } from '../Avatar/Avatar';
import PercentChangeLabel from '../PercentChangeLabel';
import Link from 'next/link';
import { CollectionBase } from '@/types/graphql';
import { LogoPolygonIcon, VerifiedIcon } from '@/uikit';
import { Text } from '@/uikit';
import { formatNumberToLocale, formatToSignificant } from '@/utils/format';
// import { useOsCollectionImages } from 'views/collections/components/hooks/useOsCollectionImages';
import { Amount } from './Amount';
import { AmountVolumeDisplay, gridTemplateColumns } from './shared';

interface CollectionRowProps {
  collection: CollectionBase;
  rank: number;
}

export const CollectionRow = ({ collection, rank }: CollectionRowProps) => {
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
  // const { image_url, address, floor, volume, countOwners, totalSupply } = collection;
  // const { floorPrice, floorChange24h } = floor || {};
  const isListingRewardsEligible = !!collection.points;
  // const osCollectionImagesQuery = useOsCollectionImages(address, {
  //   enabled: !logo,
  // });
  const logoImg = (() => {
    // if (logo) {
    //   return logo;
    // }

    // if (
    //   osCollectionImagesQuery.isSuccess &&
    //   osCollectionImagesQuery.data.logo
    // ) {
    //   return osCollectionImagesQuery.data.logo;
    // }

    return undefined;
  })();

  return (
    <Link
      href={`/collections/${topCollection.address.replace('ethereum.', '')}`}
      passHref
    >
      <Grid
        alignItems="center"
        gridTemplateColumns={gridTemplateColumns}
        py={4}
        borderBottom="1px solid"
        borderBottomColor="borderColor.100"
        gridColumnGap={2}
        sx={{ _hover: { bg: 'hover-ui' }, _active: { bg: 'onclick-ui' } }}
      >
        <GridItem>
          <Flex alignItems="center">
            <Text fontWeight="bold" flexShrink={0} width={8}>
              {rank}
            </Text>
            <Avatar
              size={40}
              src={image_url}
              address={topCollection.address}
              mr={2}
              flexShrink={0}
              borderRadius="4px"
            />
            <Text as="span" textStyle="detail" bold>
              {name}
              {collection.collection.marketplace_pages[0]?.verified && (
                <VerifiedIcon boxSize={4} ml={1} />
              )}
              {isListingRewardsEligible && (
                <LogoPolygonIcon color="purple.400" boxSize={4} ml={1} />
              )}
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex alignItems="start" flexDirection="column">
            {!!topCollection.floor ? (
              <Amount amount={formatToSignificant(topCollection.floor, 4)} />
            ) : (
              '-'
            )}
            {/* {!!floorChange24h && (
              <PercentChangeLabel value={floorChange24h} textStyle="helper" />
            )} */}
          </Flex>
        </GridItem>
        {/* <GridItem>
          <AmountVolumeDisplay amount={volume} change={1} />
        </GridItem> */}
        <GridItem>
          {volume ? <Amount amount={formatToSignificant(volume, 0)} /> : '-'}
        </GridItem>
        <GridItem>
          {topCollection.countOwners ? (
            <Text textStyle="detail" bold>
              {formatNumberToLocale(topCollection.countOwners, 0, 0)}
            </Text>
          ) : (
            '-'
          )}
        </GridItem>
        <GridItem>
          {topCollection.totalSupply ? (
            <Text textStyle="detail" bold>
              {formatNumberToLocale(topCollection.totalSupply, 0, 0)}
            </Text>
          ) : (
            '-'
          )}
        </GridItem>
        <GridItem>
          <Text> {chains} </Text>
        </GridItem>
      </Grid>
    </Link>
  );
};
