import { BusyIndicator } from '@ui5/webcomponents-react';
import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import CenteredContent from '../../../components/Layout/CenteredContent';
import NavBack from '../../../components/NavBack/NavBack';
import { useTodo } from '../../../hooks/services/useTodos';

const TodoEditForm = lazy(() => import('./TodoEditForm'));

const onSubmitEditForm = (values, actions) => {
  actions.setSubmitting(true);
  alert(JSON.stringify(values, null, 2));
  actions.resetForm(true);
  actions.setSubmitting(false);
};

const TodoEdit = () => {
  const params = useParams();
  const { data, isLoading, isSuccess } = useTodo(params.id);

  return (
    <>
      <Helmet title="Edit - TodoList App" />

      <NavBack />
      <CenteredContent>
        <br />
        {isLoading && <BusyIndicator active />}

        {isSuccess && (
          <Suspense fallback={<BusyIndicator active />}>
            <TodoEditForm data={data.data.todos} onSubmitHandler={onSubmitEditForm} />
          </Suspense>
        )}
      </CenteredContent>
    </>
  );
};

export default TodoEdit;
