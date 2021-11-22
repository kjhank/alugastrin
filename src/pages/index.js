import React from 'react';
import PropTypes from 'prop-types';

import { getPageData } from '@utils/api';

import { Home } from '@containers';

const Homepage = ({
  serverData: { pageData: { acf } }, ...props
}) => (
  <Home
    articles={acf.articles}
    carousel={acf.carousel}
    descriptions={acf.descriptions}
    video={acf.video}
    {...props}
  />
);

Homepage.propTypes = {
  serverData: PropTypes.shape({
    pageData: PropTypes.shape({
      acf: PropTypes.shape({
        articles: PropTypes.shape({}),
        carousel: PropTypes.arrayOf(PropTypes.shape({})),
        descriptions: PropTypes.arrayOf(PropTypes.shape({})),
        video: PropTypes.shape({}),
      }),
    }),
  }).isRequired,
};

export default Homepage;

export const getServerData = async () => {
  const slug = 'strona-glowna';
  const pageData = await getPageData(slug);

  return {
    props: pageData,
    status: 200,
  };
};

