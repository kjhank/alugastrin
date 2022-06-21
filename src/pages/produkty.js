import React from 'react';
import PropTypes from 'prop-types';

import {
  getPageData, getProducts,
} from '@utils/api';

import { ProductsContainer } from '@containers';

const ProductsPage = ({
  serverData: {
    pageData: {
      acf: {
        firstGroupName, secondGroupName,
      }, title: { rendered: renderedTitle },
    }, products,
  },
  ...props
}) => (
  <ProductsContainer
    products={products}
    sectionNames={[
      firstGroupName,
      secondGroupName,
    ]}
    title={renderedTitle}
    {...props}
  />
);

ProductsPage.propTypes = {
  serverData: PropTypes.shape({
    pageData: PropTypes.shape({
      acf: PropTypes.shape({
        firstGroupName: PropTypes.string,
        secondGroupName: PropTypes.string,
      }),
      title: PropTypes.shape({
        rendered: PropTypes.string,
      }),
    }),
    products: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
  }).isRequired,
};

export default ProductsPage;

export const getServerData = async () => {
  const slug = 'produkty';
  const pageData = await getPageData(slug);

  const products = await getProducts();

  return {
    props: {
      ...pageData,
      products,
    },
    status: 200,
  };
};

