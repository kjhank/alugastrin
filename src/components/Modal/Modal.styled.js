import styled from 'styled-components';

import { queries } from '@utils/rwd';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 46;
  overflow: scroll;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: ${({ alignment }) => (alignment === 'top' ? 'flex-start' : 'flex-end')};
  min-height: 100vh;
  padding: 10vh 0;
  background-color: ${({ isBlurred }) => (isBlurred ? 'rgb(255 255 255 / 0.98)' : 'transparent')};

  @supports (backdrop-filter: blur(2rem)) {
    background-color: ${({ isBlurred }) => (isBlurred ? 'rgb(255 255 255 / 0.25)' : 'transparent')};
    backdrop-filter: ${({ isBlurred }) => (isBlurred ? 'blur(2rem)' : 'none')};
  }
`;

export const Wrapper = styled.aside`
  filter: drop-shadow(10px 0px 10px rgb(0 0 0 / 0.29));
  width: 70vw;
  border-radius: ${({ theme }) => theme.getRadius()};
  padding: 2.5%;
  background-color: #fff;
  transform: translateY(-100%);

  @media ${queries.s} {
    width: 90vw;
  }

  @media ${queries.xs} {
    border-radius: ${({ theme }) => theme.getRadius('tiny')};
    padding: 5%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 2.5%;
  right: 2.5%;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  border: 2px solid ${({ theme }) => theme.getColor('accent')};
  border-radius: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.getColor('accent')};
  font-size: min(6px, 10px);
  text-transform: uppercase;
  transition: ${({ theme }) => theme.getTransitions([
    'background-color',
    'color',
  ])};
  cursor: pointer;

  > svg {
    width: 40%;
    height: auto;
    margin-bottom: 10%;
    fill: currentColor;
  }

  :hover {
    background-color: ${({ theme }) => theme.getColor('accent')};
    color: #fff;
  }

  /* @media ${queries.s} {
    top: ${({ theme }) => theme.getMin(50)};
    right: ${({ theme }) => theme.getMin(50)};
    width: ${({ theme }) => theme.getMin(100)};
  } */

  @media ${queries.xs} {
    width: max(10vw, 40px);
  }
`;
