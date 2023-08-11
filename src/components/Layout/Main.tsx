import React from 'react';

export interface LayoutProps {
  children?: any;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default MainLayout;
