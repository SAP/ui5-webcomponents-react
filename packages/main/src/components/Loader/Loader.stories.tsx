import type { Meta, StoryObj } from '@storybook/react';
import activateIcon from '@ui5/webcomponents-icons/dist/activate.js';
import { useEffect, useRef, useState } from 'react';
import { FlexBoxDirection, LoaderType } from '../../enums/index.js';
import { Card } from '../../webComponents/Card/index.js';
import { CardHeader } from '../../webComponents/CardHeader/index.js';
import { Icon } from '../../webComponents/Icon/index.js';
import { Text } from '../../webComponents/Text/index.js';
import { FlexBox } from '../FlexBox/index.js';
import { Loader } from './index.js';

const meta = {
  title: 'User Feedback / Loader',
  component: Loader,
  argTypes: {},
  args: {
    type: LoaderType.Indeterminate,
    progress: '60%'
  }
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCard: Story = {
  render(args) {
    const initialText =
      'This is a text that will be updated 5 seconds after the header is clicked. The text will be visible until the new text has been fetched. To let the user know that the text is updating, the Loader will be displayed.';
    const [text, setText] = useState(initialText);
    const [loading, setLoading] = useState(false);
    const counter = useRef(0);
    const onHeaderClick = () => {
      setLoading(true);
    };
    useEffect(() => {
      if (loading) {
        setTimeout(() => {
          if (counter.current < 10) {
            setText((prev) => (prev === initialText ? 'Updated (⌐■_■)' : initialText));
          } else {
            setText('You really must be bored ಠ_ಠ');
          }
          counter.current++;
          setLoading(false);
        }, 5000);
      }
    }, [loading]);
    return (
      <Card
        header={
          <CardHeader
            titleText="Click the header to update the text below."
            interactive
            avatar={<Icon name={activateIcon} />}
            onClick={onHeaderClick}
          />
        }
        style={{ width: '400px' }}
      >
        <FlexBox direction={FlexBoxDirection.Column}>
          {loading && <Loader {...args} />}
          <Text style={{ padding: '1rem' }}>{text}</Text>
        </FlexBox>
      </Card>
    );
  }
};
