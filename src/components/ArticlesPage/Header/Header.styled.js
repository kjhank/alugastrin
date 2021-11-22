import styled, { css } from 'styled-components';

import { SPImage } from '@components';

import { queries } from '@utils';

export const StyledHeader = styled.header`
  overflow: hidden;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 40.416667vw;

    h1 {
      margin-bottom: 2.96875vw;
      padding-top: 12.292vw;
    }

    @media ${queries.l} {
      height: 50vw;
    }

    @media ${queries.xs} {
      height: unset;
      min-height: 60vw;
    }
  }
`;

export const Intro = styled.p`
  position: relative;
  z-index: 1;
  padding-right: 52%;
  font-size: 24px;

  @media ${queries.huge} {
    font-size: 22px;
  }

  @media ${queries.xxl} {
    font-size: 20px;
  }

  @media ${queries.xs} {
    font-size: 16px;
  }
`;

export const Background = styled(SPImage)`
  position: absolute;
  top: 0;
  right: -13.021vw;
  height: 100%;
  /* flex-grow: 0;
  flex-shrink: 0; */

  > img {
    width: auto;
    /* height: 100%; */
    /* flex-grow: 0;
    flex-shrink: 0; */
  }

  @media ${queries.xs} {
    top: 2em;
    right: -30vw;
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

  @media ${queries.xs} {
    flex-wrap: wrap;
    gap: 1em;
    width: 100%;
    margin: unset;
    padding: 2em;
  }
`;

const common = css`
  position: relative;
  z-index: 2;
  min-width: 13.021vw;
  border: 1px solid #fff;
  border-radius: ${({ theme }) => theme.getRadius()};
  padding: 0.78125vw 1.5625vw;

  @media ${queries.huge} {
    font-size: 14px;
  }

  @media ${queries.l} {
    font-size: 16px;
  }

  @media ${queries.xs} {
    flex-grow: 0;
    flex-shrink: 0;
    padding: 0.5em 1em;
  }
`;

export const FilterButton = styled.button.attrs({ type: 'button' })`
  ${common}
  background-color: #fff;
  color: ${({ theme }) => theme.getColor('main')};
  text-decoration: ${({ isSelected }) => (isSelected ? 'underline' : 'none')};
  cursor: pointer;

  @media ${queries.xs} {
    width: calc(50% - 0.5em);
  }

  @media ${queries.xxs} {
    width: 100%;
  }
`;

export const SearchInput = styled.input.attrs({ type: 'text' })`
  ${common}
  display: block;
  width: 100%;
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

  @media ${queries.xs} {
    width: 100%;
    margin-left: auto;
  }
`;
