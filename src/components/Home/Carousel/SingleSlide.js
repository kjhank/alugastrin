import React from 'react';
import PropTypes from 'prop-types';

import { ButtonLink } from '@components/styled';

import {
  BackgroundImage, Heading, ProductImage, SingleSlideItem, SmallText,
} from './Carousel.styled';

export const SingleSlide = ({ slide }) => (
  <SingleSlideItem variant={slide.variant}>
    <ProductImage image={slide.image} />
    <BackgroundImage image={slide.background} />
    <Heading>
      {slide.heading}
      <SmallText>
        {slide.text}
      </SmallText>
    </Heading>
    <ButtonLink to={`/produkty/${slide.link.post.post_name}`}>{slide.link.text}</ButtonLink>
  </SingleSlideItem>
);

SingleSlide.propTypes = {
  slide: PropTypes.shape({
    background: PropTypes.shape({}),
    heading: PropTypes.string,
    image: PropTypes.shape({}),
    link: PropTypes.shape({
      post: PropTypes.shape({
        post_name: PropTypes.string,
      }),
      text: PropTypes.string,
    }),
    text: PropTypes.string,
    variant: PropTypes.string,
  }).isRequired,
};

