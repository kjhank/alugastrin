import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import { InnerContainer } from '@components/styled';
import { Container } from '@components';

import {
  Background, Heading, Section, Text,
} from './Sections.styled';

export const Sections = ({
  background, sections,
}) => (
  <Container>
    <InnerContainer>
      <Background image={background} />
      {sections.map(section => (
        <Section
          key={section.heading}
          ref={section.innerRef}
        >
          <Heading>{section.heading}</Heading>
          <Text dangerouslySetInnerHTML={{ __html: sanitize(section.text) }} />
        </Section>
      ))}
    </InnerContainer>
  </Container>
);

Sections.propTypes = {
  background: PropTypes.shape({}).isRequired,
  sections: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

