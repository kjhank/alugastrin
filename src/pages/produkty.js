import React from 'react';
import PropTypes from 'prop-types';

import {
  getPageData, getProducts,
} from '@utils/api';

import { ProductsContainer } from '@containers';

const ProductsPage = ({
  location,
  serverData: {
    pageData: { title: { rendered: renderedTitle } }, products,
  },
  ...props
}) => {
  const url = location?.href ? new URL(location.href) : null;
  const params = url ? new URLSearchParams(url.search) : null;

  return (
    <ProductsContainer
      products={products}
      targetGroup={params?.get('typ')}
      title={renderedTitle}
      {...props}
    />
  );
};

ProductsPage.propTypes = {
  location: PropTypes.shape({
    href: PropTypes.string,
  }).isRequired,
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

  const products = await getProducts();

  return {
    props: {
      ...pageData,
      products,
    },
  };
};

