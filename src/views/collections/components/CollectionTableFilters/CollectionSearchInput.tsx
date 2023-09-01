import { ChangeEvent } from "react";
import { useTranslation } from "next-i18next";
import { TextInput } from "@/uikit";

interface CollectionSearchInputProps {
  term: string;
  updateTerm: (newTerm: string) => void;
  clearTerm: () => void;
}

export const CollectionSearchInput = ({ term, updateTerm, clearTerm }: CollectionSearchInputProps) => {
  const { t } = useTranslation();
  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    updateTerm(evt.target.value);
  };

  return (
    <TextInput
      size="md"
      // wrapperProps={{ width: "100%" }}
      placeholder={t("Search Collections")}
      value={term}
      onChange={handleChange}
      // onClear={clearTerm}
      variant="lowcontrast"
    />
  );
};
