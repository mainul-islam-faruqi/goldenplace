import { GetStaticProps } from "next";
import HomeView from '@/views/home';
import type { ReactElement } from 'react';
import MainLayout from '@/components/Layout/Main';
import type { NextPageWithLayout } from './_app';
import { getNFTCollections, getTopNFTCollections } from "@/utils/api/NftCollection";

const Page: NextPageWithLayout = ({topCollections}:any) => {
  return <HomeView topCollections={topCollections} />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};


export const getStaticProps: GetStaticProps = async () => {
  // const topCollections = await getCollectionsBase(COLLECTIONS_PARAMS, headers);
  
  const topCollections = await getTopNFTCollections((err: any, data: any) => {
    if (err) return;
    return data?.collections.slice(0, 20)
  })
  // const collections = await getNFTCollections((err: any, data: any) => {
  //   if (err) return;
  //   // return data?.collections.filter((collection: { image_url: null; }) => collection.image_url !== null)
  // })

  

  try {
    return {
      props: {
        topCollections,
      },
      revalidate: 600, // 10 mins
    };
  } catch {
    return {
      props: {
        topCollections : []
      },
    };
  }
};

export default Page;
