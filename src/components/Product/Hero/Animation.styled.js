import styled from 'styled-components';

import { queries } from '@utils';

export const AnimationContainer = styled.div`
  position: relative;
  pointer-events: none;

  &.alugastrin {
    margin-top: -31%;
  }

  &.alugastrin3forte {
    @media ${queries.xxs} {
      margin-bottom: 4em;
    }
  }
`;

export const Item = styled.div`
  position: absolute;

  > svg {
    max-width: 100%;
  }

  &.animated {
    &-alugastrin3forte {
      &--0,
      &--1,
      &--2 {
        #Line_11,
        #Line_12,
        #Path_1039 {
          display: none;
        }
      }
      &--0 {
        top: 0.911162%;
        left: 45%;

        @media ${queries.xxl} {
          top: -2%;
          left: 54%;

          @media ${queries.xs} {
            top: -5%;
            left: 58%;
          }

          @media ${queries.xxs} {
            top: -8%;
          }
        }

        &-line {
          top: 3.5%;
          left: 45%;

          @media ${queries.xs} {
            width: 30%;
          }
        }
      }

      &--1 {
        top: 60%;
        left: 60%;

        @media ${queries.xs} {
          top: 55%;
        }

        @media ${queries.xxs} {
          top: 48%;
        }

        &-line {
          top: 60%;
          left: 58%;

          @media ${queries.xs} {
            left: 50%;
            width: 25%;
          }
        }
      }

      &--2 {
        top: 39%;
        left: -4%;

        @media ${queries.xhuge} {
          left: -8%;
        }

        @media ${queries.huge} {
          left: -12%;
        }

        @media ${queries.xxl} {
          left: -16%;
        }

        @media ${queries.l} {
          left: -12%;
        }

        @media ${queries.m} {
          top: 36%;
          left: -8%;
          width: 60%;
        }

        @media ${queries.s} {
          left: -4%;
        }

        @media ${queries.xs} {
          top: 34%;
        }

        @media ${queries.xxs} {
          top: 28%;
        }

        &-line {
          top: 40%;
          left: 36%;

          @media ${queries.xs} {
            width: 30%;
          }
        }
      }
    }

    &-alugastrin {
      &--0 {
        top: 33%;
        left: 18%;

        @media ${queries.xxl} {
          top: 30%;
          left: 9%
        }

        @media ${queries.l} {
          top: 33%;
        }

        @media ${queries.m} {
          top: 31%;
        }

        @media ${queries.xs} {
          top: 28%;
          width: 30%;
        }

        &-line {
          top: 47%;
          left: 30%;

          @media ${queries.huge} {
            top: 49%;
            width: 23%;
          }

          @media ${queries.xxl} {
            top: 47%;
            left: 24%;
            width: 30%;
          }

          @media ${queries.xs} {
            left: 25%;
            width: 30%;
          }
        }
      }

      &--1 {
        top: 77%;
        left: 55%;

        @media ${queries.xs} {
          left: 60%;
          width: 40%;
        }

        &-line {
          top: 78%;
          left: 49%;

          @media ${queries.xxs} {
            width: 25%;
          }
        }
      }
    }
  }
`;
