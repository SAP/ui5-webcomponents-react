import React from 'react';
import { Route } from "react-router-dom";
import { useGet } from '../hooks/useRequest';

import NotFound from '../pages/Fallback/NotFound';
import Empty from '../pages/Fallback/Empty';

import Constants from '../util/Constants';

const RouteValidator = ({ allowedAuthorities, authorityKey, path, component, ...props }) => {
  const { data, status } = useGet(Constants.REACT_QUERY.KEYS.GET_USER_LOGGED, 'GET_USER_LOGGED', null);

  const getRoute = () => {
    if (status === Constants.REACT_QUERY.CODES.SUCCESS) {
      const hasAccess = data.data.user[authorityKey].some(permission => allowedAuthorities.includes(permission));
      return <Route path={path} {...props} component={hasAccess ? component : NotFound} />;
    }

    return <Route path={path} {...props} component={Empty} />;
  };

  return getRoute();
};

export default RouteValidator;
