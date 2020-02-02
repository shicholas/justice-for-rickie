import { Link, graphql } from 'gatsby';
import Alert from '@kiwicom/orbit-components/lib/Alert';
import React from 'react';
import Text from '@kiwicom/orbit-components/lib/Text';
import { makeBlogPath } from '../utils/dynamicUrls';


const IndexPage = ({ data }) => {
  const blogPosts = data.cms.blogPosts;
  const pageCopy = data.cms.pages[0].text.html;
  const changeDotOrgPetition =
    'https://www.change.org/p/' +
    'people-interested-in-criminal-justice-free-rickie-slaughter';

  const hardTimes =
    'https://www.amazon.com/gp/video/detail/0FWLLKVNWELA60OE9FXYMNICE5';

  return (
    <>
      <Alert>
        Help an innocent man who has been serving time since June 29, 2004.
      </Alert>
      <Text>
        <div dangerouslySetInnerHTML={{ __html: pageCopy }} />
      </Text>

      {blogPosts.map((blog, i) => (
        <div key={i}>
          <Link key={i} to={makeBlogPath(blog)}>
            {blog.text.markdown}
          </Link>
        </div>
      ))}

      <a href={changeDotOrgPetition}>
        <button>
          Sign Petition
        </button>
      </a>

      <a href={hardTimes}>
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
