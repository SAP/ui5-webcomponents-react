import React from 'react';

import { Field, Form, Formik } from 'formik';
import { Button, ButtonDesign, FlexBox, FlexBoxAlignItems, FlexBoxDirection, InputType } from '@ui5/webcomponents-react';
import Input from '../../../components/Form/Input/Input';
import Switch from '../../../components/Form/Switch/Switch';
import TextArea from '../../../components/Form/TextArea/TextArea';
import Select from '../../../components/Form/Select/Select';
import TodoEditFormValidationSchema from './TodoEditFormValidationSchema';
import NavBack, { NavBackIcon } from '../../../components/NavBack/NavBack';

const style = {
  putWrapperUp: {
    marginTop: '-50px',
  },
};

const typeOptions = [
  { id: 'WORK', text: 'Work' },
  { id: 'PERSONAL', text: 'Personal' },
  { id: 'SCHOOL', text: 'School' },
];

const priorityOptions = [
  { id: 'LOW', text: 'Low' },
  { id: 'MEDIUM', text: 'Medium' },
  { id: 'HIGH', text: 'High' },
];

export default function TodoEditForm({ data, onSubmitHandler }) {
  return (
    <div style={style.putWrapperUp}>
      <h1>Todo Edit Form</h1>
      <Formik enableReinitialize initialValues={data} validationSchema={TodoEditFormValidationSchema} onSubmit={onSubmitHandler}>
        {({ isSubmitting, handleSubmit }) => (
          <Form>
            <div>
              <h3>Basic Info</h3>
              <Field labelText="Name" name="name" required placeholder="Name goes here" type={InputType.Text} component={Input} />
              <Field labelText="Description" name="description" required placeholder="Add your description here" rows={5} component={TextArea} />
              <Field labelText="Completed" name="completed" required component={Switch} graphical={true} />
            </div>
            <div>
              <h3>Custom Info</h3>
              <Field labelText="Priority" name="priority" required component={Select} options={priorityOptions} />
              <Field labelText="Type" name="type" required component={Select} options={typeOptions} />
            </div>
            <div>
              <FlexBox direction={FlexBoxDirection.RowReverse} alignItems={FlexBoxAlignItems.Center}>
                <Button type="submit" disabled={isSubmitting} onClick={handleSubmit} design={ButtonDesign.Emphasized} icon="paper-plane">
                  Submit
                </Button>
                <NavBack text="Cancel" icon={NavBackIcon.NONE} />
              </FlexBox>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
