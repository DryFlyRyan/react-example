import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

import { queryDefaults } from '../../enums';
import { createQueryParams } from '../../utils';
import { useQuery } from '../../hooks';

import ResultCard from '../ResultCard/ResultCard';

import {
  StyledResultListContainer,
  TopBar,
  CountText,
  PaginationContainer,
  PaginationButton,
  PaginationButtonIcon,
} from './ResultList.styles';


const buildResults = (results) => {
  if (!results) {
    return []
  }

  return results.map((result) => (
    <ResultCard
      result={result}
      key={result.id}
    />
  ))
};

const formatCountText = (resultCount) => {
  const formattedCount = resultCount.toLocaleString('us-EN');
  return `${formattedCount} repository result${resultCount === 1 ? '' : 's'}`
}

const ResultList = ({
  searchResults = {
    items: [],
    total_count: 0,
  },
} = {}) => {
  const history = useHistory();
  const {
    items: results,
    total_count: resultCount,
  } = searchResults;

  const query = useQuery();
  const { page } = query;
  const pageNumber = parseInt(page, 10);

  const isLastPage = useMemo(() => {
    return (
      !resultCount
      || results.length < queryDefaults.per_page // Miiiight be a little risky
      || (pageNumber * queryDefaults.per_page) + 1 > resultCount
    );
  }, [resultCount, results, pageNumber])

  const incrementPage = () => {
    if (isLastPage) {
      return;
    }

    history.push({ search: createQueryParams({ ...query, page: pageNumber + 1 })})
  }

  const decrementPage = () => {
    if (pageNumber <= 1) {
      return;
    }

    history.push({ search: createQueryParams({ ...query, page: pageNumber - 1 })})
  }

  return (
    <StyledResultListContainer>
      <TopBar>
        <CountText>
          {formatCountText(resultCount || 0) /* we should never see zero here unless that's in the call, so mainly an extra fallback */}
        </CountText>
        <PaginationContainer>
          <PaginationButton
            data-testid="decrement-page-button"
            disabled={!page || pageNumber <= 1}
            onClick={decrementPage}
          >
            <PaginationButtonIcon
              icon={faChevronLeft}
            />
          </PaginationButton>
          <PaginationButton
            data-testid="increment-page-button"
            disabled={isLastPage}
            onClick={incrementPage}
          >
            <PaginationButtonIcon
              icon={faChevronRight}
            />
          </PaginationButton>
        </PaginationContainer>
      </TopBar>
      {useMemo(() => buildResults(results), [results])}
    </StyledResultListContainer>
  )
}

ResultList.propTypes = {
  searchResults: PropTypes.shape().isRequired,
};

export default ResultList;
