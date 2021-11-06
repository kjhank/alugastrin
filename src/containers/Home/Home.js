import React from 'react';
import PropTypes from 'prop-types';

import { Main } from '@components/styled';

import {
  Carousel, HeroArticles, ProductDescriptions, Video,
} from '@components/Home';

export const Home = ({
  articles,
  carousel,
  descriptions,
  video,
}) => (
  <Main>
    <Carousel slides={carousel} />
    <ProductDescriptions items={descriptions} />
    <HeroArticles content={articles} />
    <Video sources={video} />
  </Main>
);

Home.propTypes = {
  articles: PropTypes.shape({}).isRequired,
  carousel: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  video: PropTypes.shape({}).isRequired,
};

