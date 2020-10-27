import React from 'react';
import { Helmet } from 'react-helmet';

import { useGet } from '../../../hooks/useRequest';
import { Spinner } from '@ui5/webcomponents-react/lib/Spinner';
import NavBack from '../../../components/NavBack/NavBack';
import CenteredContent from '../../../components/Layout/CenteredContent';
import TodoEditForm from './TodoEditForm';
import Constants from '../../../util/Constants';
import { getUrl } from '../../../util/api/url/APIProvider';

const onSubmitEditForm = (values, actions) => {
  actions.setSubmitting(true);
  alert(JSON.stringify(values, null, 2));
  actions.resetForm(true);
  actions.setSubmitting(false);
};

const TodoEdit = ({ match }) => {
  const { data, isLoading, isSuccess } = useGet(Constants.REACT_QUERY.KEYS.GET_TODO_BY_ID, getUrl('GET_TODO_BY_ID', [{ value: match.params.id }]));

  return (
    <>
      <Helmet title="Edit - TodoList App" />
      <NavBack />
      <CenteredContent>
        {isLoading && <Spinner />}
        {isSuccess && <TodoEditForm data={data.data.todos} onSubmitHandler={onSubmitEditForm} />}
      </CenteredContent>
    </>
  );
};

export default TodoEdit;
