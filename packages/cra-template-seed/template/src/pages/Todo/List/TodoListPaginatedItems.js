import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTodos } from '../../../hooks/services/useTodos';

import { BusyIndicator, List, StandardListItem, Title, TitleLevel } from '@ui5/webcomponents-react';
import { Pagination } from '../../../components/Pagination/Pagination';
import { getRoute, ROUTES } from '../../../routes/Routes';

const TodoListPaginatedItems = () => {
  const history = useHistory();
  const [page, setPage] = useState(0);
  const { data, isLoading } = useTodos(page);

  const navToTodoEditPage = (e) => {
    history.push(getRoute(ROUTES.TODO_EDIT, { id: e.detail.item.dataset.id }));
  };

  return (
    <div>
      {isLoading ? (
        <BusyIndicator active />
      ) : (
        <>
          <Title level={TitleLevel.H5}>{`Records (${data.numberOfElements} / ${data.totalElements})`}</Title>
          <br />
          <List onItemClick={navToTodoEditPage}>
            {data.content.map((todo) => (
              <StandardListItem data-id={todo.id} key={todo.id} info={todo.description} infoState="None">
                {todo.name}
              </StandardListItem>
            ))}
          </List>
          <Pagination numberOfElements={data.numberOfElements} totalPages={data.totalPages} selectedPage={data.number} setPage={(params) => setPage(params)} />
        </>
      )}
    </div>
  );
};

export default TodoListPaginatedItems;
