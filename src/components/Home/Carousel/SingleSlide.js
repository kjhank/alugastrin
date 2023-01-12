import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import { ButtonLink } from '@components';

import {
  BackgroundImage, Heading, ImagePart, ProductImage, SingleSlideItem, SmallText, TextPart,
} from './Carousel.styled';

const sanitizeConfig = {
  allowedTags: [
    'a',
    'br',
    'strong',
  ],
};

export const SingleSlide = (
  {
    isActive, slide,
  }
) => {
  const className = slide.link.post.post_name.split('-alugastrin');

  return (
    (
      <SingleSlideItem
        direction={slide.variant === 'textRight' ? 'row' : 'row-reverse'}
        isActive={isActive}
      >
        <BackgroundImage
          alignment={slide.variant === 'textRight' ? 'right' : 'left'}
          className={className}
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
          <Heading padded={slide.variant === 'textRight' ? 'left' : 'right'}>
            {slide.heading}
            <br />
            <SmallText
              dangerouslySetInnerHTML={{ __html: sanitize(slide.text, sanitizeConfig) }}
              isReversed={slide.variant === 'textLeft'}
            />
          </Heading>
          <ButtonLink to={`/produkty/${slide.link.post.post_name}`}>{slide.link.text}</ButtonLink>
        </TextPart>
      </SingleSlideItem>
    )
  );
};

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

