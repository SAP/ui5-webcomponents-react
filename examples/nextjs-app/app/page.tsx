import { TodoList } from '@/app/components/TodoList';
import { Todo, todos } from '@/app/mockData/todos';
import { Bar, Page, Title } from '@ui5/webcomponents-react';

export default async function Home() {
  // this is a very simple mock which mimics data fetching
  const todoList = await new Promise<Todo[]>((resolve) => {
    setTimeout(() => {
      resolve(todos);
    }, 1500);
  });

  return (
    <>
      <Page header={<Bar startContent={<Title wrappingType="None">My Todos</Title>} />} fixedFooter>
        <TodoList items={todoList} />
      </Page>
    </>
  );
}
