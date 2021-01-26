import React, { useState } from 'react';

import {
  Search,
} from './components';

function App() {
  // const [{ repositories }, dispatch] = useReducer(combinedReducer, updateStore())
  const [previousSearchQuery, updatePreviousSearchQuery] = useState('')
  const [searchQuery, updateSearchQuery] = useState('');
  const [isSearching, updateIsSearching] = useState(false);
  const [currentPage, updateCurrentPage] = useState(1);
  const [searchSort, updateSearchSort] = useState({ value: '', label: 'Best Match'},);
  const [searchOrder, updateSearchOrder] = useState({ value: 'desc', label: 'Descending'},) 

  return (
    <div className="App">
        <Search
          isSearching={isSearching}
          searchQuery={searchQuery}
          onChange={e => updateSearchQuery(e.target.value)}
          searchRepos={() => {}}
          searchOrder={searchOrder}
          searchSort={searchSort}
          onOrderChange={() => {}}
          onSortChange={() => {}}
        />
      {/* <ContentWindow /> */}
    </div>
  );
}

export default App;
