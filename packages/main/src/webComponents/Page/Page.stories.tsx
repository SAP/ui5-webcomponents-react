import type { Meta, StoryObj } from '@storybook/react';
import BarDesign from '@ui5/webcomponents/dist/types/BarDesign.js';
import { ButtonDesign, PageBackgroundDesign } from '../../enums/index.js';
import { Bar, Button, Label } from '../index.js';
import { Page } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / Page',
  component: Page,
  args: {
    backgroundDesign: PageBackgroundDesign.Solid,
    style: {
      height: '500px'
    },
    header: (
      <Bar
        design={BarDesign.Header}
        startContent={<Button icon="home" title="Go Home" />}
        endContent={<Button icon="settings" title="Go to Settings" />}
      >
        <Label>Title</Label>
      </Bar>
    ),
    footer: (
      <Bar
        design={BarDesign.FloatingFooter}
        startContent={<Button icon="home" title="Go Home" />}
        endContent={
          <>
            <Button design={ButtonDesign.Positive}>Accept</Button>
            <Button design={ButtonDesign.Negative}>Decline</Button>
            <Button design={ButtonDesign.Transparent}>Cancel</Button>
          </>
        }
      />
    )
  },
  argTypes: {
    children: { control: { disable: true } },
    footer: { control: { disable: true } },
    header: { control: { disable: true } }
  },
  tags: ['package:@ui5/webcomponents-fiori']
} satisfies Meta<typeof Page>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Turpis massa sed elementum tempus egestas sed sed risus pretium. Eget nullam non nisi est sit
          amet facilisis. Imperdiet dui accumsan sit amet nulla facilisi morbi. Sem viverra aliquet eget sit amet tellus
          cras adipiscing. Faucibus purus in massa tempor nec. Egestas quis ipsum suspendisse ultrices gravida dictum.
          Amet facilisis magna etiam tempor. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Ac orci
          phasellus egestas tellus. Quis imperdiet massa tincidunt nunc. Mollis nunc sed id semper risus in hendrerit
          gravida rutrum.
        </p>
        <p>
          Amet consectetur adipiscing elit duis tristique. Tortor condimentum lacinia quis vel eros. Elit sed vulputate
          mi sit amet mauris commodo quis imperdiet. Sed nisi lacus sed viverra tellus in hac habitasse. Praesent
          tristique magna sit amet purus gravida quis blandit. Magnis dis parturient montes nascetur ridiculus. Sit amet
          nulla facilisi morbi tempus iaculis urna id. Senectus et netus et malesuada fames. Faucibus ornare suspendisse
          sed nisi lacus sed. Facilisis volutpat est velit egestas dui id ornare arcu odio. In tellus integer feugiat
          scelerisque. Eu turpis egestas pretium aenean pharetra magna. Integer enim neque volutpat ac tincidunt vitae
          semper quis lectus. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Ante in nibh
          mauris cursus mattis. Sagittis vitae et leo duis.
        </p>
        <p>
          Sodales ut eu sem integer. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Tellus rutrum tellus
          pellentesque eu tincidunt tortor. Etiam tempor orci eu lobortis elementum nibh. Velit laoreet id donec
          ultrices tincidunt arcu non sodales. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Odio
          ut sem nulla pharetra diam sit amet nisl. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam.
          Donec enim diam vulputate ut pharetra sit. Posuere ac ut consequat semper viverra nam libero. Viverra mauris
          in aliquam sem fringilla ut morbi tincidunt augue. Aliquam eleifend mi in nulla posuere sollicitudin aliquam
          ultrices. Ac placerat vestibulum lectus mauris ultrices.
        </p>
        <p>
          Amet consectetur adipiscing elit duis tristique. Tortor condimentum lacinia quis vel eros. Elit sed vulputate
          mi sit amet mauris commodo quis imperdiet. Sed nisi lacus sed viverra tellus in hac habitasse. Praesent
          tristique magna sit amet purus gravida quis blandit. Magnis dis parturient montes nascetur ridiculus. Sit amet
          nulla facilisi morbi tempus iaculis urna id. Senectus et netus et malesuada fames. Faucibus ornare suspendisse
          sed nisi lacus sed. Facilisis volutpat est velit egestas dui id ornare arcu odio. In tellus integer feugiat
          scelerisque. Eu turpis egestas pretium aenean pharetra magna. Integer enim neque volutpat ac tincidunt vitae
          semper quis lectus. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Ante in nibh
          mauris cursus mattis. Sagittis vitae et leo duis.
        </p>
        <p>
          Sodales ut eu sem integer. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Tellus rutrum tellus
          pellentesque eu tincidunt tortor. Etiam tempor orci eu lobortis elementum nibh. Velit laoreet id donec
          ultrices tincidunt arcu non sodales. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Odio
          ut sem nulla pharetra diam sit amet nisl. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam.
          Donec enim diam vulputate ut pharetra sit. Posuere ac ut consequat semper viverra nam libero. Viverra mauris
          in aliquam sem fringilla ut morbi tincidunt augue. Aliquam eleifend mi in nulla posuere sollicitudin aliquam
          ultrices. Ac placerat vestibulum lectus mauris ultrices.
        </p>
      </div>
    )
  }
};
