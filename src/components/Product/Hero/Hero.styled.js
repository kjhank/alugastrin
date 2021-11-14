import styled from 'styled-components';

import { SPImage } from '@components';

export const Wrapper = styled.section`
  margin-top: 1.615vw;
  background-image: ${({ theme }) => `linear-gradient(to bottom, ${theme.getColor('gradientGray')}, #fff)`};

  > div {
    padding: 0 6%;
  }
`;

export const Heading = styled.h2`
  padding: 1.615vw 5vw 4.49vw;
  color: ${({ theme }) => theme.getColor('main')};
  font-weight: 600;
  font-size: 46px;
  text-align: center;
`;

export const Image = styled(SPImage)``;

