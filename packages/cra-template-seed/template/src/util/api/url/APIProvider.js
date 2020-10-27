import URLProvider from '../../URLProvider';

const URLs = {
  GET_USER_LOGGED: '/v1/user/logged',
  GET_TODO_BY_ID: '/v1/todo/:id',
  GET_TODO_LIST: '/v1/todo/all',
};

const getUrl = (key, replaceOptions) => {
  return URLProvider.getUrl(URLs, key, replaceOptions);
};

export default {
  getUrl,
};
