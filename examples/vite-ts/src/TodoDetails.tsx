import {
  Card,
  DatePicker,
  Form,
  FormItem,
  Input,
  MessageStrip,
  MessageStripDesign,
  Switch,
  TextArea
} from '@ui5/webcomponents-react';
import { useLoaderData } from 'react-router-dom';
import { Todo } from './mockImplementations/mockData.ts';
import classes from './TodoDetails.module.css';

export default function TodoDetails() {
  const todo = useLoaderData() as Todo;

  return (
    <>
      <MessageStrip design={MessageStripDesign.Information}>
        {`Since this is only a demo app, adjustments made here on this page won't be reflected in the todo list.`}
      </MessageStrip>
      <Card className={classes.card}>
        <Form className={classes.form} labelSpanM={2} labelSpanL={2} labelSpanXL={2}>
          <FormItem label={'Title'}>
            <Input value={todo?.title} className={classes.formControl} />
          </FormItem>
          <FormItem label={'Details'}>
            <TextArea value={todo?.details} growing growingMaxLines={10} className={classes.formControl} />
          </FormItem>
          <FormItem label={'Due Date'}>
            <DatePicker className={classes.formControl} />
          </FormItem>
          <FormItem label={'Completed'}>
            <Switch checked={todo?.completed} className={classes.formControl} />
          </FormItem>
        </Form>
      </Card>
    </>
  );
}
