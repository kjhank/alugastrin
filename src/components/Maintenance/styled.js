import styled from 'styled-components';

import { SPImage } from '@components';

export const Heading = styled.h1`
  position: relative;
  z-index: 1;
  margin-bottom: 2.96875vw;
  padding-top: 2.239583vw;
  font-weight: 600;
  font-size: 66px;

  ::after {
    content: '';
    position: absolute;
    bottom: -23px;
    left: 0;
    width: 10.73vw;
    height: 2px;
    background-color: ${({ theme }) => theme.getColor('main')};
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 50%;
  margin: auto;
  padding: 10.729167vw 0;
`;

export const Message = styled.p`
  font-weight: 600;
  font-size: 51px;
  text-align: center;
  text-transform: uppercase;
`;

export const Background = styled(SPImage)`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  width: 21.875vw;
  transform: translate(-50%, -50%);
`;
