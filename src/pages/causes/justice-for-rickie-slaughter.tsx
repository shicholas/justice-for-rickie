import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { MainLayout } from '@layouts/MainLayout';
import React from 'react';

/* eslint-disable max-len */
const justiceForRickie = () => {
  const data = useStaticQuery(
    graphql`
      query {
        rickie: file(relativePath: { eq: "rickie.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  return (
    <MainLayout>
      <Image
        fluid={data.rickie.childImageSharp.fluid}
        alt={'Rickie at his graduation'}
      />

      <a href="https://www.change.org/p/people-interested-in-criminal-justice-free-rickie-slaughter/share_for_starters?just_created=true&tag_selected=politics">
        <button>
          "Sign Rickie's Petition"
        </button>
      </a>

      <a href="https://www.amazon.com/gp/video/detail/0FWLLKVNWELA60OE9FXYMNICE5">
        <button>
          Hard Time
        </button>
      </a>

    </MainLayout>
  );
};

export default justiceForRickie;
