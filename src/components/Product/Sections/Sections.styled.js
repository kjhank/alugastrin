import styled from 'styled-components';

import { SPImage } from '@components';
import { LineHeading } from '@components/styled';

import { queries } from '@utils';

export const Section = styled.section`
  margin-top: 3.8vw;

  @media ${queries.xxsplus} {
    margin-top: 2em;
  }
`;

export const Heading = styled(LineHeading)`
  margin-bottom: 1.198vw;
`;

export const Text = styled.div`
  padding-left: 7.135417vw;
  font-size: 24px;
  line-height: 1.25;

  b,
  strong {
    font-weight: 600;
  }

  em,
  i {
    font-style: italic;
  }

  ul {
    list-style-type: none;

    > li {
      display: flex;
      align-items: baseline;

      ::before {
        content: '–';
        margin-right: 0.25em;
      }
    }
  }

  ul + p,
  ol + p,
  p + p,
  ol + ul,
  ul + ul,
  p + ul,
  ol + ol,
  ul + ol,
  p + ol {
    margin-top: 1em;
  }

  @media ${queries.huge} {
    font-size: 22px;
  }

  @media ${queries.xxl} {
    font-size: 20px;
  }

  @media ${queries.l} {
    font-size: 18px;
  }
`;

export const Background = styled(SPImage)`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: -1;
  width: auto;
  height: 100%;
  transform: translateX(-50%);

  > img {
    width: auto;
    max-width: unset;
    height: 100%;
  }

  @media ${queries.xxsplus} {
    width: 100%;
    height: auto;

    > img {
      max-width: 100%;
    }
  }
`;
