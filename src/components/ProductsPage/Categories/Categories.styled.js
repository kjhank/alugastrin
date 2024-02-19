import styled from 'styled-components';
import { Container } from '@components';
import { queries } from '@utils';

export const CategoryContainer = styled(Container)`
  white-space: pre-line;

  strong {
    font-weight: bold;
  }
`;

export const CategoryDescription = styled.p`
  margin-block: 3em 1em;
  font-size: 24px;
  line-height: 1.25;

  @media ${queries.xxl} {
    font-size: 22px;
  }

  @media ${queries.xxsplus} {
    font-size: 16px;
  }
`;

export const DecorationContainer = styled(Container)`
  position: relative;
  isolation: isolate;

  &.container-products-otc {
    margin-bottom: 10vw;
  }

  & > .decoration {
    position: relative;
    z-index: -1;
    pointer-events: none;
    display: block;
  }

  & > .decoration-products-otc {
    position: absolute;
    width: 54.8vw;
    margin-block-start: -35vw;
    inset-inline-end: -15%;
  }

  & > .decoration-med {
    width: 50.8vw;
  }
`;
