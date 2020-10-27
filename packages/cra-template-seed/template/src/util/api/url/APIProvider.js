import { getUrl as getUrlProvider } from '../../URLProvider';

const URLs = {
  GET_USER_LOGGED: '/v1/user/logged',
  GET_TODO_BY_ID: '/v1/todo/:id',
  GET_TODO_LIST: '/v1/todo/all',
};

export const getUrl = (key, replaceOptions) => {
  return getUrlProvider(URLs, key, replaceOptions);
};
