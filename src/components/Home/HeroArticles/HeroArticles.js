import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';
import { ArrowRight } from '@icons';

import {
  AllArticlesLink, Heading, Image, Intro, Link, List, Section, SingleArticle, Title, Wrapper,
} from './HeroArticles.styled';

export const HeroArticles = ({ content }) => (
  <Section>
    <Container>
      <Heading>{content.heading}</Heading>
      <Wrapper>
        <List>
          {content.articles.map(({
            article, image, intro, linkText,
          }) => (
            <SingleArticle key={article.ID}>
              <Image image={image} />
              <Title>{article.post_title}</Title>
              <Intro>{intro}</Intro>
              <Link to={`/${article.post_name}`}>{linkText}</Link>
            </SingleArticle>
          ))}
        </List>
        <AllArticlesLink to="/baza-wiedzy/">
          {content.allArtsLinkText}
          <ArrowRight />
        </AllArticlesLink>
      </Wrapper>
    </Container>
  </Section>
);

HeroArticles.propTypes = {
  content: PropTypes.shape({
    allArtsLinkText: PropTypes.string,
    articles: PropTypes.arrayOf(PropTypes.shape({})),
    heading: PropTypes.string,
  }).isRequired,
};
