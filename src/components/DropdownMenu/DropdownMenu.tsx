import { MenuList as ChakraMenuList, MenuItem, MenuListProps, MenuProps } from "@chakra-ui/menu";
import { Box, Portal, Text as ChakraText } from "@chakra-ui/react";
import kebabCase from "lodash/kebabCase";
import isEmpty from "lodash/isEmpty";
import intersection from "lodash/intersection";
import { Badge, ButtonProps } from "@/uikit";
import { Menu, MenuButton } from "@/uikit";
// import useLocalStorageSnooze from "@/hooks/useLocalStorageSnooze";
import { LOCAL_STORAGE_NEW_SORT_FILTERS } from "@/config";

export interface DropdownMenuProps extends ButtonProps {
  labels: string[];
  selectedLabel: string;
  handleSelect: (arg0: string) => void;
  listProps?: MenuListProps;
  menuProps?: Omit<MenuProps, "children">;
  size?: MenuProps["size"];
  renderInPortal?: boolean;
  newKeys?: string[];
  dataIdPrefix?: string;
}

export const DropdownMenu: React.FC<React.PropsWithChildren<DropdownMenuProps>> = ({
  labels,
  selectedLabel,
  handleSelect,
  listProps,
  menuProps,
  size = "sm",
  newKeys,
  renderInPortal = true,
  onClick,
  dataIdPrefix,
  ...props
}) => {
  const hasNewKeys = !isEmpty(intersection(labels, newKeys));

  // const { isSnoozed, handleSnooze } = useLocalStorageSnooze({
  //   baseKey: LOCAL_STORAGE_NEW_SORT_FILTERS,
  //   duration: { years: 1 },
  // });

  const MenuList = (
    <ChakraMenuList width={{ base: "100%", md: "280px" }} {...listProps}>
      {labels.map((label) => {
        const dataId = kebabCase(label);

        return (
          <MenuItem
            key={label}
            onClick={() => handleSelect(label)}
            display="flex"
            justifyContent="space-between"
            data-id={dataIdPrefix ? `${dataIdPrefix}-${dataId}` : ""}
          >
            {label}
            {newKeys && newKeys.includes(label) && (
              <Badge textTransform="uppercase" bg="support-error-inverse" color="white">
                NEW
              </Badge>
            )}
          </MenuItem>
        );
      })}
    </ChakraMenuList>
  );

  return (
    <Menu size={size} offset={[0, 4]} {...menuProps}>
      {({ isOpen }) => (
        <>
          <MenuButton
            width={{ base: "100%", md: "280px" }}
            isOpen={isOpen}
            size={size}
            position="relative"
            overflow="visible"
            onClick={(e) => {
              // handleSnooze();
              onClick?.(e);
            }}
            {...props}
          >
            <ChakraText noOfLines={1}>{selectedLabel}</ChakraText>
            {hasNewKeys &&
              // !isSnoozed &&
              (
              <Box
                position="absolute"
                borderRadius="circular"
                boxSize={2.5}
                bg="support-error-inverse"
                right={-1}
                top={-1}
              />
            )}
          </MenuButton>
          {renderInPortal ? <Portal>{MenuList}</Portal> : MenuList}
        </>
      )}
    </Menu>
  );
};
