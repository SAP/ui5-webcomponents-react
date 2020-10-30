import { getUrl as getUrlProvider } from '../URLProvider';

const URLs = {
  HOME: '/',
  TODO_DETAIL: '/todo/detail/:id',
  TODO_EDIT: '/todo/edit/:id',
  TODO_LIST: '/todo/all',
  NOT_FOUND: '/notFound',
  BUGGY: '/buggy',
  ANY: '/*',
};

export const getUrl = (key, replaceOptions) => {
  return getUrlProvider(URLs, key, replaceOptions);
};
