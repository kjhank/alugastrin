import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Description, Image, Link, List, Name, Pipe, Product, Text,
} from './Products.styled';

export const renderName = name => {
  const [
    first,
    second,
  ] = name.split('|');

  return (
    <Name>
      {first}
      <Pipe>
        |
      </Pipe>
      {second}
    </Name>
  );
};

export const Products = ({ products }) => (
  <Container>
    {products.map(group => (
      <List key={JSON.stringify(group)}>
        {group.map(product => (
          <Product key={product.acf.name}>
            <Image image={product.acf.thumbnail} />
            {renderName(product.acf.name)}
            <Description>{product.acf.intro}</Description>
            <Text>{product.acf.listingDescription}</Text>
            <Link to={product.slug}>
              Zobacz produkt
            </Link>
          </Product>
        ))}
      </List>

    ))}
  </Container>
);

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))).isRequired,
};

