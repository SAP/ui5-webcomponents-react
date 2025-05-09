import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { Bar, List, ListItemStandard, ListPropTypes, Page, Title } from '@ui5/webcomponents-react';
import ListItemType from '@ui5/webcomponents/dist/types/ListItemType.js';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { fetchTodos, Todo } from './api/todos';
import classes from './index.module.css';

interface Props {
  todos: Todo[];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const todos = await fetchTodos();
  return { props: { todos } };
};

export default function Home({ todos }: Props) {
  const router = useRouter();

  const handleTodoClick: ListPropTypes['onItemClick'] = (event) => {
    router.push(`/todos/${event.detail.item.dataset.id}`);
  };

  return (
    <>
      <Page header={<Bar className={classes.pageHeader} startContent={<Title>My Todos</Title>} />}>
        <List onItemClick={handleTodoClick}>
          {todos.map((todo) => {
            return (
              <ListItemStandard
                key={todo.id}
                data-id={todo.id}
                type={ListItemType.Navigation}
                additionalText={`${!todo.completed ? 'Not ' : ''}Completed`}
                additionalTextState={todo.completed ? ValueState.Positive : ValueState.None}
                text={todo.title}
              />
            );
          })}
        </List>
      </Page>
    </>
  );
}
