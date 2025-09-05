import { useNavigate } from 'react-router';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { List, type ListPropTypes } from '@ui5/webcomponents-react/List';
import { ListItemStandard } from '@ui5/webcomponents-react/ListItemStandard';
import ListItemType from '@ui5/webcomponents/dist/types/ListItemType.js';
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
  );
}
