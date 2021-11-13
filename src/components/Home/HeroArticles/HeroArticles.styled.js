import styled from 'styled-components';
import { Link as GenericLink } from 'gatsby';

import { SPImage } from '@components';

export const Section = styled.section`
  margin-top: 6vw;
`;

export const Heading = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 3vw;
  font-weight: 600;
  font-size: 46px;
  line-height: 48px;

  ::before {
    content: '';
    width: 8.54vw;
    height: 2px;
    margin-right: 0.52vw;
    background-color: ${({ theme }) => theme.getColor('main')};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.333333vw;
`;

export const SingleArticle = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Image = styled(SPImage)`
  > img {
    width: 100%;
  }
`;

export const Title = styled.h3`
  margin: 1.51vw 0 0.68vw;
  color: ${({ theme }) => theme.getColor('accent')};
  font-weight: 700;
  font-size: 20px;
`;

export const Intro = styled.p`
  font-size: 16px;
  line-height: 20px;
`;

export const Link = styled(GenericLink)`
  display: flex;
  align-items: center;
  margin-top: 1.05vw;
  font-weight: 700;
  transition: ${({ theme }) => theme.getTransitions(['color'], 'fastDuration')};

  ::before {
    content: '';
    width: 2.3vw;
    height: 2px;
    margin-right: 0.52vw;
    background-color: ${({ theme }) => theme.getColor('main')};
    transition: ${({ theme }) => theme.getTransitions(['background-color'], 'fastDuration')};
  }

  :hover {
    color: ${({ theme }) => theme.getColor('accent')};

    ::before {
      background-color: ${({ theme }) => theme.getColor('accent')};
    }
  }
`;

export const AllArticlesLink = styled(GenericLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${({ theme }) => `0 ${theme.getRadius()} 0 0`};
  padding: 2.135417vw 2.03vw;
  background-color: ${({ theme }) => theme.getColor('accent')};
  color: #fff;
  font-size: 16px;
  transition: ${({ theme }) => theme.getTransitions(['filter'])};

  > svg {
    margin-top: 0.25vw;
    transition: ${({ theme }) => theme.getTransitions(['transform'])};
    transform: ${({ $isFlipped }) => $isFlipped && 'rotateY(180deg)'};
    fill: currentColor;
  }

  :hover {
    filter: brightness(1.2);

    > svg {
      transform: translateX(20%);
    }
  }
`;
