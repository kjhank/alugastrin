import styled from 'styled-components';

import { mediaQueries } from '@utils';

export const Container = styled.div`
  position: relative;
  width: 59.322917vw;
  max-width: 1139px;
  height: 100%;
  margin: 0 auto;

  @media ${mediaQueries.mediumLarge} {
    max-width: 70vw;
  }

  @media ${mediaQueries.medium} {
    max-width: 85vw;
  }

  @media ${mediaQueries.xsmall} {
    max-width: 95vw;
  }
`;
