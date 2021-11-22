/* eslint-disable react/no-danger */
import React, {
  createRef, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sanitize from 'sanitize-html';
import {
  animate, stagger,
} from 'motion';

import {
  Container as GenericContainer, SPImage,
} from '@components';

import { queries } from '@utils';

import { FramedText } from './Hero.styled';

const Container = styled(GenericContainer)`
  width: 65.364583vw;
  max-width: 1255px;
  margin: auto;
  font-size: 24px;
  line-height: 1.25;

  @media ${queries.huge} {
    font-size: 22px;
  }

  @media ${queries.xxl} {
    font-size: 20px;
  }

  @media ${queries.l} {
    width: 75vw;
  }

  @media ${queries.s} {
    font-size: 18px;
  }

  @media ${queries.xs} {
    width: 95vw;
    font-size: 14px;
  }
`;

const Wrapper = styled.div`
  display: ${({ flex }) => (flex ? 'flex' : 'block')};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'no-wrap')};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  padding: ${({ extraPadding }) => extraPadding && '0 10%'};

  strong,
  b {
    font-weight: 600;
  }

  em,
  i {
    font-style: italic;
  }

  > section {
    margin-top: 3.776042vw;
  }

  @media ${queries.xxs} {
    flex-direction: column;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.3vw;
  margin: 1.510417vw 2.34375vw;
  font-size: 26px;

  > li {
    display: inline-flex;
    align-items: baseline;
    list-style-type: none;

    ::before {
      content: '▸';
      margin-right: 0.25em;
      color: ${({ theme }) => theme.getColor('accent')};
    }
  }
`;

const Left = styled.div`
  li {
    margin: 1em 0;
    list-style-type: none;

    ::before {
      content: '▸';
      margin-right: 0.25em;
    }
  }

  @media ${queries.m} {
    font-size: 14px;
  }
`;

const Subheading = styled.h3`
  font-weight: 600;
  font-size: 46px;
  text-align: center;
  text-transform: uppercase;

  > strong {
    color: ${({ theme }) => theme.getColor('accent')};
  }

  @media ${queries.xxl} {
    font-size: 44px;
  }

  @media ${queries.l} {
    font-size: 40px;
  }

  @media ${queries.s} {
    font-size: 32px;
  }

  @media ${queries.xs} {
    font-size: 26px;
  }
`;

const Image = styled(SPImage)``;

const Package = styled(SPImage)`
  flex-shrink: 0;
  width: 17.552083vw;

  @media ${queries.s} {
    width: 80%;
  }
`;

const GermList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2vw;
  width: 90%;
  margin: auto;
  padding-top: 2vw;
  text-align: center;

  > li {
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    flex-direction: column;
    align-items: center;
    width: calc(50% - 1vw);

    p {
      padding: 2vw 3vw 0;
    }
  }
`;

export const Helicogastrin = ({
  copy,
  cssClass,
  images,
}) => {
  const { item: { text: subheading } } = copy.find(({ item }) => item.label === 'subheading');
  const { image: { file: packageImage } } = images.find(({ image }) => image.label === 'package');

  const { item: { text: listLeft } } = copy.find(({ item }) => item.label === 'listLeft');
  const { item: { text: listRight } } = copy.find(({ item }) => item.label === 'listRight');
  const { item: { text: leftText } } = copy.find(({ item }) => item.label === 'left');

  const { item: { text: frameHeading } } = copy.find(({ item }) => item.label === 'frameHeading');
  const { item: { text: frameContent } } = copy.find(({ item }) => item.label === 'frameContent');

  const { item: { text: zoomLeft } } = copy.find(({ item }) => item.label === 'zoomLeft');
  const { item: { text: zoomRight } } = copy.find(({ item }) => item.label === 'zoomRight');
  const { image: { file: germLeft } } = images.find(({ image }) => image.label === 'germLeft');
  const { image: { file: germRight } } = images.find(({ image }) => image.label === 'germRight');

  const germLeftRef = createRef();
  const germRightRef = createRef();

  const sanitizeConfig = {
    allowedTags: [
      'strong',
      'em',
      'i',
      'b',
      'br',
      'li',
      'span',
    ],
  };

  const animateItems = () => {
    const germs = [
      germLeftRef.current,
      germRightRef.current,
    ];

    animate(germs, {
      filter: 'sepia(0.25)',
    },
    {
      delay: stagger(0.5),
      direction: 'alternate',
      duration: 1,
      easing: 'linear',
      repeat: Infinity,
    });
  };

  useEffect(() => {
    animateItems();
  }, []);

  return (
    <Container className={cssClass}>
      <Wrapper>
        <Subheading dangerouslySetInnerHTML={{ __html: sanitize(subheading, sanitizeConfig) }} />
      </Wrapper>
      <Wrapper>
        <List>
          <li dangerouslySetInnerHTML={{ __html: sanitize(`<span>${listLeft}</span>`, sanitizeConfig) }} />
          <li dangerouslySetInnerHTML={{ __html: sanitize(`<span>${listRight}</span>`, sanitizeConfig) }} />
        </List>
      </Wrapper>
      <Wrapper
        align="center"
        extraPadding
        flex
        justify="space-between"
      >
        <Left dangerouslySetInnerHTML={{
          __html: sanitize(leftText, {
            allowedTags: [
              ...sanitizeConfig.allowedTags,
              'ul',
            ],
          }),
        }}
        />
        <Package image={packageImage} />
      </Wrapper>
      <Wrapper>
        <FramedText>
          <h3>{sanitize(frameHeading, sanitizeConfig)}</h3>
          <p dangerouslySetInnerHTML={{ __html: sanitize(frameContent, sanitizeConfig) }} />
        </FramedText>
      </Wrapper>
      <Wrapper>
        <GermList>
          <li>
            <Image
              image={germLeft}
              innerRef={germLeftRef}
            />
            <p dangerouslySetInnerHTML={{ __html: sanitize(zoomLeft, sanitizeConfig) }} />
          </li>
          <li>
            <Image
              image={germRight}
              innerRef={germRightRef}
            />
            <p dangerouslySetInnerHTML={{ __html: sanitize(zoomRight, sanitizeConfig) }} />
          </li>
        </GermList>
      </Wrapper>
    </Container>
  );
};

Helicogastrin.propTypes = {
  copy: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  cssClass: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

