import styled from 'styled-components';

import { LineHeading } from '@components/styled';

export { Container } from '../Ingredients/Ingredients.styled';

export const Section = styled.section`
  margin-top: 3.8vw;
`;

export const Heading = styled(LineHeading)`
  margin-bottom: 1.198vw;
`;

export const Text = styled.div`
  padding-left: 7.135417vw;
  font-size: 24px;
  line-height: 1.25;

  ul {
    list-style-type: none;

    > li {
      display: flex;
      align-items: baseline;

      ::before {
        content: '-';
        margin-right: 0.5em;
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
`;
