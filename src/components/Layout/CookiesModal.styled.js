import styled from 'styled-components';

import { buttonLinkStyles } from '@components/styled';

export const Message = styled.p``;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  margin-top: 2em;
`;

export const RejectLink = styled.a`
  ${buttonLinkStyles};
`;
