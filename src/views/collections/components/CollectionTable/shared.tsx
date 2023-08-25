import { Flex, FlexProps, Skeleton, SkeletonProps } from "@chakra-ui/react";
import { BigNumberish } from "ethers";
import { useTranslation } from "next-i18next";
import { formatNumberToLocale, formatToSignificant } from "@/utils/format";
import { getOwnerData } from "@/utils/collection";
import PercentChangeLabel from "@/components/PercentChangeLabel";
import { GridTableHeader, GridTableHeaderItem, GridTableRow, GridTableRowItem } from "@/components/GridTable";
import { AnimatedAmount } from "@/components/Amount";
import { Collection } from "@/types/graphql";
import { Text } from "@/uikit";

export const gridTemplateColumns = {
  base: "minmax(0, 2fr) repeat(2, minmax(0, 1fr))",
  md: "minmax(32px, 48px) minmax(0, 3fr) repeat(4, 1fr) 56px",
};
export const hideOnMobile = { base: "none", md: "block" };

export const CollectionHeader = () => {
  const { t } = useTranslation();
  return (
    <GridTableHeader gridTemplateColumns={gridTemplateColumns}>
      <GridTableHeaderItem textAlign="center" display={hideOnMobile}>{`#`}</GridTableHeaderItem>
      <GridTableHeaderItem>{t("Collection")}</GridTableHeaderItem>
      <GridTableHeaderItem textAlign="right">{t("Floor")}</GridTableHeaderItem>
      <GridTableHeaderItem textAlign="right">{t("Vol")}</GridTableHeaderItem>
      <GridTableHeaderItem textAlign="right" display={hideOnMobile}>
        {t("Owners")}
      </GridTableHeaderItem>
      <GridTableHeaderItem textAlign="right" display={hideOnMobile}>
        {t("Items")}
      </GridTableHeaderItem>
    </GridTableHeader>
  );
};

const ValueSkeleton = (props: SkeletonProps) => <Skeleton height={4} width="50px" {...props} />;

const AmountSkeleton = () => (
  <Flex alignItems="end" flexDirection="column">
    <ValueSkeleton width="30px" mb={1} />
    <Skeleton height={4} width="45px" />
  </Flex>
);

export const CollectionRowSkeleton = () => (
  <GridTableRow gridTemplateColumns={gridTemplateColumns}>
    <GridTableRowItem display={hideOnMobile}>
      <Skeleton width={5} height="21px" mx="auto" />
    </GridTableRowItem>
    <GridTableRowItem>
      <Flex alignItems="center">
        <Skeleton width={10} height={10} mr={4} />
        <Skeleton height="21px" width="110px" />
      </Flex>
    </GridTableRowItem>
    <GridTableRowItem>
      <AmountSkeleton />
    </GridTableRowItem>
    <GridTableRowItem>
      <AmountSkeleton />
    </GridTableRowItem>
    <GridTableRowItem display={hideOnMobile}>
      <Flex justifyContent="end">
        <ValueSkeleton />
      </Flex>
    </GridTableRowItem>
  </GridTableRow>
);

interface AmountChangeDisplayProps extends FlexProps {
  amount?: BigNumberish | null;
  change?: number | null;
  precision?: number;
}

export const AmountChangeDisplay = ({ amount, change, precision = 2, ...props }: AmountChangeDisplayProps) => (
  <Flex alignItems="end" flexDirection="column" {...props}>
    {amount ? <AnimatedAmount amount={formatToSignificant(amount, precision)} justifyContent="end" /> : "-"}
    {!!change && (
      // <PercentChangeLabel value={change} textStyle="helper" minimumFractionDigits={0} maximumFractionDigits={1} />
      <PercentChangeLabel value={change} textStyle="helper" />
    )}
  </Flex>
);

interface OwnerPercentageDisplayProps extends FlexProps, Pick<Collection, "totalSupply" | "countOwners"> {
  isErc1155: boolean;
}

export const OwnerPercentageDisplay = ({
  totalSupply,
  countOwners,
  isErc1155,
  ...props
}: OwnerPercentageDisplayProps) => {
  const { t } = useTranslation();

  const { ownerCountNum, uniqueOwners } = getOwnerData(countOwners, totalSupply, isErc1155);

  const totalSupplyDisplay = (
    <Text textStyle="detail" color="text-02" bold>
      {formatNumberToLocale(Number(ownerCountNum), 0, 0)}
    </Text>
  );

  if (isErc1155) {
    return totalSupplyDisplay;
  }

  if (uniqueOwners > 0) {
    return (
      <Flex alignItems="end" flexDirection="column" {...props}>
        {totalSupplyDisplay}
        <Text textStyle="helper" color="text-03">
          {t("{{percent}}% unique", { percent: formatNumberToLocale(Number(uniqueOwners), 0, 1) })}
        </Text>
      </Flex>
    );
  }

  return <Text textStyle="helper" color="text-03">{`-`}</Text>;
};
