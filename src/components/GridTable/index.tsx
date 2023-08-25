import { Grid, GridItem, GridItemProps, GridProps } from "@chakra-ui/react";
import { forwardRef } from "react";

/**
 * Header
 */
export type GridTableHeaderProps = GridProps;

export const GridTableHeader = (props: GridTableHeaderProps) => (
  <Grid alignItems="center" borderBottom="1px solid" borderBottomColor="border-01" {...props} />
);

export type GridTableHeaderItemProps = GridItemProps;

export const GridTableHeaderItem = (props: GridTableHeaderItemProps) => (
  <GridItem color="text-03" py={2} textStyle="detail" {...props} />
);

/**
 * Rows
 */
export interface GridTableRowProps extends GridProps {
  isLink?: boolean;
  href?: string;
}

export const GridTableRow = forwardRef<HTMLDivElement, GridTableRowProps>(({ isLink = true, href, ...props }, ref) => (
  <Grid
    ref={ref}
    href={href}
    alignItems="center"
    sx={{ _hover: { bg: isLink ? "hover-ui" : "transparent" } }}
    {...props}
  />
));
GridTableRow.displayName = "GridTableRow";

export type GridTableRowItemProps = GridItemProps;

export const GridTableRowItem = (props: GridTableRowItemProps) => <GridItem color="text-02" py={4} {...props} />;
