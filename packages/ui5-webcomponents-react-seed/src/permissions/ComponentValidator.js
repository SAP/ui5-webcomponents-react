import React from 'react';
import { useQuery } from 'react-query';

import Request from '../util/Request';
import Constants from '../util/Constants';
import UrlProvider from '../util/URLProvider';

const fetchUser = async () => {
  const url = UrlProvider.getUrl('GET_USER_LOGGED');
  const res = await Request.get(url)
  return res.data;
};

const ComponentValidator = ({ allowedPermissions, allowenceKey, children }) => {
  const { data, status } = useQuery('GET_USER_LOGGED', fetchUser);

  const getRoute = () => {
    if (status === Constants.CODES.RQ_SUCCESS) {
      const hasAccess = data.data.user[allowenceKey].some(permission => allowedPermissions.includes(permission));
      if (hasAccess) {
        return children;
      }
    }

    return <></>;
  };

  return getRoute();
};

export default ComponentValidator;
