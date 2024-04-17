import React, {
  createRef, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
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
      <span>{second}</span>
    </Name>
  );
};

export const Products = ({
  headerRef, products, sectionNames,
}) => {
  const location = useLocation();
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
    if (!hasScrolled) {
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
    }
  };

  useEffect(() => {
    // if (!hasScrolled) {
    const params = new URLSearchParams(location?.search);
    const type = params.get('typ');

    if (type && headerRef?.current) {
      handleScroll(type);
      setHasScrolled(true);
    }
    // }

    return () => setHasScrolled(false);
  }, [headerRef]);

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
                  <Image
                    image={product.acf.thumbnail}
                    loading="eager"
                  />
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
  headerRef: PropTypes.shape({
    current: PropTypes.shape({
      getBoundingClientRect: PropTypes.func,
    }),
  }).isRequired,
  products: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))).isRequired,
  sectionNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};
