import styled from 'styled-components';

import {
  Container as GenericContainer, SPImage,
} from '@components';
import { buttonLinkStyles } from '@components/styled';

import { queries } from '@utils';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4.53125vw;

  & + & {
    margin-top: 4.9vw;
  }

  @media ${queries.xs} {
    grid-template-columns: 1fr;
  }
`;

export const LinkText = styled.p`
  ${buttonLinkStyles}
  border-color: #fff;
  background: ${({ theme }) => theme.getGradient()};
  color: #fff;
  transition: ${({ theme }) => theme.getTransitions(['filter'])};

  > svg {
    fill: currentColor;
  }

  @media ${queries.xs} {
    margin-left: auto;
    padding: 0.5em 1em;

    > svg {
      height: 1em;
    }
  }
`;

export const Product = styled.li`
  @media ${queries.xs} {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  @media ${queries.xxsplus} {
    display: block;
  }

  :hover {
    ${LinkText} {
      filter: brightness(1.2);
      border-color: #fff;
      color: #fff;

      > svg {
        transform: translateX(20%);
      }
    }
  }
`;

export const Image = styled(SPImage)`
  width: 100%;

  > img {
    width: 100%;
  }

  @media ${queries.xs} {
    width: 40%;
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

  @media ${queries.huge} {
    font-size: 22px;
  }

  @media ${queries.xs} {
    width: 60%;
    padding-left: 2.5%;
  }

  @media ${queries.xxsplus} {
    width: 100%;
    padding-left: 0;
  }
`;

export const Description = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;

  @media ${queries.huge} {
    margin-top: 1em;
    font-size: 18px;
  }
`;

export const Text = styled.p`
  padding: 0.9375vw 0 1.198vw;
  font-size: 16px;
  line-height: 1.5;

  em,
  i {
    font-style: italic
  }

  b,
  strong {
    font-weight: 600;
  }

  @media ${queries.xs} {
    width: 100%;
  }
`;

export const Container = styled(GenericContainer)`
  padding-left: 12.726%;

  @media ${queries.xxsplus} {
    padding: 0;
  }
`;
