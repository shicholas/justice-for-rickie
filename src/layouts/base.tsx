import { NavigationBar } from '@components/navigationBar';
import React from 'react';

const baseLayout: React.FC = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <main style={{ marginTop: '72px' }}>
        {children}
      </main>
    </>
  );
};

export default baseLayout;
