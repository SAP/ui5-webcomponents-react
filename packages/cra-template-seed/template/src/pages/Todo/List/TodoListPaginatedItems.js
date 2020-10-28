import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { usePaginatedGet } from '../../../hooks/useRequest';

import { List } from '@ui5/webcomponents-react/lib/List';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import { Spinner } from '@ui5/webcomponents-react/lib/Spinner';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';

import { Pagination } from '../../../components/Pagination/Pagination';

import Constants from '../../../util/Constants';
import { getUrl as getUrlBrowser } from '../../../util/browser/BrowserProvider';
import { getUrl as getUrlAPI } from '../../../util/api/url/APIProvider';

const TodoListPaginatedItems = () => {
  const history = useHistory();
  const [page, setPage] = useState(0);
  const { resolvedData, isLoading } = usePaginatedGet(Constants.REACT_QUERY.KEYS.RQ_GET_TODO_LIST, page, getUrlAPI('GET_TODO_LIST'));

  const redirectToEditPage = (e) => {
    history.push(getUrlBrowser('TODO_EDIT', [{ value: e.detail.item.dataset.id }]));
  };

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Title level={TitleLevel.H3}>{`Records (${resolvedData.numberOfElements} / ${resolvedData.totalElements})`}</Title>
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
