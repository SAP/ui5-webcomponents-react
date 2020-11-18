import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUrl } from '../util/browser/BrowserProvider';

import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';
import RouteWithAuthorizationRestriction from '../auth/RouteWithAuthorizationRestriction';

const TodoList = lazy(() => import('../pages/Todo/List/TodoList'));
const TodoEdit = lazy(() => import('../pages/Todo/Edit/TodoEdit'));
const NotFound = lazy(() => import('../pages/Fallback/NotFound'));
const Buggy = lazy(() => import('../pages/Fallback/Buggy'));

const Routes = () => {
  return (
    <Suspense fallback={<BusyIndicator active />}>
      <Switch>
        <Redirect path={getUrl('HOME')} exact to={getUrl('TODO_LIST')} />
        <RouteWithAuthorizationRestriction allowedAuthorities={['canAccessTodoListPage']} authorityKey="permissions" path={getUrl('TODO_LIST')} component={TodoList} />
        <RouteWithAuthorizationRestriction allowedAuthorities={['canAccessTodoEditPage']} authorityKey="permissions" path={getUrl('TODO_EDIT')} component={TodoEdit} />
        <Route path={getUrl('BUGGY')} exact component={Buggy} />
        <Route path={getUrl('NOT_FOUND')} exact component={NotFound} />
        <Route path={getUrl('ANY')} component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
