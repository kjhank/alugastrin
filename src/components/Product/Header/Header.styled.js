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

  @media ${queries.xxsplus} {
    margin-bottom: 2em;
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

  @media ${queries.xxsplus} {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const Image = styled(SPImage)`
  max-width: 50%;

  &.alugastrin3forte--20 {
    width: 35%;
    margin-right: 5%;

    @media ${queries.xxsplus} {
      width: 80%;
      max-width: unset;
      margin: 0 auto;
    }
  }

  &.alugastrin--250 {
    width: 7.4vw;
    margin-right: 10%;

    @media ${queries.xxsplus} {
      width: 25%;
      margin: auto;
    }
  }

  @media ${queries.xxsplus} {
    width: 80%;
    max-width: unset;
    margin: 0 auto;
  }
`;

export const Wrapper = styled.div`
  width: 50%;

  @media ${queries.xxsplus} {
    width: 80%;
  }
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.getColor('accent')};
  font-weight: 600;
  font-size: 46px;

  @media ${queries.xs} {
    font-size: 32px;
  }

  @media ${queries.xxsplus} {
    font-size: 40px;
    text-align: center;
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

  @media ${queries.xxsplus} {
    font-size: 24px;
    text-align: center;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 1.15vw;
  margin-top: 2.552vw;

  @media ${queries.xxsplus} {
    justify-content: space-between;
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

  @media ${queries.xxsplus} {
    width: calc(50% - 0.5em);
    font-size: 20px;
    text-align: center;
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

  @media ${queries.xxsplus} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
    width: 80%;
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

  @media ${queries.xxsplus} {
    font-size: 20px;
  }
`;
