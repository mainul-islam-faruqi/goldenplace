import { forwardRef, Badge as ChakraBadge, BadgeProps as ChakraBadgeProps } from "@chakra-ui/react";

export const Badge = forwardRef<ChakraBadgeProps, "div">((props, ref) => <ChakraBadge ref={ref} {...props} />);
