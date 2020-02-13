import { graphql, navigate } from 'gatsby';
import LinkList from '@kiwicom/orbit-components/lib/LinkList';
import React from 'react';
import TextLink from '@kiwicom/orbit-components/lib/TextLink';
import { makeBlogPath } from '../utils/dynamicUrls';

const BlogPage = ({ data }) => {
  const blogPosts = data.cms.blogPosts;

  return (
    <>
      <LinkList direction="column">
        {blogPosts.map((blog, i) => (
          <div key={i}>
            <TextLink
              type="primary"
              onClick={() => { return navigate(makeBlogPath(blog)); }}
              key={i}
            >
              {blog.title}
            </TextLink>
          </div>
        ))}
      </LinkList>
    </>
  );
};

export default BlogPage;

export const query = graphql`
  query {
    cms {
      blogPosts {
        id
        createdAt
        slug
        title
      }
    }
  }
`;
