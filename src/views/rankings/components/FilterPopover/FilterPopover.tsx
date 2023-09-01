import { FC, PropsWithChildren } from "react";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useBreakpointValue,
} from "@chakra-ui/react";
import delay from "lodash/delay";
import { useTranslation } from "next-i18next";
import { Badge, Button, CloseIcon, FilterIcon } from "@/uikit";

interface FilterPopoverProps {
  activeFilterCount?: number;
}

/**
 * @NOTE If this pattern starts showing up in other places we should break it out to a generic component
 */
export const FilterPopover: FC<PropsWithChildren<FilterPopoverProps>> = ({ children, activeFilterCount = 0 }) => {
  const { t } = useTranslation();
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Popover trigger="click" arrowSize={16} gutter={20} isLazy>
      {({ isOpen, onClose }) => {
        const icon = isOpen ? <CloseIcon boxSize={6}/> : <FilterIcon boxSize={6} />;
        const displayLeftIcon = isMobile ? undefined : icon;

        const delayedClose = () => {
          delay(() => {
            onClose();
          }, 250);
        };

        return (
          <>
            <PopoverTrigger>
              <Button variant="outline" colorScheme="gray" leftIcon={displayLeftIcon} borderColor="borderColor.500" color="textColor.500" _hover={{backgroundColor:"backgroundColor.50"}}>
                {isMobile ? icon : t("Filter")}
                {activeFilterCount > 0 && (
                  <Badge colorScheme="gray" ml={1}>
                    {activeFilterCount}
                  </Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent minWidth="312px">
              <PopoverArrow bg="ui-inverse" />
              <PopoverBody onMouseLeave={delayedClose}>{children}</PopoverBody>
            </PopoverContent>
          </>
        );
      }}
    </Popover>
  );
};
