import { useQuery } from 'react-query';

import Request from '../api/Request';

export const useHasAccess = (allowedAuthorities, authorityKey) => {
  const { data, isError, isLoading } = useQuery(
    'current-user',
    async () => {
      const result = await Request.get('/v1/user/logged');
      return result.data;
    },
    null
  );

  if (isLoading) {
    return null;
  }

  if (isError) {
    return false;
  }

  return data[authorityKey].some((permission) => allowedAuthorities.includes(permission));
};
