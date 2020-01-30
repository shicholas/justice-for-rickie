import './base.css';

import { NavigationBar } from '@components/navigationBar';
import React from 'react';
import ThemeProvider from '@kiwicom/orbit-components/lib/ThemeProvider';
import getTokens from '@kiwicom/orbit-components/lib/getTokens';

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
        <>
          <NavigationBar />
          <main style={{
            marginLeft: '1em',
            marginRight: '1em',
            marginTop: '72px',
          }}>
            {children}
          </main>
          <a
            href="https://github.com/shicholas/justice-for-rickie"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/Justice4Rickie"
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter
          </a>
        </>
      </ThemeProvider>
    </>
  );
};

export default baseLayout;
