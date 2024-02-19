import React from 'react';
import PropTypes from 'prop-types';

import { getPageData, getProducts } from '@utils/api';

import { ProductCategoryContainer } from '@containers';

const ProductCategoryPage = ({
  serverData: {
    pageData: {
      acf: { description, productGroups },
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
  const slug = 'produkty-suplementy-diety';
  const pageData = await getPageData(slug);

  const rawProducts = await getProducts();
  const spreadProducts = rawProducts.flat();

  const products = pageData.pageData.acf.productGroups.map((productGroup) => {
    return {
      ...productGroup,
      products: productGroup.products.map((groupedProduct) => ({
        ...groupedProduct.product,
        acf: spreadProducts.find(
          (product) => product.id === groupedProduct.product.ID,
        ).acf,
      })),
    };
  });

  return {
    props: {
      ...pageData,
      products,
    },
    status: 200,
  };
};

export default ProductCategoryPage;
