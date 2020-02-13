const path = require('path');
const { makeBlogPath } = require('./src/utils/dynamicUrls');

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      cms {
        blogPosts(where: { status: PUBLISHED }) {
          id
          slug
          createdAt
        }
      }
    }
  `);

  const blogPosts = data.cms.blogPosts;

  blogPosts.forEach(blog => {
    const { createdAt, id, slug } = blog;

    actions.createPage({
      component: path.resolve('./src/containers/blog-post.js'),
      context: {
        id,
      },
      path: makeBlogPath({ createdAt, slug }),
    });
  });
};
