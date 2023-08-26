import { useTranslation } from "next-i18next";
import { CollectionTimeframe } from "@/types/graphql";
import { Button, ButtonToggle } from "@/uikit";
import { VOL_DESC_LABEL } from "@/views/collections/shared";

const getVariant = (isActive: boolean) => (isActive ? "solid" : "outline");
const getColor = (isActive: boolean) => (isActive ? "link-01" : "link-02");

interface TimeframeProps {
  timeFrame: CollectionTimeframe;
  setTimeframe: (newTimeFrame: CollectionTimeframe) => void;
  sortLabel: string;
  dataIdPrefix?: string;
}

export const TimeFrame = ({ timeFrame, setTimeframe, sortLabel, dataIdPrefix }: TimeframeProps) => {
  const { t } = useTranslation();

  const handleTimeframeClick = (newTimeframe: CollectionTimeframe) => () => {
    setTimeframe(newTimeframe);
  };

  const isDay = timeFrame === CollectionTimeframe.DAY;
  const isWeek = timeFrame === CollectionTimeframe.WEEK;
  const isMonth = timeFrame === CollectionTimeframe.MONTH;
  const isMax = timeFrame === CollectionTimeframe.MAX;
  const isMaxDisabled = sortLabel !== VOL_DESC_LABEL;

  return (
    <ButtonToggle width="100%" display="flex">
      <Button
        variant={getVariant(isDay)}
        size="md"
        color={getColor(isDay)}
        onClick={handleTimeframeClick(CollectionTimeframe.DAY)}
        flex={1}
        data-id={dataIdPrefix ? `${dataIdPrefix}-24h` : ""}
      >
        {t("24h")}
      </Button>
      <Button
        variant={getVariant(isWeek)}
        size="md"
        color={getColor(isWeek)}
        onClick={handleTimeframeClick(CollectionTimeframe.WEEK)}
        flex={1}
        data-id={dataIdPrefix ? `${dataIdPrefix}-7d` : ""}
      >
        {t("7d")}
      </Button>
      <Button
        variant={getVariant(isMonth)}
        size="md"
        color={getColor(isMonth)}
        onClick={handleTimeframeClick(CollectionTimeframe.MONTH)}
        flex={1}
        data-id={dataIdPrefix ? `${dataIdPrefix}-30d` : ""}
      >
        {t("30d")}
      </Button>
      <Button
        variant={getVariant(isMax)}
        size="md"
        color={getColor(isMax)}
        onClick={handleTimeframeClick(CollectionTimeframe.MAX)}
        flex={1}
        disabled={isMaxDisabled}
        data-id={dataIdPrefix ? `${dataIdPrefix}-max` : ""}
      >
        {t("Max")}
      </Button>
    </ButtonToggle>
  );
};
