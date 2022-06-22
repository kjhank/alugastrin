import React, {
  cloneElement, createRef, useCallback, useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll-polyfill';

import { Theme } from '@theme/main';
import {
  GlobalFooter, GlobalHeader,
} from '@components';
import {
  debounceFunction,
  GlobalStyle,
} from '@utils';

import { Seo } from './Seo';

import '@theme/fonts.css';
import { CookiesBar } from './CookiesBar';

const DEBOUNCE_TIMEOUT = 300;
const COOKIES_LS_KEY = 'cookies-agreed';

const Layout = ({
  children, serverData, path,
}) => {
  const cookieRef = useRef();
  const {
    globals, globalFootnote, hasGlobalFootnote, hasLegalInFooter, pageData,
  } = serverData || { pageData: {} };

  const [
    isNavigationOpen,
    setNavigationOpen,
  ] = useState(false);

  const [
    isPageScrolled,
    setPageScrolled,
  ] = useState(false);

  const [
    isCookiesBarOpen,
    setCookiesBarOpen,
  ] = useState(false);

  useEffect(() => {
    const hasUserAgreed = localStorage.getItem(COOKIES_LS_KEY);

    cookieRef.current = !!hasUserAgreed;

    setCookiesBarOpen(!hasUserAgreed);
  }, []);

  const handleCookies = () => {
    const hasUserAgreed = localStorage.getItem(COOKIES_LS_KEY);

    setCookiesBarOpen(!hasUserAgreed);
  };

  const refs = {
    contact: createRef(),
    header: createRef(),
  };

  useEffect(() => {
    smoothscroll.polyfill();
    handleCookies();
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

  useEffect(() => {
    if (window.scrollY > refs?.header?.current.getBoundingClientRect().height) {
      setPageScrolled(true);
    }
  }, []);

  const confirmCookies = () => {
    localStorage.setItem(COOKIES_LS_KEY, true);
    setCookiesBarOpen(false);
  };

  return (
    <Theme>
      <Seo data={{
        ...pageData?.yoast_head_json,
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
        bragFootnote={globals?.bragFootnote}
        contactRef={refs.contact}
        data={globals}
        globalFootnote={hasGlobalFootnote ? globalFootnote : null}
        hasLegal={hasLegalInFooter}
      />
      <CookiesBar
        accept={globals?.cookies?.accept}
        confirmCookies={confirmCookies}
        copy={globals?.cookies.copy}
        isOpen={isCookiesBarOpen}
        reject={globals?.cookies?.reject}
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
    hasLegalInFooter: PropTypes.bool,
    pageData: PropTypes.shape({
      yoast_head_json: PropTypes.shape({}),
    }),
  }),
};

Layout.defaultProps = {
  serverData: { hasLegalInFooter: true },
};

export default Layout;
