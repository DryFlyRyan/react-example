import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import ResultCard from '../ResultCard/ResultCard';

import {
  StyledResultListContainer,
  TopBar,
  CountText,
  // PaginationContainer,
  // PaginationButton,
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
  const {
    items: results,
    total_count: resultCount,
  } = searchResults;

  const ResultCards = useMemo(() => buildResults(results), [results])
  return (
    <StyledResultListContainer>
      <TopBar>
        <CountText>
          {formatCountText(resultCount || 0)}
        </CountText>
      </TopBar>
      {ResultCards}
    </StyledResultListContainer>
  )
}

ResultList.propTypes = {
  searchResults: PropTypes.shape().isRequired,
};

export default ResultList;
