import { usePaginatedQuery, useQuery } from 'react-query';

import Request from '../util/api/engine/Request';

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

const _fetchData = (operation, url, dataParam, config) => {
  return async () => {
    const res = await Request[operation](url, dataParam, config);
    return res.data;
  };
};

const _useOperation = (reactQueryKey, operation, url, dataParam, config) => {
  const { data, status } = useQuery(reactQueryKey, _fetchData(operation, url, dataParam, config), STALE_TIME);
  return { data, status };
};

const _usePaginatedOperation = (reactQueryKey, pageDependency, operation, url, dataParam, config) => {
  const parameters = {
    params: {
      ...dataParam,
      page: pageDependency,
    },
  };
  const { resolvedData, latestData, status } = usePaginatedQuery([reactQueryKey, pageDependency], _fetchData(operation, url, parameters, config), STALE_TIME);
  return { resolvedData, latestData, status };
};

export function useGet(reactQueryKey, url, config) {
  return _useOperation(reactQueryKey, REQUEST.GET, url, null, config ? config : null);
}

export function usePaginatedGet(reactQueryKey, pageDependency, url, config) {
  return _usePaginatedOperation(reactQueryKey, pageDependency, REQUEST.GET, url, null, config ? config : null);
}

export function usePost(reactQueryKey, url, dataParam, config) {
  return _useOperation(reactQueryKey, REQUEST.POST, url, dataParam ? dataParam : null, config ? config : null);
}

export function usePut(reactQueryKey, url, dataParam, config) {
  return _useOperation(reactQueryKey, REQUEST.PUT, url, dataParam ? dataParam : null, config ? config : null);
}

export function usePatch(reactQueryKey, url, dataParam, config) {
  return _useOperation(reactQueryKey, REQUEST.PATCH, url, dataParam ? dataParam : null, config ? config : null);
}

export function useDelete(reactQueryKey, url, config) {
  return _useOperation(reactQueryKey, REQUEST.DELETE, url, null, config ? config : null);
}
