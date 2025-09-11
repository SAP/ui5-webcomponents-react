import type { Meta, StoryObj } from '@storybook/react-vite';
import MediaGalleryLayout from '@ui5/webcomponents-fiori/dist/types/MediaGalleryLayout.js';
import MediaGalleryMenuHorizontalAlign from '@ui5/webcomponents-fiori/dist/types/MediaGalleryMenuHorizontalAlign.js';
import MediaGalleryMenuVerticalAlign from '@ui5/webcomponents-fiori/dist/types/MediaGalleryMenuVerticalAlign.js';
import { useRef } from 'react';
import { MediaGalleryItem } from '../MediaGalleryItem/index.js';
import { Toast } from '../Toast/index.js';
import { MediaGallery } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / MediaGallery',
  component: MediaGallery,
  argTypes: {
    children: { control: { disable: true } },
  },
  args: {
    layout: MediaGalleryLayout.Auto,
    menuHorizontalAlign: MediaGalleryMenuHorizontalAlign.Left,
    menuVerticalAlign: MediaGalleryMenuVerticalAlign.Bottom,
  },
  tags: ['package:@ui5/webcomponents-fiori'],
} satisfies Meta<typeof MediaGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <MediaGallery {...args}>
        <MediaGalleryItem>
          <img src="https://ui5.github.io/webcomponents/images/HT-1000.jpg" alt="Example Image" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://ui5.github.io/webcomponents/images/HT-1010.jpg" alt="Example Image" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://ui5.github.io/webcomponents/images/HT-1022.jpg" alt="Example Image" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://ui5.github.io/webcomponents/images/HT-1030.jpg" alt="Example Image" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://ui5.github.io/webcomponents/images/HT-2002.jpg" alt="Example Image" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://ui5.github.io/webcomponents/images/HT-2026.jpg" alt="Example Image" />
        </MediaGalleryItem>
      </MediaGallery>
    );
  },
};

export const CustomThumbnail: Story = {
  render: (args) => {
    return (
      <MediaGallery {...args}>
        <MediaGalleryItem thumbnail={<img src="https://ui5.github.io/webcomponents/images/HT-1000-small.jpg" />}>
          <img src="https://ui5.github.io/webcomponents/images/HT-1000.jpg" alt="Example Image" />
        </MediaGalleryItem>
        <MediaGalleryItem disabled>
          <img src="https://ui5.github.io/webcomponents/images/HT-1010.jpg" alt="Example Image" />
        </MediaGalleryItem>
      </MediaGallery>
    );
  },
};

export const InteractiveDisplayArea: Story = {
  render: (args) => {
    const ref = useRef(null);
    const handleDisplayAreaClick = () => {
      ref.current.show();
    };
    return (
      <>
        <Toast ref={ref}>Display Area Clicked!</Toast>
        <MediaGallery {...args} interactiveDisplayArea onDisplayAreaClick={handleDisplayAreaClick}>
          <MediaGalleryItem>
            <img src="https://ui5.github.io/webcomponents/images/HT-1000.jpg" alt="Example Image" />
          </MediaGalleryItem>
          <MediaGalleryItem selected>
            <img src="https://ui5.github.io/webcomponents/images/HT-1010.jpg" alt="Example Image" />
          </MediaGalleryItem>
        </MediaGallery>
      </>
    );
  },
};
