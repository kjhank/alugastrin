import React, { createRef } from 'react';
import PropTypes from 'prop-types';

import { Main } from '@components/styled';

import {
  Header, Hero, Ingredients, Sections, WhereToBuy,
} from '@components/Product';

export const ProductContainer = ({ product }) => {
  const sections = product.sections.map(section => {
    const innerRef = createRef();

    return {
      ...section,
      innerRef,
    };
  });

  return (
    <>
      <Header
        description={product.description}
        image={product.package}
        links={product.links}
        name={product.fullName}
        sections={sections}
      />
      <Main hasNoMargin>
        <Hero data={product.hero} />
        <Ingredients data={product.ingredients} />
        <Sections sections={sections} />
        <WhereToBuy data={product.whereToBuy} />
      </Main>
    </>
  );
};

ProductContainer.propTypes = {
  product: PropTypes.shape({
    description: PropTypes.string,
    fullName: PropTypes.string,
    hero: PropTypes.shape({}),
    ingredients: PropTypes.shape({}),
    links: PropTypes.shape({}),
    package: PropTypes.shape({}),
    sections: PropTypes.arrayOf(PropTypes.shape({})),
    whereToBuy: PropTypes.shape({}),
  }).isRequired,
};

