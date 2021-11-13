import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

import { Container as GenericContainer } from '@components';

export const Container = styled(GenericContainer)`
  display: grid;
  place-items: center;
  margin-top: 4.479167vw;
`;

export const StyledPagination = styled(ReactPaginate)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: ${({ theme }) => theme.getRadius()};
  padding: 0.26vw 1.07vw;
  background-color: ${({ theme }) => theme.getColor('background')};

  > li {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.5em;

    &.next {
      margin-left: 1em;
    }

    &.previous {
      margin-right: 1em;
    }
  }

  .pagination__link {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.getColor('main')};
    font-size: 16px;
    line-height: 1.5;
    transition: ${({ theme }) => theme.getTransitions(['color'])};
    cursor: pointer;

    > svg {
      width: 0.75em;
      fill: currentColor;
    }

    &--previous {
      > svg {
        transform: rotateY(180deg);
      }
    }

    &--active {
      text-decoration: underline;
    }

    :hover {
      color: ${({ theme }) => theme.getColor('accent')};
    }
  }
`;
