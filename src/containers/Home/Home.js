import React from 'react';
import PropTypes from 'prop-types';

import { Main } from '@components/styled';

import { Carousel } from '@components/Home';

export const Home = ({
  articles,
  carousel,
  descriptions,
  video,
}) => (
  <Main>
    <Carousel slides={carousel} />
  </Main>
);

Home.propTypes = {

};

