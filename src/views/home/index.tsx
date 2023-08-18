import React from 'react';
import TopCollections from './components/TopCollections';
import Hero from './components/Hero';

interface HomeViewProps {
  topCollections: any; // Adjust the type as needed
}

const HomeView: React.FC<HomeViewProps> = ({ topCollections }) => {
  return (
    <>
      <Hero />
      <TopCollections topCollections={topCollections} />
    </>
  );
};

export default HomeView;
