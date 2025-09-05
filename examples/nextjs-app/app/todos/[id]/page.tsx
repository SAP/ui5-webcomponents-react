import { Todo, todos } from '@/app/mockData/todos';
import { DatePicker } from '@ui5/webcomponents-react/DatePicker';
import { DynamicPage } from '@ui5/webcomponents-react/DynamicPage';
import { DynamicPageTitle } from '@ui5/webcomponents-react/DynamicPageTitle';
import { Form } from '@ui5/webcomponents-react/Form';
import { FormItem } from '@ui5/webcomponents-react/FormItem';
import { Input } from '@ui5/webcomponents-react/Input';
import { Label } from '@ui5/webcomponents-react/Label';
import { MessageStrip } from '@ui5/webcomponents-react/MessageStrip';
import { Switch } from '@ui5/webcomponents-react/Switch';
import { TextArea } from '@ui5/webcomponents-react/TextArea';
import { Title } from '@ui5/webcomponents-react/Title';
import MessageStripDesign from '@ui5/webcomponents/dist/types/MessageStripDesign.js';

export default async function TodoDetails(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
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
