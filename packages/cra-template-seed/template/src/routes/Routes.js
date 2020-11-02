import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUrl } from '../util/browser/BrowserProvider';

import RouteWithAuthorizationRestriction from '../auth/RouteWithAuthorizationRestriction';
import TodoList from '../pages/Todo/List/TodoList';
import TodoEdit from '../pages/Todo/Edit/TodoEdit';
import NotFound from '../pages/Fallback/NotFound';
import Buggy from '../pages/Fallback/Buggy';

const Routes = () => {
  return (
    <Switch>
      <Redirect path={getUrl('HOME')} exact to={getUrl('TODO_LIST')} />
      <RouteWithAuthorizationRestriction allowedAuthorities={['canAccessTodoListPage']} authorityKey="permissions" path={getUrl('TODO_LIST')} component={TodoList} />
      <RouteWithAuthorizationRestriction allowedAuthorities={['canAccessTodoEditPage']} authorityKey="permissions" path={getUrl('TODO_EDIT')} component={TodoEdit} />
      <Route path={getUrl('BUGGY')} exact component={Buggy} />
      <Route path={getUrl('NOT_FOUND')} exact component={NotFound} />
      <Route path={getUrl('ANY')} component={NotFound} />
    </Switch>
  );
};

export default Routes;
