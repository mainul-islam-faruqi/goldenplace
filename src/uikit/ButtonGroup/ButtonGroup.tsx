import { forwardRef } from "react";
import { ButtonGroup as ChakraButtonGroup, ButtonGroupProps } from "@chakra-ui/react";

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {
  return (
    <ChakraButtonGroup
      ref={ref}
      border={props.isAttached ? "none" : `1px solid`}
      borderColor="border-01"
      p={props.isAttached ? 0 : 1}
      borderRadius="container"
      colorScheme="gray"
      variant="ghost"
      size="sm"
      spacing={0}
      sx={
        props.isAttached
          ? {
              "& > .chakra-button:not(:last-of-type)": {
                borderRightWidth: `0`,
              },
              "& > .chakra-button:active + .chakra-button": {
                borderLeftColor: "focus",
              },
            }
          : {}
      }
      {...props}
    />
  );
});

ButtonGroup.displayName = "ButtonGroup";
