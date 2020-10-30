import React from 'react';
import { Route } from 'react-router-dom';
import { useHasAccess } from '../hooks/useAuthority';

import NotFound from '../pages/Fallback/NotFound';
import Empty from '../pages/Fallback/Empty';

const RouteWithAuthorizationRestriction = ({ allowedAuthorities, authorityKey, path, component, ...props }) => {
  const hasAccess = useHasAccess(allowedAuthorities, authorityKey);
  if (hasAccess === null) {
    return <Route path={path} {...props} component={Empty} />;
  }

  return <Route path={path} {...props} component={hasAccess ? component : NotFound} />;
};

export default RouteWithAuthorizationRestriction;
