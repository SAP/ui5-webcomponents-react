import { Todo } from '@/pages/api/todos';
import { fetchTodoById } from '@/pages/api/todos/[id]';
import {
  DatePicker,
  DynamicPage,
  DynamicPageTitle,
  Form,
  FormItem,
  Input,
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
