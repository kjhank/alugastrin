import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';

import {
  StyledHeader, Title,
} from './Header.styled';

export const Header = ({ title }) => (
  <StyledHeader>
    <Container>
      <Title>{title}</Title>
    </Container>
  </StyledHeader>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

