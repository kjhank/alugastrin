import React from 'react';
import PropTypes from 'prop-types';

import {
  getPageData, getPosts,
} from '@utils/api';

import { ArticlesContainer } from '@containers';

const ArticlesPage = ({
  serverData: {
    hasLegalInFooter,
    pageData: { acf }, posts,
  }, ...props
}) => (
  <ArticlesContainer
    articlesPerPage={Number(acf?.articlesPerPage)}
    filters={acf?.filters}
    hasLegalInFooter={hasLegalInFooter}
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
    hasLegalInFooter: PropTypes.bool,
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

  const posts = await getPosts();

  return {
    props: {
      ...pageData,
      hasLegalInFooter: pageData.pageData.acf.hasLegalInFooter,
      posts,
    },
    status: 200,
  };
};

