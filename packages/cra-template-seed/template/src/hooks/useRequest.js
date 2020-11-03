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

const fetchData = (operation, url, dataParam, config) => {
  return async () => {
    const res = await Request[operation](url, dataParam, config);
    return res.data;
  };
};

const useOperation = (reactQueryKey, operation, url, dataParam, config) => {
  return useQuery(reactQueryKey, fetchData(operation, url, dataParam, config), STALE_TIME);
};

const usePaginatedOperation = (reactQueryKey, pageDependency, operation, url, dataParam, config) => {
  const parameters = {
    params: {
      ...dataParam,
      page: pageDependency,
    },
  };
  return usePaginatedQuery([reactQueryKey, pageDependency], fetchData(operation, url, parameters, config), STALE_TIME);
};

export const useGet = (reactQueryKey, url, config) => {
  return useOperation(reactQueryKey, REQUEST.GET, url, null, config ? config : null);
};

export const usePaginatedGet = (reactQueryKey, pageDependency, url, config) => {
  return usePaginatedOperation(reactQueryKey, pageDependency, REQUEST.GET, url, null, config ? config : null);
};

export const usePost = (reactQueryKey, url, dataParam, config) => {
  return useOperation(reactQueryKey, REQUEST.POST, url, dataParam ? dataParam : null, config ? config : null);
};

export const usePut = (reactQueryKey, url, dataParam, config) => {
  return useOperation(reactQueryKey, REQUEST.PUT, url, dataParam ? dataParam : null, config ? config : null);
};

export const usePatch = (reactQueryKey, url, dataParam, config) => {
  return useOperation(reactQueryKey, REQUEST.PATCH, url, dataParam ? dataParam : null, config ? config : null);
};

export const useDelete = (reactQueryKey, url, config) => {
  return useOperation(reactQueryKey, REQUEST.DELETE, url, null, config ? config : null);
};
