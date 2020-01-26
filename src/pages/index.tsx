import { Link, graphql } from 'gatsby';
import Alert from '@kiwicom/orbit-components/lib/Alert';
import React from 'react';
import { makeBlogPath } from '../utils/dynamicUrls';


const IndexPage = ({ data }) => {
  return (
    <>
      <Alert>Welcome to Justice for Rickie!</Alert>

      {data.cms.blogPosts.map((blog, i) => (
        <div key={i}>
          <Link to={makeBlogPath(blog)}>
            <p>{blog.text.markdown}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default IndexPage;

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
