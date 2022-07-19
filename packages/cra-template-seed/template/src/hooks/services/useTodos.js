import { useQuery } from 'react-query';

import Request from '../../api/Request';

export const useTodos = (page) => {
  return useQuery(
    ['all-todos', page],
    async () => {
      const { data } = await Request.get('/v1/todo/all', {
        params: {
          page
        }
      });
      return data;
    },
    {
      keepPreviousData: true
    }
  );
};

export const useTodo = (id) => {
  return useQuery(['todos', id], async () => {
    const { data } = await Request.get(`/v1/todo/${id}`);
    return data;
  });
};
