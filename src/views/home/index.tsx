import React, { ReactNode } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import NextLink from 'next/link';
import { Box, Grid, GridItem, Flex } from '@chakra-ui/react';
import { Text, Button } from '@/uikit';
import TopCollections from './components/TopCollections';
import Hero from './components/Hero';
import { Container } from '@/components/Layout/Container';

interface HomeViewProps {
  topCollections: any; // Adjust the type as needed
}

interface HomeContainerProps {
  children: ReactNode;
}

const HomeContainer: React.FC<HomeContainerProps> = ({ children }) => (
  <Container maxW="1200px" py={32}>
    {children}
  </Container>
);

const HomeView: React.FC<HomeViewProps> = ({ topCollections }) => {
  const { t } = useTranslation();
  return (
    <>
      <HomeContainer>
        <Grid
          columnGap={12}
          gridTemplateColumns={{
            base: '1fr',
            md: 'auto 238px',
            lg: 'auto 360px',
          }}
        >
          <GridItem>
            <Text
              as="h1"
              mb={12}
              bold
              textStyle="display-01"
              maxWidth={{ base: '320px', sm: '100%', md: '455px' }}
            >
              {t('Trade NFTs, Get Rewards')}
            </Text>
            <Box mb={12}>
              <Box>
                <Box display="inline">
                  <Text as="h2" display="inline" color="text-02">
                    {t(
                      'OpenEyes.nft is the community-first NFT marketplace with rewards for participating.'
                    )}
                  </Text>
                </Box>
                <Box>
                  <Trans i18nKey="buyNftsOrSellEmToEarnRewards">
                    <Text as="span" color="text-02">
                      Buy NFTs (or sell &apos;em) to
                    </Text>
                    {/* <StakingLink href="/rewards">earn rewards.</StakingLink> */}
                    <NextLink href="/rewards" passHref>
                      <Text color="link-01">earn rewards.</Text>
                    </NextLink>
                  </Trans>
                </Box>
                <Box>
                  <Text display="inline" color="text-02">
                    {t('Explore the market to get started.')}
                  </Text>
                </Box>
              </Box>
              <Flex mt={12}>
                <NextLink href={`/accounts/me`} passHref>
                  <Button id="home-view-list-an-nft" mr={2}>
                    {t('List an NFT')}
                  </Button>
                </NextLink>
                <NextLink href="/explore" passHref>
                  <Button
                    id="home-view-explore-nfts"
                    variant="outline"
                    colorScheme="gray"
                  >
                    {t('Explore NFTs')}
                  </Button>
                </NextLink>
              </Flex>
            </Box>
          </GridItem>
          {/* <GridItem>{trendingNft ? <HomeNftCard nft={trendingNft} /> : <HomeNftCardLoadingSkeleton />}</GridItem> */}
        </Grid>
      </HomeContainer>
      {/* <Hero /> */}
      <TopCollections topCollections={topCollections} />
    </>
  );
};

export default HomeView;
