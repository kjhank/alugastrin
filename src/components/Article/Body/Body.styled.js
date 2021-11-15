import styled from 'styled-components';

import { SPImage } from '@components';

export const ArticleBody = styled.article`
  > div {
    border-bottom: 1px solid ${({ theme }) => theme.getColor('accent')};
    padding-bottom: 2.03125vw;
  }
`;

export const Wrapper = styled.div`
  width: 88.048151%;
  margin: auto;
`;

export const Intro = styled.p`
  margin-bottom: 1.5em;
  font-size: 24px;
  line-height: 1.21;
`;

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5em;
  font-size: ${({ hasSmallerText }) => (hasSmallerText ? '12px' : '24px')};
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
    list-style-position: inside;
  }

  p + p,
  p + ol,
  p + ul,
  ol + p,
  ol + ol,
  ol + ul,
  ul + p,
  ul + ol,
  ul + ul {
    margin-top: 1.5em;
  }
`;

export const Image = styled(SPImage)`
  width: 50%;
`;
