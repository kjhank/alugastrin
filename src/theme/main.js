/* eslint-disable sort-keys */
import React from 'react';
import PropTypes from 'prop-types';
import {
  css, ThemeProvider,
} from 'styled-components';

const theme = {
  borderRadii: {
    large: '120px',
    larger: '100px',
    default: '50px',
    mediumPlus: '40px',
    medium: '33px',
    small: '25px',
    smaller: '20px',
    tiny: '11px',
  },
  colors: {
    accent: '#bb181b',
    background: '#eeeeec',
    border: '#9e0e0d',
    fibe: '#99C05A',
    gradientGray: '#e6e6e6',
    main: '#3b3b3b',
    max: '#189D93',
    nearWhite: '#f7f7f7',
    neutral: '#d6d6d6',
  },
  fonts: {
    default: 'Proxima Nova, sans-serif',
    heading: 'Barlow, sans-serif',
  },
  getColor: variant => theme.colors[variant],
  getFont: (variant = 'default') => theme.fonts[variant],
  getGradient: (direction = 'right') => (direction === 'radial' ? 'radial-gradient(#d42027 5%, #930e0d)' : `linear-gradient(to ${direction}, #930e0d, #d42027)`),
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
      background-image: linear-gradient(#fff, #fff);
      background-position: center;
      background-size: 0 100%;
      background-repeat: no-repeat;
      transition: ${({ theme: { transitions } }) => `background-size ${transitions.duration}`};
    }

    :hover {
      ::after {
        background-size: 100% 100%;
      }
    }
  `,
  getRadius: (variant = 'default') => theme.borderRadii[variant],
  getTransitions: (properties, duration) => properties.map(property => `${property} ${theme.transitions[duration] || theme.transitions.duration}`).join(', '),
  transitions: {
    duration: '0.4s',
    fastDuration: '0.2s',
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};
