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
  const { address, logo, floor, volume, countOwners, totalSupply } = collection;
  const { floorPrice, floorChange24h } = floor || {};
  const isListingRewardsEligible = !!collection.points;
  // const osCollectionImagesQuery = useOsCollectionImages(address, {
  //   enabled: !logo,
  // });
  const logoImg = (() => {
    if (logo) {
      return logo;
    }

    // if (
    //   osCollectionImagesQuery.isSuccess &&
    //   osCollectionImagesQuery.data.logo
    // ) {
    //   return osCollectionImagesQuery.data.logo;
    // }

    return undefined;
  })();

  return (
    <Link href={`/collections/${collection.address}`} passHref>
      <Grid
        as="a"
        alignItems="center"
        gridTemplateColumns={gridTemplateColumns}
        py={4}
        borderBottom="1px solid"
        borderBottomColor="border-01"
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
              src={logoImg?.src}
              address={collection.address}
              mr={2}
              flexShrink={0}
              borderRadius="4px"
            />
            <Text as="span" textStyle="detail" bold>
              {collection.name}
              {collection.isVerified && <VerifiedIcon boxSize={4} ml={1} />}
              {isListingRewardsEligible && (
                <LogoPolygonIcon color="purple.400" boxSize={4} ml={1} />
              )}
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex alignItems="start" flexDirection="column">
            {!!floorPrice ? (
              <Amount amount={formatToSignificant(floorPrice, 4)} />
            ) : (
              '-'
            )}
            {!!floorChange24h && (
              <PercentChangeLabel value={floorChange24h} textStyle="helper" />
            )}
          </Flex>
        </GridItem>
        <GridItem>
          <AmountVolumeDisplay
            amount={volume.volume24h}
            change={volume.change24h}
          />
        </GridItem>
        <GridItem>
          {volume.volumeAll ? (
            <Amount amount={formatToSignificant(volume.volumeAll, 0)} />
          ) : (
            '-'
          )}
        </GridItem>
        <GridItem>
          {countOwners ? (
            <Text textStyle="detail" bold>
              {formatNumberToLocale(countOwners, 0, 0)}
            </Text>
          ) : (
            '-'
          )}
        </GridItem>
        <GridItem>
          {totalSupply ? (
            <Text textStyle="detail" bold>
              {formatNumberToLocale(totalSupply, 0, 0)}
            </Text>
          ) : (
            '-'
          )}
        </GridItem>
      </Grid>
    </Link>
  );
};
