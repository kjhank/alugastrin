import React, { createRef } from 'react';
import PropTypes from 'prop-types';

import { Main } from '@components/styled';

import { Header } from '@components/Product';

export const ProductContainer = ({ product }) => {
  const sections = product.sections.map(section => {
    const innerRef = createRef();

    return {
      ...section,
      innerRef,
    };
  });

  return (
    <Main>
      <Header
        description={product.description}
        image={product.package}
        links={product.links}
        name={product.fullName}
        sections={sections}
      />
    </Main>
  );
};

ProductContainer.propTypes = {
  product: PropTypes.shape({
    description: PropTypes.string,
    fullName: PropTypes.string,
    links: PropTypes.shape({}),
    package: PropTypes.shape({}),
    sections: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

