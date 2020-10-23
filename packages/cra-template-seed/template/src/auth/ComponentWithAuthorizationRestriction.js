import { useHasAccess } from '../hooks/useAuthority';

const ComponentWithAuthorizationRestriction = ({ allowedAuthorities, authorityKey, children }) => {
  const hasAccess = useHasAccess(allowedAuthorities, authorityKey);
  if (!hasAccess) {
    return null;
  }

  return children;
};

export default ComponentWithAuthorizationRestriction;
