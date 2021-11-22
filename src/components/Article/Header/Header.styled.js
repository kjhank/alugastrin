import styled from 'styled-components';

import { SPImage } from '@components';

import { queries } from '@utils';

export const StyledHeader = styled.header`
  padding: 2.71vw 0 2vw;

  > div {
    min-height: 29.5vw;
  }
`;

export const TableOfContents = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 6.328125vw;
  color: ${({ theme }) => theme.getColor('accent')};
  font-weight: 600;
  font-size: 24px;
  line-height: 1.67;

  > li {
    list-style-type: decimal;
    list-style-position: inside;
    white-space: nowrap;
  }

  @media ${queries.xxl} {
    font-size: 22px;
  }

  @media ${queries.xs} {
    font-size: 18px;
  }
`;

export const SectionItem = styled.li`
  transition: ${({ theme }) => theme.getTransitions(['color'])};

  :hover {
    color: ${({ theme }) => theme.getColor('main')};
  }
`;

export const SectionScrollButton = styled.button.attrs({ type: 'button' })`
  padding: 0;
  background: transparent;
  color: inherit;
  text-align: left;
  white-space: normal;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 88.048151%;
  margin: auto;
`;

export const Image = styled(SPImage)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  height: 100%;

  > img {
    width: auto;
    height: 100%;
  }

  @media ${queries.xs} {
    width: auto;
    max-width: 50%;
    height: auto;
  }
`;
