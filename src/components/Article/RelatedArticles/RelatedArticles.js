import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';

import {
  Article, Heading, Link, List, Section, Wrapper,
} from './RelatedArticles.styled';

export const RelatedArticles = ({ articles }) => (
  <Section>
    <Container>
      <Wrapper>
        <Heading>Powiązane artykuły:</Heading>
        {/* TODO: not hardcoded ^ */}
        <List>
          {articles.map(({ relatedPost }) => (
            <Article key={relatedPost.ID}>
              <Link to={`/baza-wiedzy/${relatedPost.post_name}`}>
                {relatedPost.post_title}
              </Link>
            </Article>
          ))}
        </List>
      </Wrapper>
    </Container>
  </Section>
);

RelatedArticles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
