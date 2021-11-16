import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';

import {
  ArticleBody, Heading, Image, InnerContainer, Intro, Section, Text,
} from './Body.styled';

export const Body = ({
  intro, sections,
}) => (
  <ArticleBody>
    <Container>
      <InnerContainer>
        <Intro>{intro}</Intro>
        {sections.map(section => {
          const {
            heading, image, text, type,
          } = section;

          return (
            <Section
              as={type === 'footnotes' && 'footer'}
              hasSmallerText={type === 'footnotes'}
              key={heading}
              ref={section.innerRef}
            >
              {heading && <Heading isSmall={type === 'footnotes'}>{heading}</Heading>}
              <Text
                dangerouslySetInnerHTML={{ __html: text }}
                isNarrow={!!image}
              />
              {image && <Image image={image} />}
            </Section>
          );
        })}
      </InnerContainer>
    </Container>
  </ArticleBody>
);

Body.propTypes = {
  intro: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

