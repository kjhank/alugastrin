import React from 'react';
import PropTypes from 'prop-types';

import {
  getPageData, getProduct,
} from '@utils/api';

import { ProductContainer } from '@containers';

const ProductPage = ({
  serverData: {
    hasLegalInFooter,
    product,
  },
  ...props
}) => (
  <ProductContainer
    hasLegalInFooter={hasLegalInFooter}
    product={product.acf}
    {...props}
  />
);

ProductPage.propTypes = {
  serverData: PropTypes.shape({
    hasLegalInFooter: PropTypes.bool.isRequired,
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
      hasLegalInFooter: product.acf.hasLegalInFooter,
      pageData: {
        yoast_head_json,
      },
      product,
    },
  };
};

