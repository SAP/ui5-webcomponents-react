import { BusyIndicator } from '@ui5/webcomponents-react';
import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PageWithAuthorizationRestriction from '../auth/PageWithAuthorizationRestriction';
import { ROUTES } from './Routes';

const TodoList = lazy(() => import('../pages/Todo/List/TodoList'));
const TodoEdit = lazy(() => import('../pages/Todo/Edit/TodoEdit'));
const NotFound = lazy(() => import('../pages/Fallback/NotFound'));
const Buggy = lazy(() => import('../pages/Fallback/Buggy'));

const Router = () => {
  return (
    <Suspense fallback={<BusyIndicator active />}>
      <Routes>
        <Route
          path={ROUTES.TODO_LIST}
          element={
            <PageWithAuthorizationRestriction allowedAuthorities={['canAccessTodoListPage']} authorityKey="permissions">
              <TodoList />
            </PageWithAuthorizationRestriction>
          }
        />
        <Route
          path={ROUTES.TODO_EDIT}
          element={
            <PageWithAuthorizationRestriction allowedAuthorities={['canAccessTodoEditPage']} authorityKey="permissions">
              <TodoEdit />
            </PageWithAuthorizationRestriction>
          }
        />
        <Route path={ROUTES.BUGGY} element={<Buggy />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        <Route path={ROUTES.ANY} element={<NotFound />} />
        <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.TODO_LIST} />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
