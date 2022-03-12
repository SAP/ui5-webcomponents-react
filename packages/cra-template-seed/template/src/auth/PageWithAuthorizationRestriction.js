import React from 'react';
import { useHasAccess } from '../hooks/useAuthority';
import Empty from '../pages/Fallback/Empty';

import NotFound from '../pages/Fallback/NotFound';

const PageWithAuthorizationRestriction = ({ allowedAuthorities, authorityKey, children, ...props }) => {
  const hasAccess = useHasAccess(allowedAuthorities, authorityKey);
  if (hasAccess === null) {
    return <Empty />;
  }

  if (!hasAccess) {
    return <NotFound />;
  }

  return children;
};

export default PageWithAuthorizationRestriction;
