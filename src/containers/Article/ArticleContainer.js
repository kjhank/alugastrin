import React from 'react';
import PropTypes from 'prop-types';

import { Main } from '@components/styled';

import {
  Body, Header, Products, RelatedArticles,
} from '@components/Article';

export const ArticleContainer = ({
  headerImage, intro, products, relatedPosts, sections, title,
}) => (
  <Main>
    <Header
      image={headerImage}
      sections={sections.filter(({
        notInNav, heading,
      }) => !notInNav && heading)}
      title={title}
    />
    <Body
      intro={intro}
      sections={sections}
    />
    <Products products={products} />
    <RelatedArticles
      articles={relatedPosts.posts}
      heading={relatedPosts.heading}
    />
  </Main>
);

ArticleContainer.propTypes = {
  headerImage: PropTypes.shape({}).isRequired,
  intro: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  relatedPosts: PropTypes.shape({
    heading: PropTypes.string,
    posts: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  sections: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  title: PropTypes.string.isRequired,
};

