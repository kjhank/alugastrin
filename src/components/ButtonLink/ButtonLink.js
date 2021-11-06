import React from 'react';
import PropTypes from 'prop-types';

import { StyledButtonLink } from '@components/styled';
import { ArrowRight } from '@icons';

export const ButtonLink = ({
  children, hasArrow, ...props
}) => (
  <StyledButtonLink {...props}>
    {children}
    {hasArrow && <ArrowRight />}
  </StyledButtonLink>
);

ButtonLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  hasArrow: PropTypes.bool,
};

ButtonLink.defaultProps = {
  hasArrow: true,
};
