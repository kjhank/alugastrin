import React from 'react';
import PropTypes from 'prop-types';

import { mainNav } from '@static/main-nav';

import { ProductLogo } from '@icons';
import {
  Container, Link, Navigation, NavToggle, ScrollButton, Wrapper,
} from './GlobalHeader.styled';

export const GlobalHeader = ({
  isNavigationOpen,
  isPageScrolled,
  refs,
  setNavigationOpen,
}) => {
  const handleScroll = ({ current: targetElement }) => {
    const scrollOffset = targetElement.getBoundingClientRect().top + window.scrollY - 95;
    const scrollConfig = {
      behavior: 'smooth',
      top: scrollOffset,
    };

    window.scrollTo(scrollConfig);
  };

  return (
    <Wrapper
      isOpaque={isPageScrolled}
      ref={refs.header}
    >
      <Container>
        <Link to="/">
          <ProductLogo />
        </Link>
        <Navigation>
          {mainNav.map(({
            target,
            text,
            to,
            type,
          }) => (type === 'link' ?
            (
              <Link
                key={text}
                to={to}
              >
                {text}
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
          <NavToggle onClick={() => setNavigationOpen(current => !current)}>
            {isNavigationOpen ? 'lines' : 'burger'}
          </NavToggle>
        </Navigation>
      </Container>
    </Wrapper>
  );
};

GlobalHeader.propTypes = {
  isNavigationOpen: PropTypes.bool.isRequired,
  isPageScrolled: PropTypes.bool.isRequired,
  refs: PropTypes.shape({
    header: PropTypes.shape({}),
  }).isRequired,
  setNavigationOpen: PropTypes.func.isRequired,
};
