import qs from 'qs';

const createQueryParams = (params) => {
  return `?${qs.stringify(params)}`;
}

export default createQueryParams;