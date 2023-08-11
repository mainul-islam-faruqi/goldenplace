import ChakraIcon, { IconProps as ChakraIconProps } from "@chakra-ui/icon";

export type IconProps = ChakraIconProps;

export const Icon = (props: IconProps) => <ChakraIcon viewBox="0 0 32 32" data-id="icon" {...props} />;

Icon.defaultProps = {
  boxSize: 6,
};
