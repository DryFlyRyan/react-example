import useQuery from './useQuery';
import { searchOrders } from '../enums';

const useFindSearchOrder = () => {
  const query = useQuery();
  const defaultOrder = searchOrders[0];

  return searchOrders.find(order => order.value === query.order) || defaultOrder
}

export default useFindSearchOrder;
