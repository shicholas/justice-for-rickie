const path = require('path');
const { makeBlogPath } = require('./src/utils/dynamicUrls');

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      cms {
        blogPosts(where: { status: PUBLISHED }) {
          id
          createdAt
        }
      }
    }
  `);

  data.cms.blogPosts.forEach(blog => {
    actions.createPage({
      component: path.resolve('./src/containers/blog-post.js'),
      context: {
        blogId: blog.id,
      },
      path: makeBlogPath(blog),
    });
  });
};
