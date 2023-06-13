'use client';

import { Todo } from '@/app/mockData/todos';
import { List, ListItemType, ListPropTypes, StandardListItem, ValueState } from '@ui5/webcomponents-react';
import { useRouter } from 'next/navigation';

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
  );
}
