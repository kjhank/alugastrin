import React from 'react';
import PropTypes from 'prop-types';

import {
  getPageData, getProducts,
} from '@utils/api';

import { ProductCategoryContainer } from '@containers';

const ProductCategoryPage = ({
  serverData: {
    pageData: {
      acf: {
        description,
      },
      title: { rendered: renderedTitle },
    },
    products,
  },
  ...props
}) => (
  <ProductCategoryContainer
    description={description}
    groups={products}
    title={renderedTitle}
    {...props}
  />
);

export const getServerData = async () => {
  const slug = 'produkty-leki-dostepne-bez-recepty';
  const pageData = await getPageData(slug);

  const rawProducts = await getProducts();
  const spreadProducts = rawProducts.flat();

  const products = pageData.pageData.acf.productGroups.map(productGroup => ({
    ...productGroup,
    products: productGroup.products.map(groupedProduct => ({
      ...groupedProduct.product,
      acf: spreadProducts.find(
        product => product.id === groupedProduct.product.ID
      ).acf,
    })),
  }));

  return {
    props: {
      ...pageData,
      products,
    },
    status: 200,
  };
};

export default ProductCategoryPage;

ProductCategoryPage.propTypes = {
  serverData: PropTypes.shape({
    pageData: PropTypes.shape({
      acf: PropTypes.shape({
        description: PropTypes.string,
      }),
      title: PropTypes.shape({
        rendered: PropTypes.string,
      }),
    }),
    products: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};
