import styled from 'styled-components';

import {
  Container as GenericContainer,
} from '@components';

import { queries } from '@utils';

export const Wrapper = styled.footer`
  margin: 4vw 0 2vw;
`;

export const Container = styled(GenericContainer)`
  display: flex;
  align-items: flex-end;
  padding: 1.5vw 0 1.5vw 7vw;
  color: #fff;
  font-size: 16px;
  line-height: 1.5;

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

  @media ${queries.huge} {
    font-size: 14px;
  }

  @media ${queries.l} {
    padding: 2.6vw 0 2.6vw 8vw;
  }

  @media ${queries.s} {
    ::after {
      border-radius: ${({ theme }) => `${theme.getRadius('larger')} 0 0 0`}
    }
  }

  @media ${queries.xs} {
    align-items: center;
    padding: 2.6vw 2em;
    font-size: 18px;
  }

  @media ${queries.xs} {
    flex-direction: column;
    padding: 1em;
  }
`;

export const LeftPart = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 65%;
  padding: 1.5vw 0 0;

  @media ${queries.xxl} {
    width: 65%;
  }

  @media ${queries.m} {
    width: 70%;
  }

  @media ${queries.xs} {
    width: 100%;
  }
`;

export const RightPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 1.2vw;
  border-left: 1px solid #fff;
  padding: 1.5vw 0 0 6vw;
  font-weight: 700;
  font-size: 16px;

  strong {
    line-height: 1.066667;
  }

  a {
    ${({ theme }) => theme.getLinkStyles()};
    font-weight: 400;
  }

  @media ${queries.xs} {
    width: 100%;
  }

  @media ${queries.xs} {
    margin-top: 1em;
    border-top: 1px solid #fff;
    border-left: unset;
    padding-top: 1em;
  }
`;

export const LogoWrapper = styled.div`
  width: 100%;
  margin-bottom: 1vw;

  @media ${queries.l} {
    > svg {
      width: 40%;
    }
  }

  @media ${queries.xs} {
    > svg {
      display: block;
      width: 60%;
      margin: auto;
    }
  }
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

  @media ${queries.xs} {
    margin-top: 1em;
    padding-left: 0vw;
  }
`;

export const SIL = styled.p`
  margin: 1.8vw 0 1.35vw;
  border-bottom: 1px solid ${({ theme }) => theme.getColor('border')};
  padding-bottom: 1.8vw;
  font-size: 11px;
  line-height: 1.272727;

  strong {
    font-weight: 700;
  }

  @media ${queries.huge} {
    font-size: 10px;
  }
`;

export const GlobalFooterText = styled(SIL)`
  margin: 1.8vw 0 0;
  border-bottom: none;
  padding-bottom: 0;
`;

export const LeafletLegal = styled.p`
  border-bottom: 1px solid ${({ theme }) => theme.getColor('border')};
  padding-bottom: 1.35vw;
  font-size: 32px;
  line-height: 1.21875;
  text-align: center;

  @media ${queries.huge} {
    font-size: 28px;
  }

  @media ${queries.xxl} {
    font-size: 24px;
  }

  @media ${queries.xxsplus} {
    font-size: 20px;
  }
`;

export const Copyright = styled.p`
  margin-top: 2.4vw;
  font-size: 16px;
  white-space: pre;

  @media ${queries.l} {
    font-size: 14px;
  }

  @media ${queries.xxsplus} {
    margin-top: 3em;
    font-size: 10px;
  }
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
    fill: ${({ theme }) => theme.getColor('accent')};
    transition: ${({ theme }) => theme.getTransitions(['transform'])};
  }

  :hover {
    > svg {
      transform: translateY(-50%);
    }
  }

  @media ${queries.l} {
    font-size: 14px;
  }
`;
