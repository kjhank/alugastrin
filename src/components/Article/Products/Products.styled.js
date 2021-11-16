import styled from 'styled-components';

import {
  ButtonLink, SPImage,
} from '@components';

import { InnerContainer as InnerCtr } from '@components/styled';

export const Section = styled.section`
  padding-top: 1.875vw;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.875vw;
`;

export const Product = styled.li``;

export const Image = styled(SPImage)``;

export const Name = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.78125vw 0 0.678vw;
  color: ${({ theme }) => theme.getColor('accent')};
  font-weight: 600;
  font-size: 24px;
  line-height: 1.21;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

export const Intro = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
`;

export const Link = styled(ButtonLink)`
  margin-top: 1.198vw;
  border: #fff;
  background-image: ${({ theme }) => theme.getGradient()};
  color: #fff;
  transition: ${({ theme }) => theme.getTransitions(['filter'])};

  > svg {
    fill: currentColor;
  }

  :hover {
    filter: brightness(1.2);
    color: #fff;

    > svg {
      fill: currentColor;
    }
  }
`;

export const InnerContainer = styled(InnerCtr)`
  border-bottom: 2px solid ${({ theme }) => theme.getColor('accent')};
  padding-bottom: 1.875vw;
`;
