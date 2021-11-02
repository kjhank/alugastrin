import React, {
  useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll-polyfill';

import { Theme } from '@theme/main';
import { FixedHeader } from '@components';
import { GlobalStyle } from '@utils';

import '@theme/fonts.css';

const Layout = ({ children }) => {
  const [
    isNavigationOpen,
    setNavigationOpen,
  ] = useState(false);

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <Theme>
      <GlobalStyle />
      <FixedHeader
        isNavigationOpen={isNavigationOpen}
        setNavigationOpen={setNavigationOpen}
      />
      {children}
    </Theme>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Layout;
