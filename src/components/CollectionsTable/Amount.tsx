// import { Flex, FlexProps } from "@chakra-ui/react";
// import { EthHalfIcon, WethHalfIcon, Text, TextProps } from "uikit";

import { Flex, FlexProps } from '@chakra-ui/react';
import { EthHalfIcon, WethHalfIcon } from '@/uikit';
import { Text, TextProps } from '@/uikit';

interface AmountProps extends FlexProps {
  icon?: typeof EthHalfIcon | typeof WethHalfIcon;
  amount: string;
  textProps?: TextProps;
}

export const Amount = ({
  icon: Icon = EthHalfIcon,
  amount,
  textProps,
  ...props
}: AmountProps) => (
  <Flex alignItems="center" minWidth="80px" {...props}>
    <Icon boxSize={14} width="8px" height="16px" mr={1} />
    <Text textStyle="detail" bold {...textProps}>
      {amount}
    </Text>
  </Flex>
);

interface ChangeAmountProps extends TextProps {
  change: number;
}

export const ChangeAmount = ({ change, ...props }: ChangeAmountProps) => (
  <Text
    color={change > 0 ? 'support-success' : 'text-error'}
    textStyle="detail"
    {...props}
  >
    {change}
  </Text>
);
