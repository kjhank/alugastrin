import React, {
  createRef, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';
import { animate } from 'motion';

import {
  Container, Video,
} from '@components';

import {
  Heading, Image, Wrapper,
} from './Hero.styled';

import { Sibosgastrin } from './Sibosgastrin';
import { Helicogastrin } from './Helicogastrin';
import { Fibegastrin } from './Fibegastrin';
import { MaxProtect } from './MaxProtect';

import { Animation } from './Animation';

export const Hero = ({
  cssClass,
  data: {
    copy, heading, image, images, package: packageImage,
  },
  isSecond,
  video,
}) => {
  const packageRef = createRef();
  const staticRef = createRef();
  const backgrounds = images ? images?.filter(item => item.image.label.includes('squares-')) : null;

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
    <Wrapper className={`hero-wrapper-${cssClass}`}>
      <Container className={cssClass}>
        {video && <Video {...video} />}
        {heading && (
          <Heading
            className={cssClass}
            dangerouslySetInnerHTML={{
              __html: sanitize(heading, {
                allowedTags: [
                  'br',
                  'span',
                  'strong',
                  'sup',
                ],
              }),
            }}
            isBold={!heading.includes('<strong>') || heading.includes('<br />')}
            isLarger={heading.includes('<strong>') || cssClass === 'max-protect'}
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
        {!isSecond && cssClass !== 'sibosgastrin' && cssClass !== 'helicogastrin' && cssClass !== 'max-protect' ?
          (
            <Animation
              background={image}
              cssClass={cssClass}
              images={images}
            />
          ) :
          null}
      </Container>
      {cssClass === 'max-protect' ?
        (
          <MaxProtect
            className={cssClass}
            copy={copy}
            images={images}
          />
        ) :
        null}
      {cssClass === 'fibegastrin' && (
        <Fibegastrin
          className={cssClass}
          copy={copy}
          images={images}
        />
      )}
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
      {backgrounds?.length > 0 && backgrounds.map(item => (
        <Image
          className={item.image.label}
          image={item.image.file}
          isLazy={false}
          key={item.image.label}
        />
      ))}
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
  video: PropTypes.shape({
    mp4: PropTypes.shape({}),
    poster: PropTypes.shape({
      url: PropTypes.string,
    }),
    webm: PropTypes.shape({}),
  }).isRequired,
};

Hero.defaultProps = {
  isSecond: false,
};
