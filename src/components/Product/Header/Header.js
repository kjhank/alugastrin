import React from 'react';
import PropTypes from 'prop-types';

import {
  Page, ShoppingCart,
} from '@icons';

import {
  Container,
  Description,
  Image,
  Link,
  LinksWrapper,
  Name,
  ScrollButton,
  Scrollers,
  ScrollToBuyButton,
  StyledHeader,
  Wrapper,
} from './Header.styled';

export const Header = ({
  buyRef, cssClass, description, headerRef, image, links: {
    buyLink, leaflet,
  }, name, sections,
}) => {
  const handleScroll = ({ current: sectionElement }) => {
    if (sectionElement) {
      const { current: headerElement } = headerRef;
      const headerHeight = headerElement.getBoundingClientRect().height;

      const elementOffset = sectionElement.getBoundingClientRect().top;
      const scrollDistance = elementOffset + window.scrollY - headerHeight;
      const scrollConfig = {
        behavior: 'smooth',
        top: scrollDistance,
      };

      window.scrollTo(scrollConfig);
    }
  };

  return (
    <StyledHeader className={cssClass}>
      <Container className={cssClass}>
        <Image
          className={cssClass}
          image={image}
        />
        <Wrapper>
          <Name>{name}</Name>
          <Description>{description}</Description>
          <LinksWrapper>
            <ScrollToBuyButton onClick={() => handleScroll(buyRef)}>
              {buyLink}
              {' '}
              <ShoppingCart />
            </ScrollToBuyButton>
            <Link href={leaflet.file.url}>
              {leaflet.text}
              {' '}
              <Page />
            </Link>
          </LinksWrapper>
        </Wrapper>
        <Scrollers>
          {sections.map(section => (
            <ScrollButton
              key={section.heading}
              onClick={() => handleScroll(section.innerRef)}
            >
              {section.heading}
            </ScrollButton>
          ))}
        </Scrollers>
      </Container>
    </StyledHeader>
  );
};

Header.propTypes = {
  buyRef: PropTypes.shape({}).isRequired,
  cssClass: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  headerRef: PropTypes.shape({
    current: PropTypes.shape({}),
  }).isRequired,
  image: PropTypes.shape({}).isRequired,
  links: PropTypes.shape({
    buyLink: PropTypes.string,
    leaflet: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string,
      }),
      text: PropTypes.string,
    }),
  }).isRequired,
  name: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
