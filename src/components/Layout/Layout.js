import React, {
  useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll-polyfill';

import { Theme } from '@theme/main';
import {
  GlobalFooter, GlobalHeader,
} from '@components';
import { GlobalStyle } from '@utils';

import { Seo } from './Seo';

import '@theme/fonts.css';

const Layout = ({
  children, serverData: {
    globals, pageData: { yoast_head_json: seo },
  }, path,
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
      <GlobalHeader
        isNavigationOpen={isNavigationOpen}
        setNavigationOpen={setNavigationOpen}
      />
      {children}
      <GlobalFooter
        data={globals}
      />
    </Theme>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  path: PropTypes.string.isRequired,
  serverData: PropTypes.shape({
    globals: PropTypes.shape({}),
    pageData: PropTypes.shape({
      yoast_head_json: PropTypes.shape({}),
    }),
  }).isRequired,
};

export default Layout;
