import styled from 'styled-components';

import { Link as GenericLink } from 'gatsby';

export const Section = styled.section`
  font-size: 24px;
`;

export const Heading = styled.h2`
  margin-bottom: 1em;
  font-weight: 600;
`;

export const Wrapper = styled.div`
  width: 88.048151%;
  margin: auto;
`;

export const List = styled.ul``;

export const Article = styled.li`
  list-style-type: disc;
  list-style-position: inside;

  ::marker {
    color: ${({ theme }) => theme.getColor('accent')};
  }
`;

export const Link = styled(GenericLink)`
  ${({ theme }) => theme.getLinkStyles()};
  font-weight: 300;

  ::after {
    background-image: ${({ theme }) => `linear-gradient(${theme.getColor('accent')}, ${theme.getColor('accent')})`};
  }
`;
