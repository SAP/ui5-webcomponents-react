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
  Title
} from '@ui5/webcomponents-react';
import MessageStripDesign from '@ui5/webcomponents/dist/types/MessageStripDesign.js';
import { Todo, todos } from '~/mockData/todos';
import type { Route } from './+types/todo';

export async function loader({ params }: Route.LoaderArgs) {
  const todo = await new Promise<Todo | undefined>((resolve) => {
    setTimeout(() => {
      resolve(todos.at(Number(params.id)));
    }, 500);
  });

  return todo;
}

export default function TodoDetails({ loaderData }: Route.ComponentProps) {
  const todo = loaderData;

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
