import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router-dom";
import Select from 'react-select';

import { searchOrders, searchSorts, queryDefaults } from '../../enums';
import {
  useQuery,
  createQueryParams,
  useFindSearchOrder,
  useFindSearchSort,
  useGetSearchQuery,
} from '../../utils';

import {
  Banner,
  SearchInput,
  HiddenLabel,
  GrowContainer,
  SearchForm,
  LoadingIcon,
  SelectContainer,
} from './Search.styles';

const Search = ({ isSearching }) => {
  const searchQueryRouteParam = useGetSearchQuery();
  const [searchQuery, updateSearchQuery] = useState(searchQueryRouteParam);
  const history = useHistory();
  const query = useQuery();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push({
      pathname: searchQuery,
      search: createQueryParams({ ...queryDefaults, ...query }),
    });
  }

  const handleSearchSortChange = (selection) => history.push({
    search: createQueryParams({
      ...query,
      sort: selection.value,
      order: selection.value
        ? query.order
        : searchOrders[0].value,
    })
  })
  
  const handleSearchOrderChange = (selection) => history.push({
    search: createQueryParams({ ...query, order: selection.value })
  })

  const sortValue = useFindSearchSort();
  const orderValue = useFindSearchOrder();

  return (
    <Banner>
      <GrowContainer>
        <SearchForm
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <HiddenLabel>
            <SearchInput
              spellCheck="false"
              autoComplete="off"
              type="text"
              name="search"
              placeholder="Search ..."
              value={searchQuery}
              onChange={e => updateSearchQuery(e.target.value)}
            />
            <LoadingIcon
              icon={faSpinner}
              theme={{ isSearching }}
            />
          </HiddenLabel>
        </SearchForm>
      </GrowContainer>
      <SelectContainer>
        <Select
          value={sortValue}
          options={searchSorts}
          onChange={handleSearchSortChange}
        />
        <Select
          value={orderValue}
          options={searchOrders}
          onChange={handleSearchOrderChange}
          isDisabled={sortValue.value === ''}
        />
      </SelectContainer>
    </Banner>
  )
};

Search.propTypes = {
  isSearching: PropTypes.bool.isRequired,
};

export default Search;
