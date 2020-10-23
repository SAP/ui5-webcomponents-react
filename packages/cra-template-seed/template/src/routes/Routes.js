import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import BrowserProvider from '../util/browser/BrowserProvider';

import RouteWithAuthorizationRestriction from '../auth/RouteWithAuthorizationRestriction';
import TodoList from '../pages/Todo/List/TodoList';
import TodoEdit from '../pages/Todo/Edit/TodoEdit';
import NotFound from '../pages/Fallback/NotFound';
import Buggy from '../pages/Fallback/Buggy';

const Routes = () => {
  return (
    <Switch>
      <Redirect path={BrowserProvider.getUrl('HOME')} exact to={BrowserProvider.getUrl('TODO_LIST')} />
      <RouteWithAuthorizationRestriction allowedAuthorities={['canAccessTodoListPage']} authorityKey="permissions" path={BrowserProvider.getUrl('TODO_LIST')} component={TodoList} />
      <RouteWithAuthorizationRestriction allowedAuthorities={['canAccessTodoEditPage']} authorityKey="permissions" path={BrowserProvider.getUrl('TODO_EDIT')} component={TodoEdit} />
      <Route path={BrowserProvider.getUrl('BUGGY')} exact component={Buggy} />
      <Route path={BrowserProvider.getUrl('NOT_FOUND')} exact component={NotFound} />
      <Route path={BrowserProvider.getUrl('ANY')} component={NotFound} />
    </Switch>
  );
};

export default Routes;
