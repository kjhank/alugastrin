import React from 'react';
import PropTypes from 'prop-types';

import { Main as StyledMain } from '@components/styled';

export const Main = ({
  children, ...props
}) => (
  <StyledMain {...props}>
    {children}
  </StyledMain>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  hasNoMargin: PropTypes.bool,
};

Main.defaultProps = {
  hasNoMargin: false,
};

