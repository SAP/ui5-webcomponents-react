import { usePaginatedQuery, useQuery } from 'react-query';

import UrlProvider from '../util/URLProvider';
import Request from '../util/Request/Request';

const FIVE_MINUTES_IN_MILLISECONDS = 1000 * 60 * 5;

const STALE_TIME = {
  staleTime: FIVE_MINUTES_IN_MILLISECONDS,
};

const REQUEST = {
  GET: 'get',
  POST: 'get',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'delete',
};

const _fetchData = (operation, urlKey, dataParam, config) => {
  return async () => {
    const url = UrlProvider.getUrl(urlKey);
    const res = await Request[operation](url, dataParam, config);
    return res.data;
  };
};

const _useOperation = (reactQueryKey, operation, urlKey, dataParam, config) => {
  const { data, status } = useQuery(reactQueryKey, _fetchData(operation, urlKey, dataParam, config), STALE_TIME);
  return { data, status };
};

const _usePaginatedOperation = (reactQueryKey, pageDependency, operation, urlKey, dataParam, config) => {
  const parameters = {
    params: {
      ...dataParam,
      page: pageDependency,
    },
  };
  const { resolvedData, latestData, status } = usePaginatedQuery([reactQueryKey, pageDependency], _fetchData(operation, urlKey, parameters, config), STALE_TIME);
  return { resolvedData, latestData, status };
};

export function useGet(reactQueryKey, urlKey, config) {
  return _useOperation(reactQueryKey, REQUEST.GET, urlKey, null, config ? config : null);
}

export function usePaginatedGet(reactQueryKey, pageDependency, urlKey, config) {
  return _usePaginatedOperation(reactQueryKey, pageDependency, REQUEST.GET, urlKey, null, config ? config : null);
}

export function usePost(reactQueryKey, urlKey, dataParam, config) {
  return _useOperation(reactQueryKey, REQUEST.POST, urlKey, dataParam ? dataParam : null, config ? config : null);
}

export function usePut(reactQueryKey, urlKey, dataParam, config) {
  return _useOperation(reactQueryKey, REQUEST.PUT, urlKey, dataParam ? dataParam : null, config ? config : null);
}

export function usePatch(reactQueryKey, urlKey, dataParam, config) {
  return _useOperation(reactQueryKey, REQUEST.PATCH, urlKey, dataParam ? dataParam : null, config ? config : null);
}

export function useDelete(reactQueryKey, urlKey, config) {
  return _useOperation(reactQueryKey, REQUEST.DELETE, urlKey, null, config ? config : null);
}
