import { Todo } from '../api/todos';
import { fetchTodoById } from '../api/todos/[id]';
import {
  DatePicker,
  DynamicPage,
  DynamicPageTitle,
  Form,
  FormItem,
  Input,
  MessageStrip,
  MessageStripDesign,
  Switch,
  TextArea
} from '@ui5/webcomponents-react';
import { GetServerSideProps } from 'next';

import { Label } from '@ui5/webcomponents-react';

interface Props {
  todo: Todo | undefined;
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { id } = context.params!;
  const todo = await fetchTodoById(id as string);
  return { props: { todo } };
};

export default function TodoDetails({ todo }: Props) {
  return (
    <>
      <DynamicPage titleArea={<DynamicPageTitle heading={todo?.title} />}>
        <MessageStrip design={MessageStripDesign.Information}>
          {`Since this is only a demo app, adjustments made here on this page won't be reflected in the todo list.`}
        </MessageStrip>
        <Form>
          <FormItem labelContent={<Label wrappingType="None">Title</Label>}>
            <Input value={todo?.title} />
          </FormItem>
          <FormItem labelContent={<Label wrappingType="None">Details</Label>}>
            <TextArea value={todo?.details} growing growingMaxRows={10} />
          </FormItem>

          <FormItem labelContent={<Label wrappingType="None">Due Date</Label>}>
            <DatePicker />
          </FormItem>
          <FormItem labelContent={<Label wrappingType="None">Completed</Label>}>
            <Switch checked={todo?.completed} />
          </FormItem>
        </Form>
      </DynamicPage>
    </>
  );
}
