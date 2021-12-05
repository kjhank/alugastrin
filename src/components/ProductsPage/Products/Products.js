import React, {
  createRef, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';
import { Link } from 'gatsby';

import { ArrowRight } from '@icons';
import {
  Container, Description, Image, LinkText, List, Name, Pipe, Product, Text,
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
  headerRef, products, targetGroup,
}) => {
  /* eslint-disable sort-keys */
  const sectionRefs = {
    'zgaga-i-refluks': createRef(),
    'specjalistyczna-probiotykoterapia': createRef(),
  };
  /* eslint-enable sort-keys */

  const handleScroll = target => {
    const { current: element } = sectionRefs[target];

    const { current: globalHeader } = headerRef;

    const scrollOffset = element.getBoundingClientRect().top +
        window.scrollY -
        globalHeader.getBoundingClientRect().height;

    const scrollConfig = {
      behavior: 'smooth',
      top: scrollOffset,
    };

    window.scrollTo(scrollConfig);
  };

  useEffect(() => {
    if (targetGroup && sectionRefs['zgaga-i-refluks']?.current && sectionRefs['specjalistyczna-probiotykoterapia']?.current) {
      handleScroll(targetGroup);
    }
  }, [
    targetGroup,
    sectionRefs,
  ]);

  return (
    <Container>
      {products.map((group, index) => (
        <List
          key={JSON.stringify(group)}
          ref={Object.keys(sectionRefs).map(key => sectionRefs[key])[index]}
        >
          {group.map(product => (
            <Product key={product.acf.name}>
              <Link to={product.slug}>
                <Image
                  image={product.acf.thumbnail}
                  isLazy={false}
                />
                {renderName(product.acf.name)}
                <Description>{product.acf.intro}</Description>
                <Text
                  dangerouslySetInnerHTML={{ __html: sanitize(product.acf.listingDescription) }}
                />
                <LinkText>
                  Zobacz produkt
                  <ArrowRight />
                </LinkText>
              </Link>
            </Product>
          ))}
        </List>
      ))}
    </Container>
  );
};

Products.propTypes = {
  headerRef: PropTypes.shape({ current: PropTypes.shape({}) }).isRequired,
  products: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))).isRequired,
  targetGroup: PropTypes.string,
};

Products.defaultProps = {
  targetGroup: null,
};
