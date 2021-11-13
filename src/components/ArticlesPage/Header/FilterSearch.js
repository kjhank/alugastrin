import React, {
  useCallback, useState,
} from 'react';
import PropTypes from 'prop-types';

import { MagnifyingGlass } from '@icons';
import { debounceFunction } from '@utils';
import {
  FilterButton, FiltersSearchWrapper, SearchInput, SearchWrapper,
} from './Header.styled';

const DEBOUNCE_TIMEOUT = 300;

export const FilterSearch = ({
  articlesPerPage, currentFilter, filters: {
    filterButtons, searchText,
  }, initialPosts, innerRef, setCurrentFilter, setPaginationVisible, setPosts,
}) => {
  const [
    searchInput,
    setSearchInput,
  ] = useState('');

  const handleFilters = ({ term_id }) => {
    setCurrentFilter(current => (current === term_id ? 0 : term_id));
  };

  const handleSearch = value => {
    console.log(value);
    const filteredPosts = initialPosts
      .filter(post => post.title.rendered.toLowerCase().includes(value));

    setPosts(value ? filteredPosts : initialPosts.slice(0, articlesPerPage));
    setPaginationVisible(filteredPosts.length > articlesPerPage);
  };

  const debounceInput = useCallback(
    debounceFunction(newVal => handleSearch(newVal), DEBOUNCE_TIMEOUT), []
  );

  const handleInput = ({ target: { value } }) => {
    setSearchInput(value);
    debounceInput(value);
  };

  return (
    <FiltersSearchWrapper ref={innerRef}>
      {filterButtons.map(({ filter }) => (
        <FilterButton
          isSelected={currentFilter === filter.term_id}
          key={filter.slug}
          onClick={() => handleFilters(filter)}
        >
          {filter.name}
        </FilterButton>
      ))}
      <SearchWrapper>
        <SearchInput
          onChange={handleInput}
          placeholder={searchText}
          value={searchInput}
        />
        <MagnifyingGlass />
      </SearchWrapper>
    </FiltersSearchWrapper>
  );
};

FilterSearch.propTypes = {
  articlesPerPage: PropTypes.number.isRequired,
  currentFilter: PropTypes.number.isRequired,
  filters: PropTypes.shape({
    filterButtons: PropTypes.arrayOf(PropTypes.shape({})),
    searchText: PropTypes.string,
  }).isRequired,
  initialPosts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  innerRef: PropTypes.shape({}).isRequired,
  setCurrentFilter: PropTypes.func.isRequired,
  setPaginationVisible: PropTypes.func.isRequired,
  setPosts: PropTypes.func.isRequired,
};

