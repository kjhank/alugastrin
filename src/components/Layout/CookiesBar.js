import React from 'react';
import PropTypes from 'prop-types';

import { ButtonLink } from '@components';
import {
  Message, Navigation, RejectLink, Wrapper,
} from './CookiesBox.styled';

export const CookiesBar = ({
  accept, confirmCookies, copy, isOpen, reject,
}) => (
  <Wrapper isOpen={isOpen}>
    <Message>{copy}</Message>
    <Navigation>
      <ButtonLink
        as="button"
        hasArrow={false}
        onClick={confirmCookies}
      >
        {accept}
      </ButtonLink>
      <RejectLink href="https://google.com">
        {reject}
      </RejectLink>
    </Navigation>
  </Wrapper>
);

CookiesBar.propTypes = {
  accept: PropTypes.string.isRequired,
  confirmCookies: PropTypes.func.isRequired,
  copy: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  reject: PropTypes.string.isRequired,
};

