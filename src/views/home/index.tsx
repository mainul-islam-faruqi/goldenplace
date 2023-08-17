import React, { useEffect, useState } from 'react';
import TopCollections from './components/TopCollections';
import Hero from './components/Hero';
import axios from 'axios';

interface HomeViewProps {
  collections: any; // Adjust the type as needed
}

const HomeView: React.FC<HomeViewProps> = ({collections}) => {
  console.log("🚀 ~ file: index.tsx:7 ~ collections:", collections)
  

const [topCollections, setTopCollections] = useState([]);
// console.log("🚀 ~ file: index.tsx:12 ~ topCollections:", topCollections)

useEffect(() => {
  async function fetchNFTCollections() {
    try {
      
    } catch (error) {
      console.error('Error fetching NFT collections:');
    }
  }

  // fetchNFTCollections();
}, []);
  
  return (
    <>
      <Hero />
      <TopCollections collections={collections} />
    </>
  );
};

export default HomeView;
