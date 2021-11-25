import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';
import { PageHeading } from '@components/styled';

import { StyledHeader } from './Header.styled';

export const Header = ({ title }) => (
  <StyledHeader>
    <Container>
      <PageHeading>{title}</PageHeading>
    </Container>
  </StyledHeader>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
