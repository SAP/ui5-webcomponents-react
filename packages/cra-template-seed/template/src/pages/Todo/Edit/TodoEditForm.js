import React from 'react';

import { Field, Form, Formik } from 'formik';
import { Button, ButtonDesign, FlexBox, FlexBoxAlignItems, FlexBoxDirection, InputType, Title, TitleLevel, SwitchDesign } from '@ui5/webcomponents-react';
import '@ui5/webcomponents-icons/dist/paper-plane.js';

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

const TodoEditForm = ({ data, onSubmitHandler }) => {
  return (
    <div style={style.putWrapperUp}>
      <Title level={TitleLevel.H1}>Todo Edit</Title>
      <br />
      <Formik enableReinitialize initialValues={data} validationSchema={TodoEditFormValidationSchema} onSubmit={onSubmitHandler}>
        {({ isSubmitting, handleSubmit }) => (
          <Form>
            <>
              <Title level={TitleLevel.H3}>Basic Info</Title>
              <Field labelText="Name" name="name" required placeholder="Name goes here" type={InputType.Text} component={Input} />
              <Field labelText="Description" name="description" required placeholder="Add your description here" rows={5} component={TextArea} />
              <Field labelText="Completed" name="completed" required component={Switch} design={SwitchDesign.Graphical} />
            </>
            <>
              <Title level={TitleLevel.H3}>Custom Info</Title>
              <Field labelText="Priority" name="priority" required component={Select} options={priorityOptions} />
              <Field labelText="Type" name="type" required component={Select} options={typeOptions} />
            </>
            <>
              <FlexBox direction={FlexBoxDirection.RowReverse} alignItems={FlexBoxAlignItems.Center}>
                <Button type="submit" disabled={isSubmitting} onClick={handleSubmit} design={ButtonDesign.Emphasized} icon="paper-plane">
                  Submit
                </Button>
                <NavBack text="Cancel" icon={NavBackIcon.NONE} />
              </FlexBox>
            </>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TodoEditForm;
