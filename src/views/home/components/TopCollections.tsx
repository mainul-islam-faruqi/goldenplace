import { CollectionTable } from '@/components/CollectionsTable/CollectionTable';
import React from 'react';

interface TopCollectionsProps {
  topCollections: any; // Adjust the type as needed
}

const TopCollections = ({topCollections}:TopCollectionsProps) => {
  return (
    <section>
      <h1 className="text-4xl leading-3xl text-darkTitle font-semibold text-center pb-4">
        Top Collections
      </h1>
      <CollectionTable collections={topCollections} isLoading={!topCollections} loadingRowCount={10} />
    </section>
  );
};

export default TopCollections;
