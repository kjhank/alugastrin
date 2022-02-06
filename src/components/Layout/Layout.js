import React, {
  cloneElement, createRef, useCallback, useEffect, useRef, useState,
} from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll-polyfill';

import { Theme } from '@theme/main';
import {
  GlobalFooter, GlobalHeader, Modal,
} from '@components';
import {
  debounceFunction,
  GlobalStyle,
  isBrowser,
} from '@utils';

import { Seo } from './Seo';

import '@theme/fonts.css';
import { CookiesModal } from './CookiesModal';

const DEBOUNCE_TIMEOUT = 300;
const COOKIES_LS_KEY = 'cookies-agreed';
const BODY = isBrowser ? document.body : null;

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
    isCookiesModalOpen,
    setCookiesModalOpen,
  ] = useState(false);

  useEffect(() => {
    const hasUserAgreed = localStorage.getItem(COOKIES_LS_KEY);

    cookieRef.current = !!hasUserAgreed;

    setCookiesModalOpen(!hasUserAgreed);
  }, []);

  const handleModal = () => {
    const hasUserAgreed = localStorage.getItem(COOKIES_LS_KEY);

    setCookiesModalOpen(!hasUserAgreed);
  };

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

  useEffect(() => {
    if (window.scrollY > refs?.header?.current.getBoundingClientRect().height) {
      setPageScrolled(true);
    }
  }, []);

  const confirmCookies = () => {
    localStorage.setItem(COOKIES_LS_KEY, true);
    setCookiesModalOpen(false);
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
      {isCookiesModalOpen ?
        createPortal(
          <Modal
            close={handleModal}
            isClosable={false}
          >
            <CookiesModal
              accept={globals.cookies.accept}
              confirmCookies={confirmCookies}
              copy={globals.cookies.copy}
              reject={globals.cookies.reject}
            />
          </Modal>, BODY
        ) :
        null}
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
