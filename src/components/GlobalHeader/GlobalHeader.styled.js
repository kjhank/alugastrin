import styled, { css } from 'styled-components';
import { Link as GenericLink } from 'gatsby';

import { Container as GenericContainer } from '@components';

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
    bottom: 0;
    left: 0;
    z-index: 2;
    opacity: ${({ isOpaque }) => (isOpaque ? 1 : 0)};
    width: calc(100% - 21vw + 5.46875vw);
    height: 95px;
    border-radius: ${({ theme }) => `0 0 ${theme.getRadius()} 0`};
    background-image: ${({ theme }) => theme.getGradient()};
    transition: ${({ theme }) => theme.getTransitions(['opacity'])};
  }
`;

export const Container = styled(GenericContainer)`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4vw 0;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2.760417vw;
`;

const linkStyle = css`
  ${({ theme }) => theme.getLinkStyles()};
  color: #fff;
  font-size: 18px;
  font-family: ${({ theme }) => theme.getFont('heading')};

`;

export const Link = styled(GenericLink)`
  ${linkStyle}
`;

export const ScrollButton = styled.button.attrs({ type: 'button' })`
  ${linkStyle}
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const NavToggle = styled.button.attrs({ type: 'button' })`
  display: none;
  background-color: transparent;
  color: #fff;
`;
