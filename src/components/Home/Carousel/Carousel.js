import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ButtonLink } from '@components/styled';

import { SingleSlide } from './SingleSlide';

export const Carousel = ({ slides }) => {
  const [
    selectedIndex,
    setSelectedIndex,
  ] = useState(0);

  return (
    <div>
      {slides.map(slide => (
        <SingleSlide
          key={slide.heading}
          slide={slide}
        />
      ))}
    </div>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

