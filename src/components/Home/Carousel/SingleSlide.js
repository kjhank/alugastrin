import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';
import { Link } from 'gatsby';

import { ArrowRight } from '@icons';

import {
  BackgroundImage, Heading, ImagePart, MoreText, ProductImage, SingleSlideItem, SmallText, TextPart,
} from './Carousel.styled';

export const SingleSlide = ({
  isActive, slide,
}) => (
  <SingleSlideItem
    direction={slide.variant === 'textRight' ? 'row' : 'row-reverse'}
    isActive={isActive}
  >
    <Link to={`/produkty/${slide.link.post.post_name}`}>
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
          <SmallText
            dangerouslySetInnerHTML={{ __html: sanitize(slide.text) }}
            isReversed={slide.variant === 'textLeft'}
          />
        </Heading>
        <MoreText>
          {slide.link.text}
          {' '}
          <ArrowRight />
        </MoreText>
      </TextPart>
    </Link>
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

