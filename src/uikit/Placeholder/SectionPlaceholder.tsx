import { Flex, FlexProps } from "@chakra-ui/react";
import { NoDataIcon, IconProps } from "@/uikit";

export interface SectionPlaceholderProps extends FlexProps {
  logoProps?: IconProps;
  hideLogo?: boolean;
}

export const SectionPlaceholder: React.FC<React.PropsWithChildren<SectionPlaceholderProps>> = ({
  children,
  logoProps,
  hideLogo,
  ...props
}) => (
  <Flex flexDirection="column" justifyContent="center" alignItems="center" {...props}>
    {!hideLogo && <NoDataIcon color="ui-02" mb={6} boxSize={137} {...logoProps} />}
    {children}
  </Flex>
);
