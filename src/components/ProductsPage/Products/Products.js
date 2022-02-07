import React, {
  createRef, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import sanitize from 'sanitize-html';

import { ArrowRight } from '@icons';
import {
  ArrowWrapper,
  Container,
  Description,
  Image,
  List,
  Name,
  Pipe,
  Product,
  SectionHeading,
  Text,
} from './Products.styled';

export const renderName = name => {
  const [
    first,
    second,
  ] = name.split('|');

  return (
    <Name>
      {first}
      <Pipe>
        |
      </Pipe>
      {second}
    </Name>
  );
};

export const Products = ({
  headerRef, products, sectionNames, targetGroup,
}) => {
  /* eslint-disable sort-keys */
  const sectionRefs = {
    'zgaga-i-refluks': createRef(),
    'specjalistyczna-probiotykoterapia': createRef(),
  };
  /* eslint-enable sort-keys */

  const [
    hasScrolled,
    setHasScrolled,
  ] = useState(false);

  const handleScroll = target => {
    const timeoutId = setTimeout(() => {
      const { current: element } = sectionRefs[target];

      const { current: globalHeader } = headerRef;

      const scrollOffset = element?.getBoundingClientRect()?.top +
        window.scrollY -
        globalHeader?.getBoundingClientRect()?.height;

      const scrollConfig = {
        behavior: 'smooth',
        top: scrollOffset,
      };

      window.scrollTo(scrollConfig);
      setHasScrolled(true);
      clearTimeout(timeoutId);
    }, 300);
  };

  useEffect(() => {
    if (targetGroup && sectionRefs[targetGroup].current && headerRef.current && !hasScrolled) {
      handleScroll(targetGroup);
    }
  }, [
    headerRef,
    sectionRefs,
    targetGroup,
  ]);

  return (
    <Container>
      {products.map((group, index) => (
        <section
          key={JSON.stringify(group)}
          ref={Object.keys(sectionRefs).map(key => sectionRefs[key])[index]}
        >
          <SectionHeading>
            {sectionNames[index]}
          </SectionHeading>
          <List>
            {group.map(product => (
              <Product key={product.acf.name}>
                <Link to={product.slug}>
                  <Image image={product.acf.thumbnail} />
                  {renderName(product.acf.name)}
                  <Description>{product.acf.intro}</Description>
                  <Text
                    dangerouslySetInnerHTML={{ __html: sanitize(product.acf.listingDescription) }}
                  />
                  <ArrowWrapper>
                    Zobacz produkt
                    <ArrowRight />
                  </ArrowWrapper>
                </Link>
              </Product>
            ))}
          </List>
        </section>
      ))}
    </Container>
  );
};

Products.propTypes = {
  headerRef: PropTypes.shape({ current: PropTypes.shape({}) }).isRequired,
  products: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))).isRequired,
  sectionNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  targetGroup: PropTypes.string,
};

Products.defaultProps = {
  targetGroup: null,
};
