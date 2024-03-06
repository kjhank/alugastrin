import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

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
        <Intro dangerouslySetInnerHTML={{ __html: sanitize(intro, { allowedTags: ['i'] }) }} />
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
              {heading && (
              <Heading
                dangerouslySetInnerHTML={{ __html: sanitize(heading, { allowedTags: ['i'] }) }}
                isSmall={type === 'footnotes'}
              />
              )}
              <Text
                dangerouslySetInnerHTML={{
                  __html: sanitize(text, {
                    allowedTags: [
                      'em',
                      'i',
                      'ul',
                      'li',
                      'ol',
                      'strong',
                      'b',
                    ],
                  }),
                }}
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

