import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, HowTo, Package, PaddedContainer, Section,
} from './Preparation.styled';

import { FramedText } from '../Ingredients/Ingredients.styled';

export const Preparation = ({
  heading,
  image,
  steps,
}) => (
  <Section>
    <PaddedContainer>
      <FramedText>{heading}</FramedText>
    </PaddedContainer>
    <Container>
      <Package image={image} />
      <HowTo image={steps} />
    </Container>
  </Section>
);

Preparation.propTypes = {
  heading: PropTypes.string.isRequired,
  image: PropTypes.shape({}).isRequired,
  steps: PropTypes.shape({}).isRequired,
};

