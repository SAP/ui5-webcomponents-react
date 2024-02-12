import { SplitterElementContent } from '@sb/components/SplitterElementContent';
import { isChromatic } from '@sb/utils';
import type { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { Button, FlexBox, Label, SegmentedButton, SegmentedButtonItem, SplitterElement } from '../..';
import { SplitterLayout } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / SplitterLayout',
  component: SplitterLayout,
  argTypes: {
    children: { control: { disable: true } }
  },
  args: { style: { width: isChromatic ? '1200px' : '100%', height: '800px' } },
  parameters: {
    chromatic: { delay: 1000, diffThreshold: 0.4 }
  }
} satisfies Meta<typeof SplitterLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    chromatic: {
      diffThreshold: 0.6,
      // todo: remove after chromatic supports >=Chrome 120
      disableSnapshot: true
    }
  },
  render(args) {
    return (
      <SplitterLayout {...args}>
        <SplitterElement>
          <SplitterElementContent text="Content 1" />
        </SplitterElement>
        <SplitterElement>
          <SplitterElementContent
            text={`Content 2
            with
            multi
            lines
            `}
          />
        </SplitterElement>
        <SplitterElement>
          <SplitterElementContent text="Content 3 with long text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." />
        </SplitterElement>
        <SplitterElement>
          <SplitterElementContent text="Content 4" />
        </SplitterElement>
      </SplitterLayout>
    );
  }
};

export const LimitedAreas: Story = {
  render(args) {
    return (
      <SplitterLayout {...args}>
        <SplitterElement size="10%">
          <SplitterElementContent text="Content 1 - (size: 10%)" background="cadetblue" />
        </SplitterElement>
        <SplitterElement>
          <SplitterElementContent text="Content 2" background="skyblue" />
        </SplitterElement>
        <SplitterElement minSize={200}>
          <SplitterElementContent text="Content 3 (minSize: 200)" background="lightblue" />
        </SplitterElement>
        <SplitterElement>
          <SplitterElementContent text="Content 4" background="paleturquoise" />
        </SplitterElement>
        <SplitterElement>
          <SplitterElementContent text="Content 5" background="lightskyblue" />
        </SplitterElement>
        <SplitterElement resizable={false} size="150px">
          <SplitterElementContent text="Content 6 (not resizable - size: 150px)" background="powderblue" />
        </SplitterElement>
        <SplitterElement>
          <SplitterElementContent text="Content 7" background="aliceblue" />
        </SplitterElement>
        <SplitterElement>
          <SplitterElementContent text="Content 8" background="lightsteelblue" />
        </SplitterElement>
      </SplitterLayout>
    );
  }
};

export const Nested: Story = {
  parameters: { chromatic: { disableSnapshot: true } },
  render(args) {
    const [vertical, setVertical] = useState(args.vertical);
    const handleChange = (e) => {
      setVertical(e.detail.selectedItem.textContent === 'Vertical');
    };
    useEffect(() => {
      setVertical(args.vertical);
    }, [args.vertical]);

    return (
      <>
        {!isChromatic && (
          <FlexBox direction="Column">
            <Label showColon>Orientation of outer SplitterLayout</Label>
            <SegmentedButton onSelectionChange={handleChange}>
              <SegmentedButtonItem pressed={!vertical}>Horizontal</SegmentedButtonItem>
              <SegmentedButtonItem pressed={vertical}>Vertical</SegmentedButtonItem>
            </SegmentedButton>
          </FlexBox>
        )}
        <br />
        <br />
        <SplitterLayout style={args.style} vertical={vertical}>
          <SplitterElement size="40%">
            <FlexBox direction="Column" style={{ width: '100%', height: '100%' }}>
              <Button style={{ width: '100%' }}>Content 1</Button>
              <SplitterLayout style={{ height: '100%' }}>
                <SplitterElement style={{ background: 'lightblue' }} size="auto">
                  <Button>Content 2</Button>
                </SplitterElement>
                <SplitterElement style={{ background: 'skyblue' }} size="10%">
                  <Button data-auto>Content 3</Button>
                </SplitterElement>
                <SplitterElement style={{ background: 'cadetblue' }} size="auto">
                  <Button>Content 4</Button>
                </SplitterElement>
                <SplitterElement style={{ background: 'lightskyblue' }} size="60%">
                  <FlexBox direction="Column" style={{ width: '100%' }}>
                    <Button style={{ width: '100%' }}>Content 5</Button>
                    <SplitterLayout style={{ height: '100%' }}>
                      <SplitterElement style={{ background: '#E29713' }}>
                        <Button>Content 6</Button>
                      </SplitterElement>
                      <SplitterElement size="50%">
                        <FlexBox direction="Column" style={{ width: '100%', height: '100%' }}>
                          <Button style={{ width: '100%' }}>Content 7</Button>
                          <SplitterLayout vertical={true} style={{ height: '100%' }}>
                            <SplitterElement style={{ background: 'lightgrey' }} size="50%">
                              <Button>Content 8</Button>
                            </SplitterElement>
                            <SplitterElement style={{ background: 'grey' }} size="50%">
                              <Button>Content 9</Button>
                            </SplitterElement>
                          </SplitterLayout>
                        </FlexBox>
                      </SplitterElement>
                      <SplitterElement style={{ background: '#D3A95E' }}>
                        <Button>Content 10</Button>
                      </SplitterElement>
                    </SplitterLayout>
                  </FlexBox>
                </SplitterElement>
              </SplitterLayout>
            </FlexBox>
          </SplitterElement>
          <SplitterElement size="20%">
            <Button style={{ width: '100%' }}>Content 11</Button>
          </SplitterElement>
          <SplitterElement>
            <FlexBox direction="Column" style={{ width: '100%' }}>
              <Button style={{ width: '100%' }}>Content 12</Button>
              <SplitterLayout style={{ height: '100%' }}>
                <SplitterElement style={{ background: 'forestgreen' }} size="15%">
                  <Button>Content 13</Button>
                </SplitterElement>
                <SplitterElement style={{ background: 'darkgreen' }} size="15%">
                  <Button>Content 14</Button>
                </SplitterElement>
                <SplitterElement style={{ background: 'olive' }} resizable={false} size="40%">
                  <Button>Content 15</Button>
                </SplitterElement>
                <SplitterElement style={{ background: 'green' }} size="15%">
                  <Button>Content 16</Button>
                </SplitterElement>
                <SplitterElement style={{ background: 'seagreen' }} size="15%">
                  <Button>Content 17</Button>
                </SplitterElement>
              </SplitterLayout>
            </FlexBox>
          </SplitterElement>
        </SplitterLayout>
      </>
    );
  }
};
