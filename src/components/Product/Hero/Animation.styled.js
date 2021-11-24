import styled from 'styled-components';

import { queries } from '@utils';

export const AnimationContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  pointer-events: none;

  &.alugastrin {
    margin-top: -31%;
  }

  &.alugastrin3forte {
    margin: 10% 0;

    @media ${queries.huge} {
      margin: 10% 0 15%;
    }
  }

  .image {
    position: relative;

    &--alugastrin3forte {
      top: -10%;
      left: -10%;
      width: 65%;
    }

    &--alugastrin {
      width: 120%;
    }
  }

  .parent {
    position: absolute;
    z-index: 3;
    overflow: visible;
    height: auto;
    backface-visibility: hidden;

    .animationTarget {
      transform-origin: center;
      transform: scale(1) translateZ(1px) rotate(0.02deg);
      transform-style: preserve-3d;
      transform-box: fill-box;
      will-change: transform;
    }

    &--alugastrin {
      top: 34%;
      left: 15%;
      width: 72%;
    }

    &--alugastrin3forte {
      top: -10%;
      left: -10%;
      width: 110%;

      @media ${queries.xxsplus} {
        top: -5%;
        left: -5%;
        width: 100%;
      }
    }
  }
`;
