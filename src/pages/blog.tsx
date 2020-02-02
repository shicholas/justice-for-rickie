import { Link, graphql } from 'gatsby';
import React from 'react';
import { makeBlogPath } from '../utils/dynamicUrls';

const BlogPage = ({ data }) => {
  const blogPosts = data.cms.blogPosts;

  return (
    <>
      {blogPosts.map((blog, i) => (
        <div key={i}>
          <Link key={i} to={makeBlogPath(blog)}>
            {blog.text.markdown}
          </Link>
        </div>
      ))}
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
        text {
          markdown
        }
      }
    }
  }
`;
