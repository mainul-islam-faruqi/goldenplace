import { useTranslation } from "next-i18next";
import { FilterOptionRow, FilterPopover } from "@/views/rankings/components/FilterPopover";

interface FilterProps {
  isVerified: boolean;
  toggleIsVerified: () => void;
}

export const Filter = ({ isVerified, toggleIsVerified }: FilterProps) => {
  const { t } = useTranslation();

  return (
    <FilterPopover>
      <FilterOptionRow name="verified" onSelectFilter={() => toggleIsVerified()} isChecked={isVerified}>
        {t("Verified Collections Only")}
      </FilterOptionRow>
    </FilterPopover>
  );
};
