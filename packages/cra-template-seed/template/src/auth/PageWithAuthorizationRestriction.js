import React from 'react';
import { useHasAccess } from '../hooks/useAuthority';

import NotFound from '../pages/Fallback/NotFound';

const PageWithAuthorizationRestriction = ({ allowedAuthorities, authorityKey, children, ...props }) => {
  const hasAccess = useHasAccess(allowedAuthorities, authorityKey);
  if (hasAccess === null) {
    return null;
  }

  if (!hasAccess) {
    return <NotFound />;
  }

  return children;
};

export default PageWithAuthorizationRestriction;
