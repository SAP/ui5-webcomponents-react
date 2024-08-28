import { LoaderFunctionArgs, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
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
import { Todo, todos } from '~/mockData/todos';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const todo = await new Promise<Todo | undefined>((resolve) => {
    setTimeout(() => {
      resolve(todos.at(Number(params.id)));
    }, 500);
  });

  return json({ data: { todo } });
};

export default function TodoDetails() {
  const {
    data: { todo }
  } = useLoaderData<typeof loader>();

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
