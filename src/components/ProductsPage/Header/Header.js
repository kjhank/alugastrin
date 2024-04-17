import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';
import { PageHeading } from '@components/styled';

import { StyledHeader } from './Header.styled';

export const Header = ({ title }) => {
  const parsedTitle = title.replace('&#8211;', '-');

  return (
    <StyledHeader>
      <Container>
        <PageHeading $isInlineBlock>{parsedTitle}</PageHeading>
      </Container>
    </StyledHeader>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
