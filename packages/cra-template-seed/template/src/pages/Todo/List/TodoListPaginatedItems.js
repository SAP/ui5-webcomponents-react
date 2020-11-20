import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTodos } from '../../../hooks/services/useTodos';

import { List } from '@ui5/webcomponents-react/lib/List';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import { Pagination } from '../../../components/Pagination/Pagination';

import { getUrl } from '../../../util/browser/BrowserProvider';

const TodoListPaginatedItems = () => {
  const history = useHistory();
  const [page, setPage] = useState(0);
  const { resolvedData, isLoading } = useTodos(page);

  const redirectToEditPage = (e) => {
    history.push(getUrl('TODO_EDIT', [{ value: e.detail.item.dataset.id }]));
  };

  return (
    <div>
      {isLoading ? (
        <BusyIndicator active />
      ) : (
        <>
          <Title level={TitleLevel.H5}>{`Records (${resolvedData.numberOfElements} / ${resolvedData.totalElements})`}</Title>
          <br />
          <List onItemClick={(e) => redirectToEditPage(e)}>
            {resolvedData.content.map((todo, index) => (
              <StandardListItem data-id={todo.id} key={index} iconEnd={false} info={todo.description} infoState="None" selected={false}>
                {todo.name}
              </StandardListItem>
            ))}
          </List>
          <Pagination numberOfElements={resolvedData.numberOfElements} totalPages={resolvedData.totalPages} selectedPage={resolvedData.number} setPage={(params) => setPage(params)} />
        </>
      )}
    </div>
  );
};

export default TodoListPaginatedItems;
