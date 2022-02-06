import styled from 'styled-components';

import { queries } from '@utils';

export const AnimationContainer = styled.div`
  position: relative;
  height: min(75vh, 56.25vw);

  @media ${queries.s} {
    width: 100%;
    height: unset;
  }

  &.alugastrin {
    top: -20vh;
    margin-bottom: -20vh;

    @media ${queries.xs} {
      top: -10vh;
      margin-bottom: -10vh;
    }
  }

  &.alugastrin3forte {
    top: -10vh;

    @media ${queries.xs} {
      top: 0;
    }
  }

  .image {
    width: auto;
    height: 100%;

    > img {
      width: auto;
      height: 100%;
    }

    &--alugastrin3forte {
      height: 80%;
      margin: auto;
    }

    &--alugastrin {
      > img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .parent {
    position: absolute;
    z-index: 3;
    overflow: visible;
    backface-visibility: hidden;
    height: auto;

    .animationTarget {
      transform: scale(1) translateZ(1px) rotate(0.02deg);
      transform-origin: center;
      transform-style: preserve-3d;
      transform-box: fill-box;
      will-change: transform;
    }

    &--alugastrin {
      inset: 0;
      top: 33%;
      left: 50%;
      width: auto;
      height: 60%;
      transform: translateX(-50%);
    }

    &--alugastrin3forte {
      inset: 0;
      top: 2%;
      left: 8%;
      width: auto;
      height: 90%;

      @media ${queries.s} {
        top: 20%;
        left: 10%;
        width: 100%;
        height: auto;
      }
    }
  }
`;
