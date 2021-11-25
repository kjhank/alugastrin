import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import { Container } from '@components';
import { PageHeading } from '@components/styled';

import {
  Image, SectionItem, SectionScrollButton, StyledHeader, TableOfContents, Wrapper,
} from './Header.styled';

export const Header = ({
  headerRef, image, sections, title,
}) => {
  const handleScroll = ({ current: element }) => {
    const { current: globalHeader } = headerRef;
    const elementOffset = element.getBoundingClientRect().top +
    window.scrollY -
    globalHeader.getBoundingClientRect().height;
    const scrollConfig = {
      behavior: 'smooth',
      top: elementOffset,
    };

    window.scrollTo(scrollConfig);
  };

  return (
    <StyledHeader>
      <Container>
        <PageHeading dangerouslySetInnerHTML={{ __html: sanitize(title) }} />
        <Wrapper>
          <TableOfContents>
            {sections?.map(section => (
              <SectionItem key={section.heading}>
                <SectionScrollButton onClick={() => handleScroll(section.innerRef)}>
                  {section.heading}
                </SectionScrollButton>
              </SectionItem>
            ))}
          </TableOfContents>
          <Image image={image} />
        </Wrapper>
      </Container>
    </StyledHeader>
  );
};

Header.propTypes = {
  headerRef: PropTypes.shape({ current: PropTypes.shape({}) }).isRequired,
  image: PropTypes.shape({}).isRequired,
  sections: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  title: PropTypes.string.isRequired,
};
