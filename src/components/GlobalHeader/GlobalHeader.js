import React, {
  useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';

import { mainNav } from '@static/main-nav';

import {
  AlignRight, ProductLogo, X,
} from '@icons';
import {
  Container,
  Link,
  Navigation,
  NavToggle,
  ScrollButton,
  Submenu,
  Wrapper,
} from './GlobalHeader.styled';

export const GlobalHeader = ({
  isNavigationOpen,
  isPageScrolled,
  refs,
  setNavigationOpen,
}) => {
  const [
    headerHeight,
    setHeaderHeight,
  ] = useState(95);

  useEffect(() => {
    const { height } = refs?.header?.current?.getBoundingClientRect();

    setHeaderHeight(height);
  }, [refs]);

  const handleScroll = ({ current: targetElement }) => {
    const scrollOffset =
      targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
    const scrollConfig = {
      behavior: 'smooth',
      top: scrollOffset,
    };

    setNavigationOpen(false);
    window.scrollTo(scrollConfig);
  };

  return (
    <Wrapper
      headerHeight={headerHeight}
      isOpaque={isPageScrolled}
      ref={refs.header}
    >
      <Container>
        <Link
          className="header__link header__link--logo"
          to="/"
        >
          <ProductLogo />
        </Link>
        <Navigation
          headerHeight={headerHeight}
          isVisible={isNavigationOpen}
        >
          {mainNav.map(({
            subItems, target, text, to, type,
          }) => (type === 'link' || type === 'parent' ?
            (
              <Link
                as={type === 'parent' && 'div'}
                key={text}
                to={to ?? null}
              >
                {text}
                {subItems?.length > 0 && (
                <Submenu>
                  {subItems.map(subitem => (
                    <Link
                      key={subitem.text}
                      to={subitem.to}
                    >
                      {subitem.text}
                    </Link>
                  ))}
                </Submenu>
                )}
              </Link>
            ) :
            (
              <ScrollButton
                key={text}
                onClick={() => handleScroll(refs[target])}
              >
                {text}
              </ScrollButton>
            )))}
        </Navigation>
        <NavToggle
          isFlipped={isNavigationOpen}
          onClick={() => setNavigationOpen(current => !current)}
        >
          <AlignRight className="icon icon--align-right" />
          <X className="icon icon--x" />
        </NavToggle>
      </Container>
    </Wrapper>
  );
};

GlobalHeader.propTypes = {
  isNavigationOpen: PropTypes.bool.isRequired,
  isPageScrolled: PropTypes.bool.isRequired,
  refs: PropTypes.shape({
    header: PropTypes.shape({
      current: PropTypes.node,
    }),
  }).isRequired,
  setNavigationOpen: PropTypes.func.isRequired,
};
