import styled from 'styled-components';
import { Link as GenericLink } from 'gatsby';

import { SPImage } from '@components';

import { queries } from '@utils';

export const PostsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.39vw;
  margin-top: 2.6vw;
  padding-left: 12.726%;

  @media ${queries.xs} {
    grid-template-columns: repeat(2, 1fr);
    padding-left: unset;
  }

  @media ${queries.xxs} {
    grid-template-columns: 1fr;
    gap: 3em;
  }
`;

export const Post = styled.li``;

export const Link = styled(GenericLink)`
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  transition: ${({ theme }) => theme.getTransitions(['color'], 'fastDuration')};

  ::before {
    content: '';
    width: 2.3vw;
    height: 2px;
    margin-right: 0.52vw;
    background-color: ${({ theme }) => theme.getColor('main')};
    transition: ${({ theme }) => theme.getTransitions(['background-color'], 'fastDuration')};

    @media ${queries.xxs} {
      width: 3em;
    }
  }

  :hover {
    color: ${({ theme }) => theme.getColor('accent')};

    ::before {
      background-color: ${({ theme }) => theme.getColor('accent')};
    }
  }
`;

export const Image = styled(SPImage)`
  width: 100%;

  > img {
    width: 100%;
  }
`;

export const Title = styled.h2`
  margin: 1.51vw 0 0.678vw;
  color: ${({ theme }) => theme.getColor('accent')};
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
`;

export const Intro = styled.p`
  margin-bottom: 1.042vw;
  font-size: 16px;
  line-height: 1.25;
`;
