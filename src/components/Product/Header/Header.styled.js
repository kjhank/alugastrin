import styled, { css } from 'styled-components';

import {
  Container as GenericContainer, SPImage,
} from '@components';

export const StyledHeader = styled.header`
  margin-top: 4.95vw;
  padding-top: 4vw;
  background-color: #fff;
`;

export const Container = styled(GenericContainer)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  &.alugastrin3forte--20 {
    justify-content: flex-end;
  }
`;

export const Image = styled(SPImage)`
  max-width: 50%;

  &.alugastrin3forte--20 {
    width: 35%;
    margin-right: 5%;
  }
`;

export const Wrapper = styled.div`
  width: 50%;
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.getColor('accent')};
  font-weight: 600;
  font-size: 46px;
`;

export const Description = styled.p`
  font-weight: 600;
  font-size: 25px;
  line-height: 1.8;
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 1.15vw;
  margin-top: 2.552vw;
`;

const linkStyle = css`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 10.21vw;
  height: 3.23vw;
  border-radius: ${({ theme }) => theme.getRadius('tiny')};
  padding: 0 1.042vw;
  background: ${({ theme }) => theme.getGradient('radial')};
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  transition: ${({ theme }) => theme.getTransitions(['filter'])};

  :hover {
    filter: brightness(1.2);
  }
`;

export const Link = styled.a`
  ${linkStyle}
`;

export const ScrollToBuyButton = styled.button`
  ${linkStyle}
  cursor: pointer
`;

export const Scrollers = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2vw;
  width: 37.34375vw;
  margin: auto;
`;

export const ScrollButton = styled.button.attrs({ type: 'button' })`
  border-radius: ${({ theme }) => theme.getRadius('tiny')};
  padding: 0.9375vw;
  background: radial-gradient(circle closest-side, #f2f2f2 50%, #d5d5d5 200%);
  color: ${({ theme }) => theme.getColor('accent')};
  font-size: 16px;
  text-transform: uppercase;
  transition: ${({ theme }) => theme.getTransitions(['filter'])};
  cursor: pointer;

  :hover {
    filter: brightness(1.05);
  }
`;
