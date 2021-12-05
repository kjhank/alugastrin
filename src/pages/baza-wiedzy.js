import React from 'react';
import PropTypes from 'prop-types';

import {
  getPageData, getPosts,
} from '@utils/api';

import {
  ArticlesContainer, MaintenanceContainer,
} from '@containers';

const ArticlesPage = ({
  refs,
  serverData: {
    maintenance, pageData: {
      acf, title: { rendered: title },
    }, posts,
  }, ...props
}) => {
  if (maintenance?.isInMaintenance) {
    return (
      <MaintenanceContainer
        background={maintenance.maintenanceBackground}
        message={maintenance.maintenanceMessage}
        refs={refs}
        title={title}
        {...props}
      />
    );
  }

  return (
    <ArticlesContainer
      articlesPerPage={Number(acf?.articlesPerPage)}
      filters={acf?.filters}
      headerImage={acf?.backgroundImage}
      heading={acf?.heading}
      initialPosts={posts}
      intro={acf?.intro}
      refs={refs}
      {...props}
    />
  );
};

ArticlesPage.propTypes = {
  refs: PropTypes.shape({}),
  serverData: PropTypes.shape({
    maintenance: PropTypes.shape({
      isInMaintenance: PropTypes.bool,
      maintenanceBackground: PropTypes.shape({}),
      maintenanceMessage: PropTypes.string,
    }),
    pageData: PropTypes.shape({
      acf: PropTypes.shape({
        articlesPerPage: PropTypes.string,
        backgroundImage: PropTypes.shape({}),
        filters: PropTypes.shape({}),
        heading: PropTypes.string,
        intro: PropTypes.string,
      }),
      title: PropTypes.shape({
        rendered: PropTypes.string,
      }),
    }),
    posts: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

ArticlesPage.defaultProps = {
  refs: null,
};

export default ArticlesPage;

export const getServerData = async () => {
  const slug = 'baza-wiedzy';
  const pageData = await getPageData(slug);
  const posts = await getPosts();

  const {
    pageData: {
      acf: {
        hasLegalInFooter, isInMaintenance, maintenanceBackground, maintenanceMessage,
      },
    },
  } = pageData;

  if (isInMaintenance) {
    return {
      props: {
        ...pageData,
        maintenance: {
          isInMaintenance,
          maintenanceBackground,
          maintenanceMessage,
        },
      },
      status: 503,
    };
  }

  return {
    props: {
      ...pageData,
      hasLegalInFooter,
      posts,
    },
    status: 200,
  };
};

