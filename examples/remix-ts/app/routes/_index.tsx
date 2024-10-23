import type { MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Bar, Page, Title } from '@ui5/webcomponents-react';
import { TodoList } from '~/components/TodoList';
import { Todo, todos } from '~/mockData/todos';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export const loader = async () => {
  const todoList = await new Promise<Todo[]>((resolve) => {
    setTimeout(() => {
      resolve(todos);
    }, 1500);
  });

  return json({ data: { todos: todoList } });
};

export default function Index() {
  const {
    data: { todos }
  } = useLoaderData<typeof loader>();
  return (
    <Page header={<Bar style={{ paddingInline: 0 }} startContent={<Title>My Todos</Title>} />}>
      <TodoList items={todos} />
    </Page>
  );
}
