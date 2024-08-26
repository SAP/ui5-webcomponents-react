import { Todo, todos } from '@/app/mockData/todos';
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

export default async function TodoDetails({ params }: { params: { id: string } }) {
  // this is a very simple mock which mimics data fetching
  const todo = await new Promise<Todo | undefined>((resolve) => {
    setTimeout(() => {
      resolve(todos.at(Number(params.id)));
    }, 500);
  });

  return (
    <>
      <DynamicPage titleArea={<DynamicPageTitle heading={<Title>{todo?.title}</Title>} />}>
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
