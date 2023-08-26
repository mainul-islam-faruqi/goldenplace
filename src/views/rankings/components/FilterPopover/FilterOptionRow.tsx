import { FC, PropsWithChildren } from "react";
import { Flex, FlexProps, SwitchProps } from "@chakra-ui/react";
import { Switch, Text } from "@/uikit";

interface FilterOptionRowProps extends Pick<SwitchProps, "isChecked"> {
  name: string;
  onSelectFilter: (filter: string) => void;
  wrapperProps?: FlexProps;
}

export const FilterOptionRow: FC<PropsWithChildren<FilterOptionRowProps>> = ({
  name,
  onSelectFilter,
  wrapperProps,
  children,
  isChecked,
}) => {
  const handleClick = () => {
    onSelectFilter(name);
  };

  return (
    <Flex alignItems="center" justifyContent="space-between" onClick={handleClick} cursor="pointer" {...wrapperProps}>
      <Text bold color="currentcolor" textStyle="detail" mr={2} userSelect="none">
        {children}
      </Text>
      <Switch isChecked={isChecked} pointerEvents="none" />
    </Flex>
  );
};
