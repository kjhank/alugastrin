import styled from 'styled-components';
import { Link } from 'gatsby';

import { SPImage } from '@components';
import { queries } from '@utils';

export const SingleDescription = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: ${({ variant }) => (variant === 'textRight' ? 'flex-end' : 'flex-start')};

  & + & {
    margin-top: 5.52vw;
  }

  > a {
    position: absolute;
    right: ${({ variant }) => (variant === 'textLeft' && '7.34375vw')};
    bottom: 3.28125vw;
    left: ${({ variant }) => (variant === 'textRight' && '7.34375vw')};

    @media ${queries.l} {
      bottom: 0;
    }

    @media ${queries.xxs} {
      position: static;
      order: 2;
      margin: 2em 0;
    }
  }
`;

export const Heading = styled.h2`
  font-weight: 700;
  font-size: 46px;
  line-height: 1.043478;

  @media ${queries.xhuge}   {
    font-size: 40px;
  }

  @media ${queries.huge}   {
    font-size: 36px;
  }

  @media ${queries.xxl} {
    font-size: 32px;
  }

  @media ${queries.xxs} {
    width: 100%;
    text-align: center;
  }
`;

export const ProductsLink = styled(Link)`
  position: absolute;
  top: 0;
  right: ${({ $isFlipped }) => !$isFlipped && '100%'};
  left: ${({ $isFlipped }) => $isFlipped && '100%'};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${({
    $isFlipped, theme,
  }) => ($isFlipped ? `0 ${theme.getRadius()} 0 0` : `${theme.getRadius()} 0 0 0}`)};
  padding: 1.8vw 1.05vw;
  background-color: ${({ theme }) => theme.getColor('accent')};
  mix-blend-mode: multiply;
  color: #fff;
  transition: ${({ theme }) => theme.getTransitions(['filter'])};

  > svg {
    margin-top: 0.25vw;
    transition: ${({ theme }) => theme.getTransitions(['transform'])};
    transform: ${({ $isFlipped }) => $isFlipped && 'rotateY(180deg)'};
    fill: currentColor;
  }

  :hover {
    filter: brightness(1.2);
    > svg {
      transform: ${({ $isFlipped }) => ($isFlipped ? 'translateX(-20%) rotateY(180deg)' : 'translateX(20%)')};
    }
  }

  @media ${queries.huge} {
    font-size: 14px;
  }

  @media ${queries.s} {
    padding: 1.5em;
  }

  @media ${queries.xxs} {
    top: 100%;
    right: ${({ $isFlipped }) => !$isFlipped && '0'};
    left: ${({ $isFlipped }) => $isFlipped && '0'};
    border-radius: ${({
    $isFlipped, theme,
  }) => ($isFlipped ? `0 0 0 ${theme.getRadius()}` : `0 0 0 ${theme.getRadius()}`)};

    > svg {
      margin-top: 1em;
      transform: rotateZ(-90deg);
    }

    :hover {
      > svg {
        transform: rotateZ(-90deg) translateY(-20%);
      }
    }
  }
`;

export const ProductsImage = styled(SPImage)`
  width: 100%;

  > img {
    width: 100%;
  }
`;

export const BackgroundImage = styled(SPImage)`
  position: absolute;
  top: 0;
  right: ${({ variant }) => (variant === 'textLeft' && 0)};
  left: ${({ variant }) => (variant === 'textRight' && 0)};
  width: 50%;

  @media ${queries.s} {
    top: 20%;
  }

  @media ${queries.xxs} {
    position: relative;
    top: unset;
    right: unset;
    left: unset;
    order: 4;
    width: 100%;
  }
`;

export const ProductsLinkWrapper = styled.div`
  position: relative;
  width: 55%;

  @media ${queries.xxs} {
    z-index: 1;
    order: 3;
    width: 100%;
    margin-bottom: 2em;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: ${({ variant }) => (variant === 'textLeft' ? 'flex-start' : 'flex-end')};
  width: 60%;
  padding: 0 3vw;

  @media ${queries.xxs} {
    width: 100%;
    margin: auto;
    text-align: center;
  }
`;

export const TextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ variant }) => (variant === 'textLeft' ? 'flex-start' : 'flex-end')};
  align-items: flex-start;
  width: 100%;
  padding-top: 2.4vw;

  @media ${queries.xxs} {
    flex-direction: column;
    align-items: ${({ variant }) => (variant === 'textLeft' ? 'flex-start' : 'flex-end')};
    order: 1;
  }
`;

export const Intro = styled.p`
  order: ${({ variant }) => variant === 'textLeft' && -1};
  width: 40%;
  margin-bottom: 1.3vw;
  color: ${({ theme }) => theme.getColor('accent')};
  font-weight: bold;
  font-size: 24px;
  line-height: 1.208333;

  @media ${queries.xhuge} {
    font-size: 22px;
  }

  @media ${queries.huge} {
    font-size: 20px;
  }

  @media ${queries.xxs} {
    order: unset;
    width: 100%;
    margin: 1em 0;
    text-align: center;
  }
`;

export const Description = styled.p`
  width: 40%;
  margin-bottom: 5.21vw;
  font-size: 16px;
  line-height: 1.5;

  @media ${queries.xhuge} {
    font-size: 14px;
  }

  @media ${queries.huge} {
    margin-bottom: 3vw;
    font-size: 12px;
  }

  @media ${queries.xxs} {
    width: 100%;
    margin-bottom: unset;
    font-size: 16px;
  }
`;
