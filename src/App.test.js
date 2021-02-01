import { render } from '@testing-library/react';
import App from './App';
import { Router } from 'react-router-dom';

const historyMock = {
  push: jest.fn(),
  location: {},
  listen: jest.fn(),
}

jest.mock('./hooks', () => ({
  useFindSearchOrder: () => ({ value: 'desc', label: 'Descending'}),
  useFindSearchSort: () => ({ value: 'stars', label: 'Stars'}),
  useGetSearchQuery: jest.fn().mockReturnValue('react'),
  useQuery: () => ({
    order: 'desc',
    sort: 'stars',
    page: 2,
  }),
}));

describe('App.js', () => {
  test('Renders application (smoke test)', () => {
    render(
      <Router history={historyMock}>
        <App />
      </Router>
    );
  });
})
