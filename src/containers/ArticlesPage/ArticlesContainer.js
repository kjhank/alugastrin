import React, {
  createRef, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';

import { Main } from '@components';

import {
  Header, Pagination, Posts,
} from '@components/ArticlesPage';

export const ArticlesContainer = ({
  articlesPerPage,
  filters,
  headerImage,
  heading,
  initialPosts,
  intro,
  ...props
}) => {
  const [
    isPaginationVisible,
    setPaginationVisible,
  ] = useState(initialPosts.length > articlesPerPage);
  const [
    posts,
    setPosts,
  ] = useState(initialPosts.slice(0, articlesPerPage));

  const [
    pageCount,
    setPageCount,
  ] = useState(0);

  const [
    postsOffset,
    setPostsOffset,
  ] = useState(0);

  const [
    currentFilter,
    setCurrentFilter,
  ] = useState(0);

  const filtersRef = createRef();

  useEffect(() => {
    const endOffset = postsOffset + articlesPerPage;

    setPosts(initialPosts.slice(postsOffset, endOffset));
    setPageCount(Math.ceil(initialPosts.length / articlesPerPage));
  }, [
    postsOffset,
    articlesPerPage,
  ]);

  const handlePagination = ({ selected }) => {
    const newOffset = (selected * articlesPerPage) % initialPosts.length;

    setPostsOffset(newOffset);

    filtersRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (currentFilter) {
      const filteredPosts = initialPosts.filter(post => post.categories.includes(currentFilter));

      setPosts(filteredPosts);
    } else {
      setPosts(initialPosts);
    }
  }, [currentFilter]);

  return (
    <Main
      hasNoMargin
      {...props}
    >
      <Header
        articlesPerPage={articlesPerPage}
        currentFilter={currentFilter}
        filters={filters}
        filtersRef={filtersRef}
        heading={heading}
        image={headerImage}
        initialPosts={initialPosts}
        intro={intro}
        setCurrentFilter={setCurrentFilter}
        setPaginationVisible={setPaginationVisible}
        setPosts={setPosts}
      />
      {posts && <Posts posts={posts} />}
      {isPaginationVisible && (
        <Pagination
          handlePagination={handlePagination}
          pageCount={pageCount}
        />
      )}
    </Main>
  );
};

ArticlesContainer.propTypes = {
  articlesPerPage: PropTypes.number.isRequired,
  filters: PropTypes.shape({}).isRequired,
  headerImage: PropTypes.shape({}).isRequired,
  heading: PropTypes.string.isRequired,
  initialPosts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  intro: PropTypes.string.isRequired,
};

