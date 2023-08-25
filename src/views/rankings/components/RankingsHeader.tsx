import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { Text } from "@/uikit";
import { Container } from '@/components/Layout/Container';
import { NextLink } from "@/components/NextLink";

export const RankingsHeader = ({ tabIndex }: { tabIndex: number }) => {
  const { t } = useTranslation();

  const bgGradient = "linear(to-b, ui-bg, ui-01)";

  return (
    <Box bgGradient={bgGradient}>
      <Container>
        <Text as="h1" textStyle="display-01" bold py={12}>
          {t("Rankings")}
        </Text>
        <Tabs variant="line" index={tabIndex} isLazy>
          <TabList>
            <Tab as={NextLink} href="/collections">
              {t("All Collections")}
            </Tab>
            <Tab as={NextLink} href="/watchlists/me" data-id="my-watchlists-tab">
              {t("My Watchlists")}
            </Tab>
          </TabList>
        </Tabs>
      </Container>
    </Box>
  );
};
