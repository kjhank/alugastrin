/* eslint-disable react/no-danger */
import React, {
  createRef, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sanitize from 'sanitize-html';
import {
  animate, stagger, timeline,
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

  @media ${queries.xxsplus} {
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
    opacity: 0;
    display: inline-flex;
    align-items: baseline;
    list-style-type: none;

    ::before {
      content: '▸';
      margin-right: 0.25em;
      color: ${({ theme }) => theme.getColor('accent')};
    }

    :first-child {
      transform: translateX(-50vw);
    }

    :last-child {
      transform: translateX(50vw);
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
  opacity: 0;
  font-weight: 600;
  font-size: 46px;
  text-align: center;
  text-transform: uppercase;
  transform: translateX(50vw);

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
  opacity: 0;
  flex-shrink: 0;
  width: 17.552083vw;
  transform: translateX(50%);

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
  const packageRef = createRef();
  const listRef = createRef();
  const headingRef = createRef();
  const observableRef = createRef();

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

  useEffect(() => {
    const { current: headingNode } = headingRef;
    const { current: packageNode } = packageRef;
    const { current: listNode } = listRef;
    const { current: observableNode } = observableRef;
    const observerConfig = { threshold: [0.8] };

    const keyframes = {
      opacity: 1,
      transform: 'translateX(0)',
    };

    const animationOptions = {
      delay: 0.5,
      duration: 0.5,
      easing: [
        0.22,
        1,
        0.36,
        1,
      ],
    };

    let topObserver;

    if (headingNode && packageNode && listNode && observableNode) {
      topObserver = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) {
          const sequence = [
            [
              packageNode,
              keyframes,
              animationOptions,
            ],
            [
              headingNode,
              keyframes,
              animationOptions,
            ],
            [
              listNode.querySelectorAll('li'),
              keyframes,
              animationOptions,
            ],
          ];

          timeline(sequence);

          topObserver.unobserve(observableNode);
        }
      }, observerConfig);

      topObserver.observe(observableNode);
    }

    return () => topObserver?.unobserve(observableNode);
  }, []);

  return (
    <Container className={cssClass}>
      <Wrapper>
        <Subheading
          dangerouslySetInnerHTML={{ __html: sanitize(subheading, sanitizeConfig) }}
          ref={headingRef}
        />
      </Wrapper>
      <Wrapper ref={observableRef}>
        <List ref={listRef}>
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
        <Package
          image={packageImage}
          innerRef={packageRef}
        />
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

