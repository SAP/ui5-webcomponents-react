import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import BrowserProvider from '../util/URL/BrowserProvider';

import TodoList from '../pages/Todo/List/TodoList';
import NotFound from '../pages/Fallback/NotFound';
import Buggy from '../pages/Fallback/Buggy';
import RouteValidator from '../auth/Routes/Validator';

const Routes = () => {
  return (
    <Switch>
      <Redirect path={BrowserProvider.HOME} exact to={BrowserProvider.TODO_LIST} />
      <RouteValidator allowedAuthorities={['canAccessTodoListPage']} authorityKey="permissions" path={BrowserProvider.TODO_LIST} component={TodoList} />
      <Route path={BrowserProvider.BUGGY} exact component={Buggy} />
      <Route path={BrowserProvider.NOT_FOUND} exact component={NotFound} />
      <Route path={BrowserProvider.ANY} component={NotFound} />
    </Switch>
  );
};

export default Routes;
