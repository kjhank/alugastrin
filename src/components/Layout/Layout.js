import React, {
  cloneElement, createRef, useCallback, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll-polyfill';

import { Theme } from '@theme/main';
import {
  GlobalFooter, GlobalHeader,
} from '@components';
import {
  debounceFunction, GlobalStyle,
} from '@utils';

import { Seo } from './Seo';

import '@theme/fonts.css';

const DEBOUNCE_TIMEOUT = 300;

const Layout = ({
  children, serverData, path,
}) => {
  const {
    globals, pageData: { yoast_head_json: seo },
  } = serverData || { pageData: {} };

  const [
    isNavigationOpen,
    setNavigationOpen,
  ] = useState(false);

  const [
    isPageScrolled,
    setPageScrolled,
  ] = useState(false);

  const refs = {
    contact: createRef(),
    header: createRef(),
  };

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  const scrollEventHandler = ({ type }, headerHeight) => {
    if (type === 'scroll') {
      setPageScrolled(window.scrollY > headerHeight);
    }
  };

  const debounceEvent = useCallback(
    debounceFunction((event, height) => scrollEventHandler(event, height), DEBOUNCE_TIMEOUT), []
  );

  useEffect(() => {
    const { height: headerHeight } = refs.header.current.getBoundingClientRect();
    const onScroll = event => debounceEvent(event, headerHeight);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setPageScrolled(false);
    setNavigationOpen(false);
  }, [path]);

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
        isPageScrolled={isPageScrolled}
        refs={refs}
        setNavigationOpen={setNavigationOpen}
      />
      {cloneElement(children, { refs })}
      <GlobalFooter
        contactRef={refs.contact}
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
