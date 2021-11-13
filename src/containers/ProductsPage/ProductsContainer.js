import React from 'react';
import PropTypes from 'prop-types';

import { Main } from '@components/styled';

import {
  Header, Products,
} from '@components/ProductsPage';

export const ProductsContainer = ({
  products, title,
}) => (
  <Main>
    <Header title={title} />
    <Products products={products} />
  </Main>
);

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))).isRequired,
  title: PropTypes.string.isRequired,

};

