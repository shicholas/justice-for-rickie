import Grid from '@kiwicom/orbit-components/lib/utils/Grid';
import React from 'react';
import Twitter from '@kiwicom/orbit-components/lib/icons/Twitter';

import styled from 'styled-components';

const FooterBackground = styled.div`
  background-color: ${({ theme }) => theme.orbit.paletteCloudNormal};
  padding: 2em;
`;

export const Footer = () => {
  return (
    <FooterBackground>
      <Grid columns="repeat(2, minmax(100px, 1fr))">
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
          <Twitter />
        </a>
      </Grid>
    </FooterBackground>
  );
};
