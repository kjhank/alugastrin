import React from 'react';
import PropTypes from 'prop-types';

import { Main } from '@components';

import {
  Body, Header, Products, RelatedArticles,
} from '@components/Article';

export const ArticleContainer = ({
  headerImage, intro, products, refs, relatedPosts, sections, title, ...props
}) => (
  <Main
    refs={refs}
    {...props}
  >
    <Header
      headerRef={refs.header}
      image={headerImage}
      sections={sections?.filter(({
        notInNav, heading,
      }) => !notInNav && heading)}
      title={title}
    />
    {sections?.length > 0 && (
      <Body
        intro={intro}
        sections={sections}
      />
    )}
    {products?.length > 0 && <Products products={products} />}
    {relatedPosts?.posts?.length > 0 && (
      <RelatedArticles
        articles={relatedPosts.posts}
        heading={relatedPosts.heading}
      />
    )}
  </Main>
);

ArticleContainer.propTypes = {
  headerImage: PropTypes.shape({}).isRequired,
  intro: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  refs: PropTypes.shape({
    header: PropTypes.shape({}),
  }).isRequired,
  relatedPosts: PropTypes.shape({
    heading: PropTypes.string,
    posts: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  sections: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  title: PropTypes.string.isRequired,
};

