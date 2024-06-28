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
    margin-bottom: 15vw;
  }

  & > .decoration {
    position: relative;
    z-index: -1;
    display: block;
    pointer-events: none;
  }

  & > .decoration-products-otc {
    position: absolute;
    width: 54.8vw;
    inset-inline-end: -18%;
    margin-block-start: -36vw;

    @media ${queries.l} {
      margin-block-start: -35vw;
      inset-inline-end: -10%;
    }

    @media ${queries.l} {
      margin-block-start: -40vw;
      inset-inline-end: 0;
      width: 60vw;
    }

    @media ${queries.xs} {
      position: static;
      margin-block-start: unset;
      margin-inline: auto;
      width: 80vw;
    }
  }

  & > .decoration-med {
    width: 50.8vw;

    @media ${queries.s} {
      margin-inline: auto;
      width: 80vw;
    }
  }
`;
