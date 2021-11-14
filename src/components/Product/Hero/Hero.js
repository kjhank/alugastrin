import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';

import {
  Heading, Image, Wrapper,
} from './Hero.styled';

export const Hero = ({
  data: {
    heading, image,
  },
}) => (
  <Wrapper>
    <Container>
      <Heading>{heading}</Heading>
      <Image image={image} />
    </Container>
  </Wrapper>
);

Hero.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string,
    image: PropTypes.shape({}),
  }).isRequired,
};

