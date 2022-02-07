import React from 'react';
import PropTypes from 'prop-types';

import { Main } from '@components';

import {
  Header, Products,
} from '@components/ProductsPage';

export const ProductsContainer = ({
  targetGroup, products, refs, sectionNames, title, ...props
}) => (
  <Main
    refs={refs}
    {...props}
  >
    <Header title={title} />
    <Products
      headerRef={refs.header}
      products={products}
      sectionNames={sectionNames}
      targetGroup={targetGroup}
    />
  </Main>
);

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))).isRequired,
  refs: PropTypes.shape({
    header: PropTypes.shape({}),
  }).isRequired,
  sectionNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  targetGroup: PropTypes.string,
  title: PropTypes.string.isRequired,
};

ProductsContainer.defaultProps = {
  targetGroup: null,
};
