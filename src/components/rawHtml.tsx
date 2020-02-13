import styled, { css } from 'styled-components';
import React from 'react';
import media from '@kiwicom/orbit-components/lib/utils/mediaQuery';

const StyledDiv = styled.div`
  margin: 0 12px;
  font-family: ${({ theme }) => theme.orbit.fontFamily};

  ${media.tablet(css`
    width: 80%;
    margin: 0 auto;
  `)};

  ${media.desktop(css`
    width: 70%;
    margin: 0 auto;
  `)};
`;

export const RawHtml = ({ html }) => (
  <StyledDiv dangerouslySetInnerHTML={{ __html: html }} />
);
