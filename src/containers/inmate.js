import React from 'react';
import { graphql } from 'gatsby';

const inmate = ({ data }) => {
  const inmate = data.api.inmate;

  return (
    <div>
      <div>{inmate.name}</div>
      <div>{inmate.offenderId}</div>
    </div>
  );
};

export default inmate;

export const query = graphql`
  query($id: ID!) {
    api {
      inmate(where: { id: $id }) {
        id
        name
        offenderId
      }
    }
  }
`;
