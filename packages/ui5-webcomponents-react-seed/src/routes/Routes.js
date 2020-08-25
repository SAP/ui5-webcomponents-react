import React from 'react';
import { Route, Switch } from "react-router-dom";
import BrowserURL from '../util/BrowserURL';

import TodoList from '../pages/TodoList/TodoList';
import NotFound from '../pages/NotFound';

const Routes = () => {
      return (
            <Switch>
                  <Route path={'/'} exact component={TodoList} />
                  <Route path={BrowserURL.TODO_ALL} exact component={TodoList} />
                  <Route path={BrowserURL.NOT_FOUND} exact component={NotFound} />
                  <Route path={BrowserURL.ANY} component={NotFound} />
            </Switch>
      );
};

export default Routes;
