import { useMemo } from "react";
import { useTranslation } from "next-i18next";
import kebabCase from "lodash/kebabCase";
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { DropdownMenu } from "@/components/DropdownMenu";
import { VOL_CHANGE_ASC_LABEL, VOL_CHANGE_DESC_LABEL, VOL_DESC_LABEL } from "@/views/collections/shared";

const useSortLabels = () => {
  const { t } = useTranslation();
  return useMemo(() => [t(VOL_DESC_LABEL), t(VOL_CHANGE_DESC_LABEL), t(VOL_CHANGE_ASC_LABEL)], [t]);
};

const dropdownMenuWidth = { base: "auto", lg: "100%" };

interface SortProps {
  sortLabel: string;
  onSelect: (newLabel: string) => void;
  dataIdPrefix?: string;
}
export const Sort = ({ sortLabel, onSelect, dataIdPrefix }: SortProps) => {
  const labels = useSortLabels();

  return (
    <DropdownMenu
      size="md"
      labels={labels}
      selectedLabel={sortLabel}
      handleSelect={onSelect}
      listProps={{ width: dropdownMenuWidth }}
      width={dropdownMenuWidth}
      menuProps={{ variant: "lowcontrast" }}
      dataIdPrefix={dataIdPrefix}
    />
  );
};

interface MobileSortProps {
  onSelect: (newLabel: string) => void;
  dataIdPrefix?: string;
}
export const MobileSort = ({ onSelect, dataIdPrefix }: MobileSortProps) => {
  const { t } = useTranslation();
  const labels = useSortLabels();

  return (
    <Menu>
      <MenuButton as={IconButton} aria-label="share" variant="outline" colorScheme="gray">
        {t("Sort")}
      </MenuButton>
      <MenuList zIndex="dropdown">
        {labels.map((label) => {
          const handleSelect = () => onSelect(label);
          const dataId = kebabCase(label);

          return (
            <MenuItem key={label} onClick={handleSelect} data-id={dataIdPrefix ? `${dataIdPrefix}-${dataId}` : ""}>
              {label}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};
