import React from 'react';
import PropTypes from 'prop-types';

import { Picture } from './SPImage.styled';

export const SPImage = ({
  image, innerRef, isLazy, ...props
}) => (
  <Picture
    ref={innerRef}
    {...props}
  >
    <source
      srcSet={image?.url}
      type={`${image?.type}/${image?.subtype}`}
    />
    <source
      srcSet={`${image?.url?.substr(0, image?.url.lastIndexOf('.'))}.webp`}
      type={`${image?.type}/webp`}
    />
    {/* eslint-disable jsx-a11y/img-redundant-alt */}
    <img
      alt={image?.alt}
      height={image.height}
      loading={isLazy ? 'lazy' : 'eager'}
      src={image?.url}
      width={image.width}
    />
    {/* eslint-enable jsx-a11y/img-redundant-alt */}
  </Picture>
);

SPImage.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string,
    height: PropTypes.number,
    subtype: PropTypes.string,
    type: PropTypes.string,
    url: PropTypes.string,
    width: PropTypes.number,
  }).isRequired,
  innerRef: PropTypes.shape({}),
  isLazy: PropTypes.bool,
};

SPImage.defaultProps = {
  innerRef: null,
  isLazy: true,
};
