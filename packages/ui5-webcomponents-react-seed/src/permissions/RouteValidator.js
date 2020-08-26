import React from 'react';
import { Route } from "react-router-dom";
import { useQuery } from 'react-query';

import Request from '../util/Request';
import Constants from '../util/Constants';
import UrlProvider from '../util/URLProvider';
import NotFound from '../pages/Fallback/NotFound';

import Empty from '../pages/Fallback/Empty';

const fetchUser = async () => {
  const url = UrlProvider.getUrl('GET_USER_LOGGED');
  const res = await Request.get(url)
  return res.data;
};

const RouteValidator = ({ allowedPermissions, allowenceKey, path, component, ...props }) => {
  const { data, status } = useQuery('GET_USER_LOGGED', fetchUser);

  const getRoute = () => {
    if (status === Constants.CODES.RQ_SUCCESS) {
      const hasAccess = data.data.user[allowenceKey].some(permission => allowedPermissions.includes(permission));
      return <Route path={path} {...props} component={hasAccess ? component : NotFound} />;
    }

    return <Route path={path} {...props} component={Empty} />;
  };

  return getRoute();
};

export default RouteValidator;
