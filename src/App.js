import React, { useEffect, useState } from 'react';
import {
  Route,
  Switch,
} from "react-router-dom";

import {
  ResultList,
  Search,
} from './components';

import { queryDefaults } from './enums';
import { fetchGithubRepositories } from './dataHandlers'
import { useGetSearchQuery, useQuery } from './utils';

function App() {
  const [isSearching, updateIsSearching] = useState(false);
  const [searchResults, updateSearchResults] = useState({});

  const {
    order,
    sort,
    page,
  } = useQuery();

  const searchQuery = useGetSearchQuery();

  useEffect(() => {
    const searchRepositories = async () => {
      if (
        !searchQuery
        || !order
        || !page
        || sort === undefined // '' is a valid value for sort
      ) {
        return;
      }

      updateIsSearching(true);
  
      const response = await fetchGithubRepositories({
        order,
        sort,
        page,
        q: searchQuery,
        per_page: queryDefaults.per_page,
      });
      
      updateSearchResults(response);
      updateIsSearching(false);
    }

    searchRepositories()
  }, [searchQuery, order, sort, page])
  

  return (
    <div className="App">
      <Search
        isSearching={isSearching}
      />
      <Switch>
        <Route path="/:query">
          {(
            searchResults
            && searchResults.items
            && searchResults.items.length
            && !isSearching
          ) &&
            <ResultList
              searchResults={searchResults}
            />
          }
        </Route>
      </Switch>
    </div>
  );
}

export default App;
