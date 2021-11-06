import styled from 'styled-components';
import { Link } from 'gatsby';

import { SPImage } from '@components';

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
  }
`;

export const Heading = styled.h2`
  font-weight: 700;
  font-size: 46px;
  line-height: 48px;
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
`;

export const ProductsLinkWrapper = styled.div`
  position: relative;
  width: 55%;
`;

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: ${({ variant }) => (variant === 'textLeft' ? 'flex-start' : 'flex-end')};
  width: 60%;
  padding: 0 3vw;
`;

export const TextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ variant }) => (variant === 'textLeft' ? 'flex-start' : 'flex-end')};
  align-items: flex-start;
  width: 100%;
  padding-top: 2.4vw;
`;

export const Intro = styled.p`
  order: ${({ variant }) => variant === 'textLeft' && -1};
  width: 40%;
  margin-bottom: 1.3vw;
  color: ${({ theme }) => theme.getColor('accent')};
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
`;

export const Description = styled.p`
  width: 40%;
  margin-bottom: 5.21vw;
  font-size: 16px;
  line-height: 24px;
`;
