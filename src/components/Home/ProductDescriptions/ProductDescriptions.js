import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import {
  ButtonLink, Container,
} from '@components';
import { ArrowRight } from '@icons';

import {
  BackgroundImage,
  Description,
  Heading,
  HeadingWrapper,
  Intro,
  ProductsImage,
  ProductsLink,
  ProductsLinkWrapper,
  SingleDescription,
  TextWrapper,
} from './ProductDescriptions.styled';

export const ProductDescriptions = ({ items }) => (
  <Container>
    {items.map(item => (
      <SingleDescription
        key={item.heading}
        variant={item.variant}
      >
        <BackgroundImage
          image={item.image}
          variant={item.variant}
        />
        <TextWrapper variant={item.variant}>
          <HeadingWrapper variant={item.variant}>
            <Heading dangerouslySetInnerHTML={{ __html: sanitize(item.heading) }} />
          </HeadingWrapper>
          <Intro variant={item.variant}>{item.intro}</Intro>
          <Description>{item.description}</Description>
        </TextWrapper>
        <ProductsLinkWrapper>
          <ProductsImage image={item.products} />
          <ProductsLink
            $isFlipped={item.links.direction === 'left'}
            to={item.links.link.url}
          >
            {item.links.productsText}
            <ArrowRight />
          </ProductsLink>
        </ProductsLinkWrapper>
        <ButtonLink
          $isFlipped={item.links.direction === 'left'}
          to={item.links.link.url}
        >
          {item.links.bottomLinkText}
        </ButtonLink>
      </SingleDescription>
    ))}
  </Container>
);

ProductDescriptions.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

