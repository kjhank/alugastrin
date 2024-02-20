import styled from 'styled-components';

import { SPImage } from '@components';

import { InnerContainer as InnerCtr } from '@components/styled';

import { queries } from '@utils';

export const ArticleBody = styled.article``;

export const Intro = styled.p`
  margin-bottom: 1.5em;
  font-size: 24px;
  line-height: 1.21;

  @media ${queries.huge} {
    font-size: 22px;
  }

  @media ${queries.xxl} {
    font-size: 20px;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-block-start: 1.5em;
  font-size: ${({ hasSmallerText }) => (hasSmallerText ? '12px' : '24px')};

  @media ${queries.huge} {
    font-size: ${({ hasSmallerText }) => (hasSmallerText ? '10px' : '22px')};
  }

  @media ${queries.xxl} {
    font-size: ${({ hasSmallerText }) => (hasSmallerText ? '10px' : '20px')};
  }

  @media ${queries.xs} {
    flex-direction: column;
    align-items: flex-start;
  }

  em,
  i {
    font-style: italic;
  }
`;

export const Heading = styled.h2`
  width: 100%;
  margin-bottom: 1.5em;
  color: ${({
    isSmall, theme,
  }) => theme.getColor(isSmall ? 'main' : 'accent')};
  font-weight: 600;
  font-size: inherit;
  line-height: 1.25;
`;

export const Text = styled.div`
  width: ${({ isNarrow }) => (isNarrow ? '45.703125%' : '100%')};

  ol,
  ul {
    list-style-type: none;

    > li {
      position: inline-flex;
      align-items: baseline;

      ::before {
        content: '·';
        margin-right: 0.25em;
        font-weight: 900;
      }
    }
  }

  *:not(li) {
    margin-block: 1.5em;
  }

  @media ${queries.xs} {
    width: 100%;
  }
`;

export const Image = styled(SPImage)`
  width: 50%;

  @media ${queries.xs} {
    width: 100%;
    margin-top: 1em;
  }
`;

export const InnerContainer = styled(InnerCtr)`
  border-bottom: 2px solid ${({ theme }) => theme.getColor('accent')};
  padding-bottom: 1.875vw;
`;
