import styled from 'styled-components';
import { Link as GenericLink } from 'gatsby';

import { SPImage } from '@components';
import { queries } from '@utils';

export const Section = styled.section`
  margin-top: 6vw;
`;

export const Heading = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 3vw;
  font-weight: 600;
  font-size: 46px;
  line-height: 1.043478;

  ::before {
    content: '';
    width: 8.54vw;
    height: 2px;
    margin-right: 0.52vw;
    background-color: ${({ theme }) => theme.getColor('main')};
  }

  @media ${queries.huge} {
    font-size: 42px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.333333vw;

  @media ${queries.xxsplus} {
    grid-template-columns: 1fr
  }
`;

export const SingleArticle = styled.li`
  > a {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const Image = styled(SPImage)`
  > img {
    width: 100%;
  }

  @media ${queries.xs} {
    display: block;
    aspect-ratio: 294/192;

    > img {
      width: 100%;
      max-width: unset;
      height: 100%;
      max-height: unset;
      object-fit: cover;
    }
  }
`;

export const Title = styled.h3`
  margin: 1.51vw 0 0.68vw;
  color: ${({ theme }) => theme.getColor('accent')};
  font-weight: 700;
  font-size: 20px;

  @media ${queries.huge} {
    font-size: 18px;
  }
`;

export const Intro = styled.p`
  font-size: 16px;
  line-height: 1.25;

  @media ${queries.huge} {
    font-size: 14px;
  }
`;

export const MoreText = styled.p`
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

  @media ${queries.xs} {
    display: none;
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

  @media ${queries.huge} {
    font-size: 14px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;

  ${MoreText} {
    display: none;

    @media ${queries.xs} {
      position: absolute;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      gap: 0.5em;
      border-top-left-radius: ${({ theme }) => theme.borderRadii.small};
      padding: 1.25em 1em 1.25em 2em;
      background-color: ${({ theme }) => theme.getColor('accent')};
      mix-blend-mode: multiply;
      color: #fff;
      font-weight: 300;
      font-size: 12px;

      > svg {
        width: auto;
        height: 1em;
        fill: currentColor;
      }

      ::before {
        content: unset;
      }
    }
  }
`;
