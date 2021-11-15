import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';

import {
  ArticleBody, Heading, Image, Intro, Section, Text, Wrapper,
} from './Body.styled';

export const Body = ({
  intro, sections,
}) => (
  <ArticleBody>
    <Container>
      <Wrapper>
        <Intro>{intro}</Intro>
        {sections.map(section => {
          const {
            image, text, type,
          } = section;

          return (
            <Section
              as={type === 'footnotes' && 'footer'}
              hasSmallerText={type === 'footnotes'}
              ref={section.innerRef}
            >
              <Heading isSmall={type === 'footnotes'}>{section.heading}</Heading>
              <Text
                dangerouslySetInnerHTML={{ __html: text }}
                isNarrow={!!image}
              />
              {image && <Image image={image} />}
            </Section>
          );
        })}
      </Wrapper>
    </Container>
  </ArticleBody>
);

Body.propTypes = {
  intro: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

