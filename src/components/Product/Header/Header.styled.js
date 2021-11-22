import styled, { css } from 'styled-components';

import {
  Container as GenericContainer, SPImage,
} from '@components';

import { queries } from '@utils';

export const StyledHeader = styled.header`
  margin-top: 4.95vw;
  padding-top: 4vw;
  background-color: #fff;

  @media ${queries.xs} {
    margin-top: 10vw;
  }
`;

export const Container = styled(GenericContainer)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  &.alugastrin3forte--20,
  &.alugastrin--250 {
    justify-content: flex-end;
  }
`;

export const Image = styled(SPImage)`
  max-width: 50%;

  &.alugastrin3forte--20 {
    width: 35%;
    margin-right: 5%;
  }

  &.alugastrin--250 {
    width: 7.4vw;
    margin-right: 10%;

    @media ${queries.xxs} {
      width: 33%;
    }
  }
`;

export const Wrapper = styled.div`
  width: 50%;
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.getColor('accent')};
  font-weight: 600;
  font-size: 46px;

  @media ${queries.xs} {
    font-size: 32px;
  }

  @media ${queries.xxs} {
    font-size: 28px;
  }
`;

export const Description = styled.p`
  font-weight: 600;
  font-size: 25px;
  line-height: 1.8;

  @media ${queries.m} {
    font-size: 20px;
  }

  @media ${queries.xs} {
    font-size: 16px;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 1.15vw;
  margin-top: 2.552vw;

  @media ${queries.xxs} {
    flex-wrap: wrap;
    gap: 1em;
  }
`;

const linkStyle = css`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 10.21vw;
  height: 3.23vw;
  border-radius: ${({ theme }) => theme.getRadius('tiny')};
  padding: 0.2em 1.042vw;
  background: ${({ theme }) => theme.getGradient('radial')};
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  transition: ${({ theme }) => theme.getTransitions(['filter'])};

  :hover {
    filter: brightness(1.2);
  }

  @media ${queries.huge} {
    width: 12vw;
  }

  @media ${queries.xxl} {
    font-size: 16px;

    > svg {
      height: 2em;
    }
  }

  @media ${queries.xl} {
    width: 13vw;
  }

  @media ${queries.l} {
    width: auto;
    height: auto;
    padding: 0.5em;
    font-size: 14px;
  }

  @media ${queries.m} {
    font-size: 12px;
  }

  @media ${queries.xxs} {
    width: 100%;
  }
`;

export const Link = styled.a`
  ${linkStyle}
`;

export const ScrollToBuyButton = styled.button`
  ${linkStyle}
  cursor: pointer;
`;

export const Scrollers = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2vw;
  width: 37.34375vw;
  margin: auto;

  @media ${queries.xs} {
    width: 100%;
  }

  @media ${queries.xxs} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
    margin-top: 1em;
  }
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
