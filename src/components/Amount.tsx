import { useMemo } from "react";
import { Flex, FlexProps } from "@chakra-ui/react";
import { EthHalfIcon, Text, TextProps, IconProps } from "@/uikit";
import usePreviousValue from "@/hooks/usePreviousValue";

interface AmountProps extends FlexProps {
  icon?: React.FC<IconProps>;
  amount: string;
  textProps?: TextProps;
}

export const Amount = ({ icon: Icon = EthHalfIcon, amount, textProps, ...props }: AmountProps) => (
  <Flex alignItems="center" minWidth="80px" gap={1} {...props}>
    <Icon boxSize={14} width="8px" height="16px" />
    <Text textStyle="detail" bold {...textProps}>
      {amount}
    </Text>
  </Flex>
);

export const AnimatedAmount = ({ icon: Icon = EthHalfIcon, amount, textProps, ...props }: AmountProps) => {
  const previousAmount = usePreviousValue(amount);
  const previousAmountNumber = parseFloat(previousAmount);
  const priceAnimation: "animatedPriceIncrease" | "animatedPriceDecrease" | undefined = useMemo(() => {
    if (previousAmount && amount) {
      const amountNumber = parseFloat(amount);
      if (previousAmountNumber > amountNumber) {
        return "animatedPriceDecrease";
      } else if (previousAmountNumber < amountNumber) {
        return "animatedPriceIncrease";
      }
    }
  }, [amount, previousAmount, previousAmountNumber]);

  return (
    <Amount
      amount={amount}
      key={amount}
      icon={Icon}
      textProps={{
        layerStyle: priceAnimation,
        ...textProps,
      }}
      {...props}
    />
  );
};

interface ChangeAmountProps extends TextProps {
  change: number;
}

export const ChangeAmount = ({ change, ...props }: ChangeAmountProps) => (
  <Text color={change > 0 ? "support-success" : "text-error"} textStyle="detail" {...props}>
    {change}
  </Text>
);
