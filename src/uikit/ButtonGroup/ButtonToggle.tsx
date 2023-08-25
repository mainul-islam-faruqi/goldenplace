import { forwardRef } from "react";
import { ButtonGroupProps } from "@chakra-ui/react";
import { ButtonGroup } from "./ButtonGroup";

const emptySx = {};

export const ButtonToggle = forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {
  return <ButtonGroup ref={ref} isAttached sx={emptySx} {...props} />;
});

ButtonToggle.displayName = "ButtonToggle";
