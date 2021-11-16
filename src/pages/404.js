import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  Container, Main,
} from '@components';

import {
  LineHeading,
} from '@components/styled';

const Text = styled.p`
  font-size: 16px;
`;

const StyledLink = styled(Link)`
  color: #b00b1e;
  text-decoration: underline;
`;

const NotFoundPage = ({
  uri, ...props
}) => (
  <Main {...props}>
    <Container>
      <LineHeading as="h1">Error 404 - not found</LineHeading>
      <Text>
        The page at
        {' '}
        {uri}
        {' '}
        could not be found.
        {' '}
        <StyledLink to="/">Click here</StyledLink>
        {' '}
        to go home.
      </Text>
    </Container>
  </Main>
);

export default NotFoundPage;

NotFoundPage.propTypes = {
  uri: PropTypes.string.isRequired,
};
