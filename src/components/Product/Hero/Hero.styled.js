import styled from 'styled-components';

import { SPImage } from '@components';

export const Wrapper = styled.section`
  margin-top: 1.615vw;
  > div {
    padding: 0 6%;
  }
`;

export const Heading = styled.h2`
  padding: 1.615vw 5vw 4.49vw;
  color: ${({ theme }) => theme.getColor('main')};
  font-weight: ${({ isBold }) => (isBold ? 600 : 400)};
  font-size: ${({ isLarger }) => (isLarger ? '64px' : '46px')};
  text-align: center;
  text-transform: uppercase;

  > strong {
    color: ${({ theme }) => theme.getColor('accent')};
    font-weight: 600;
  }
`;

export const Image = styled(SPImage)``;

