import styled, { css } from 'styled-components';
import { Link as GenericLink } from 'gatsby';

import { Container as GenericContainer } from '@components';

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  background-color: transparent;
`;

export const Container = styled(GenericContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4vw 0;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    border-radius: ${({ theme }) => `0 0 ${theme.getRadius()} 0`};
    width: calc(100% + 21vw);
    background-image: ${({ theme }) => theme.getGradient()};
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2.760417vw;
  padding-right: 5.46875vw;
`;

const linkStyle = css`
  ${({ theme }) => theme.getLinkStyles()};
  font-family: ${({ theme }) => theme.getFont('heading')};
  font-size: 18px;
  color: #fff;

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
