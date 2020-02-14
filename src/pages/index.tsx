import Alert from '@kiwicom/orbit-components/lib/Alert';
import ButtonLink from '@kiwicom/orbit-components/lib/ButtonLink';
import { CenteredText } from '@components/centeredText';
import { Container } from '@components/container';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import React from 'react';
import { Seo } from '@components/seo';
import { SixteenByNineImage } from '@components/sixteenByNineImage';
import { VegasDirections } from '@components/vegasDirections';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const HTMLFromGraphCMS = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
`;

const IndexPage = ({ data }) => {
  const pageCopy = data.cms.pages[0].text.html;
  const changeDotOrgPetition =
    'https://www.change.org/p/' +
    'people-interested-in-criminal-justice-free-rickie-slaughter';

  const hardTimes =
    'https://www.amazon.com/gp/video/detail/0FWLLKVNWELA60OE9FXYMNICE5';

  return (
    <>
      <Seo />
      <SixteenByNineImage url='/images/rickie.png' />
      <Alert>
        Help an innocent man who has been serving time since June 29, 2004.
      </Alert>

      <Container>
        <HTMLFromGraphCMS dangerouslySetInnerHTML={{ __html: pageCopy }} />

        <ButtonLink href={changeDotOrgPetition} external={true}>
          Sign Petition
        </ButtonLink>

        <ButtonLink href={hardTimes} external={true}>
          Hard Time
        </ButtonLink>

        <VegasDirections />
        <CenteredText>
          <Heading type="title3">
            No one can do this drive in 7 minutes.
          </Heading>
        </CenteredText>
        <br />
      </Container>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    cms {
      pages(where: {url: "/"}) {
        text {
          html
        }
      }
    }
  }
`;
