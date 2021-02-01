import { useRouteMatch } from "react-router-dom"

const useGetSearchQuery = () => {
  const match = useRouteMatch('/:query');
  return (match && match.params && match.params.query)
    ? match.params.query
    : ''
}

export default useGetSearchQuery;