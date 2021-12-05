/* stylelint-disable no-descending-specificity */
import styled from 'styled-components';
import { SPImage } from '@components';
import { queries } from '@utils';
import { buttonLinkStyles } from '@components/styled';

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

export const MoreText = styled.p`
  ${buttonLinkStyles};
`;

export const SingleSlideItem = styled.li`
  > a {
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
  }

  :hover {
    ${MoreText} {
      border-color: ${({ theme }) => theme.getColor('accent')};
      color: ${({ theme }) => theme.getColor('accent')};

      > svg {
        transform: translateX(20%);
      }
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

export const TextPart = styled.div`
  width: 50%;
  padding-right: ${({ padded }) => padded === 'left' && '2vw'};
  padding-left: ${({ padded }) => padded === 'right' && '8vw'};

  @media ${queries.xxsplus} {
    width: 60%;
  }
`;

export const ImagePart = styled.div`
  width: 50%;
  padding-left: ${({ isOffset }) => isOffset && '2vw'};

  @media ${queries.s} {
    width: 40%;
  }
`;

export const Heading = styled.h2`
  color: ${({ theme }) => theme.getColor('accent')};
  font-weight: bold;
  font-size: 80px;
  line-height: 1.0625;

  @media ${queries.xhuge} {
    font-size: 72px;
  }

  @media ${queries.huge} {
    font-size: 68px;
  }

  @media ${queries.xxl} {
    font-size: 64px;
  }

  @media ${queries.m} {
    font-size: 58px;
  }

  @media ${queries.s} {
    font-size: 52px;
  }

  @media ${queries.xxsplus} {
    font-size: 36px;
  }
`;

export const SmallText = styled.span`
  display: inline-block;
  padding: ${({ isReversed }) => (isReversed ? '1.5vw 0 2vw 10%' : '1.5vw 40% 2vw 0')};
  color: ${({ theme }) => theme.getColor('main')};
  font-size: 45px;

  @media ${queries.xhuge} {
    font-size: 40px;
  }

  @media ${queries.huge} {
    font-size: 36px;
  }

  @media ${queries.xxl} {
    font-size: 32px;
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
