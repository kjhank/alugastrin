import React from 'react';
import PropTypes from 'prop-types';

import { Picture } from './SPImage.styled';

export const SPImage = ({
  image, isLazy, ...props
}) => (
  <Picture {...props}>
    <source
      srcSet={image.url}
      type={`${image.type}/${image.subtype}`}
    />
    <source
      srcSet={`${image.url.substr(0, image.url.lastIndexOf('.'))}.webp`}
      type={`${image.type}/webp`}
    />
    <img
      alt={image.alt}
      loading={isLazy ? 'lazy' : 'eager'}
      src={image.url}
    />
  </Picture>
);

SPImage.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string,
    subtype: PropTypes.string,
    type: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  isLazy: PropTypes.bool,
};

SPImage.defaultProps = {
  isLazy: false,
};
