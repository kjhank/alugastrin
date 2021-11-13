import styled from 'styled-components';

export const StyledHeader = styled.header`
  margin-bottom: 3.90625vw;
`;

export const Title = styled.h1`
  position: relative;
  font-weight: 600;
  font-size: 66px;

  ::after {
    content: '';
    position: absolute;
    bottom: -1.2vw;
    left: 0;
    width: 10.73vw;
    height: 2px;
    background-color: ${({ theme }) => theme.getColor('main')};
  }
`;
