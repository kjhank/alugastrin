import styled from 'styled-components';

import { SPImage } from '@components';

import { queries } from '@utils';

export const PostsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.39vw;
  margin-top: 2.6vw;
  padding-left: 5%;

  @media ${queries.xs} {
    grid-template-columns: repeat(2, 1fr);
    padding-left: unset;
  }

  @media ${queries.xxsplus} {
    grid-template-columns: 1fr;
    gap: 3em;
  }
`;

export const Post = styled.li`
  > a {
    :hover {
      > p:last-child {
        color: ${({ theme }) => theme.getColor('accent')};

        ::before {
          background-color: ${({ theme }) => theme.getColor('accent')};
        }
      }
    }
  }

  @media ${queries.xs} {
    padding: 0 10%;
  }
`;

export const MoreText = styled.p`
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

    @media ${queries.xxsplus} {
      width: 3em;
    }
  }

  @media ${queries.xs} {
    display: none;
  }
`;

export const Image = styled(SPImage)`
  width: 100%;

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

  em,
  i {
    font-style: italic;
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
