import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import selectEvent from 'react-select-event';
import Search from './Search';

// Values:
// const searchOrders = [
//   { value: 'desc', label: 'Descending'},
//   { value: 'asc', label: 'Ascending'},
// ];

// const searchSorts = [
//   { value: '', label: 'Best Match'},
//   { value: 'stars', label: 'Stars'},
//   { value: 'forks', label: 'Forks'},
//   { value: 'help-wanted-issues', label: 'Help Wanted Issues'},
//   { value: 'updated', label: 'Updated'},
// ];

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
    page: 1,
  }),
}));

describe('Search.js', () => {
  test('Renders view correctly', () => {
    render(<Search />);
    expect(screen.getByTestId('search-input')).toHaveValue('');
    expect(screen.getByText('Stars')).toBeTruthy();
    expect(screen.getByText('Descending')).toBeTruthy();
  });

  test('Updates pathname when search is triggered', async () => {
    render(
      <Router history={historyMock}>
        <Search />
      </Router>
    );

    const input = screen.getByTestId('search-input')

    userEvent.type(input, 'react-testing-library');
    expect(input).toHaveValue('react-testing-library');
    fireEvent.submit(input);
    expect(historyMock.push.mock.calls[0][0]).toEqual({
      pathname: 'react-testing-library',
      search: '?order=desc&sort=stars&page=1',
    })
  })

  test('Updates location search when sort is changed', async () => {
    render(
      <Router history={historyMock}>
        <Search />
      </Router>
    );

    // Change from the default Best Match to Stars
    const sortSelect = screen.getAllByRole('textbox')[1];
    expect(sortSelect).not.toBeNull();
    selectEvent.openMenu(sortSelect);
    userEvent.click(screen.getByText('Forks'))
    expect(historyMock.push.mock.calls[0][0]).toEqual({
      search: '?order=desc&sort=forks&page=1',
    });
  })

  test('Updates location search when order is changed', async () => {
    render(
      <Router history={historyMock}>
        <Search />
      </Router>
    );

    // Now that the order is no longer disabled, choose ascending
    const orderSelect = screen.getAllByRole('textbox')[2];
    expect(orderSelect).not.toBeNull();
    selectEvent.openMenu(orderSelect);
    userEvent.click(screen.getByText('Ascending'));
    expect(historyMock.push.mock.calls[0][0]).toEqual({
      search: '?order=asc&sort=stars&page=1',
    });
  })
})
