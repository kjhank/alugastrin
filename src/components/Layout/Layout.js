import React, {
  useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll-polyfill';

import { Theme } from '@theme/main';
import { FixedHeader } from '@components';
import { GlobalStyle } from '@utils';

import { Seo } from './Seo';

import '@theme/fonts.css';

const Layout = ({
  children, pageContext: { seo }, path,
}) => {
  const [
    isNavigationOpen,
    setNavigationOpen,
  ] = useState(false);

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <Theme>
      <Seo data={{
        ...seo,
        path,
      }}
      />
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
  pageContext: PropTypes.shape({
    seo: PropTypes.shape({}),
  }).isRequired,
  path: PropTypes.string.isRequired,
};

export default Layout;
