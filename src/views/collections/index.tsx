import React from 'react'
import TopCollections from '../home/components/TopCollections';

interface Props {
  collections: any; // Adjust the type as needed
}

const CollectionsView = ({collections}: Props) => {
  return (
    <TopCollections topCollections={collections} />
  )
}

export default CollectionsView