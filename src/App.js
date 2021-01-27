import React, { useState } from 'react';

import {
  ResultList,
  Search,
} from './components';

import { fetchGithubRepositories } from './dataHandlers'

function App() {
  const [currentPage, updateCurrentPage] = useState(1);
  const [isSearching, updateIsSearching] = useState(false);
  const [searchOrder, updateSearchOrder] = useState({ value: 'desc', label: 'Descending'},);
  const [searchQuery, updateSearchQuery] = useState('');
  const [searchResults, updateSearchResults] = useState({});
  const [searchSort, updateSearchSort] = useState({ value: '', label: 'Best Match'},);

  const searchRepositories = async ({
    page = currentPage,
    order = searchOrder.value,
    sort = searchSort.value,
  } = {}) => {
    if (searchQuery === '') {
      return;
    }

    updateIsSearching(true);

    const response = await fetchGithubRepositories({
      q: searchQuery,
      page,
      per_page: 10,
      order,
      sort,
    });

    updateSearchResults(response);
    updateIsSearching(false);
  }

  const handleSearchOrderChange = (order) => {
    if (searchQuery && order.value !== searchOrder.value) {
      searchRepositories({
        order: order.value,
        page: 1,
      });
    }

    updateCurrentPage(1);
    updateSearchOrder(order);
  }

  const handleSearchSortChange = (sort) => {
    if (searchQuery && sort.value !== searchSort.value) {
      searchRepositories({
        sort: sort.value,
        page: 1,
      });
    }

    updateCurrentPage(1);
    updateSearchSort(sort);
  }

  return (
    <div className="App">
        <Search
          isSearching={isSearching}
          searchQuery={searchQuery}
          onChange={e => updateSearchQuery(e.target.value)}
          searchRepos={searchRepositories}
          searchOrder={searchOrder}
          searchSort={searchSort}
          onOrderChange={handleSearchOrderChange}
          onSortChange={handleSearchSortChange}
        />
        <ResultList
          searchResults={searchResults}
        />
    </div>
  );
}

export default App;
