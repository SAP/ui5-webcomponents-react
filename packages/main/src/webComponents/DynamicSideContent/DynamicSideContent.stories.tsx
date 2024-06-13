import type { Meta, StoryObj } from '@storybook/react';
import SideContentFallDown from '@ui5/webcomponents-fiori/dist/types/SideContentFallDown.js';
import SideContentPosition from '@ui5/webcomponents-fiori/dist/types/SideContentPosition.js';
import SideContentVisibility from '@ui5/webcomponents-fiori/dist/types/SideContentVisibility.js';
import { DynamicSideContent } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / DynamicSideContent',
  component: DynamicSideContent,
  argTypes: {
    children: { control: { disable: true } },
    sideContent: { control: { disable: true } }
  },
  args: {
    sideContentFallDown: SideContentFallDown.OnMinimumWidth,
    sideContentPosition: SideContentPosition.End,
    sideContentVisibility: SideContentVisibility.ShowAboveS
  },
  tags: ['package:@ui5/webcomponents-fiori']
} satisfies Meta<typeof DynamicSideContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    return (
      <DynamicSideContent
        {...args}
        sideContent={
          <>
            <h1>Side Content</h1>
            <p>
              Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis
              nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est.
              Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie
              luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend
              tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper
              lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat
              dapibus dui, at bibendum mauris porta a.
            </p>
          </>
        }
      >
        <h1>Main Content</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper
          sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse
          lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id
          ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod
          aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend
          neque.
        </p>
      </DynamicSideContent>
    );
  }
};
