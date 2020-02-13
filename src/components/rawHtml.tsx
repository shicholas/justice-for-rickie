import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  text-indent: 12px;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
`;

export const RawHtml = ({ html }) => (
  <StyledDiv dangerouslySetInnerHTML={{ __html: html }} />
);
