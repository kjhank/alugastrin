import React, {
  createRef, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';
import {
  animate, stagger,
} from 'motion';

import { LineHeading } from '@components/styled';

import {
  Container,
  FramedText,
  Icon,
  IconBackground,
  IconItem,
  IconsList,
  IconsWrapper,
  ListWrapper,
  Section,
  StepsList,
  TextWrapper,
} from './Ingredients.styled';

export const Ingredients = ({
  data: {
    endIcons, framedText, heading, descriptions, list,
  },
}) => {
  const iconsRef = createRef();
  const stepsRef = createRef();

  const animateItems = () => {
    const { current: stepsNode } = stepsRef;

    if (stepsNode) {
      const stepNodes = stepsNode.querySelectorAll('picture');

      const keyframes = {
        transform: [
          'scale(1)',
          'scale(1.2)',
          'scale(1)',
        ],
      };

      const animateConfig = {
        delay: stagger(1),
        duration: 1,
        easing: 'ease-in-out',
      };

      const stepsObserver = new IntersectionObserver(([
        {
          isIntersecting,
        },
      ]) => {
        if (isIntersecting) {
          animate(stepNodes, keyframes, animateConfig);

          stepsObserver.disconnect();
        }
      });

      stepNodes.forEach(node => stepsObserver.observe(node));
    }
  };

  const animateBackgrounds = () => {
    const { current: iconsNode } = iconsRef;

    if (iconsNode) {
      const observerConfig = { threshold: [0.9] };
      const targets = iconsNode.querySelectorAll('.icon__background > img');
      const keyframes = { transform: 'rotate(360deg) translateZ(1px)' };
      const animateConfig = {
        duration: 3,
        easing: 'linear',
      };

      const iconsObserver = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) {
          animate(targets, keyframes, animateConfig);
          iconsObserver.disconnect();
        }
      }, observerConfig);

      targets.forEach(node => iconsObserver.observe(node));
    }
  };

  useEffect(() => {
    if (stepsRef.current) {
      animateItems();
    }
  }, [stepsRef]);

  useEffect(() => {
    if (iconsRef.current) {
      animateBackgrounds();
    }
  }, [iconsRef]);

  return (
    <Section>
      <Container>
        {heading && <LineHeading>{heading}</LineHeading>}
        {list && <ListWrapper dangerouslySetInnerHTML={{ __html: sanitize(list, { allowedClasses: { span: ['highlight'] } }) }} />}
        {descriptions.length > 0 && descriptions.map(({ item }, index) => (
          <IconsWrapper key={item.text}>
            {item.text && (
            <TextWrapper
              dangerouslySetInnerHTML={{ __html: sanitize(item.text) }}
            />
            ) }
            <IconsList
              columns={item.descriptions.length === 2 ? 2 : 3}
              ref={index === 0 ? iconsRef : null}
            >
              {item.descriptions.map(({
                ingredient: {
                  animatedBackground, icon, text, variant,
                },
              }) => (
                <IconItem
                  align={variant === 'sideBySide' ? 'left' : 'center'}
                  direction={variant === 'sideBySide' ? 'row' : 'column'}
                  key={text}
                  padding={variant === 'sideBySide' ? 'right' : 'sides'}
                  weight={variant === 'sideBySide' ? 700 : 400}
                >
                  {animatedBackground && (
                  <IconBackground
                    className="icon__background"
                    image={animatedBackground}
                  />
                  )}
                  <Icon
                    image={icon}
                    margin={variant === 'sideBySide' ? 'right' : 'top'}
                    size={variant === 'sideBySide' ? 131 : 109}
                    variant={variant}
                  />
                  {text}
                </IconItem>
              ))}
            </IconsList>
          </IconsWrapper>
        ))}
        {framedText && <FramedText>{framedText}</FramedText>}
        {endIcons.length > 0 && (
        <StepsList ref={stepsRef}>
          {endIcons.map(icon => (
            <IconItem
              direction="column"
              key={icon.text}
            >
              <Icon
                image={icon.image}
                size={114}
              />
              {icon.text}
            </IconItem>
          ))}
        </StepsList>
        )}
      </Container>
    </Section>
  );
};
Ingredients.propTypes = {
  data: PropTypes.shape({
    descriptions: PropTypes.arrayOf(PropTypes.shape({})),
    endIcons: PropTypes.arrayOf(PropTypes.shape({})),
    framedText: PropTypes.string,
    heading: PropTypes.string,
    list: PropTypes.string,
  }).isRequired,
};

