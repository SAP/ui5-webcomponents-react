import { useQuery } from 'react-query';

import UrlProvider from '../util/URLProvider';
import Request from '../util/Request';
import Constants from '../util/Constants';

function useOperation(reactQueryKey, operation, urlKey, dataParam, config) {
  const { data, status } = useQuery(reactQueryKey, async () => {
    const url = UrlProvider.getUrl(urlKey);
    const res = await Request[operation](url, dataParam, config);
    return res.data;
  });

  return { data, status };
}

export function useGet(reactQueryKey, urlKey, config) {
  return useOperation(reactQueryKey, Constants.REQUEST.GET, urlKey, null, config ? config : null);
}

export function usePost(reactQueryKey, urlKey, dataParam, config) {
  return useOperation(reactQueryKey, Constants.REQUEST.POST, urlKey, dataParam ? dataParam : null, config ? config : null);
}

export function usePut(reactQueryKey, urlKey, dataParam, config) {
  return useOperation(reactQueryKey, Constants.REQUEST.PUT, urlKey, dataParam ? dataParam : null, config ? config : null);
}

export function usePatch(reactQueryKey, urlKey, dataParam, config) {
  return useOperation(reactQueryKey, Constants.REQUEST.PATCH, urlKey, dataParam ? dataParam : null, config ? config : null);
}

export function useDelete(reactQueryKey, urlKey, config) {
  return useOperation(reactQueryKey, Constants.REQUEST.DELETE, urlKey, null, config ? config : null);
}
