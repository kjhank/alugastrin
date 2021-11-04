import React from 'react';
import PropTypes from 'prop-types';
import {
  css, ThemeProvider,
} from 'styled-components';

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
    border: '#9e0e0d',
    main: '#3b3b3b',
  },
  fonts: {
    default: 'Proxima Nova, sans-serif',
    heading: 'Barlow, sans-serif',
  },
  getColor: variant => theme.colors[variant],
  getFont: (variant = 'default') => theme.fonts[variant],
  getGradient: (direction = 'right') => `linear-gradient(to ${direction}, #930e0d, #d42027)`,
  getLinkStyles: () => css`
    position: relative;

    ::after {
      content: '';
      position: absolute;
      top: 100%;
      right: 0;
      left: 0;
      height: 2px;
      border-radius: 1px;
      background: linear-gradient(#fff, #fff);
      transition: ${({ theme: { transitions } }) => `background-size ${transitions.duration}`};
      background-repeat: no-repeat;
      background-position: center;
      background-size: 0 100%
    }

    :hover {
      ::after {
        background-size: 100% 100%;
      }
    }
  `,
  getRadius: (variant = 'default') => theme.borderRadii[variant],
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
