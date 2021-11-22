import styled from 'styled-components';

import { SPImage } from '@components';

import { queries } from '@utils';

export const Wrapper = styled.div`
  position: relative;
  width: 50%;
  margin: auto;
  padding: 10.729167vw 0;

  @media ${queries.xs} {
    width: 100%;
  }
`;

export const Message = styled.p`
  font-weight: 600;
  font-size: 51px;
  text-align: center;
  text-transform: uppercase;

  @media ${queries.xs} {
    font-size: 44px;
  }
`;

export const Background = styled(SPImage)`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  width: 21.875vw;
  transform: translate(-50%, -50%);

  @media ${queries.xs} {
    width: 50vw;
  }
`;
