const path = require('path');
// const { makeBlogPath, makeInmatePath } = require('./src/utils/dynamicUrls');
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

  // const inmates = data.api.inmates;

  // inmates.forEach(blog => {
  //   const { createdAt, id, offenderId } = blog;

  //   actions.createPage({
  //     component: path.resolve('./src/containers/inmate.js'),
  //     context: {
  //       id,
  //     },
  //     path: makeInmatePath({ createdAt, offenderId }),
  //   });
  // });
};
