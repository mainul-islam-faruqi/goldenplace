import { CollectionTable } from '@/components/CollectionsTable/CollectionTable';
import React from 'react';

interface TopCollectionsProps {
  collections: any; // Adjust the type as needed
}

const TopCollections = ({collections}:TopCollectionsProps) => {
  return (
    <section>
      <h1 className="text-4xl leading-3xl text-darkTitle font-semibold text-center pb-4">
        Top Collections
      </h1>
      <CollectionTable collections={collections} isLoading={!collections} loadingRowCount={10} />
    </section>
  );
};

export default TopCollections;
