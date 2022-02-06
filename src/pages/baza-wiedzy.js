import React from 'react';
import PropTypes from 'prop-types';

import {
  getPageData, getPosts,
} from '@utils/api';

import { ArticlesContainer } from '@containers';

const ArticlesPage = ({
  serverData: {
    pageData: { acf }, posts,
  }, ...props
}) => (
  <ArticlesContainer
    articlesPerPage={Number(acf?.articlesPerPage)}
    filters={acf?.filters}
    headerImage={acf?.backgroundImage}
    headerImagePortrait={acf?.backgroundImagePortrait}
    heading={acf?.heading}
    initialPosts={posts}
    intro={acf?.intro}
    {...props}
  />
);

ArticlesPage.propTypes = {
  serverData: PropTypes.shape({
    pageData: PropTypes.shape({
      acf: PropTypes.shape({
        articlesPerPage: PropTypes.string,
        backgroundImage: PropTypes.shape({}),
        backgroundImagePortrait: PropTypes.shape({}),
        filters: PropTypes.shape({}),
        heading: PropTypes.string,
        intro: PropTypes.string,
      }),
    }),
    posts: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default ArticlesPage;

export const getServerData = async () => {
  const slug = 'baza-wiedzy';
  const pageData = await getPageData(slug);

  // const { pageData: { acf: { articlesPerPage } } } = pageData;

  const posts = await getPosts();

  return {
    props: {
      ...pageData,
      posts,
    },
    status: 200,
  };
};

