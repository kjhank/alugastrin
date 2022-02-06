import styled from 'styled-components';

import { queries } from '@utils/rwd';

export const Heading = styled.h2`
  margin-bottom: 2em;
  color: ${({ theme }) => theme.getColor('accent')};
  font-size: 2em;
  font-family: ${({ theme }) => theme.getFont('heading')};
  text-align: center;
`;

export const Message = styled.p`
  max-width: 75%;
  margin: auto;
  text-align: center;

  @media ${queries.xxsplus} {
    max-width: unset;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  margin-top: 2em;
  text-align: center;

  @media ${queries.xxsplus}  {
    flex-direction: column;
  }
`;
