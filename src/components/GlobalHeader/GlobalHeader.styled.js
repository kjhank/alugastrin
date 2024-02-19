import styled, { css } from 'styled-components';
import { Link as GenericLink } from 'gatsby';

import { Container as GenericContainer } from '@components';

import { Brag as BragSvg } from '@icons';

import { queries } from '@utils';

export const Submenu = styled.ul`
  position: absolute;
  inset: 100% auto auto 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  padding: 0.5em 1em 1em;
  translate: -50% -600%;
  transition:
    opacity 400ms,
    translate 400ms;
  opacity: 0;

  a {
    white-space: nowrap;
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
    padding: 2em 5em 2em 1em;
    background-image: ${({ theme }) => theme.getGradient()};
    transform: ${({ isVisible }) =>
      isVisible ? 'none' : 'translateX(calc(100% + 3em))'};

    > a,
    button {
      color: #fff;
      font-size: 24px;
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
      translate: -50% 0;
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
      width: 50vw;
      display: block;
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
  transform: ${({ isFlipped }) =>
    isFlipped ? 'rotateY(180deg) translateY(-50%)' : 'translateY(-50%)'};
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
