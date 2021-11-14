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
  background-color: #fff;
  cursor: pointer;

  > svg {
    fill: currentColor;
  }
`;

export const Online = styled.p`
  ${buttonLinkStyles}
  border-color: ${({ theme }) => theme.getColor('accent')};
  background-color: ${({ theme }) => theme.getColor('accent')};
  color: #fff;

  > svg {
    fill: currentColor;
    transform: rotateZ(90deg);
  }

  :hover {
    color: #fff;

    > svg {
      transform: rotateZ(90deg);
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
