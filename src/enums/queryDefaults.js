import searchOrders from './searchOrders';
import searchSorts from './searchSorts';

const queryDefaults = {
  order: searchOrders[0].value,
  sort: searchSorts[0].value,
  page: 1,
  per_page: 10,
};

export default queryDefaults;