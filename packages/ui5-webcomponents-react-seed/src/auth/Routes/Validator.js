import React from 'react';
import { Route } from "react-router-dom";
import { useHasPendableAccess } from '../../hooks/useAuthority';

import NotFound from '../../pages/Fallback/NotFound';
import Empty from '../../pages/Fallback/Empty';
import Constants from '../../util/Constants';

const RouteValidator = ({ allowedAuthorities, authorityKey, path, component, ...props }) => {
  const hasAccess = useHasPendableAccess(allowedAuthorities, authorityKey);
  if (hasAccess === Constants.REACT_QUERY.CODES.LOADING) {
    return <Route path={path} {...props} component={Empty} />;
  }

  return <Route path={path} {...props} component={hasAccess ? component : NotFound} />;
};

export default RouteValidator;
