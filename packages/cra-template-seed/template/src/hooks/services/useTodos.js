import Constants from '../../util/Constants';

import { usePaginatedGet, useGet } from '../../hooks/useRequest';
import { getUrl } from '../../util/api/url/APIProvider';

export const useTodos = (page) => {
  return usePaginatedGet(Constants.REACT_QUERY.KEYS.RQ_GET_TODO_LIST, page, getUrl('GET_TODO_LIST'));
};

export const useTodo = (match) => {
  return useGet(Constants.REACT_QUERY.KEYS.GET_TODO_BY_ID, getUrl('GET_TODO_BY_ID', [{ value: match.params.id }]));
};
