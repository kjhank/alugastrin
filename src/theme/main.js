import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  borderRadii: {
    default: '50px',
    large: '200px',
    small: '25px',
  },
  colors: {
    // color declarations go here
    accent: '#bb181b',
    background: '#eeeeec',
    main: '#3b3b3b',
  },
  fonts: {
    default: 'Proxima Nova, sans-serif',
    heading: 'Barlow, sans-serif',
  },
  getColor: variant => theme.colors[variant],
  getFont: (variant = 'default') => theme.fonts[variant],
  getRadius: variant => theme.borderRadii[variant],
  transitions: {
    duration: '0.4s',
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};
