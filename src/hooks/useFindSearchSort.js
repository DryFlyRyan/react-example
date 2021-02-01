import useQuery from './useQuery';
import { searchSorts } from '../enums';

const useFindSearchSort = () => {
  const query = useQuery();
  const defaultSort = searchSorts[0];
  const foundSort = searchSorts.find(sortEntry => sortEntry.value === query.sort);

  return foundSort || defaultSort;
}

export default useFindSearchSort;
