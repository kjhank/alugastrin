import styled, { keyframes } from 'styled-components';

import { SPImage } from '@components';

import { queries } from '@utils';

export const Wrapper = styled.section`
  margin-top: min(1.615vw, 31px);

  &.hero-wrapper-fibegastrin {
    margin-top: unset;
  }

  > div:not(.sibosgastrin, .fibegastrin, .max-protect) {
    padding: 0 6%;
  }

  > div.fibegastrin {
    video {
      margin-block-start: min(115px, 6vw);
    }
  }

  :first-of-type {
    background-image: ${({ theme }) => `linear-gradient(to bottom, ${theme.getColor('gradientGray')}, #fff)`};
    background-position: top;
    background-size: 100% min(38.90625vw, 747px);
    background-repeat: no-repeat;
  }
`;

export const Heading = styled.h2`
  padding: ${({ lessPadding }) => (lessPadding ? '1.615vw 1vw 0' : '1.615vw 1vw 5.5vw')};
  color: ${({ theme }) => theme.getColor('main')};
  font-weight: ${({ isBold }) => (isBold ? 600 : 400)};
  font-size: ${({ isLarger }) => (isLarger ? '52px' : '46px')};
  text-align: center;
  text-transform: uppercase;

  &.max-protect {
    padding: 65px 0;
    color: ${({ theme }) => theme.getColor('max')};
    font-weight: 700;

    @media ${queries.s} {
      padding-block: 24px;
    }
  }

  &.fibegastrin {
    position: relative;
    z-index: 1;
    padding: 65px 6%;
    color: ${({ theme }) => theme.getColor('fibe')};
    font-weight: 700;
    font-size: 64px;

    @media ${queries.xxl} {
      padding: 50px 0;
      font-size: 52px;
    }

    @media ${queries.xl} {
      font-size: 48px;
    }

    @media ${queries.m} {
      font-size: 36px;
    }
  }

  &.helicogastrin {
    padding-bottom: 1.510417vw;
  }

  > strong {
    color: ${({ theme }) => theme.getColor('accent')};
    font-weight: 600;
  }

  &.esomeprazol {
    &:not(.second-hero) {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 0;
      font-weight: 700;

      sup {
        position: relative;
        top: -0.4em;
        font-size: 30%;
      }
    }

    &.second-hero {
      font-weight: 700;
      line-height: 0.9;
      text-transform: none;

      sup {
        position: relative;
        top: -0.5em;
        font-size: 25%;
      }
    }

    strong {
      font-weight: 700;
      font-size: 1.52em;
    }
  }

  @media ${queries.huge} {
    padding: ${({ lessPadding }) => (lessPadding ? '1.615vw 1vw 0' : '1.615vw 1vw 6.5vw')};
    font-size: ${({ isLarger }) => (isLarger ? '48px' : '32px')};
  }

  @media ${queries.xxl} {
    font-size: ${({ isLarger }) => (isLarger ? '42px' : '28px')};
  }

  @media ${queries.l} {
    font-size: ${({ isLarger }) => (isLarger ? '38px' : '24px')};
  }

  @media ${queries.xs} {
    font-size: ${({ isLarger }) => (isLarger ? '28px' : '18px')};
  }

  @media ${queries.xxsplus} {
    font-size: ${({ isLarger }) => (isLarger ? '18px' : '12px')};

    &.alugastrin {
      margin: 2em 0;
    }
  }
`;

const flow = keyframes`
  0% {
    transform: translateX(100%) rotate(15deg);
  }

  25% {
    transform: translateX(-80vw) rotate(15deg);
  }

  to {
    transform: translateX(-80vw) rotate(15deg);
  }
`;

const flowLarge = keyframes`
  0% {
    transform: translateX(100%) rotate(15deg);
  }

  25% {
    transform: translateX(-50vw) rotate(15deg);
  }

  to {
    transform: translateX(-50vw) rotate(15deg);
  }
`;

export const BackgroundImage = styled(SPImage)`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);

  &.background--alugastrin3forte {
    aspect-ratio: 1/1;
    width: auto;
    height: 100%;
  }

  > img {
    width: auto;
    height: 100%;
  }
`;

export const Image = styled(SPImage)`
  position: relative;
  z-index: 2;
  display: block;

  > img {
    width: 100%;
    margin: auto;
  }

  &[class*="square"] {
    position: absolute;
    z-index: 0;
    opacity: 0.3;
    width: 80.9vw;
    pointer-events: none;
  }

  &.squares-first {
    left: 0;
    translate: -30vw -34vw 0;
  }

  &.squares-second {
    right: 0;
    bottom: 0;
    translate: 30vw 25.15625vw 0;
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
    position: relative;
    overflow: hidden;
    display: inline-block;
    width: min(21.614583vw, 415px);
    margin-bottom: 10%;
    margin-left: 19%;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 10%;
      height: 100%;
      background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.2) 10%,
        rgba(255, 255, 255, 0.6) 20%,
        rgba(255, 255, 255, 0.65) 50%,
        rgba(255, 255, 255, 0.6) 80%,
        rgba(255, 255, 255, 0.2) 90%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: rotate(15deg);
      animation: ${flowLarge} 6s cubic-bezier(0.83, 0, 0.17, 1) forwards infinite;

      @media ${queries.xxsplus} {
        animation: ${flow} 6s cubic-bezier(0.83, 0, 0.17, 1) forwards infinite;
      }
    }

    @media ${queries.xxsplus} {
      width: 40vw;
      margin-left: 14%;
    }
  }

  &.alugastrin.alugastrin--250.second--package {
    opacity: 0;
    display: inline-block;
    width: min(11.927083vw, 229px);
    margin-left: unset;
    transform: translateX(50vw);

    @media ${queries.xxsplus} {
      width: 25vw;
    }
  }

  &.alugastrin.alugastrin--20.second--static {
    position: relative;
    width: 37.239583vw;
    margin: 5% auto 25%;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 10%;
      height: 100%;
      background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.2) 10%,
        rgba(255, 255, 255, 0.6) 20%,
        rgba(255, 255, 255, 0.65) 50%,
        rgba(255, 255, 255, 0.6) 80%,
        rgba(255, 255, 255, 0.2) 90%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: rotate(15deg);
      animation: ${flowLarge} 6s cubic-bezier(0.83, 0, 0.17, 1) forwards infinite;

      @media ${queries.xxsplus} {
        animation: ${flow} 6s cubic-bezier(0.83, 0, 0.17, 1) forwards infinite;
      }
    }

    @media ${queries.xxsplus} {
      width: 50vw;
    }
  }

  &.alugastrin.alugastrin--20.second--package,
  &.alugastrin.alugastrin--40.second--package {
    position: absolute;
    top: 70%;
    right: 18%;
    opacity: 0;
    width: 26.041667vw;
    transform: translateX(55vw);

    @media ${queries.l} {
      top: 70%;
      width: 40vw;
    }
  }

  &.alugastrin.alugastrin--40.second--static {
    position: relative;
    width: 35.859375vw;
    margin: 5% auto 25%;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 10%;
      height: 100%;
      background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.2) 10%,
        rgba(255, 255, 255, 0.6) 20%,
        rgba(255, 255, 255, 0.65) 50%,
        rgba(255, 255, 255, 0.6) 80%,
        rgba(255, 255, 255, 0.2) 90%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: rotate(15deg);
      animation: ${flowLarge} 6s cubic-bezier(0.83, 0, 0.17, 1) forwards infinite;

      @media ${queries.xxsplus} {
        animation: ${flow} 6s cubic-bezier(0.83, 0, 0.17, 1) forwards infinite;
      }
    }

    @media ${queries.l} {
      width: 55vw;
      margin: 5% auto 15%;
    }
  }

  &.fibegastrin {
    z-index: 0;
    width: min(140vw, 2688px);
    height: auto;
    inset-inline-start: -93%;
    margin-block-start: -35%;

    @media ${queries.xl} {
      inset-inline-start: -70%;
    }

    @media ${queries.l} {
      margin-block-start: -28%;
      inset-inline-start: -52%;
    }

    @media ${queries.s} {
      inset-inline-start: -65%;
      width: 180vw;
    }
  }
`;

export const FramedText = styled.section`
  position: relative;
  width: 100%;
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

  @media ${queries.xxsplus} {
    margin: 2em 0;
    font-size: 14px;
  }

  > h3 {
    position: absolute;
    top: -0.75em;
    left: 50%;
    padding: 0 0.25em;
    background-color: #fff;
    color: ${({ theme }) => theme.getColor('accent')};
    font-weight: 600;
    transform: translateX(-50%);

    @media ${queries.s} {
      top: -0.6em;
    }
  }
`;

