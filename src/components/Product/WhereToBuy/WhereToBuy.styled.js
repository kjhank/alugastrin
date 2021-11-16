import styled from 'styled-components';

import {
  ExternalLink, SPImage,
} from '@components';

import { buttonLinkStyles } from '@components/styled';

import {
  Container as GenericContainer,
} from '../Sections/Sections.styled';

export const Section = styled.section`
  margin-top: 4.271vw;
`;

export const Link = styled(ExternalLink)``;

export const WidgetButton = styled.button.attrs({ type: 'button' })`
  ${buttonLinkStyles}
  background-color: ${({
    isActive, theme,
  }) => (isActive ? theme.getColor('accent') : '#fff')};
  color: ${({
    isActive, theme,
  }) => (isActive ? '#fff' : theme.getColor('main'))};
  transition: ${({ theme }) => theme.getTransitions([
    'background-color',
    'color',
  ])};
  cursor: pointer;

  > svg {
    fill: currentColor;
    transform: ${({ isActive }) => isActive && 'rotate(90deg)'}
  }

  :hover {
    background-color: ${({
    isActive, theme,
  }) => (isActive ? '#fff' : theme.getColor('accent'))};
    color: ${({
    isActive, theme,
  }) => (isActive ? theme.getColor('accent') : '#fff')};

    > svg {
      transform: ${({ isActive }) => (isActive ? 'rotate(90deg)' : 'none')};
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 2.083vw;
  margin-top: 1vw;
  padding-left: 7.135417vw;
`;

export const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.875vw;
  width: 100%;
`;

export const Item = styled.li``;

export const Image = styled(SPImage)``;

export const Container = styled(GenericContainer)`
  padding-right: 0;
`;
