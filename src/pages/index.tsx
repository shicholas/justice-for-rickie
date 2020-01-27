import { Link, graphql } from 'gatsby';
import React from 'react';
import Text from '@kiwicom/orbit-components/lib/Text';
import { makeBlogPath } from '../utils/dynamicUrls';


/* eslint-disable */
const IndexPage = ({ data }) => {
  const blogPosts = data.cms.blogPosts;
  const pageCopy = data.cms.pages[0].text.html;
  return (
    <>
      <Text>
        <div dangerouslySetInnerHTML={{ __html: pageCopy }} />
      </Text>

      {blogPosts.map((blog, i) => (
        <div key={i}>
          <Link to={makeBlogPath(blog)}>
            <p>{blog.text.markdown}</p>
          </Link>
        </div>
      ))}


      <a href="https://www.change.org/p/people-interested-in-criminal-justice-free-rickie-slaughter">
        <button>
          Sign Petition
        </button>
      </a>

      <a href="https://www.amazon.com/gp/video/detail/0FWLLKVNWELA60OE9FXYMNICE5">
        <button>
          Hard Time
        </button>
      </a>
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
      pages(where: {url: "/"}) {
        text {
          html
        }
      }
    }
  }
`;
