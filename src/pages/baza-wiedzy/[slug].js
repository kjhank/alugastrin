import React, { createRef } from 'react';
import PropTypes from 'prop-types';

import NotFoundPage from '@pages/404';

import {
  getPageData, getPost,
} from '@utils/api';

import { ArticleContainer } from '@containers';

const PostPage = ({
  serverData: {
    error,
    post: {
      acf,
      title,
    },
  },
  uri,
}) => {
  if (error === 404) {
    return <NotFoundPage uri={uri} />;
  }

  const sections = acf.sections?.map(section => {
    const { notInNav } = section;
    const innerRef = notInNav ? null : createRef();

    return {
      ...section,
      innerRef,
    };
  }) || null;

  return (
    <ArticleContainer
      headerImage={acf.headerImage}
      intro={acf.intro}
      products={acf.products}
      relatedPosts={acf.relatedPosts}
      sections={sections}
      title={title.rendered}
    />
  );
};

PostPage.propTypes = {
  serverData: PropTypes.shape({
    error: PropTypes.number,
    post: PropTypes.shape({
      acf: PropTypes.shape({
        headerImage: PropTypes.shape({}),
        intro: PropTypes.string,
        products: PropTypes.arrayOf(PropTypes.shape({})),
        relatedPosts: PropTypes.arrayOf(PropTypes.shape({})),
        sections: PropTypes.arrayOf(PropTypes.shape({})),
      }),
      sections: PropTypes.arrayOf(PropTypes.shape({})),
      title: PropTypes.shape({
        rendered: PropTypes.string,
      }),
    }).isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
};

export default PostPage;

export const getServerData = async ({ params: { slug } }) => {
  try {
    const pageData = await getPageData(null);

    const posts = await getPost(slug);

    if (Object.keys(posts).length < 1) {
      return {
        props: {
          ...pageData,
          error: 404,
          pageData: {},
        },
      };
    }

    const [post] = posts.length > 0 ? posts : [posts];
    const { yoast_head_json = null } = post || null;

    return {
      props: {
        ...pageData,
        pageData: {
          yoast_head_json,
        },
        post,
      },
    };
  } catch (error) {
    return {
      props: { error },
    };
  }
};

