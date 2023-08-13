import React from 'react';
import Nav from '../Nav';

export interface LayoutProps {
  children?: any;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      <main className='px-8'>{children}</main>
    </>
  );
};

export default MainLayout;
