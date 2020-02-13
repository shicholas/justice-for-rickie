import Alert from '@kiwicom/orbit-components/lib/Alert';
import ButtonLink from '@kiwicom/orbit-components/lib/ButtonLink';
import { Container } from '@components/container';
import React from 'react';
import { SixteenByNineImage } from '@components/sixteenByNineImage';
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
      <SixteenByNineImage url='./images/rickie.png' />
      <Alert>
        Help an innocent man who has been serving time since June 29, 2004.
      </Alert>

      <Container>
        <HTMLFromGraphCMS dangerouslySetInnerHTML={{ __html: pageCopy }} />

        <ButtonLink href={changeDotOrgPetition}>
          Sign Petition
        </ButtonLink>

        <ButtonLink href={hardTimes}>
          Hard Time
        </ButtonLink>
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
