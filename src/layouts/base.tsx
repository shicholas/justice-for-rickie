import './base.css';

import { Footer } from '@components/footer';
import { NavigationBar } from '@components/navigationBar';
import React from 'react';
import ThemeProvider from '@kiwicom/orbit-components/lib/ThemeProvider';
import getTokens from '@kiwicom/orbit-components/lib/getTokens';
import styled from 'styled-components';

const Site = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const baseLayout: React.FC = ({ children }) => {
  const notoSerif =
    'https://fonts.googleapis.com/css?family=Noto+Serif&display=swap';

  const customTokens = getTokens({
    base: {
      fontFamily: 'Noto Serif, serif'
    },
  });

  return (
    <>
      <link
        href={notoSerif}
        rel="stylesheet"
      />
      <ThemeProvider theme={{ orbit: customTokens }}>
        <Site>
          <NavigationBar />
          <main style={{
            flex: 1,
            marginLeft: '1em',
            marginRight: '1em',
            marginTop: '72px',
          }}>
            {children}
          </main>
          <Footer />
        </Site>
      </ThemeProvider>
    </>
  );
};

export default baseLayout;
