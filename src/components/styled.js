import styled from 'styled-components';
import { Link } from 'gatsby';

export const Main = styled.main`
  margin-top: 95px;
`;

export const ButtonLink = styled(Link)`
  border: 1px solid ${({ theme }) => theme.getColor('main')};
`;
