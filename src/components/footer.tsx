import { Github, Twitter } from '@icons-pack/react-simple-icons';
import React from 'react';
import Grid from '@kiwicom/orbit-components/lib/utils/Grid';
import Text from '@kiwicom/orbit-components/lib/Text';

import styled from 'styled-components';

const FooterBackground = styled.div`
  background-color: ${({ theme }) => theme.orbit.paletteCloudNormal};
  padding: 2em;
`;

export const Footer = () => {
  return (
    <FooterBackground>
      <Grid
        columns="1fr 1fr 2fr"
      >
        <a
          href="https://github.com/shicholas/justice-for-rickie"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Github size={24} />
        </a>
        <a
          href="https://twitter.com/Justice4Rickie"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Twitter size={24} />
        </a>
        <Text>
          Copyright 2020 by Friends of Rickie Slaughter
        </Text>
      </Grid>
    </FooterBackground>
  );
};
