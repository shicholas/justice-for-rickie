const dateformat = require('dateformat');

export const makeBlogPath = ({ createdAt, id }) => {
  const date = new Date(createdAt);
  const formattedDate = dateformat(date, 'yyyy-mm-dd');
  return `/${formattedDate}-${id}`;
};
