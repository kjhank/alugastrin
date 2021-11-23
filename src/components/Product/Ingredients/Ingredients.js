import React, {
  createRef, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';
import { timeline } from 'motion';

import { LineHeading } from '@components/styled';

import {
  Container,
  FramedText,
  Icon,
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
    const { current: iconsElement } = stepsRef;
    const listElements = iconsElement.querySelectorAll('picture');

    const listKeyframes = {
      transform: 'scale(1.1)',
    };

    const listOptions = {
      direction: 'alternate',
      duration: 0.5,
      easing: 'ease-in-out',
    };

    const sequence = Array.from(listElements).map(element => [
      element,
      listKeyframes,
      listOptions,
    ]);

    timeline(sequence, {
      delay: 3,
      direction: 'alternate',
      repeat: Infinity,
    });
  };

  useEffect(() => {
    animateItems();
  }, []);

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
              ref={index === 0 ? iconsRef : null}
            >
              {item.descriptions.map(({
                ingredient: {
                  icon, text, variant,
                },
              }) => (
                <IconItem
                  align={variant === 'sideBySide' ? 'left' : 'center'}
                  direction={variant === 'sideBySide' ? 'row' : 'column'}
                  key={text}
                  padding={variant === 'sideBySide' ? 'right' : 'sides'}
                >
                  <Icon
                    image={icon}
                    margin={variant === 'sideBySide' ? 'right' : 'top'}
                    size={variant === 'sideBySide' ? 131 : 109}
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

