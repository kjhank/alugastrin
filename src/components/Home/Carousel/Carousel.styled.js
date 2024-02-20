import styled from 'styled-components';

import { SPImage } from '@components';
import { queries } from '@utils';

export const SlidesList = styled.ul`
  position: relative;
  height: 35.677083vw;
  margin-bottom: 1.35vw;

  @media ${queries.xxsplus} {
    height: 85vw;
    margin-bottom: 2em;
    padding-top: 2em;
  }
`;

export const TextPart = styled.div`
  position: relative;
  width: 50%;
  padding-right: ${({ padded }) => padded === 'left' && '2vw'};
  padding-left: ${({ padded }) => padded === 'right' && '8vw'};

  @media ${queries.xxsplus} {
    width: 60%;
  }
`;

export const SingleSlideItem = styled.li`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  align-items: center;
  text-align: ${({ direction }) => (direction === 'row' ? 'left' : 'right')};
  transition: ${({ theme }) => theme.getTransitions(['opacity'])};
  pointer-events: ${({ isActive }) => (isActive ? 'all' : 'none')};

  &.esomeprazol {
    h2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
      line-height: 1;
      text-transform: uppercase;

      span {
        padding: 0;
        font-size: 70%;
      }
    }

    ${TextPart} {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1em;
    }
  }
`;

export const SlidesNavigation = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;

  @media ${queries.xs} {
    right: 0;
    left: unset;
  }
`;

export const NavigationButton = styled.button.attrs({ type: 'button' })`
  padding: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.getColor('accent')};
  cursor: pointer;

  > svg {
    fill: currentColor;
    transition: ${({ theme }) => theme.getTransitions([
    'transform',
    'filter',
  ])};
    transform: rotate(${({ $rotation }) => $rotation});
  }

  :hover {
    > svg {
      filter: brightness(1.2);
      transform: translateX(${({ $rotation }) => ($rotation === '90deg' ? '20%' : '-20%')}) rotate(${({ $rotation }) => $rotation});
    }
  }

  @media ${queries.xs} {
    width: 3em;
    height: 3em;

    > svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export const ImagePart = styled.div`
  position: relative;
  width: 50%;
  padding-left: ${({ isOffset }) => isOffset && '2vw'};

  @media ${queries.s} {
    width: 40%;
  }
`;

export const Heading = styled.h2`
  padding-left: ${({ padded }) => padded === 'right' && '25%'};
  color: ${({ theme }) => theme.getColor('accent')};
  font-weight: bold;
  font-size: clamp(40px, 2.864583vw, 55px);
  line-height: 1.0625;

  @media ${queries.xxsplus} {
    padding-left: 0;
  }
`;

export const SmallText = styled.span`
  display: inline-block;
  padding: ${({ isReversed }) => (isReversed ? '1.5vw 0 2vw 0' : '1.5vw 20% 2vw 0')};
  color: ${({ theme }) => theme.getColor('main')};
  font-size: 24px;

  @media ${queries.xhuge} {
    font-size: 20px;
  }

  @media ${queries.huge} {
    font-size: 16px;
  }

  @media ${queries.m} {
    font-size: 28px;
  }

  @media ${queries.s} {
    font-size: 24px;
  }

  @media ${queries.xxsplus} {
    font-size: 18px;
  }

  sup {
    position: relative;
    bottom: 1em;
    font-size: 40%;
    vertical-align: unset;
  }
`;

export const ProductImage = styled(SPImage)``;

export const BackgroundImage = styled(SPImage)`
  position: absolute;
  top: 50%;
  right: ${({ alignment }) => alignment === 'right' && 0};
  left: ${({ alignment }) => alignment === 'left' && 0};
  z-index: 0;
  transform: translateY(-50%);

  &.esomeprazol {
    right: unset;
    left: auto;
    width: 60%;
  }
`;
