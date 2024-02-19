import React, { createRef } from 'react';
import PropTypes from 'prop-types';

import { Main } from '@components';

import { FibeBottom } from '@components/Product/misc';

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

  const videoProps = product?.video?.hasVideo ?
    {
      poster: product.video.videoPoster.url,
      sources: {
        [product.video.video.subtype]: product.video.video,
        [product.video.videoAlt?.subtype]: product.video.videoAlt,
      },
    } :
    null;

  return (
    <>
      <Header
        buyRef={buyRef}
        cssClass={product.cssClass}
        description={product.description}
        headerRef={refs.header}
        image={product.package}
        isGrid={product.isGrid ?? false}
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
            video={videoProps}
          />
        )}
        {product?.secondHero?.heading && (
        <Hero
          cssClass={`${product.cssClass} second-hero`}
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
        {product?.cssClass === 'fibegastrin' && <FibeBottom />}
        {sections.length > 0 && (
          <Sections
            background={product?.sectionsBackground}
            className={product.cssClass}
            sections={sections}
          />
        )}
        <WhereToBuy
          className={product.cssClass}
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
    isGrid: PropTypes.bool,
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
    video: PropTypes.shape({
      hasVideo: PropTypes.bool,
      video: PropTypes.shape({
        subtype: PropTypes.string,
      }),
      videoAlt: PropTypes.shape({
        subtype: PropTypes.string,
      }),
      videoPoster: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
    whereToBuy: PropTypes.shape({}),
  }).isRequired,
  refs: PropTypes.shape({
    header: PropTypes.shape({}),
  }).isRequired,
};

