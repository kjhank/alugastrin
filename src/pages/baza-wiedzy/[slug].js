import React, { createRef } from 'react';
import PropTypes from 'prop-types';

import NotFoundPage from '@pages/404';

import {
  getPageData, getPost, getProducts,
} from '@utils/api';

import { ArticleContainer } from '@containers';

const PostPage = ({
  refs,
  serverData: {
    error,
    post,
    products,
  },
  uri,
  ...props
}) => {
  if (error === 404) {
    return <NotFoundPage uri={uri} />;
  }

  const {
    acf,
    title,
  } = post || {};

  const sections = acf?.sections ?
    acf?.sections?.map(section => {
      const { notInNav } = section;
      const innerRef = notInNav ? null : createRef();

      return {
        ...section,
        innerRef,
      };
    }) :
    null;

  return (
    <ArticleContainer
      headerImage={acf?.headerImage}
      intro={acf?.intro}
      products={products}
      refs={refs}
      relatedPosts={acf?.relatedPosts}
      sections={sections}
      title={title?.rendered}
      {...props}
    />
  );
};

PostPage.propTypes = {
  refs: PropTypes.shape({}).isRequired,
  serverData: PropTypes.shape({
    error: PropTypes.number,
    post: PropTypes.shape({
      acf: PropTypes.shape({
        headerImage: PropTypes.shape({}),
        intro: PropTypes.string,
        relatedPosts: PropTypes.shape({}),
        sections: PropTypes.arrayOf(PropTypes.shape({})),
      }),
      sections: PropTypes.arrayOf(PropTypes.shape({})),
      title: PropTypes.shape({
        rendered: PropTypes.string,
      }),
    }),
    products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
};

export default PostPage;

export const getServerData = async ({ params: { slug } }) => {
  try {
    const pageData = await getPageData(null);

    const post = await getPost(slug);

    if (Object.keys(post).length < 1) {

      console.log('xzy');
      return {
        props: {
          ...pageData,
          error: 404,
          pageData: {},
        },
        status: 404,
      };
    }

    const productsGroups = post.acf.products.length ?
      await getProducts(post.acf.products.map(({ product }) => product)) :
      [null];
    const [products] = productsGroups?.filter(group => !!group?.length);

    return {
      props: {
        ...pageData,
        pageData: {
          yoast_head_json: post.yoast_head_json || null,
        },
        post,
        products,
      },
    };
  } catch (error) {
    console.log({ error });
    return {
      props: { error },
    };
  }
};

