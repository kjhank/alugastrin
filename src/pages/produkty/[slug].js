import React from 'react';
import PropTypes from 'prop-types';

import {
  getPageData, getProduct,
} from '@utils/helpers';

import { ProductContainer } from '@containers';

const ProductsPage = ({
  serverData: {
    product,
  },
}) => (
  <ProductContainer product={product.acf} />
);

ProductsPage.propTypes = {
  serverData: PropTypes.shape({
    product: PropTypes.shape({
      acf: PropTypes.shape({}),
    }).isRequired,
  }).isRequired,
};

export default ProductsPage;

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

