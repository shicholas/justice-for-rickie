const dateformat = require('dateformat');

exports.makeBlogPath = ({ createdAt, id }) => {
  const date = new Date(createdAt);
  const formattedDate = dateformat(date, 'yyyy-mm-dd');
  return `/blog-post/${formattedDate}-${id}`;
};
