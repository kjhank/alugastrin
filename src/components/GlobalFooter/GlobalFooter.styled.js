import styled from 'styled-components';

import {
  Container as GenericContainer,
} from '@components';

export const Wrapper = styled.footer`
  margin: 4vw 0 2vw;
`;

export const Container = styled(GenericContainer)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2.6vw 0 2.6vw 6.14vw;
  color: #fff;
  font-size: 16px;
  line-height: 24px;

  ::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      width: calc(100% + 21vw);
      border-radius: ${({ theme }) => `${theme.getRadius('large')} 0 0 0`};
      background-image: ${({ theme }) => theme.getGradient('left')};
    }
`;

export const LeftPart = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 60%;
  padding: 1.5vw 0;
`;

export const RightPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.2vw;
  border-left: 1px solid #fff;
  padding: 1.5vw 0 1.5vw 2vw;
  font-weight: 700;
  font-size: 27px;

  strong {
    font-size: 30px;
    line-height: 32px;
  }

  a {
    ${({ theme }) => theme.getLinkStyles()};
    font-weight: 400;
  }
`;

export const LogoWrapper = styled.div`
  width: 100%;
  margin-bottom: 1vw;
`;

export const Links = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > a {
    ${({ theme }) => theme.getLinkStyles()};
  }
`;

export const ContactData = styled.address`
  padding-left: 4vw;

  a {
    ${({ theme }) => theme.getLinkStyles()};
  }
`;

export const SIL = styled.p`
  margin: 1.8vw 0 1.35vw;
  border-bottom: 1px solid ${({ theme }) => theme.getColor('border')};
  padding-bottom: 1.8vw;
  font-size: 11px;
  line-height: 14px;

  strong {
    font-weight: 700;
  }
`;

export const LeafletLegal = styled.p`
  border-bottom: 1px solid ${({ theme }) => theme.getColor('border')};
  padding-bottom: 1.35vw;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
`;

export const Copyright = styled.p`
  margin-top: 2.4vw;
  font-size: 16px;
  white-space: pre;
`;

export const ScrollButton = styled.button.attrs({ type: 'button' })`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: none;
  padding: 0;
  background-color: transparent;
  font-weight: 300;
  font-size: 16px;
  font-family: ${({ theme }) => theme.getFont()};
  cursor: pointer;

  > svg {
    margin-bottom: 4px;
  }
`;
