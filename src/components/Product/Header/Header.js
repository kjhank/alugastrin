import React from 'react';
import PropTypes from 'prop-types';

import {
  Page, ShoppingCart,
} from '@icons';

import {
  Container,
  Description,
  ExternalLink,
  Image,
  Link, LinksWrapper,
  Name,
  ScrollButton,
  Scrollers,
  StyledHeader,
  Wrapper,
} from './Header.styled';

export const Header = ({
  description, image, links: {
    buyLink, leaflet,
  }, name, sections,
}) => {
  const handleScroll = ({ current: sectionElement }) => {
    console.log(sectionElement);
  };

  return (
    <StyledHeader>
      <Container>
        <Image image={image} />
        <Wrapper>
          <Name>{name}</Name>
          <Description>{description}</Description>
          <LinksWrapper>
            <ExternalLink href={buyLink.url}>
              {buyLink.text}
              {' '}
              <ShoppingCart />
            </ExternalLink>
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
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({}).isRequired,
  links: PropTypes.shape({
    buyLink: PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.string,
    }),
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
