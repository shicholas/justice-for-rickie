import * as React from 'react';
import styled from 'styled-components';

const AspectRatioBox = styled.div`
  height: 0;
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
`;

const BackgroundImage = styled.div`
  background: url(${props => props.backgroundImgUrl});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const FlexContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justi]fy-content: center;
`;

const FlexItem = styled.div`
  flex: 1;
`;

const MainHeading = styled.h1`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  color: ${({ theme }) => theme.orbit.paletteWhite};
  font-size: 3vw;
  text-align: center;
`;

export const SixteenByNineImage = ({ url }) => {
  return (
    <AspectRatioBox>
      <BackgroundImage backgroundImgUrl={url}>
        <FlexContainer>
          <FlexItem>
            <MainHeading>
              Justice for Rickie Slaughter
            </MainHeading>
          </FlexItem>
        </FlexContainer>
      </BackgroundImage>
    </AspectRatioBox>
  );
};
