import React from 'react';
import PropTypes from 'prop-types';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';

import {
  Banner,
  SearchInput,
  HiddenLabel,
  GrowContainer,
  SearchForm,
  LoadingIcon,
  SelectContainer,
} from './Search.styles';

const searchSorts = [
  { value: '', label: 'Best Match'},
  { value: 'stars', label: 'Stars'},
  { value: 'forks', label: 'Forks'},
  { value: 'help-wanted-issues', label: 'Help Wanted Issues'},
  { value: 'updated', label: 'Updated'},
];

const order = [
  { value: 'desc', label: 'Descending'},
  { value: 'asc', label: 'Ascending'},
];

const Search = ({
  searchQuery,
  onChange,
  searchRepos,
  isSearching,
  searchOrder,
  searchSort,
  onOrderChange,
  onSortChange,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    return searchRepos();
  }

  const handleSearchSortChange = (selection) => onSortChange(selection);
  const handleSearchOrderChange = (selection) => onOrderChange(selection);

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
              onChange={onChange}
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
          value={searchSort}
          options={searchSorts}
          onChange={handleSearchSortChange}
        />
        <Select
          value={searchOrder}
          options={order}
          onChange={handleSearchOrderChange}
          isDisabled={searchSort.value === ''}
        />
      </SelectContainer>
    </Banner>
  )
};

Search.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  searchRepos: PropTypes.func.isRequired,
  isSearching: PropTypes.bool.isRequired,
  searchOrder: PropTypes.shape().isRequired,
  searchSort: PropTypes.shape().isRequired,
  onOrderChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
};

export default Search;
