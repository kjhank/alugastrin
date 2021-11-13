import styled, { css } from 'styled-components';

import { SPImage } from '@components';

export const StyledHeader = styled.header`
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 40.416667vw;
  }
`;

export const Heading = styled.h1`
  position: relative;
  z-index: 1;
  margin-bottom: 2.96875vw;
  padding-top: 12.292vw;
  font-weight: 600;
  font-size: 66px;

  ::after {
    content: '';
    position: absolute;
    bottom: -23px;
    left: 0;
    width: 10.73vw;
    height: 2px;
    background-color: ${({ theme }) => theme.getColor('main')};
  }
`;

export const Intro = styled.p`
  position: relative;
  z-index: 1;
  padding-right: 52%;
  font-size: 24px;
`;

export const Background = styled(SPImage)`
  position: absolute;
  top: 0;
  right: -13.021vw;
  height: 100%;

  > img {
    width: auto;
    height: 100%;
  }
`;

export const FiltersSearchWrapper = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
  width: 87.274%;
  margin: auto 0 1.51vw;
  padding: 1.146vw 3.542vw;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    border-radius: 0 0 0 ${({ theme }) => theme.getRadius()};
    background-color: ${({ theme }) => theme.getColor('accent')};
    mix-blend-mode: multiply;
  }
`;

const common = css`
  position: relative;
  z-index: 2;
  min-width: 13.021vw;
  border: 1px solid #fff;
  border-radius: ${({ theme }) => theme.getRadius()};
  padding: 0.78125vw 1.5625vw;
`;

export const FilterButton = styled.button.attrs({ type: 'button' })`
  ${common}
  background-color: #fff;
  color: ${({ theme }) => theme.getColor('main')};
  text-decoration: ${({ isSelected }) => (isSelected ? 'underline' : 'none')}
  cursor: pointer;
`;

export const SearchInput = styled.input.attrs({ type: 'text' })`
  ${common}
  background-color: transparent;
  color: #fff;

  ::placeholder {
    color: #fff;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;

  > svg {
    position: absolute;
    top: 50%;
    right: 1.5625vw;
    z-index: 2;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;
