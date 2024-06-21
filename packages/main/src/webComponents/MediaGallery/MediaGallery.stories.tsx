import type { Meta, StoryObj } from '@storybook/react';
import MediaGalleryLayout from '@ui5/webcomponents-fiori/dist/types/MediaGalleryLayout.js';
import MediaGalleryMenuHorizontalAlign from '@ui5/webcomponents-fiori/dist/types/MediaGalleryMenuHorizontalAlign.js';
import MediaGalleryMenuVerticalAlign from '@ui5/webcomponents-fiori/dist/types/MediaGalleryMenuVerticalAlign.js';
import React, { useRef } from 'react';
import { MediaGalleryItem } from '../MediaGalleryItem/index.js';
import { Toast } from '../Toast/index.js';
import { MediaGallery } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / MediaGallery',
  component: MediaGallery,
  argTypes: {
    children: { control: { disable: true } }
  },
  args: {
    layout: MediaGalleryLayout.Auto,
    menuHorizontalAlign: MediaGalleryMenuHorizontalAlign.Left,
    menuVerticalAlign: MediaGalleryMenuVerticalAlign.Bottom
  },
  tags: ['package:@ui5/webcomponents-fiori']
} satisfies Meta<typeof MediaGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <MediaGallery {...args}>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/images/HT-1000.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/images/HT-1010.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/images/HT-1022.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/images/HT-1030.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/images/HT-2002.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/images/HT-2026.jpg" />
        </MediaGalleryItem>
      </MediaGallery>
    );
  }
};

export const CustomThumbnail: Story = {
  render: (args) => {
    return (
      <MediaGallery {...args}>
        <MediaGalleryItem thumbnail={<img src="https://sap.github.io/ui5-webcomponents/images/HT-1000-small.jpg" />}>
          <img src="https://sap.github.io/ui5-webcomponents/images/HT-1000.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem disabled>
          <img src="https://sap.github.io/ui5-webcomponents/images/HT-1010.jpg" />
        </MediaGalleryItem>
      </MediaGallery>
    );
  }
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
            <img src="https://sap.github.io/ui5-webcomponents/images/HT-1000.jpg" />
          </MediaGalleryItem>
          <MediaGalleryItem selected>
            <img src="https://sap.github.io/ui5-webcomponents/images/HT-1010.jpg" />
          </MediaGalleryItem>
        </MediaGallery>
      </>
    );
  }
};
