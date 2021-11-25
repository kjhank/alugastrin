import React, {
  createRef, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';
import { animate } from 'motion';

import { Container } from '@components';

import {
  Heading, Image, Wrapper,
} from './Hero.styled';

import { Sibosgastrin } from './Sibosgastrin';
import { Helicogastrin } from './Helicogastrin';

import { Animation } from './Animation';

export const Hero = ({
  cssClass,
  data: {
    copy, heading, image, images, package: packageImage,
  },
  isSecond,
}) => {
  const packageRef = createRef();
  const staticRef = createRef();

  useEffect(() => {
    const { current: staticNode } = staticRef;
    const { current: packageNode } = packageRef;
    const observerConfig = { threshold: [0.9] };

    const keyframes = {
      opacity: 1,
      transform: 'translateX(0)',
    };

    const animationOptions = {
      delay: 0.5,
      duration: 0.5,
      easing: 'ease-in',
    };

    let packageObserver;

    if (packageNode) {
      packageObserver = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) {
          animate(packageNode, keyframes, animationOptions);

          packageObserver.unobserve(staticNode);
        }
      }, observerConfig);

      packageObserver.observe(staticNode);
    }

    return () => packageObserver?.unobserve(staticNode);
  }, []);

  return (
    <Wrapper>
      <Container className={cssClass}>
        {heading && (
        <Heading
          className={cssClass}
          dangerouslySetInnerHTML={{ __html: sanitize(heading) }}
          isBold={!heading.includes('<strong>') || heading.includes('<br />')}
          isLarger={heading.includes('<strong>')}
          lessPadding={isSecond}
        />
        )}
        {isSecond && image && (
          <Image
            className={`${cssClass} second--static`}
            image={image}
            innerRef={staticRef}
            isLazy={false}
          />
        )}
        {isSecond && packageImage && (
          <Image
            className={`${cssClass} second--package`}
            image={packageImage}
            innerRef={packageRef}
          />
        )}
        {!isSecond && cssClass !== 'sibosgastrin' && cssClass !== 'helicogastrin' && (
        <Animation
          background={image}
          cssClass={cssClass}
          images={images}
        />
        )}
      </Container>
      {cssClass === 'sibosgastrin' && (
      <Sibosgastrin
        copy={copy}
        cssClass={cssClass}
        images={images}
      />
      )}
      {cssClass === 'helicogastrin' && (
      <Helicogastrin
        copy={copy}
        cssClass={cssClass}
        images={images}
      />
      )}
    </Wrapper>
  );
};

Hero.propTypes = {
  cssClass: PropTypes.string.isRequired,
  data: PropTypes.shape({
    copy: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.shape({})),
      PropTypes.bool,
    ]),
    heading: PropTypes.string,
    image: PropTypes.oneOfType([
      PropTypes.shape({}),
      PropTypes.bool,
    ]),
    images: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.shape({})),
      PropTypes.bool,
    ]),
    package: PropTypes.oneOfType([
      PropTypes.shape({}),
      PropTypes.bool,
    ]),
  }).isRequired,
  isSecond: PropTypes.bool,
};

Hero.defaultProps = {
  isSecond: false,
};
