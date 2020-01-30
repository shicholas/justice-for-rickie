exports.makeBlogPath = ({ createdAt, slug }) => {
  const date = new Date(createdAt);
  const formattedDate = date.toISOString().split('T')[0];
  return `/blog-post/${formattedDate}-${slug}`;
};
