import React from 'react';
import TopCollections from './components/TopCollections';
import Hero from './components/Hero';

const HomeView: React.FC = () => {
  return (
    <>
      <Hero />
      <TopCollections />
    </>
  );
};

export default HomeView;
