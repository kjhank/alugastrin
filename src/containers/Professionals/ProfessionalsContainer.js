import React from 'react';
import PropTypes from 'prop-types';

import { Main } from '@components';

import {
  Downloads, Header,
} from '@components/Professionals';

export const ProfessionalsContainer = ({
  files, refs, title, ...props
}) => (
  <Main
    refs={refs}
    {...props}
  >
    <Header title={title} />
    <Downloads files={files} />
  </Main>
);

ProfessionalsContainer.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  refs: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
};
