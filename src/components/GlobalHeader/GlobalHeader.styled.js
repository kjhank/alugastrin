import styled, { css } from 'styled-components';
import { Link as GenericLink } from 'gatsby';

import { Container as GenericContainer } from '@components';

import { Brag as BragSvg } from '@icons';

import { queries } from '@utils';

export const Submenu = styled.ul`
  position: absolute;
  inset: 100% auto auto 0;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin-inline-start: -1em;
  padding: 1em 1em 2em;
  translate: 0 -600%;
  transition:
    opacity 400ms,
    translate 400ms;

  a {
    white-space: nowrap;
  }

  @media ${queries.s} {
    position: static;
    opacity: 1;
    flex-direction: column;
    margin: none;
    padding: 1em 0;
    translate: 0;
  }
`;

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  background-color: transparent;

  ::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    opacity: ${({ isOpaque }) => (isOpaque ? 1 : 0)};
    width: calc(100% - 12.5vw + 5.46875vw);
    height: ${({ headerHeight }) => `${headerHeight}px`};
    border-radius: ${({ theme }) => `0 0 ${theme.getRadius()} 0`};
    background-image: ${({ theme }) => theme.getGradient()};
    transition: ${({ theme }) => theme.getTransitions(['opacity'])};

    @media ${queries.xl} {
      width: calc(100% - 10vw);
    }

    @media ${queries.l} {
      width: calc(100% - 5vw);
    }

    @media ${queries.s} {
      width: calc(100% - 1em);
    }
  }
`;

export const Container = styled(GenericContainer)`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 1.5vw;
  padding: 1.4vw 0;

  @media ${queries.xl} {
    padding-block: 1.5em;
  }

  @media ${queries.s} {
    flex-direction: column;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: min(3.2vw, 1.5em);
  margin-left: auto;
  transition: ${({ theme }) => theme.getTransitions(['transform'])};

  @media ${queries.s} {
    position: fixed;
    top: ${({ headerHeight }) => `${headerHeight * 1.5}px`};
    right: 0;
    flex-direction: column;
    gap: 1em;
    border-radius: ${({ theme }) => `0 0 0 ${theme.getRadius()}`};
    padding: 2em 2em 1em;
    background-image: ${({ theme }) => theme.getGradient()};
    transform: ${({ isVisible }) => (isVisible ? 'none' : 'translateX(calc(100% + 3em))')};

    > a,
    button,
    > div {
      color: #fff;
      font-size: 24px;
      text-align: center;
    }

    > div::after {
      content: unset;
    }
  }
`;

const linkStyle = css`
  ${({ theme }) => theme.getLinkStyles()};
  color: #fff;
  font-size: clamp(14px, 0.9375vw, 18px);
  font-family: ${({ theme }) => theme.getFont('heading')};

  &:hover {
    ${Submenu} {
      opacity: 1;
      translate: 0;

      @media ${queries.s} {
        translate: unset;
      }
    }
  }
`;

export const Link = styled(GenericLink)`
  ${linkStyle}

  > svg {
    width: 100%;
    height: auto;
  }

  &.header__link--logo {
    width: 12.5vw;
  }

  @media ${queries.s} {
    &.header__link--logo {
      display: block;
      width: 50vw;
      margin: auto;
    }
  }
`;

export const ScrollButton = styled.button.attrs({ type: 'button' })`
  ${linkStyle}
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const NavToggle = styled.button.attrs({ type: 'button' })`
  position: absolute;
  top: 50%;
  right: 1em;
  z-index: 3;
  display: none;
  width: 2em;
  height: 2em;
  background-color: transparent;
  color: #fff;
  transition: ${({ theme }) => theme.getTransitions(['transform'])};
  transform: ${({ isFlipped }) => (isFlipped ? 'rotateY(180deg) translateY(-50%)' : 'translateY(-50%)')};
  transform-style: preserve-3d;

  @media ${queries.s} {
    display: block;

    > svg {
      position: absolute;
      top: 50%;
      left: 50%;
      backface-visibility: hidden;
      fill: currentColor;
      transform: translate(-50%, -50%);

      &.icon--x {
        transform: translate(-50%, -50%) rotateY(180deg);
      }
    }
  }
`;

export const Brag = styled(BragSvg)`
  width: 12.5vw;
  height: auto;

  @media ${queries.s} {
    width: 25%;
  }
`;
