import { MenuProps as ChakraMenuProps, Menu as ChakraMenu } from "@chakra-ui/react";

export const Menu: React.FC<ChakraMenuProps> = ({ children, ...props }) => {
  return (
    <ChakraMenu gutter={0} isLazy {...props}>
      {children}
    </ChakraMenu>
  );
};
