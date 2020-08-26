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

const RouteValidator = ({ allowedPermissions, path, component, ...props }) => {
  const { data, status } = useQuery('GET_USER_LOGGED', fetchUser);

  const getRoute = () => {
    if (status === Constants.CODES.RQ_SUCCESS && data) {
      const hasAccess = data.data.user.permissions.some(permission => allowedPermissions.includes(permission));
      return <Route path={path} {...props} component={hasAccess ? component : NotFound} />
    } else {
      return <Route path={path} {...props} component={Empty} />
    }
  };

  return getRoute();
};

export default RouteValidator;
