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
} from '@ui5/webcomponents-react/ssr';
import { GetServerSideProps } from 'next';

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
      <DynamicPage showHideHeaderButton={false} headerTitle={<DynamicPageTitle header={todo?.title} />}>
        <MessageStrip design={MessageStripDesign.Information}>
          {`Since this is only a demo app, adjustments made here on this page won't be reflected in the todo list.`}
        </MessageStrip>
        <Form>
          <FormItem label={'Title'}>
            <Input value={todo?.title} />
          </FormItem>
          <FormItem label={'Details'}>
            <TextArea value={todo?.details} growing growingMaxLines={10} />
          </FormItem>

          <FormItem label={'Due Date'}>
            <DatePicker />
          </FormItem>
          <FormItem label={'Completed'}>
            <Switch checked={todo?.completed} />
          </FormItem>
        </Form>
      </DynamicPage>
    </>
  );
}
