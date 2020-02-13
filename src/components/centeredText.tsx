import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  text-align: center;
`;

export const CenteredText = ({ children }) => (
  <StyledDiv>
    {children}
  </StyledDiv>
);
