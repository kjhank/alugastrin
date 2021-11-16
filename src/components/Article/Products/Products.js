import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';

import {
  Description, Image, InnerContainer, Intro, Link, List, Name, Product, Section,
} from './Products.styled';

export const Products = ({ products }) => (
  <Section>
    <Container>
      <InnerContainer>
        <List>
          {products.map(({
            acf: {
              articleThumb, intro, listingDescription: description, name,
            },
            slug,
          }) => (
            <Product key={name}>
              <Image image={articleThumb} />
              <Name>{name.split('|').map(part => <span>{part}</span>)}</Name>
              <Intro>{intro}</Intro>
              <Description>{description}</Description>
              <Link to={`/produkty/${slug}`}>Zobacz produkty</Link>
            </Product>
          ))}
        </List>
      </InnerContainer>
    </Container>
  </Section>
);

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

