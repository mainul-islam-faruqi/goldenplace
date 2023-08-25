import { BadgeProps } from "@chakra-ui/react";
import { Badge } from "./Badge";

export interface CountBadgeProps extends BadgeProps {
  isOverlay?: boolean;
}

export const CountBadge: React.FC<React.PropsWithChildren<CountBadgeProps>> = ({
  children,
  isOverlay = false,
  ...props
}) => (
  <Badge
    display="flex"
    alignItems="center"
    justifyContent="center"
    bg="red.500"
    color="white"
    border={isOverlay ? "2px solid" : "none"}
    borderColor="ui-bg"
    px={1}
    height={5}
    borderRadius="button"
    fontWeight="bold"
    textAlign="center"
    minWidth={6}
    lineHeight={1}
    {...props}
  >
    {children}
  </Badge>
);
