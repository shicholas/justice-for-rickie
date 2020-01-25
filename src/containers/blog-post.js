import React from 'react';
import { graphql } from 'gatsby';

const blogPost = ({ data }) => {
  const blogPost = data.cms.blogPost;
  return (
    <div>
      <div>{blogPost.title}</div>
      <div>Posted at: {blogPost.createdAt}</div>
      <div dangerouslySetInnerHTML={{ __html: blogPost.text.html }} />
    </div>
  );
};

export default blogPost;

export const query = graphql`
  query($blogId: ID!) {
    cms {
      blogPost(where: { id: $blogId }) {
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
