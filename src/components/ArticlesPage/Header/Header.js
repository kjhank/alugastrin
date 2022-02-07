import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';

import { PageHeading } from '@components/styled';

import {
  Background, Intro, PortraitBackground, StyledHeader,
} from './Header.styled';

import { FilterSearch } from './FilterSearch';

export const Header = ({
  articlesPerPage,
  currentFilter,
  filters,
  filtersRef,
  heading,
  image,
  imagePortrait,
  initialPosts,
  intro,
  setCurrentFilter,
  setPaginationVisible,
  setPosts,
}) => (
  <StyledHeader>
    <Container>
      <Background
        image={image}
        isLazy={false}
      />
      <PortraitBackground
        image={imagePortrait}
        isLazy={false}
      />
      <PageHeading>{heading}</PageHeading>
      <Intro>{intro}</Intro>
      <FilterSearch
        articlesPerPage={articlesPerPage}
        currentFilter={currentFilter}
        filters={filters}
        initialPosts={initialPosts}
        innerRef={filtersRef}
        setCurrentFilter={setCurrentFilter}
        setPaginationVisible={setPaginationVisible}
        setPosts={setPosts}
      />
    </Container>
  </StyledHeader>
);

Header.propTypes = {
  articlesPerPage: PropTypes.number.isRequired,
  currentFilter: PropTypes.number.isRequired,
  filters: PropTypes.shape({}).isRequired,
  filtersRef: PropTypes.shape({}).isRequired,
  heading: PropTypes.string.isRequired,
  image: PropTypes.shape({}).isRequired,
  imagePortrait: PropTypes.shape({}).isRequired,
  initialPosts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  intro: PropTypes.string.isRequired,
  setCurrentFilter: PropTypes.func.isRequired,
  setPaginationVisible: PropTypes.func.isRequired,
  setPosts: PropTypes.func.isRequired,
};

