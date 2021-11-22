import styled from 'styled-components';

import { queries } from '@utils';

export const Container = styled.div`
  position: relative;
  width: 60.572917vw;
  max-width: 1163px;
  height: 100%;
  margin: 0 auto;

  @media ${queries.xl} {
    width: 70vw;
  }

  @media ${queries.l} {
    width: 85vw;
  }

  @media ${queries.s} {
    width: 95vw;
  }
`;
