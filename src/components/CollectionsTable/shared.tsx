// import { Box, BoxProps, Flex, FlexProps, Grid, GridItem, Skeleton } from "@chakra-ui/react";
// import PercentChangeLabel from "components/PercentChangeLabel";
// import { BigNumberish } from "ethers";
// import { useTranslation } from "next-i18next";
// import { Text, TextProps } from "uikit";
// import { formatToSignificant } from "utils/format";
// import { Amount } from "./Amount";

import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  Grid,
  GridItem,
  Skeleton,
} from '@chakra-ui/react';
import PercentChangeLabel from '../PercentChangeLabel';
import { BigNumberish } from 'ethers';
import { useTranslation } from 'next-i18next';
import { Text, TextProps } from '@/uikit';
// import { formatToSignificant } from "utils/format";
import { Amount } from './Amount';

export const gridTemplateColumns =
  '4fr minmax(0, 2fr) minmax(0, 2fr) minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr)';

const CollectionHeader: React.FC<TextProps> = (props) => (
  <Text
    textStyle="detail"
    color="text-02"
    {...props}
    className="text-subTitle"
  />
);
export const CollectionHeaderRow = () => {
  const { t } = useTranslation();

  return (
    <Grid
      gridTemplateColumns={gridTemplateColumns}
      borderBottom="1px solid"
      borderBottomColor="borderColor.100"
      pb={2}
      gridColumnGap={2}
    >
      <CollectionHeader>{t('Collection')}</CollectionHeader>
      <CollectionHeader>{t('Floor')}</CollectionHeader>
      {/* <CollectionHeader>{t('24h Vol')}</CollectionHeader> */}
      <CollectionHeader>{t('Total Vol')}</CollectionHeader>
      <CollectionHeader>{t('Owners')}</CollectionHeader>
      <CollectionHeader>{t('Items')}</CollectionHeader>
      <CollectionHeader>{t('Chain')}</CollectionHeader>
    </Grid>
  );
};

export const MobileCollectionDisplaySkeleton = (props: BoxProps) => (
  <Flex pt={3} {...props}>
    <Box pt="10px">
      <Skeleton height={5} width={5} mr={2} />
    </Box>
    <Skeleton height={10} width={10} mr={2} />
    <Box flex={1} pt="10px">
      <Skeleton width="130px" height={5} mb={4} />
      <Flex mb={2}>
        <Skeleton width="80px" height={4} />
        <Skeleton width="40px" height={4} ml={4} />
      </Flex>
      <Flex mb="3px">
        <Skeleton width="60px" height={4} />
        <Skeleton width="60px" height={4} ml={4} />
        <Skeleton width="40px" height={4} ml={4} />
      </Flex>
    </Box>
    <Box pt={2} pr="10px">
      <Skeleton height={5} width={5} />
    </Box>
  </Flex>
);

export const CollectionRowSkeleton = () => (
  <Grid
    gridTemplateColumns={gridTemplateColumns}
    borderBottom="1px solid"
    borderBottomColor="borderColor.100"
    className="border-b border-b-rose-600/.5"
    py={4}
    alignItems="center"
    gridColumnGap={2}
  >
    <GridItem>
      <Flex alignItems="center">
        <Box width={8} flexShrink={0}>
          <Skeleton width={5} height={5} />
        </Box>
        <Skeleton height={10} width={10} mr={2} />
        <Skeleton height={5} width="180px" />
      </Flex>
    </GridItem>
    <GridItem>
      <Skeleton height={4} width="60%" />
    </GridItem>
    <GridItem>
      <Skeleton height={4} width="60%" />
    </GridItem>
    <GridItem>
      <Skeleton height={4} width="60%" />
    </GridItem>
    <GridItem>
      <Skeleton height={4} width="20%" />
    </GridItem>
    <GridItem>
      <Skeleton height={4} width="20%" />
    </GridItem>
  </Grid>
);

interface AmountVolumeDisplayProps extends FlexProps {
  amount?: BigNumberish | null;
  change?: number | null;
}

export const AmountVolumeDisplay = ({
  amount,
  change,
  ...props
}: AmountVolumeDisplayProps) => (
  <Flex alignItems="start" flexDirection="column" {...props}>
    {/* {amount ? <Amount amount={formatToSignificant(amount, 2)} /> : "-"} */}
    {amount ? <Amount amount={String(amount)} /> : '-'}
    {change && <PercentChangeLabel value={change} textStyle="helper" />}
  </Flex>
);
