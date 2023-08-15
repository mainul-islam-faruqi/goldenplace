import { CollectionTable } from '@/components/CollectionsTable/CollectionTable';
import React from 'react';

const TopCollections = () => {
  return (
    <section>
      <h1 className="text-4xl leading-3xl text-darkTitle font-semibold text-center pb-4">
        Top Collections
      </h1>
      <CollectionTable collections={[]} isLoading={true} loadingRowCount={10} />
    </section>
  );
};

export default TopCollections;
