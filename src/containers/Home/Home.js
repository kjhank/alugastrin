import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Main, Video,
} from '@components';

import {
  Carousel, HeroArticles, ProductDescriptions,
} from '@components/Home';

export const Home = ({
  articles,
  carousel,
  descriptions,
  video,
  ...props
}) => (
  <Main {...props}>
    <Carousel slides={carousel} />
    <ProductDescriptions items={descriptions} />
    <HeroArticles content={articles} />
    <Container>
      <Video
        poster={video.poster.url}
        sources={{
          mp4: video.mp4,
          webm: video.webm,
        }}
      />
    </Container>
  </Main>
);

Home.propTypes = {
  articles: PropTypes.shape({}).isRequired,
  carousel: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  video: PropTypes.shape({
    mp4: PropTypes.shape({}),
    poster: PropTypes.shape({
      url: PropTypes.string,
    }),
    webm: PropTypes.shape({}),
  }).isRequired,
};

