import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import {
  Container, Main,
} from '@components';

import {
  Background, Heading, Message, Wrapper,
} from '@components/Maintenance/styled';

export const MaintenanceContainer = ({
  background,
  message,
  title,
  ...props
}) => (
  <Main {...props}>
    <Container>
      <Heading>{title}</Heading>
      <Wrapper>
        <Background image={background} />
        <Message dangerouslySetInnerHTML={{ __html: sanitize(message) }} />
      </Wrapper>
    </Container>
  </Main>
);

MaintenanceContainer.propTypes = {
  background: PropTypes.shape({}).isRequired,
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

