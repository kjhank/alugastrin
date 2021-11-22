import React, {
  createRef, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import {
  animate, stagger,
} from 'motion';

import * as SVG from './svgs';
import {
  AnimationContainer, Item,
} from './Animation.styled';
import { Image } from './Hero.styled';

export const Animation = ({
  background, cssClass,
}) => {
  const [variant] = cssClass?.split(' ') || [cssClass];
  const backgroundRef = createRef();

  const animatedComponents = {
    alugastrin: [
      SVG.AluFast,
      SVG.AluStomach,
    ],
    alugastrin3forte: [
      SVG.Mucosave,
      SVG.E170,
      SVG.E401,
    ],
  };

  const componentLines = {
    alugastrin: [
      SVG.AluLineFast,
      SVG.AluLineStomach,
    ],
    alugastrin3forte: [
      SVG.MucosLine,
      SVG.E170Line,
      SVG.E401Line,
    ],
  };

  const children = animatedComponents[variant]?.map(component => {
    const innerRef = createRef();

    return {
      component,
      innerRef,
    };
  });

  const lines = componentLines[variant]?.map(component => {
    const innerRef = createRef();

    return {
      component,
      innerRef,
    };
  });

  const animateItems = () => {
    const targets = children.map(element => element.innerRef.current);

    animate(targets, {
      transform: 'scale(1.1)',
    },
    {
      delay: stagger(0.4),
      direction: 'alternate',
      duration: 1,
      easing: 'linear',
      repeat: Infinity,
    });
  };

  const animateBackground = () => {
    const { current } = backgroundRef;
    const element = current.querySelector('img');

    animate(
      element, {
        filter: 'brightness(1.1) saturate(1.5)',
      },
      {
        direction: 'alternate',
        duration: 2,
        easing: 'ease-in-out',
        repeat: Infinity,
      }
    );
  };

  // const draw = progress => ({
  //   strokeDashoffset: 1 - progress,
  //   visibility: 'visible',
  // });

  // const drawLines = () => {
  //   const targets = lines.map(element => element.innerRef.current.querySelector('line, path'));

  //   timeline([
  //     [
  //       targets[1],
  //       draw(1),
  //       { duration: 0.8 },
  //     ],
  //   ]);
  // };

  useEffect(() => {
    animateBackground();
    animateItems();
    // drawLines();
  }, []);

  return (
    <AnimationContainer className={cssClass}>
      <Image
        className={cssClass}
        image={background}
        innerRef={backgroundRef}
        isLazy={false}
      />
      {children.map((child, index) => {
        const {
          component: Component, innerRef,
        } = child;

        const wrapperClass = `animated-${variant}--${index}`;
        const componentClass = `animated-${variant}--${index}-item`;

        return (
          <Item
            className={wrapperClass}
            ref={innerRef}
          >
            <Component className={componentClass} />
          </Item>
        );
      })}
      {lines.map((child, index) => {
        const {
          component: Component, innerRef,
        } = child;

        const wrapperClass = `animated-${variant}--${index}-line`;
        const componentClass = `animated-${variant}--${index}-line`;

        return (
          <Item
            className={wrapperClass}
            ref={innerRef}
          >
            <Component
              className={componentClass}
            />
          </Item>
        );
      })}
    </AnimationContainer>
  );
};

Animation.propTypes = {
  background: PropTypes.shape({}).isRequired,
  cssClass: PropTypes.string.isRequired,
};
