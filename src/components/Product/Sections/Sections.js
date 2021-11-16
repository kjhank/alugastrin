import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import {
  Container, Heading, Section, Text,
} from './Sections.styled';

export const Sections = ({ sections }) => (
  <Container>
    {sections.map(section => (
      <Section
        key={section.heading}
        ref={section.innerRef}
      >
        <Heading>{section.heading}</Heading>
        <Text dangerouslySetInnerHTML={{ __html: sanitize(section.text) }} />
      </Section>
    ))}
  </Container>
);

Sections.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

