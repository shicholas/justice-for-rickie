import { Link, graphql } from 'gatsby';
import Alert from '@kiwicom/orbit-components/lib/Alert';
import { MainLayout } from '@layouts/MainLayout';
import React from 'react';
import { makeBlogPath } from '../utils/dynamicUrls';


const IndexPage = ({ data }) => {
  return (
    <MainLayout>
      <Alert>Welcome to Justice for Rickie!</Alert>

      {data.cms.blogPosts.map((blog, i) => (
        <p key={i}>
          <Link to={makeBlogPath(blog)}>
            <p>{blog.text.markdown}</p>
          </Link>
        </p>
      ))}
    </MainLayout>
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
