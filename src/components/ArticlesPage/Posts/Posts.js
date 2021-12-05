import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';
import { Link } from 'gatsby';

import { Container } from '@components';

import {
  Image, Intro, MoreText, Post, PostsList, Title,
} from './Posts.styled';

export const Posts = ({ posts }) => (
  <Container>
    <PostsList>
      {posts.map(({
        acf: {
          description, thumbnail,
        }, slug, title: { rendered: renderedTitle },
      }) => (
        <Post key={slug}>
          <Link to={slug}>
            <Image image={thumbnail} />
            <Title dangerouslySetInnerHTML={{ __html: sanitize(renderedTitle) }} />
            <Intro>{description}</Intro>
            <MoreText>czytaj więcej</MoreText>
          </Link>
        </Post>
      ))}
    </PostsList>
  </Container>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

