import styled from 'styled-components';

import { SPImage } from '@components';

import { queries } from '@utils';

export const Wrapper = styled.section`
  margin-top: 1.615vw;

  > div:not(.sibosgastrin) {
    padding: 0 6%;
  }

  :first-of-type {
    background-image: ${({ theme }) => `linear-gradient(to bottom, ${theme.getColor('gradientGray')}, #fff)`};
    background-position: top;
    background-size: 100% 38.90625vw;
    background-repeat: no-repeat;
  }
`;

export const Heading = styled.h2`
  padding: ${({ lessPadding }) => (lessPadding ? '1.615vw 5vw 0' : '1.615vw 5vw 4.5vw')};
  color: ${({ theme }) => theme.getColor('main')};
  font-weight: ${({ isBold }) => (isBold ? 600 : 400)};
  font-size: ${({ isLarger }) => (isLarger ? '64px' : '46px')};
  text-align: center;
  text-transform: uppercase;

  &.sibosgastrin {
    font-size: 46px;
  }

  &.helicogastrin {
    padding-bottom: 1.510417vw;
  }

  > strong {
    color: ${({ theme }) => theme.getColor('accent')};
    font-weight: 600;
  }

  @media ${queries.huge} {
    padding: ${({ lessPadding }) => (lessPadding ? '1.615vw 2vw 0' : '1.615vw 2vw 4.5vw')};
    font-size: ${({ isLarger }) => (isLarger ? '58px' : '42px')};
  }

  @media ${queries.xxl} {
    font-size: ${({ isLarger }) => (isLarger ? '52px' : '38px')};
  }

  @media ${queries.l} {
    font-size: ${({ isLarger }) => (isLarger ? '48px' : '34px')};
  }

  @media ${queries.xs} {
    font-size: ${({ isLarger }) => (isLarger ? '38px' : '28px')};
  }

  @media ${queries.xxs} {
    font-size: ${({ isLarger }) => (isLarger ? '32px' : '24px')};
  }
`;

export const Image = styled(SPImage)`
  display: block;

  > img {
    width: 100%;
    margin: auto;
  }

  &.alugastrin {
    width: 113%;
    margin-left: -6.5%;

    > img {
      max-width: unset;
    }

    @media ${queries.xxl} {
      width: 135%;
      margin-left: -17.5%;
    }
  }

  &.alugastrin.alugastrin--250.second--static {
    display: inline-block;
    width: 21.614583vw;
    margin-bottom: 10%;
    margin-left: 19%;

    @media ${queries.xxs} {
      width: 40vw;
      margin-left: 14%;
    }
  }

  &.alugastrin.alugastrin--250.second--package {
    opacity: 0;
    display: inline-block;
    width: 11.927083vw;
    margin-left: unset;
    transform: translateX(50vw);

    @media ${queries.xxs} {
      width: 25vw;
    }
  }

  &.alugastrin.alugastrin--20.second--static {
    width: 37.239583vw;
    margin: 5% auto 25%;
  }

  &.alugastrin.alugastrin--20.second--package,
  &.alugastrin.alugastrin--40.second--package {
    position: absolute;
    right: 18%;
    bottom: -40%;
    opacity: 0;
    width: 26.041667vw;
    transform: translateX(55vw);

    @media ${queries.l} {
      bottom: -30%;
      width: 40vw;
    }
  }

  &.alugastrin.alugastrin--40.second--static {
    width: 35.859375vw;
    margin: 5% auto 25%;

    @media ${queries.l} {
      width: 55vw;
      margin: 5% auto 15%;
    }
  }
`;

export const FramedText = styled.section`
  position: relative;
  width: 46.5625vw;
  margin: auto;
  border: 4px solid ${({ theme }) => theme.getColor('main')};
  border-radius: ${({ theme }) => theme.getRadius('smaller')};
  padding: 1.927083vw 2.239583vw;
  font-size: 24px;
  line-height: 1.25;
  text-align: center;

  @media ${queries.huge} {
    font-size: 22px;
  }

  @media ${queries.xxl} {
    width: 55vw;
    font-size: 20px;
  }

  @media ${queries.m} {
    width: 100%;
  }

  @media ${queries.s} {
    font-size: 18px;
  }

  @media ${queries.xs} {
    font-size: 16px;
  }

  @media ${queries.xxs} {
    font-size: 12px;
  }

  > h3 {
    position: absolute;
    top: -0.75em;
    left: 50%;
    padding: 0 1em;
    background-color: #fff;
    color: ${({ theme }) => theme.getColor('accent')};
    font-weight: 600;
    transform: translateX(-50%);

    @media ${queries.s} {
      top: -0.6em;
    }
  }
`;

