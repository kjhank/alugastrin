import styled from 'styled-components';

import { SPImage } from '@components';

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
  padding: 1.615vw 5vw 4.49vw;
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
`;

export const Image = styled(SPImage)`
  > img {
    margin: auto;
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

  > h3 {
    position: absolute;
    top: -0.75em;
    left: 50%;
    padding: 0 1em;
    background-color: #fff;
    color: ${({ theme }) => theme.getColor('accent')};
    font-weight: 600;
    transform: translateX(-50%);
  }
`;

