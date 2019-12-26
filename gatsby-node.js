// const path = require('path');
// const { makeBlogPath } = require('./src/utils');

// exports.createPages = async ({ actions, graphql }) => {
//   const { data } = await graphql(`
//     query {
//       cms {
//         blogPosts(where: { status: PUBLISHED }) {
//           id
//           createdAt
//         }
//       }
//     }
//   `);

//   data.cms.blogPosts.forEach(blog => {
//     actions.createPage({
//       component: path.resolve('./src/components/blog-post.js'),
//       context: {
//         blogId: blog.id,
//       },
//       path: makeBlogPath(blog),
//     });
//   });
// };
