import { Link, graphql } from 'gatsby';
import { Grid } from '@material-ui/core';
import { MainLayout } from '@layouts/MainLayout';
import React from 'react';
import { makeBlogPath } from '../utils/dynamicUrls';

const IndexPage = ({ data }) => {
  return (
    <MainLayout>
      <Grid container={true} spacing={5}>
        {data.cms.blogPosts.map((blog, i) => (
          <Grid key={i} item={true} xs={12}>
            <Link to={makeBlogPath(blog)}>
              <p>{blog.text.markdown}</p>
            </Link>
          </Grid>
        ))}
      </Grid>

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
        text {
          markdown
        }
      }
    }
  }
`;
