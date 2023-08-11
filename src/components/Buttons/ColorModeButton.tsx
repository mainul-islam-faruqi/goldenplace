// import { IconButton, useColorMode } from "@chakra-ui/react";
// import { ButtonProps, LightFilledIcon, LightIcon } from "uikit";




import { IconButton, useColorMode } from "@chakra-ui/react";
// import { ButtonProps, LightFilledIcon, LightIcon } from "uikit";
import { ButtonProps } from "@/uikit";
import { LightFilledIcon, LightIcon } from "@/uikit";





export const ColorModeButton = (props: ButtonProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      variant="ghost"
      colorScheme="gray"
      color="text-01"
      aria-label="Color mode switcher"
      onClick={toggleColorMode}
      {...props}
    >
      {colorMode === "light" ? <LightFilledIcon /> : <LightIcon boxSize={16} />}
    </IconButton>
  );
};
