import {
  DatePicker,
  DynamicPage,
  DynamicPageTitle,
  Form,
  FormItem,
  Input,
  Label,
  MessageStrip,
  Switch,
  TextArea,
  Title,
} from '@ui5/webcomponents-react';
import MessageStripDesign from '@ui5/webcomponents/dist/types/MessageStripDesign.js';
import { GetServerSideProps } from 'next';
import { Todo } from '../api/todos';
import { fetchTodoById } from '../api/todos/[id]';

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
      <DynamicPage titleArea={<DynamicPageTitle heading={<Title>{todo?.title}</Title>} />}>
        <MessageStrip design={MessageStripDesign.Information}>
          {`Since this is only a demo app, adjustments made here on this page won't be reflected in the todo list.`}
        </MessageStrip>
        <Form>
          <FormItem labelContent={<Label>Title</Label>}>
            <Input value={todo?.title} />
          </FormItem>
          <FormItem labelContent={<Label>Details</Label>}>
            <TextArea value={todo?.details} growing growingMaxRows={10} />
          </FormItem>

          <FormItem labelContent={<Label>Due Date</Label>}>
            <DatePicker />
          </FormItem>
          <FormItem labelContent={<Label>Completed</Label>}>
            <Switch checked={todo?.completed} />
          </FormItem>
        </Form>
      </DynamicPage>
    </>
  );
}
