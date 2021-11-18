import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import { Container } from '@components';

import {
  Heading, Image, Wrapper,
} from './Hero.styled';

import { Sibosgastrin } from './Sibosgastrin';

export const Hero = ({
  cssClass,
  data: {
    copy, heading, image, images,
  },
}) => (
  <Wrapper>
    <Container className={cssClass}>
      {heading && (
      <Heading
        className={cssClass}
        dangerouslySetInnerHTML={{ __html: sanitize(heading) }}
        isBold={!heading.includes('<strong>') || heading.includes('<br />')}
        isLarger={heading.includes('<strong>')}
      />
      )}
      {image && <Image image={image} />}
    </Container>
    {cssClass === 'sibosgastrin' && (
      <Sibosgastrin
        copy={copy}
        cssClass={cssClass}
        images={images}
      />
    )}
  </Wrapper>
);

Hero.propTypes = {
  cssClass: PropTypes.string.isRequired,
  data: PropTypes.shape({
    copy: PropTypes.arrayOf(PropTypes.shape({})),
    heading: PropTypes.string,
    image: PropTypes.oneOfType([
      PropTypes.shape({}),
      PropTypes.bool,
    ]),
    images: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

