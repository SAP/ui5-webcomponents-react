import { useGet } from './useRequest';
import Constants from '../util/Constants';

export function useHasAccess(allowedAuthorities, authorityKey) {
  const { data, status } = useGet(Constants.REACT_QUERY.KEYS.RQ_GET_USER_LOGGED, 'GET_USER_LOGGED', null);

  if (status !== Constants.REACT_QUERY.CODES.SUCCESS) {
    return null;
  }

  return data[authorityKey].some((permission) => allowedAuthorities.includes(permission));
}

export function useHasPendableAccess(allowedAuthorities, authorityKey) {
  const { data, status } = useGet(Constants.REACT_QUERY.KEYS.RQ_GET_USER_LOGGED, 'GET_USER_LOGGED', null);

  if (status === Constants.REACT_QUERY.CODES.LOADING) {
    return status;
  }

  if (status === Constants.REACT_QUERY.CODES.ERROR) {
    return false;
  }

  return data[authorityKey].some((permission) => allowedAuthorities.includes(permission));
}
