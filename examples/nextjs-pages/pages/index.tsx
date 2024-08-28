import { fetchTodos, Todo } from './api/todos';
import {
  Bar,
  List,
  ListItemType,
  ListPropTypes,
  Page,
  StandardListItem,
  Title,
  ValueState
} from '@ui5/webcomponents-react/ssr';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

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
      <Page header={<Bar startContent={<Title>My Todos</Title>} />}>
        <List onItemClick={handleTodoClick}>
          {todos.map((todo) => {
            return (
              <StandardListItem
                key={todo.id}
                data-id={todo.id}
                type={ListItemType.Navigation}
                additionalText={`${!todo.completed ? 'Not ' : ''}Completed`}
                additionalTextState={todo.completed ? ValueState.Success : ValueState.None}
              >
                {todo.title}
              </StandardListItem>
            );
          })}
        </List>
      </Page>
    </>
  );
}
