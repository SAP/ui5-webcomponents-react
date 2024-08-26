import {
  Card,
  DatePicker,
  Form,
  FormItem,
  Input,
  Label,
  MessageStrip,
  Switch,
  TextArea
} from '@ui5/webcomponents-react';
import { useLoaderData } from 'react-router-dom';
import { Todo } from './mockImplementations/mockData.ts';
import classes from './TodoDetails.module.css';
import MessageStripDesign from '@ui5/webcomponents/dist/types/MessageStripDesign.js';

export default function TodoDetails() {
  const todo = useLoaderData() as Todo;

  return (
    <>
      <MessageStrip design={MessageStripDesign.Information}>
        {`Since this is only a demo app, adjustments made here on this page won't be reflected in the todo list.`}
      </MessageStrip>
      <Card className={classes.card}>
        <Form className={classes.form} labelSpan="M2 L2 XL2">
          <FormItem labelContent={<Label wrappingType="None">Title</Label>}>
            <Input value={todo?.title} className={classes.formControl} />
          </FormItem>
          <FormItem labelContent={<Label wrappingType="None">Details</Label>}>
            <TextArea value={todo?.details} growing growingMaxRows={10} className={classes.formControl} />
          </FormItem>
          <FormItem labelContent={<Label wrappingType="None">Due Date</Label>}>
            <DatePicker className={classes.formControl} />
          </FormItem>
          <FormItem labelContent={<Label wrappingType="None">Completed</Label>}>
            <Switch checked={todo?.completed} className={classes.formControl} />
          </FormItem>
        </Form>
      </Card>
    </>
  );
}
