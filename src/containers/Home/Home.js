import React from 'react';
import PropTypes from 'prop-types';

import { Main } from '@components';

import {
  Carousel, HeroArticles, ProductDescriptions,
} from '@components/Home';

export const Home = ({
  articles,
  carousel,
  descriptions,
  ...props
}) => (
  <Main {...props}>
    <Carousel slides={carousel} />
    <ProductDescriptions items={descriptions} />
    <HeroArticles content={articles} />
  </Main>
);

Home.propTypes = {
  articles: PropTypes.shape({}).isRequired,
  carousel: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

