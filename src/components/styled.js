import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import { queries } from '@utils';

export const Main = styled.main`
  position: relative;
  margin-top: ${({
    hasNoMargin, headerHeight,
  }) => !hasNoMargin && `${headerHeight}px`};

  ::before {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    width: calc(100% - 21vw + 5.46875vw);
    height: ${({ headerHeight }) => `${headerHeight}px`};
    border-radius: ${({ theme }) => `0 0 ${theme.getRadius()} 0`};
    background-image: ${({ theme }) => theme.getGradient()};
    mix-blend-mode: multiply;

    @media ${queries.xl} {
      width: calc(100% - 12.2vw);
    }

    @media ${queries.l} {
      width: calc(100% - 5vw);
    }

    @media ${queries.s} {
      width: calc(100% - 1em);
    }
  }
`;

export const buttonLinkStyles = css`
  display: inline-flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-direction: ${({ $isFlipped }) => ($isFlipped ? 'row-reverse' : 'row')};
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.getColor('main')};
  border-radius: ${({ theme }) => theme.getRadius()};
  padding: 0.83vw 1.6vw;
  transition: ${({ theme }) => theme.getTransitions([
    'color',
    'border-color',
  ])};

  > svg {
    margin-right: ${({ $isFlipped }) => $isFlipped && '1.05vw'};
    margin-left: ${({ $isFlipped }) => !$isFlipped && '1.05vw'};
    fill: currentColor;
    transition: ${({ theme }) => theme.getTransitions(['transform'])};
    transform: ${({ $isFlipped }) => $isFlipped && 'rotateY(180deg)'};
  }

  :hover {
    border-color: ${({ theme }) => theme.getColor('accent')};
    color: ${({ theme }) => theme.getColor('accent')};

    > svg {
      transform: ${({ $isFlipped }) => ($isFlipped ? 'translateX(-20%) rotateY(180deg)' : 'translateX(20%);')};
    }
  }

  @media ${queries.xxsplus} {
    padding: 0.5em 1em;
    font-size: 14px;

    > svg {
      height: 1em;
    }
  }
`;

export const StyledButtonLink = styled(Link)`
  ${buttonLinkStyles}
`;

export const PageHeading = styled.h1`
  position: relative;
  font-weight: 600;
  font-size: 66px;

  ::after {
    content: '';
    position: absolute;
    bottom: -1.2vw;
    left: 0;
    width: 10.73vw;
    height: 2px;
    background-color: ${({ theme }) => theme.getColor('main')};
  }

  @media ${queries.xxsplusplus} {
    font-size: 40px;

    ::after {
      width: 33%;
    }
  }

`;

export const LineHeading = styled.h2`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.getColor('accent')};
  font-weight: 600;
  font-size: 46px;

  ::before {
    content: '';
    width: 5.58vw;
    height: 2px;
    margin-right: 1.51vw;
    background-color: ${({ theme }) => theme.getColor('accent')};
  }

  @media ${queries.huge} {
    font-size: 42px;
  }

  @media ${queries.xxl} {
    font-size: 38px;
  }

  @media ${queries.xxsplus} {
    font-size: 32px;
  }
`;

export const InnerContainer = styled.div`
  width: 93.637145%;
  margin: auto;
  padding: 0 1.064%;
`;
