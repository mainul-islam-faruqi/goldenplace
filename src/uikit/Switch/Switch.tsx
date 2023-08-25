import { forwardRef, Switch as ChakraSwitch, SwitchProps as ChakraSwitchProps } from "@chakra-ui/react";

const Switch = forwardRef<ChakraSwitchProps, "input">((props, ref) => <ChakraSwitch ref={ref} {...props} />);

export default Switch;
