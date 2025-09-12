import { Bar } from '@ui5/webcomponents-react/Bar';
import { Page } from '@ui5/webcomponents-react/Page';
import { Title } from '@ui5/webcomponents-react/Title';
import type { MetaFunction } from 'react-router';
import { TodoList } from '~/components/TodoList';
import { Todo, todos } from '~/mockData/todos';
import type { Route } from './+types/index';

export const meta: MetaFunction = () => {
  return [
    { title: 'UI5 Web Components React - React Router Example' },
    { name: 'description', content: 'Welcome to this example!' },
  ];
};

export async function loader() {
  const todoList = await new Promise<Todo[]>((resolve) => {
    setTimeout(() => {
      resolve(todos);
    }, 1500);
  });

  return { todos: todoList };
}

export default function Index({ loaderData }: Route.ComponentProps) {
  const { todos } = loaderData;

  return (
    <Page header={<Bar style={{ paddingInline: 0 }} startContent={<Title>My Todos</Title>} />}>
      <TodoList items={todos} />
    </Page>
  );
}
