import styled from 'styled-components';

import {
  ButtonLink, Container as GenericContainer, SPImage,
} from '@components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4.53125vw;

  & + & {
    margin-top: 4.9vw;
  }
`;

export const Product = styled.li``;

export const Image = styled(SPImage)`
  width: 100%;

  > img {
    width: 100%;
  }
`;

export const Pipe = styled.span`
  color: ${({ theme }) => theme.getColor('main')};
`;

export const Name = styled.h2`
  padding: 0.78125vw 0 0.68vw;
  color: ${({ theme }) => theme.getColor('accent')};
  font-weight: 600;
  font-size: 24px;
  line-height: 1.208333;
`;

export const Description = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
`;

export const Text = styled.p`
  padding: 0.9375vw 0 1.198vw;
  font-size: 16px;
  line-height: 1.5;
`;

export const Link = styled(ButtonLink)`
  border-color: #fff;
  background: ${({ theme }) => theme.getGradient()};
  color: #fff;

  :hover {
    border-color: #fff;
    color: #fff;
  }

  > svg {
    fill: currentColor;
  }
`;

export const Container = styled(GenericContainer)`
  padding-left: 12.726%;
`;
