import React from 'react';
import { Helmet } from 'react-helmet';
import { useTodo } from '../../../hooks/services/useTodos';

import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';
import NavBack from '../../../components/NavBack/NavBack';
import CenteredContent from '../../../components/Layout/CenteredContent';
import TodoEditForm from './TodoEditForm';

const onSubmitEditForm = (values, actions) => {
  actions.setSubmitting(true);
  alert(JSON.stringify(values, null, 2));
  actions.resetForm(true);
  actions.setSubmitting(false);
};

const TodoEdit = ({ match }) => {
  const { data, isLoading, isSuccess } = useTodo(match);

  return (
    <>
      <Helmet title="Edit - TodoList App" />

      <NavBack />
      <CenteredContent>
        <br />
        {isLoading && <BusyIndicator active />}
        {isSuccess && <TodoEditForm data={data.data.todos} onSubmitHandler={onSubmitEditForm} />}
      </CenteredContent>
    </>
  );
};

export default TodoEdit;
