import { GetStaticProps } from "next";
import HomeView from '@/views/home';
import type { ReactElement } from 'react';
import MainLayout from '@/components/Layout/Main';
import type { NextPageWithLayout } from './_app';
import { getNFTCollections } from "@/utils/api/NftCollection";

const Page: NextPageWithLayout = ({collections}:any) => {
  return <HomeView collections={collections} />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};


export const getStaticProps: GetStaticProps = async () => {
  // const topCollections = await getCollectionsBase(COLLECTIONS_PARAMS, headers);
  console.log('getStaticProps is called');
  const collections = await getNFTCollections((err: any, data: any) => {
    if (err) return;
    return data?.collections.filter((collection: { image_url: null; }) => collection.image_url !== null)
  })

  try {
    return {
      props: {
        collections,
      },
      revalidate: 600, // 10 mins
    };
  } catch {
    return {
      props: {
        collections
      },
    };
  }
};

export default Page;
