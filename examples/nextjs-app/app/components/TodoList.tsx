'use client';
import { Todo } from '@/app/mockData/todos';
import { List, ListPropTypes, ListItemStandard } from '@ui5/webcomponents-react';
import { useRouter } from 'next/navigation';
import ListItemType from '@ui5/webcomponents/dist/types/ListItemType.js';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';

interface TodoListProps {
  items: Todo[];
}

export function TodoList({ items }: TodoListProps) {
  const router = useRouter();
  const handleTodoClick: ListPropTypes['onItemClick'] = (event) => {
    router.push(`/todos/${event.detail.item.dataset.id}`);
  };

  return (
    <List onItemClick={handleTodoClick}>
      {items.map((todo) => {
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
  );
}
