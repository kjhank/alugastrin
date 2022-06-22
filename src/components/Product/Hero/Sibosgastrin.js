/* eslint-disable react/no-danger */
import React, {
  createRef, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
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

  @media ${queries.l} {
    width: 75vw;
  }

  @media ${queries.xs} {
    width: 95vw;
  }
`;

const Wrapper = styled.div`
  display: ${({ flex }) => (flex ? 'flex' : 'block')};
  flex-wrap: ${({ $wrap }) => ($wrap ? 'wrap' : 'no-wrap')};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};

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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    > section {
      margin-top: 2em;
    }
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.3vw;
  margin-left: 15%;
  font-size: 24px;
  line-height: 1.25;

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

  @media ${queries.huge} {
    font-size: 22px;
  }

  @media ${queries.xxl} {
    font-size: 20px;
  }

  @media ${queries.xl} {
    margin-left: 5%;
  }

  @media ${queries.l} {
    margin-left: 0;
  }

  @media ${queries.s} {
    font-size: 18px;
  }

  @media ${queries.xs} {
    width: 100%;
  }

  @media ${queries.xxsPlus} {
    margin: 2em auto;
    font-size: 24px;
  }
`;

const Image = styled(SPImage)``;

const Package = styled(SPImage)`
  opacity: 0;
  width: 23.385417vw;
  margin-right: 10%;
  transform: translateX(50vw);

  @media ${queries.xl} {
    width: 20vw;
  }

  @media ${queries.s} {
    width: 60%;
    margin: auto;
  }

  @media ${queries.xs} {
    width: 100%;
    margin-right: 0;
  }
`;

const GermList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2.96875vw;
  color: ${({ theme }) => theme.getColor('accent')};
  font-size: 24px;

  > li {
    display: flex;
    align-items: center;

    > picture {
      margin-right: 1.09375vw;
    }
  }

  @media ${queries.huge} {
    font-size: 22px;
  }

  @media ${queries.xxl} {
    font-size: 20px;
  }

  @media ${queries.s} {
    gap: 3em;
  }

  @media ${queries.xs} {
    font-size: 18px;
  }

  @media ${queries.xxsplus} {
    flex-direction: column;
    align-items: flex-start;
    margin: 2em auto;
    font-size: 22px;
  }
`;

const IconsList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5.520833vw;
  width: 46.5625vw;
  margin: 3.776042vw auto 0;
  font-size: 24px;

  > li {
    display: flex;
    align-items: center;
    min-width: 40%;

    > picture {
      flex-shrink: 0;
      width: 5.833333vw;
      margin-right: 1.02vw;

      @media ${queries.xxsplus} {
        width: 4em;
      }
    }
  }

  @media ${queries.huge} {
    font-size: 22px;
  }

  @media ${queries.xxl} {
    font-size: 20px;
  }

  @media ${queries.m} {
    font-size: 18px;
  }

  @media ${queries.xs} {
    font-size: 14px;
  }

  @media ${queries.xxsplus} {
    width: 80%;
  }
`;

const flow = keyframes`
  0% {
    transform: translateX(-100%) rotate(15deg);
  }

  25% {
    transform: translateX(100vw) rotate(15deg);
  }

  to {
    transform: translateX(100vw) rotate(15deg);
  }
`;

const flowLarge = keyframes`
  0% {
    transform: translateX(-100%) rotate(15deg);
  }

  25% {
    transform: translateX(33vw) rotate(15deg);
  }

  to {
    transform: translateX(33vw) rotate(15deg);
  }
`;

const Red = styled.ul`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 48.12749%;
  margin-top: -2.5%;
  margin-left: 15%;
  border-radius: ${({ theme }) => `0 ${theme.getRadius('smaller')} 0 ${theme.getRadius('smaller')}`};
  padding: 0.416667vw 1.71875vw;
  background-image: ${({ theme }) => theme.getGradient()};
  color: #fff;
  font-weight: 300;
  text-align: center;

  > li:first-of-type {
    border-right: 1px solid #fff;
  }

  > li:last-of-type {
    width: 70%;
  }

  ::after {
    content: '';
    position: absolute;
    top: -20%;
    bottom: 0;
    left: 0;
    width: 10%;
    height: 140%;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 10%,
      rgba(255, 255, 255, 0.6) 20%,
      rgba(255, 255, 255, 0.65) 50%,
      rgba(255, 255, 255, 0.6) 80%,
      rgba(255, 255, 255, 0.2) 90%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: rotate(15deg);
    animation: ${flowLarge} 6s cubic-bezier(0.83, 0, 0.17, 1) forwards infinite;

    @media ${queries.s} {
      animation: ${flow} 6s cubic-bezier(0.83, 0, 0.17, 1) forwards infinite;
    }
  }

  @media ${queries.huge} {
    font-size: 14px;
  }

  @media ${queries.xl} {
    margin-left: 5%;
  }

  @media ${queries.l} {
    margin-left: 0;
  }

  @media ${queries.s} {
    width: 70%;
    margin: auto;
    font-size: 12px;
  }

  @media ${queries.xs} {
    width: 100%;
    padding: 1em;
    font-size: 10px;
  }

  @media ${queries.xxsplus} {
    margin: 2em auto;
  }
`;

const InBetween = styled.p`
  margin: 4.6875vw 0 4.166667vw;
  font-weight: 600;
  font-size: 42px;
  text-align: center;

  strong {
    color: ${({ theme }) => theme.getColor('accent')};
  }

  @media ${queries.huge} {
    font-size: 38px;
  }

  @media ${queries.xxl} {
    font-size: 34px;
  }

  @media ${queries.xs} {
    font-size: 28px;
  }

  @media ${queries.xxsplus} {
    font-size: 24px;
  }
`;

export const Sibosgastrin = ({
  copy,
  cssClass,
  images,
}) => {
  const { item: { text: list } } = copy.find(({ item }) => item.label === 'list');
  const { image: { file: rightImage } } = images.find(({ image }) => image.label === 'list');

  const { item: { text: redLeft } } = copy.find(({ item }) => item.label === 'redLeft');
  const { item: { text: redRight } } = copy.find(({ item }) => item.label === 'redRight');

  const { item: { text: inBetween } } = copy.find(({ item }) => item.label === 'inBetween');

  const { item: { text: leftGerm } } = copy.find(({ item }) => item.label === 'leftGerm');
  const { item: { text: rightGerm } } = copy.find(({ item }) => item.label === 'rightGerm');
  const { image: { file: germRightImage } } = images.find(({ image }) => image.label === 'germRight');
  const { image: { file: germLeftImage } } = images.find(({ image }) => image.label === 'germLeft');

  const { item: { text: frameHeading } } = copy.find(({ item }) => item.label === 'frameHeading');
  const { item: { text: frameContent } } = copy.find(({ item }) => item.label === 'frameContent');

  const { item: { text: no3 } } = copy.find(({ item }) => item.label === 'no3');
  const { item: { text: target } } = copy.find(({ item }) => item.label === 'target');
  const { image: { file: no3Image } } = images.find(({ image }) => image.label === 'no3');
  const { image: { file: targetImage } } = images.find(({ image }) => image.label === 'target');

  const germLeftRef = createRef();
  const germRightRef = createRef();
  const packageRef = createRef();
  const listRef = createRef();
  const redRef = createRef();
  const staticRef = createRef();

  const sanitizeConfig = {
    allowedTags: [
      'strong',
      'em',
      'i',
      'b',
      'li',
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
      filter: 'brightness(1.1) saturate(1.3)',
    },
    {
      delay: stagger(0.5),
      direction: 'alternate',
      duration: 1,
      easing: 'ease-in-out',
      repeat: Infinity,
    });

    animate(germs, {
      transform: [
        'rotate(-20deg)',
        'rotate(20deg)',
      ],
    },
    {
      delay: stagger(0.5),
      direction: 'alternate',
      duration: 1,
      easing: 'linear',
    });
  };

  useEffect(() => {
    animateItems();
  }, []);

  useEffect(() => {
    const { current: packageNode } = packageRef;
    const { current: listNode } = listRef;
    const { current: staticNode } = staticRef;
    let packageObserver;

    if (listNode) {
      const animationTargets = listNode.querySelectorAll('li');

      const listKeyframes = {
        transform: [
          'scale(1)',
          'scale(1.1)',
          'scale(1)',
        ],
      };

      const listOptions = {
        duration: 1,
      };

      const sequence = Array.from(animationTargets).map(element => [
        element,
        listKeyframes,
        listOptions,
      ]);

      timeline(sequence);
    }

    if (packageNode) {
      const packageKeyframes = {
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
        if (isIntersecting && !animationHasFired) {
          animate(packageNode, packageKeyframes, animationOptions);
          setAnimationHasFired(true);
          packageObserver.unobserve(staticNode);
        }
      }, observerConfig);

      packageObserver.observe(staticNode);
    }
  }, []);

  return (
    <Container className={cssClass}>
      <Wrapper
        $wrap
        align="center"
        className={cssClass}
        flex
        justify="space-between"
        ref={staticRef}
      >
        <List
          dangerouslySetInnerHTML={{ __html: sanitize(list, sanitizeConfig) }}
          ref={listRef}
        />
        <Package
          image={rightImage}
          innerRef={packageRef}
        />
        <Red ref={redRef}>
          <li dangerouslySetInnerHTML={{ __html: sanitize(redLeft, sanitizeConfig) }} />
          <li dangerouslySetInnerHTML={{ __html: sanitize(redRight, sanitizeConfig) }} />
        </Red>
      </Wrapper>
      <Wrapper>
        <InBetween dangerouslySetInnerHTML={{ __html: sanitize(inBetween, sanitizeConfig) }} />
      </Wrapper>
      <Wrapper>
        <GermList>
          <li>
            <Image
              image={germLeftImage}
              innerRef={germLeftRef}
            />
            <span dangerouslySetInnerHTML={{ __html: sanitize(leftGerm, sanitizeConfig) }} />
            {' '}
          </li>
          <li>
            <Image
              image={germRightImage}
              innerRef={germRightRef}
            />
            <span dangerouslySetInnerHTML={{ __html: sanitize(rightGerm, sanitizeConfig) }} />
          </li>
        </GermList>
      </Wrapper>
      <Wrapper>
        <FramedText>
          <h3>
            {sanitize(frameHeading, sanitizeConfig)}
          </h3>
          <p dangerouslySetInnerHTML={{ __html: sanitize(frameContent, sanitizeConfig) }} />
        </FramedText>
      </Wrapper>
      <Wrapper>
        <IconsList>
          <li>
            <Image image={no3Image} />
            <span dangerouslySetInnerHTML={{ __html: sanitize(no3, sanitizeConfig) }} />
          </li>
          <li>
            <Image image={targetImage} />
            <span dangerouslySetInnerHTML={{ __html: sanitize(target, sanitizeConfig) }} />
          </li>
        </IconsList>
      </Wrapper>
    </Container>
  );
};

Sibosgastrin.propTypes = {
  copy: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  cssClass: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

