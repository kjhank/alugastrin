import styled from 'styled-components';

import { SPImage } from '@components';

import { queries } from '@utils';

export const Section = styled.article``;

export const FilesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: min(2vw, 3.84vw);

  @media ${queries.xxsplus} {
    grid-template-columns: 1fr;
  }
`;

export const SingleFile = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3em;
  line-height: 1.227273;
  text-align: center;
`;

export const Thumbnail = styled(SPImage)`
  width: 14.947917vw;

  > img {
    width: 100%;
    height: auto;
  }

  @media ${queries.xxsplus} {
    width: 50%;
  }
`;

export const Placeholder = styled.div`
  aspect-ratio: 287/406;
  width: 14.947917vw;
  border: 2px solid ${({ theme }) => theme.getColor('neutral')};
  border-radius: ${({ theme }) => `${theme.getRadius('mediumPlus')} 0 0 0`};
  background-color: ${({ theme }) => theme.getColor('nearWhite')};

  @media ${queries.xxsplus} {
    width: 50%;
  }
`;

export const Title = styled.h2`
  margin: 1em 0;
  color: ${({ theme }) => theme.getColor('accent')};
  font-weight: 600;
  font-size: clamp(16px, 1.145833vw, 22px);
  text-transform: uppercase;
`;

export const Description = styled.p`
  margin-bottom: 0.75em;
  padding: 0 2em;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;

  em,
  i {
    font-style: italic;
  }

  b,
  strong {
    font-weight: 600;
  }

  ::before {
    content: '„';
  }

  ::after {
    content: '”';
  }
`;

export const AuthorsList = styled.ul`
  margin-top: auto;
`;

export const Author = styled.li`
  font-size: 16px;
  line-height: 1.5;
`;

export const DownloadLink = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  border: 1px solid ${({ theme }) => theme.getColor('main')};
  border-radius: ${({ theme }) => theme.getRadius()};
  padding: 1vw 1.510417vw;
  transition: ${({ theme }) => theme.getTransitions([
    'color',
    'border-color',
    'background-color',
  ])};

  > svg {
    margin-left: 0.5em;
    stroke: currentColor;
    transition: ${({ theme }) => theme.getTransitions([
    'color',
    'transform',
  ])};
  }

  :hover {
    border-color: #fff;
    background-color: ${({ theme }) => theme.getColor('accent')};
    color: #fff;

    > svg {
      stroke: #fff;
      transform: translateY(20%);
    }
  }
`;
