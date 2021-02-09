import { generatePath } from 'react-router';

export const ROUTES = {
  HOME: '/',
  TODO_DETAIL: '/todo/detail/:id',
  TODO_EDIT: '/todo/edit/:id',
  TODO_LIST: '/todo/all',
  NOT_FOUND: '/notFound',
  BUGGY: '/buggy',
  ANY: '/*',
};

export const getRoute = (route, params) => {
  return generatePath(route, params);
};
