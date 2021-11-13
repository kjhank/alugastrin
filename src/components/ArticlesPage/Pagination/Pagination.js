import React from 'react';
import PropTypes from 'prop-types';

import { ArrowRight } from '@icons';

import {
  Container, StyledPagination,
} from './Pagination.styled';

export const Pagination = ({
  handlePagination, pageCount,
}) => (
  <Container>
    <StyledPagination
      activeLinkClassName="pagination__link--active"
      breakLabel="..."
      nextLabel={<ArrowRight />}
      nextLinkClassName="pagination__link pagination__link--next"
      onPageChange={handlePagination}
      pageCount={pageCount}
      pageLinkClassName="pagination__link"
      pageRangeDisplayed={4}
      previousLabel={<ArrowRight />}
      previousLinkClassName="pagination__link pagination__link--previous"
    />
  </Container>
);

Pagination.propTypes = {
  handlePagination: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
};

