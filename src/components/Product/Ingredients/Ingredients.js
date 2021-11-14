import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

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
}) => (
  <Section>
    <Container>
      {heading && <LineHeading>{heading}</LineHeading>}
      {list && <ListWrapper dangerouslySetInnerHTML={{ __html: sanitize(list, { allowedClasses: { span: ['highlight'] } }) }} />}
      {descriptions.length > 0 && descriptions.map(({ item }) => (
        <IconsWrapper key={item.text}>
          {item.text && (
          <TextWrapper
            dangerouslySetInnerHTML={{ __html: sanitize(item.text) }}
          />
          ) }
          <IconsList>
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
      <StepsList>
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

Ingredients.propTypes = {
  data: PropTypes.shape({
    descriptions: PropTypes.arrayOf(PropTypes.shape({})),
    endIcons: PropTypes.arrayOf(PropTypes.shape({})),
    framedText: PropTypes.string,
    heading: PropTypes.string,
    list: PropTypes.string,
  }).isRequired,
};

