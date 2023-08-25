import {
  forwardRef,
  Flex,
  MenuButtonProps as ChakraMenuButtonProps,
  MenuButton as ChakraMenuButton,
} from "@chakra-ui/react";
import { ChevronProps } from "@/uikit/Icons/components/Chevron";
import { Chevron } from "@/uikit";

interface MenuButtonProps extends ChakraMenuButtonProps {
  isOpen: boolean;
  chevronIconProps?: ChevronProps;
}

export const MenuButton = forwardRef<MenuButtonProps, "div">(
  ({ children, isOpen, disabled, chevronIconProps, ...props }, ref) => {
    const defaultProps = {
      ref,
      cursor: disabled ? "not-allowed" : "pointer",
      color: disabled ? "text-03" : "text-01",
      disabled,
      "data-id": "menu-button",
    };
    return (
      <>
        {props.as ? (
          <ChakraMenuButton {...defaultProps} {...props}>
            {children}
          </ChakraMenuButton>
        ) : (
          <ChakraMenuButton {...defaultProps} alignItems="unset" {...props}>
            <Flex alignItems="center" justifyContent="space-between" flex={1}>
              <>{children} <Chevron ml={2} direction="down" isRotated={isOpen} {...chevronIconProps} /></>
            </Flex>
          </ChakraMenuButton>
        )}
      </>
    );
  }
);
