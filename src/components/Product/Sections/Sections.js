import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import { InnerContainer } from '@components/styled';
import { Container } from '@components';

import {
  Background, Heading, Section, Text,
} from './Sections.styled';

const sanitizeConfig = {
  allowedTags: [
    'strong',
    'em',
    'i',
    'b',
    'br',
    'li',
    'span',
  ],
};

export const Sections = ({
  background, className, sections,
}) => (
  <Container>
    <InnerContainer>
      {background && (
      <Background
        className={className}
        image={background}
      />
      )}
      {sections.map(section => (
        <Section
          key={section.heading}
          ref={section.innerRef}
        >
          <Heading>{section.heading}</Heading>
          <Text dangerouslySetInnerHTML={{ __html: sanitize(section.text, sanitizeConfig) }} />
        </Section>
      ))}
    </InnerContainer>
  </Container>
);

Sections.propTypes = {
  background: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  sections: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

Sections.defaultProps = {
  className: null,
};

