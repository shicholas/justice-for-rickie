import Heading from '@kiwicom/orbit-components/lib/Heading';
import { RawHtml } from '@components/rawHtml';
import React from 'react';
import { graphql } from 'gatsby';

const blogPost = ({ data }) => {
  const blogPost = data.cms.blogPost;
  return (
    <>
      <Heading>{blogPost.title}</Heading>
      <div>Posted at: {blogPost.createdAt}</div>
      <RawHtml html={blogPost.text.html} />
    </>
  );
};

export default blogPost;

export const query = graphql`
  query($id: ID!) {
    cms {
      blogPost(where: { id: $id }) {
        id
        createdAt
        slug
        title
        text {
          html
        }
      }
    }
  }
`;
