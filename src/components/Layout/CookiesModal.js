import React from 'react';
import PropTypes from 'prop-types';

import { ButtonLink } from '@components';
import {
  Message, Navigation, RejectLink,
} from './CookiesModal.styled';

export const CookiesModal = ({
  accept, confirmCookies, copy, reject,
}) => (
  <>
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
  </>
);

CookiesModal.propTypes = {
  accept: PropTypes.string.isRequired,
  confirmCookies: PropTypes.func.isRequired,
  copy: PropTypes.string.isRequired,
  reject: PropTypes.string.isRequired,
};

