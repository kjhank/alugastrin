import React from 'react';
import PropTypes from 'prop-types';

import {
  getPageData, getProduct,
} from '@utils/api';

import { ProductContainer } from '@containers';

const ProductPage = ({
  serverData: {
    product,
  },
  ...props
}) => (
  <ProductContainer
    product={product.acf}
    {...props}
  />
);

ProductPage.propTypes = {
  serverData: PropTypes.shape({
    product: PropTypes.shape({
      acf: PropTypes.shape({}),
    }),
  }).isRequired,
};

export default ProductPage;

export const getServerData = async ({ params: { slug } }) => {
  const pageData = await getPageData(null);

  const products = await getProduct(slug);

  const [product] = products;
  const { yoast_head_json } = product;

  return {
    props: {
      ...pageData,
      pageData: {
        yoast_head_json,
      },
      product,
    },
  };
};

