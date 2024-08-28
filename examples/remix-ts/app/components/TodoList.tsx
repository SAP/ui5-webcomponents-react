import { useNavigate } from '@remix-run/react';
import { List, ListItemType, ListPropTypes, StandardListItem, ValueState } from '@ui5/webcomponents-react';
import { Todo } from '~/mockData/todos';

interface TodoListProps {
  items: Todo[];
}

export function TodoList({ items }: TodoListProps) {
  const navigate = useNavigate();
  const handleTodoClick: ListPropTypes['onItemClick'] = (event) => {
    navigate(`/todos/${event.detail.item.dataset.id}`);
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
