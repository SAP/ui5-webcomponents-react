import React from 'react';
import { useGet } from '../hooks/useRequest';

import Constants from '../util/Constants';

const ComponentValidator = ({ allowedAuthorities, authorityKey, children }) => {
  const { data, status } = useGet(Constants.REACT_QUERY.KEYS.GET_USER_LOGGED, 'GET_USER_LOGGED', null);

  const getRoute = () => {
    if (status === Constants.REACT_QUERY.CODES.SUCCESS) {
      const hasAccess = data.data.user[authorityKey].some(permission => allowedAuthorities.includes(permission));
      if (hasAccess) {
        return children;
      }
    }

    return <></>;
  };

  return getRoute();
};

export default ComponentValidator;
