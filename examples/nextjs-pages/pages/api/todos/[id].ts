// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fetchTodos, Todo } from '../todos';
import type { NextApiRequest, NextApiResponse } from 'next';

export async function fetchTodoById(id: string): Promise<Todo | undefined> {
  const todos = await fetchTodos();
  return todos.find((todo) => `${todo.id}` === id);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Todo>) {
  const todo = await fetchTodoById(req.query.id as string);
  if (todo) {
    res.status(200).json(todo);
  } else {
    res.status(404).json({ error: 'Not found' } as any);
  }
}
