import React, { ReactElement } from 'react'
import MainLayout from '@/components/Layout/Main';
import { NextPageWithLayout } from '../_app';
import { GetStaticProps } from 'next';
import { getTopNFTCollections } from '@/utils/api/NftCollection';
import CollectionsView from '@/views/collections/CollectionsView';

const CollectionsPage: NextPageWithLayout = ({ collections }: any) => {
  return <CollectionsView initialData={collections} />;
};

CollectionsPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};


export const getStaticProps: GetStaticProps = async () => {

  const collections = await getTopNFTCollections((err: any, data: any) => {
    if (err) return;
    return data?.collections.slice(0, 20);
  });


  try {
    return {
      props: {
        collections,
      },
      revalidate: 86400, // 1 day
    };
  } catch {
    return {
      notFound: true,
    };
  }
};


export default CollectionsPage;