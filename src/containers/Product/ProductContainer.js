import React, { createRef } from 'react';
import PropTypes from 'prop-types';

import { Main } from '@components';

import {
  Header, Hero, Ingredients, Preparation, Sections, WhereToBuy,
} from '@components/Product';

export const ProductContainer = ({
  product, refs, ...props
}) => {
  const sections = product.sections.map(section => {
    const innerRef = createRef();

    return {
      ...section,
      innerRef,
    };
  });

  const buyRef = createRef();

  return (
    <>
      <Header
        buyRef={buyRef}
        cssClass={product.cssClass}
        description={product.description}
        headerRef={refs.header}
        image={product.package}
        links={product.links}
        name={product.fullName}
        sections={sections}
      />
      <Main
        hasGradient
        hasNoMargin
        refs={refs}
        {...props}
      >
        {product?.hero?.heading && (
          <Hero
            cssClass={product.cssClass}
            data={product.hero}
          />
        )}
        {product?.secondHero?.heading && (
        <Hero
          cssClass={product.cssClass}
          data={product.secondHero}
          isSecond
        />
        )}
        {product?.ingredients?.heading && <Ingredients data={product.ingredients} />}
        {product?.preparation?.heading && (
          <Preparation
            heading={product.preparation.heading}
            image={product.preparation.package}
            steps={product.preparation.steps}
          />
        )}
        {sections.length > 0 && (
          <Sections
            background={product.sectionsBackground}
            sections={sections}
          />
        )}
        <WhereToBuy
          data={product.whereToBuy}
          innerRef={buyRef}
        />
      </Main>
    </>
  );
};

ProductContainer.propTypes = {
  product: PropTypes.shape({
    cssClass: PropTypes.string,
    description: PropTypes.string,
    fullName: PropTypes.string,
    hero: PropTypes.shape({
      heading: PropTypes.string,
    }),
    ingredients: PropTypes.shape({
      heading: PropTypes.string,
    }),
    links: PropTypes.shape({}),
    package: PropTypes.shape({}),
    preparation: PropTypes.oneOfType([
      PropTypes.shape({
        heading: PropTypes.string,
        package: PropTypes.oneOfType([
          PropTypes.shape({}),
          PropTypes.bool,
        ]),
        steps: PropTypes.oneOfType([
          PropTypes.shape({}),
          PropTypes.bool,
        ]),
      }),
      PropTypes.bool,
    ]),
    secondHero: PropTypes.shape({
      heading: PropTypes.string,
    }),
    sections: PropTypes.arrayOf(PropTypes.shape({})),
    sectionsBackground: PropTypes.shape({}),
    whereToBuy: PropTypes.shape({}),
  }).isRequired,
  refs: PropTypes.shape({
    header: PropTypes.shape({}),
  }).isRequired,
};

