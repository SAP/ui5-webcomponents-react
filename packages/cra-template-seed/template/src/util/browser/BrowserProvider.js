import URLProvider from '../URLProvider';

const URLs = {
  HOME: '/',
  TODO_DETAIL: '/todo/detail/:id',
  TODO_EDIT: '/todo/edit/:id',
  TODO_LIST: '/todo/all',
  NOT_FOUND: '/notFound',
  BUGGY: '/buggy',
  ANY: '/*',
};

export default {
  getUrl(key, replaceOptions) {
    return URLProvider.getUrl(URLs, key, replaceOptions);
  },
};
