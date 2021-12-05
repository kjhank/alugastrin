import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  margin-top: 4.73vw;
`;

export const PlayButton = styled.button.attrs({ type: 'button' })`
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  background-color: transparent;
  mix-blend-mode: multiply;
  transition: ${({ theme }) => theme.getTransitions([
    'opacity',
    'filter',
  ])};
  transform: translate(-50%, -50%);
  cursor: pointer;

  :hover {
    filter: brightness(1.2);
  }
`;

export const Player = styled.video.attrs({ controls: false })`
  width: 100%;
  cursor: pointer;

  :hover {
    + ${PlayButton} {
      filter: brightness(1.2);
    }
  }
`;
