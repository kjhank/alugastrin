import React from 'react';
import PropTypes from 'prop-types';
import { queries } from '@utils';

import { Container as GenericContainer } from '@components';
import styled from 'styled-components';
import sanitize from 'sanitize-html';

const Container = styled(GenericContainer)`
  text-align: center;

  > h2 {
    margin-block-end: min(60px, 3.125vw);
    color: ${({ theme }) => theme.getColor('accent')};
    font-weight: 700;
    font-size: 46px;

    @media ${queries.xhuge} {
      font-size: 40px;
    }

    @media ${queries.huge} {
      font-size: 36px;
    }

    @media ${queries.xxl} {
      font-size: 32px;
    }

    @media ${queries.l} {
      font-size: 24px;
    }

    @media ${queries.s} {
      font-size: 18px;
    }

    &.heading-1,
    &.heading-2,
    &.heading-4 {
      margin-block-start: min(95px, 4.95vw);
      color: ${({ theme }) => theme.getColor('max')};
      font-size: 64px;
      text-transform: uppercase;
      padding-inline: 5%;

      @media ${queries.xxl} {
        font-size: 52px;
      }

      @media ${queries.xl} {
        font-size: 48px;
      }

      @media ${queries.m} {
        font-size: 36px;
      }

      @media ${queries.l} {
        font-size: 24px;
      }

      @media ${queries.s} {
        font-size: 18px;
      }
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
    width: 75%;
    max-width: unset;
    height: auto;
    margin-inline: auto;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: min(53px, 2.8vw);

    &.wrapper-2 {
      font-size: 22px;

      @media ${queries.m} {
        font-size: 18px;
      }

      @media ${queries.xxsplus} {
        font-size: 14px;
      }
    }

    &.wrapper-3 {
      img {
        width: 125%;
        margin-inline-start: -12.5%;
      }
    }

    &.wrapper-4 {
      inline-size: 80%;
      margin-inline: auto;
      font-size: 46px;

      @media ${queries.xhuge} {
        font-size: 40px;
      }

      @media ${queries.huge} {
        font-size: 36px;
      }

      @media ${queries.xxl} {
        font-size: 32px;
      }

      @media ${queries.l} {
        font-size: 24px;
      }

      @media ${queries.s} {
        font-size: 18px;
      }

      h3 {
        color: ${({ theme }) => theme.getColor('accent')};
        font-weight: 700;
      }
    }
  }
`;

export const MaxProtect = ({
  className, copy,
}) => (
  <>
    {copy.map(({ item }, index) => (
      <Container className={className}>
        <h2
          className={`heading-${index}`}
          dangerouslySetInnerHTML={{ __html: sanitize(item.label, { allowedTags: ['br'] }) }}
        />
        <div
          className={`wrapper-${index}`}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: sanitize(item.text, {
              allowedClasses: { '*': false },
              allowedTags: [
                'ul',
                'h3',
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
    ))}
  </>
);

// return (
//   <Container className={className}>
//     <h2 dangerouslySetInnerHTML={{ __html: sanitize(item.label, { allowedTags: ['br'] }) }} />
//     <div
//       // eslint-disable-next-line react/no-danger
//       dangerouslySetInnerHTML={{
//         __html: sanitize(item.text, {
//           allowedClasses: { '*': false },
//           allowedTags: [
//             'ul',
//             'li',
//             'strong',
//             'b',
//             'em',
//             'i',
//             'picture',
//             'img',
//             'sup',
//             'sub',
//           ],
//         }),
//       }}
//     />
//   </Container>
// );
// };

MaxProtect.propTypes = {
  className: PropTypes.string.isRequired,
  copy: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
