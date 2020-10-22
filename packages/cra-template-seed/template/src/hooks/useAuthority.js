import { useGet } from './useRequest';
import Constants from '../util/Constants';
import APIProvider from '../util/api/url/APIProvider';

export function useHasAccess(allowedAuthorities, authorityKey) {
  const { data, isError, isLoading } = useGet(Constants.REACT_QUERY.KEYS.RQ_GET_USER_LOGGED, APIProvider.getUrl('GET_USER_LOGGED'), null);

  if (isLoading) {
    return null;
  }

  if (isError) {
    return false;
  }

  return data[authorityKey].some((permission) => allowedAuthorities.includes(permission));
}
