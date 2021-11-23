import React, {
  createRef, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import {
  animate, stagger,
} from 'motion';

import * as SVG from './svgs';
import {
  AnimationContainer,
} from './Animation.styled';
import {
  BackgroundImage, Image,
} from './Hero.styled';

export const Animation = ({
  background, cssClass, images,
}) => {
  const [variant] = cssClass?.split(' ') || [cssClass];

  const animatedComponents = {
    alugastrin: SVG.Alu,
    alugastrin3forte: SVG.Forte,
  };

  const childRef = createRef();
  const backgroundRef = createRef();
  const backgroundImageRef = createRef();

  const Child = animatedComponents[variant];

  const animateItems = () => {
    const { current: vectorElement } = childRef;

    const targets = vectorElement.querySelectorAll('.animationTarget');

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

  const animationBackground = images.length > 0 ? images?.find(({ image }) => image.label === 'animationBackground') : null;

  const animateBackground = () => {
    const { current } = backgroundRef;
    const backgroundElement = current.querySelector('img');
    const { current: backgroundPicture } = backgroundImageRef;
    const backgroundImageElement = backgroundPicture?.querySelector('img');

    if (backgroundImageElement) {
      animate(
        backgroundImageElement,
        {
          transform: 'rotate(360deg)',
        },
        {
          direction: 'normal',
          duration: 8,
          easing: 'linear',
          repeat: Infinity,
        }
      );
    }

    animate(
      backgroundElement, {
        filter: 'saturate(1.5) contrast(1.2)',
      },
      {
        direction: 'alternate',
        duration: 2,
        easing: 'ease-in-out',
        repeat: Infinity,
      }
    );
  };

  useEffect(() => {
    animateBackground();
    animateItems();
  }, []);

  return (
    <AnimationContainer className={cssClass}>
      {animationBackground && (
        <BackgroundImage
          className={`background background--${variant}`}
          image={animationBackground.image.file}
          innerRef={backgroundImageRef}
          isLazy={false}
        />
      )}
      <Image
        className={`image image--${variant}`}
        image={background}
        innerRef={backgroundRef}
        isLazy={false}
      />
      <Child
        className={`parent parent--${variant}`}
        innerRef={childRef}
      />
    </AnimationContainer>
  );
};

Animation.propTypes = {
  background: PropTypes.shape({}).isRequired,
  cssClass: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({})),
};

Animation.defaultProps = {
  images: null,
};
