import React, { useState } from 'react';
import { usePaginatedGet } from '../../../hooks/useRequest';

import { List } from '@ui5/webcomponents-react/lib/List';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import { Spinner } from '@ui5/webcomponents-react';
import { Pagination } from '../../../components/Pagination/Pagination';
import Constants from '../../../util/Constants';

export default function TodoListPagination() {
  const [page, setPage] = useState(0);
  const { resolvedData, status } = usePaginatedGet(Constants.REACT_QUERY.KEYS.RQ_GET_TODO_LIST, page, 'GET_TODO_LIST');

  return (
    <div>
      {status === Constants.REACT_QUERY.CODES.LOADING ? (
        <Spinner />
      ) : (
        <>
          <h3>{`Records (${resolvedData.numberOfElements} / ${resolvedData.totalElements})`}</h3>
          <List
            busy={false}
            footerText={undefined}
            header={null}
            headerText={undefined}
            infiniteScroll={false}
            inset={false}
            mode="None"
            noDataText={undefined}
            onItemClick={function noRefCheck() {}}
            onItemDelete={function noRefCheck() {}}
            onLoadMore={function noRefCheck() {}}
            onSelectionChange={function noRefCheck() {}}
            separators="All"
          >
            {resolvedData.content.map((todo, index) => (
              <StandardListItem key={index} iconEnd={false} info={todo.number} infoState="None" selected={false}>
                {todo.name}
              </StandardListItem>
            ))}
          </List>
          <Pagination numberOfElements={resolvedData.numberOfElements} totalPages={resolvedData.totalPages} selectedPage={resolvedData.number} setPage={(params) => setPage(params)} />
        </>
      )}
    </div>
  );
}
