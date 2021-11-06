import styled from 'styled-components';

import { SPImage } from '@components';

export const SlidesList = styled.ul`
  position: relative;
  height: 35.677083vw;
  margin-bottom: 1.35vw;
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
`;

export const SlidesNavigation = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
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
`;

export const TextPart = styled.div`
  width: 50%;
  padding-right: ${({ padded }) => padded === 'left' && '2vw'};
  padding-left: ${({ padded }) => padded === 'right' && '8vw'};
`;

export const ImagePart = styled.div`
  width: 50%;
  padding-left: ${({ isOffset }) => isOffset && '2vw'};
`;

export const Heading = styled.h2`
  color: ${({ theme }) => theme.getColor('accent')};
  font-weight: bold;
  font-size: 80px;
  line-height: 85px;
`;

export const SmallText = styled.span`
  display: inline-block;
  padding: ${({ isReversed }) => (isReversed ? '1.5vw 0 2vw 10%' : '1.5vw 40% 2vw 0')};
  color: ${({ theme }) => theme.getColor('main')};
  font-size: 45px;
  line-height: 45px;
`;

export const ProductImage = styled(SPImage)``;

export const BackgroundImage = styled(SPImage)`
  position: absolute;
  top: 50%;
  right: ${({ alignment }) => alignment === 'right' && 0};
  left: ${({ alignment }) => alignment === 'left' && 0};
  z-index: -1;
  transform: translateY(-50%);
`;
