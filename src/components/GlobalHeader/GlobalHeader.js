import React from 'react';

import { mainNav } from '@static/main-nav';

import { ProductLogo } from '@icons';
import {
  Container, Link, Navigation, ScrollButton, Wrapper,
} from './GlobalHeader.styled';

export const GlobalHeader = () => (
  <Wrapper>
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
            <ScrollButton key={text}>{text}</ScrollButton>
          )))}
      </Navigation>
    </Container>
  </Wrapper>
);
