import React from 'react';
import PropTypes from 'prop-types';

import { ButtonLink } from '@components';

import {
  BackgroundImage, Heading, ImagePart, ProductImage, SingleSlideItem, SmallText, TextPart,
} from './Carousel.styled';

export const SingleSlide = ({
  isActive, slide,
}) => (
  <SingleSlideItem
    direction={slide.variant === 'textRight' ? 'row' : 'row-reverse'}
    isActive={isActive}
  >
    <BackgroundImage
      alignment={slide.variant === 'textRight' ? 'right' : 'left'}
      image={slide.background}
      isLazy={false}
    />
    <ImagePart isOffset={slide.variant === 'textLeft'}>
      <ProductImage
        image={slide.image}
        isLazy={false}
      />
    </ImagePart>
    <TextPart padded={slide.variant === 'textRight' ? 'right' : 'left'}>
      <Heading>
        {slide.heading}
        <br />
        <SmallText isReversed={slide.variant === 'textLeft'}>
          {slide.text}
        </SmallText>
      </Heading>
      <ButtonLink to={`/produkty/${slide.link.post.post_name}`}>{slide.link.text}</ButtonLink>
    </TextPart>
  </SingleSlideItem>
);

SingleSlide.propTypes = {
  isActive: PropTypes.bool.isRequired,
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

