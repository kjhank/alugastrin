import styled from 'styled-components';

import { buttonLinkStyles } from '@components/styled';

export const Wrapper = styled.aside`
  position: fixed;
  bottom: 0;
  left: 50%;
  z-index: 69;
  filter: drop-shadow(10px 0px 10px rgb(0 0 0 / 0.29));
  width: 90vw;
  border: 1px solid ${({ theme }) => theme.getColor('border')};
  border-radius: 1em 1em 0 0;
  padding: 1em;
  background-color: #fff;
  transition: ${({ theme }) => theme.getTransitions(['transform'])};
  transform: ${({ isOpen }) => (isOpen ? 'translate(-50%, 1px)' : 'translate(-50%, calc(100% + 1px))')};
`;

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
