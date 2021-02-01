import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import ResultList from './ResultList';

const sampleResult = {
  "name": "react",
  "owner": {
    "avatar_url": "https://avatars.githubusercontent.com/u/69631?v=4",
  },
  "html_url": "https://github.com/facebook/react",
  "description": "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
  "created_at": "2013-05-24T16:15:54Z",
  "updated_at": "2021-02-01T01:05:29Z",
  "homepage": "https://reactjs.org",
  "language": "JavaScript",
};

const historyMock = {
  push: jest.fn(),
  location: {},
  listen: jest.fn(),
}

jest.mock('../../hooks', () => ({
  useFindSearchOrder: () => ({ value: 'desc', label: 'Descending'}),
  useFindSearchSort: () => ({ value: 'stars', label: 'Stars'}),
  useGetSearchQuery: jest.fn().mockReturnValue('react'),
  useQuery: () => ({
    order: 'desc',
    sort: 'stars',
    page: 2,
  }),
}));

const mockSearchResults = {
  items: new Array(10).fill(sampleResult)
    // Really just to kill the key warning because it's noisy
    .map(res => ({ ...res, id: Math.floor(Math.random() * 100000)} )),
  total_count: 30,
}

describe('Search.js', () => {
  test('Renders view correctly', () => {
    render(
      <Router history={historyMock} >
        <ResultList
          searchResults={mockSearchResults}
        />
      </Router>
    );

    expect(screen.getAllByText('react')).toHaveLength(10);
  });

  test('Changes page number correctly when decrement is pressed', () => {
    render(
      <Router history={historyMock} >
        <ResultList
          searchResults={mockSearchResults}
        />
      </Router>
    );

    userEvent.click(screen.getByTestId('decrement-page-button'));
    expect(historyMock.push.mock.calls[0][0]).toEqual({
      search: '?order=desc&sort=stars&page=1',
    })
  });

  test('Changes page number correctly when increment is pressed', () => {
    render(
      <Router history={historyMock} >
        <ResultList
          searchResults={mockSearchResults}
        />
      </Router>
    );

    userEvent.click(screen.getByTestId('increment-page-button'));
    expect(historyMock.push.mock.calls[0][0]).toEqual({
      search: '?order=desc&sort=stars&page=3',
    })
  });
})
