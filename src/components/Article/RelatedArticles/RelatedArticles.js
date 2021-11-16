import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';
import { InnerContainer } from '@components/styled';

import {
  Article, Heading, Link, List, Section,
} from './RelatedArticles.styled';

export const RelatedArticles = ({
  articles, heading,
}) => (
  <Section>
    <Container>
      <InnerContainer>
        <Heading>{heading}</Heading>
        <List>
          {articles.length > 0 && articles?.map(({ post }) => (
            <Article key={post.ID}>
              <Link to={`/baza-wiedzy/${post.post_name}`}>
                {post.post_title}
              </Link>
            </Article>
          ))}
        </List>
      </InnerContainer>
    </Container>
  </Section>
);

RelatedArticles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  heading: PropTypes.string.isRequired,
};
