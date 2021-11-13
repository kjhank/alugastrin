import styled from 'styled-components';
import { Link } from 'gatsby';

export const Main = styled.main`
  position: relative;
  margin-top: ${({ hasNoMargin }) => !hasNoMargin && '95px'};

  ::before {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    width: calc(100% - 21vw + 5.46875vw);
    height: 95px;
    border-radius: ${({ theme }) => `0 0 ${theme.getRadius()} 0`};
    background-image: ${({ theme }) => theme.getGradient()};
    mix-blend-mode: multiply;
  }
`;

export const StyledButtonLink = styled(Link)`
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
    fill: ${({ theme }) => theme.getColor('accent')};
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
`;
