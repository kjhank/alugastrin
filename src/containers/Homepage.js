import React from 'react';
import PropTypes from 'prop-types';

import ENDPOINTS from '@static/endpoints';

const BACKEND_URL = process.env.GATSBY_BACKEND_URL;

const Homepage = ({
  pageContext: {
    id, serverData, slug, type,
  },
}) => {
  console.log(serverData);

  return (
    <div>
      {id}
      {' '}
      {slug}
      {' '}
      {type}
    </div>
  );
};

Homepage.propTypes = {
  pageContext: PropTypes.shape({
    id: PropTypes.number,
    serverData: PropTypes.shape({}),
    slug: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};

export default Homepage;

export const getServerData = async ({ pageContext }) => {
  const {
    id,
  } = pageContext;

  const response = await fetch(`${BACKEND_URL}/${ENDPOINTS.pages}/${id}`);
  const pageData = await response.json();

  return {
    props: {
      pageData,
    },
  };
};

