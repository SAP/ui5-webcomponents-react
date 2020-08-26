import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import BrowserURL from '../util/BrowserURL';

import TodoList from '../pages/Todo/List/TodoList';
import NotFound from '../pages/Fallback/NotFound';
import Buggy from '../pages/Fallback/Buggy';
import RouteValidator from '../permissions/RouteValidator';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        path={BrowserURL.HOME}
        exact
        to={BrowserURL.TODO_LIST} />
      <RouteValidator
        allowedPermissions={['canAccessTodoListPage']}
        allowenceKey='permissions'
        path={BrowserURL.TODO_LIST}
        component={TodoList} />
      <Route
        path={BrowserURL.BUGGY}
        exact
        component={Buggy} />
      <Route
        path={BrowserURL.NOT_FOUND}
        exact
        component={NotFound} />
      <Route
        path={BrowserURL.ANY}
        component={NotFound} />
    </Switch>
  );
};

export default Routes;
