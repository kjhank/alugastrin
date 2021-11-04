import React from 'react';
import PropTypes from 'prop-types';

export const ExternalLink = ({
  children, ...props
}) => (
  <a
    rel="noreferrer, noopener"
    target="_blank"
    {...props}
  >
    {children}
  </a>
);

ExternalLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

