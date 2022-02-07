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
      margin-top: 2em;
      padding-top: 5em;

      h1 {
        order: 1;

        ::after {
          width: 100%;
        }
      }
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
    order: 2;
    margin-bottom: 1.5em;
    padding-right: unset;
    font-size: 16px;
  }
`;

export const Background = styled(SPImage)`
  position: absolute;
  top: 0;
  right: -20vw;
  height: 100%;

  > img {
    width: auto;
    max-width: unset;
    height: 100%;
  }

  @media ${queries.xs} {
    display: none;
  }
`;

export const PortraitBackground = styled(SPImage)`
  position: absolute;
  top: -3em;
  right: -5vw;
  z-index: -2;
  display: none;
  width: 60%;
  height: 100%;

  > img {
    width: 100%;
    max-width: unset;
    object-fit: cover;
  }

  @media ${queries.xs} {
    display: block;
  }

  @media ${queries.xxs} {
    top: -2em;
  }
`;

export const FiltersSearchWrapper = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
  width: 87.274%;
  margin: auto 0 0;
  padding: 1.146vw 3.542vw;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 100%;
    z-index: 1;
    width: 100vw;
    background-color: #b8181b;
  }

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
    order: 4;
    gap: 1em;
    width: 97.5vw;
    margin: unset;
    margin-right: -2.5vw;
    padding: 2em;

    ::after {
      mix-blend-mode: unset;
    }
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

  @media ${queries.xxsplus} {
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
