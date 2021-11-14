import React from 'react';
import PropTypes from 'prop-types';

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
        <Text>{section.text}</Text>
      </Section>
    ))}
  </Container>
);

Sections.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

