import React from 'react';
import PropTypes from 'prop-types';

import { Container as GenericContainer } from '@components';
import styled from 'styled-components';
import sanitize from 'sanitize-html';

const Container = styled(GenericContainer)`
  margin-block-start: min(74px, 3.85vw);

  > h2 {
    margin-block-end: min(60px, 3.125vw);
    color: ${({ theme }) => theme.getColor('fibe')};
    font-weight: 700;
    font-size: 64px;
    text-align: center;
  }

  ul {
    font-size: 24px;
    white-space: pre-wrap;
  }

  li {
    position: relative;
    list-style-type: none;
    margin-block-end: 1.625em;
    padding-inline-start: 2.8em;

    ::before {
      content: '';
      position: absolute;
      inset: -0.25em auto auto 0;
      display: inline-block;
      width: 1.625em;
      height: 1.625em;
      background-image: url('/images/fibe-bullet.png');
      background-size: contain;
      background-repeat: no-repeat;
    }
  }

  b,
  strong {
    font-weight: 700;
  }

  em,
  i {
    font-style: italic;
  }

  img {
    position: relative;
    inset-inline-start: -19vw;
    width: 101vw;
    max-width: unset;
    height: auto;
    margin-block-end: max(-150px, -7.8125vw);
  }

  .fibe-highlight {
      display: block;
      color: ${({ theme }) => theme.colors.accent};
      font-weight: bold;
      font-size: 36px;
      text-align: center;
    }
`;

export const Fibegastrin = ({
  className, copy,
}) => {
  const [{ item }] = copy;

  return (
    <Container className={className}>
      <h2>{item.label}</h2>
      <div
      // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: sanitize(item.text, {
            allowedClasses: { '*': false },
            allowedTags: [
              'ul',
              'li',
              'strong',
              'b',
              'em',
              'i',
              'picture',
              'img',
              'sup',
              'sub',
            ],
          }),
        }}
      />
    </Container>
  );
};

Fibegastrin.propTypes = {
  className: PropTypes.string.isRequired,
  copy: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
