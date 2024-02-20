import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';
import { Link } from 'gatsby';

import { ArrowRight } from '@icons';
import { Container } from '@components';

import {
  Image, ImageWrapper, Intro, MoreText, Post, PostsList, Title,
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
            <ImageWrapper>
              <Image image={thumbnail} />
              <MoreText>
                Czytaj więcej
                {' '}
                <ArrowRight />
              </MoreText>
            </ImageWrapper>
            <Title dangerouslySetInnerHTML={{ __html: sanitize(renderedTitle) }} />
            <Intro dangerouslySetInnerHTML={{
              __html: sanitize(description, {
                allowedTags: [
                  'i',
                  'em',
                ],
              }),
            }}
            />
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

