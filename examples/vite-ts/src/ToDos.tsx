import { BusyIndicator, Card, List, ListItemType, StandardListItem, ValueState } from '@ui5/webcomponents-react';
import { Suspense } from 'react';
import { Await, useLoaderData, useNavigate } from 'react-router-dom';
import { Todo } from './mockImplementations/mockData.ts';
import classes from './ToDos.module.css';

function ToDos() {
  const data = useLoaderData() as { todos: Promise<Todo[]> };
  const navigate = useNavigate();

  return (
    <Suspense fallback={<BusyIndicator active delay={500} />}>
      <Await resolve={data.todos}>
        {(todos: Todo[]) => (
          <Card className={classes.card}>
            <List
              onItemClick={(e) => {
                const id = e.detail.item.dataset.id;
                navigate(`todo/${id}`);
              }}
              className={classes.list}
            >
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
          </Card>
        )}
      </Await>
    </Suspense>
  );
}

export default ToDos;
