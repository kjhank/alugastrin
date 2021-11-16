import styled from 'styled-components';

import { Link as GenericLink } from 'gatsby';

export const Section = styled.section`
  padding-top: 1.875vw;
  font-size: 24px;
`;

export const Heading = styled.h2`
  margin-bottom: 1em;
  padding: 0 2%;
  font-weight: 600;
`;

export const List = styled.ul`
  padding: 0 2%;
`;

export const Article = styled.li`
  position: inline-flex;
  align-items: baseline;

  ::before {
    content: '·';
    margin-right: 0.25em;
    color: ${({ theme }) => theme.getColor('accent')};
    font-weight: 900;
  }
`;

export const Link = styled(GenericLink)`
  ${({ theme }) => theme.getLinkStyles()};
  font-weight: 300;

  ::after {
    background-image: ${({ theme }) => `linear-gradient(${theme.getColor('accent')}, ${theme.getColor('accent')})`};
  }
`;
