/* eslint-disable react/no-danger */
import React, {
  createRef, useEffect, useState,
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
  margin: auto;
  font-size: 20px;
  line-height: 1.25;

  &.helicogastrin:not(.sibosgastrin) {
    padding: 0;
  }

  @media ${queries.huge} {
    font-size: 18px;
  }

  @media ${queries.xxl} {
    font-size: 16px;
  }

  @media ${queries.s} {
    font-size: 14px;
  }

  @media ${queries.xxsplus} {
    font-size: 16px;
  }

  @media ${queries.xs} {
    font-size: 14px;
  }
`;

const Wrapper = styled.div`
  display: ${({ flex }) => (flex ? 'flex' : 'block')};
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
  margin: 1.510417vw 0;
  font-size: 18px;

  > li {
    display: inline-flex;
    align-items: baseline;
    list-style-type: none;

    ::before {
      content: '▸\uFE0E';
      margin-right: 0.25em;
      color: ${({ theme }) => theme.getColor('accent')};
      font-family: monospace;
    }
  }

  @media ${queries.xxsplus} {
    gap: 2em;
    margin: 2em 0;
    font-size: 14px;
  }
`;

const Left = styled.div`
  padding-right: 20%;

  li {
    margin: 1em 0;
    list-style-type: none;

    ::before {
      content: '▸\uFE0E';
      margin-right: 0.25em;
      font-family: monospace;
    }
  }

  @media ${queries.m} {
    font-size: 14px;
  }

  @media ${queries.xxsplus} {
    font-size: 18px;
  }
`;

const Subheading = styled.h3`
  font-weight: 600;
  font-size: 36px;
  text-align: center;
  text-transform: uppercase;

  > strong {
    color: ${({ theme }) => theme.getColor('accent')};
  }

  @media ${queries.xxl} {
    font-size: 34px;
  }

  @media ${queries.l} {
    font-size: 30px;
  }

  @media ${queries.s} {
    font-size: 22px;
  }

  @media ${queries.xxsplus} {
    margin: 2em 0;
  }

  @media ${queries.xs} {
    font-size: 16px;
  }
`;

const Image = styled(SPImage)``;

const Package = styled(SPImage)`
  opacity: 0;
  flex-shrink: 0;
  width: 17.552083vw;
  transform: translateX(50vw);

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
  font-size: 22px;
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

  @media ${queries.xxsplus} {
    margin: 2em auto;
    font-size: 14px;
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
  const staticRef = createRef();

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

  const [
    animationHasFired,
    setAnimationHasFired,
  ] = useState(false);

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
    const { current: packageNode } = packageRef;
    const { current: staticNode } = staticRef;
    let packageObserver;

    if (packageNode) {
      const keyframes = {
        opacity: 1,
        transform: 'translateX(0)',
      };

      const animationOptions = {
        duration: 1,
        easing: 'ease-in-out',
      };

      const observerConfig = {
        threshold: [0.9],
      };

      packageObserver = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) {
          animate(packageNode, keyframes, animationOptions);

          packageObserver.unobserve(staticNode);
        }
      }, observerConfig);

      packageObserver.observe(staticNode);
    }
  }, []);

  const animateText = () => {
    const { current: headingNode } = headingRef;
    const { current: listNode } = listRef;

    const animationTargets = [
      headingNode,
      ...listNode.querySelectorAll('li'),
    ];

    const listKeyframes = {
      transform: [
        'scale(1)',
        'scale(1.1)',
        'scale(1)',
      ],
    };

    const animateConfig = {
      delay: stagger(1),
      duration: 1,
      easing: 'ease-in-out',
    };

    animate(animationTargets, listKeyframes, animateConfig);
    setAnimationHasFired(true);
  };

  useEffect(() => {
    const observerConfig = { threshold: [0.75] };
    let textObserver;

    if (headingRef.current && !animationHasFired) {
      const { current: headingNode } = headingRef;

      textObserver = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) {
          animateText();
          textObserver.unobserve(headingNode);
        }
      }, observerConfig);

      textObserver.observe(headingNode);
    }

    return () => textObserver?.disconnect();
  }, [headingRef]);

  return (
    <Container className={cssClass}>
      <Wrapper>
        <Subheading
          dangerouslySetInnerHTML={{ __html: sanitize(subheading, sanitizeConfig) }}
          ref={headingRef}
        />
      </Wrapper>
      <Wrapper>
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
        ref={staticRef}
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

