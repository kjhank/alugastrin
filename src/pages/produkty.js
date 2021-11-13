import React from 'react';
import PropTypes from 'prop-types';

import {
  getPageData, getProducts,
} from '@utils/helpers';

import { ProductsContainer } from '@containers';

const ProductsPage = ({
  serverData: {
    pageData: { title: { rendered: renderedTitle } }, products,
  },
}) => (
  <ProductsContainer
    products={products}
    title={renderedTitle}
  />
);

ProductsPage.propTypes = {
  serverData: PropTypes.shape({
    pageData: PropTypes.shape({
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

  // const { pageData: { acf: { articlesPerPage } } } = pageData;

  const products = await getProducts();

  return {
    props: {
      ...pageData,
      products,
    },
  };
};

