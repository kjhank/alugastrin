import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import { Container } from '@components';

import {
  Heading, Image, Wrapper,
} from './Hero.styled';

export const Hero = ({
  data: {
    heading, image,
  },
}) => (
  <Wrapper>
    <Container>
      <Heading
        dangerouslySetInnerHTML={{ __html: sanitize(heading) }}
        isBold={!heading.includes('<strong>') || heading.includes('<br />')}
        isLarger={heading.includes('<strong>')}
      />
      <Image image={image} />
    </Container>
  </Wrapper>
);

Hero.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string,
    image: PropTypes.shape({}),
  }).isRequired,
};

