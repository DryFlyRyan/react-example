import qs from 'qs';
import { useLocation } from "react-router-dom"

const useQuery = () => {
  return qs.parse(useLocation().search.slice(1))
}

export default useQuery;