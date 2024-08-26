import { BusyIndicator, Card, List, ListItemStandard } from '@ui5/webcomponents-react';
import { Suspense } from 'react';
import { Await, useLoaderData, useNavigate } from 'react-router-dom';
import { Todo } from './mockImplementations/mockData.ts';
import classes from './ToDos.module.css';

import ListItemType from '@ui5/webcomponents/dist/types/ListItemType.js';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';

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
                  <ListItemStandard
                    key={todo.id}
                    data-id={todo.id}
                    type={ListItemType.Navigation}
                    additionalText={`${!todo.completed ? 'Not ' : ''}Completed`}
                    additionalTextState={todo.completed ? ValueState.Positive : ValueState.None}
                  >
                    {todo.title}
                  </ListItemStandard>
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
