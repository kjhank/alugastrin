import React from 'react';
import PropTypes from 'prop-types';

import { ButtonLink } from '@components';
import {
  Heading, Message, Navigation,
} from './WarningModal.styled';

export const WarningModal = ({
  accept, confirmWarning, copy, heading, reject,
}) => (
  <>
    <Heading>
      {heading}
    </Heading>
    <Message>{copy}</Message>
    <Navigation>
      <ButtonLink
        as="button"
        hasArrow={false}
        onClick={confirmWarning}
      >
        {accept}
      </ButtonLink>
      <ButtonLink
        hasArrow={false}
        to="/"
      >
        {reject}
      </ButtonLink>
    </Navigation>
  </>
);

WarningModal.propTypes = {
  accept: PropTypes.string.isRequired,
  confirmWarning: PropTypes.func.isRequired,
  copy: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  reject: PropTypes.string.isRequired,
};

