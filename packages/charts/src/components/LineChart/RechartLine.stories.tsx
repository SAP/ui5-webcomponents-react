import { boolean } from '@storybook/addon-knobs';
import React from 'react';
import { LineRechart } from './RechartLine';

const dataset = [
  {
    test: 'January',
    uv: 100,
    pv: 200,
    tv: 900
  },
  {
    test: 'February',
    uv: 300,
    pv: 120,
    tv: 880
  },
  {
    test: 'March',
    uv: 530,
    pv: 300,
    tv: 700
  },
  {
    test: 'April',
    uv: 200,
    pv: 34,
    tv: 604
  }
];

export function renderStory() {
  return <LineRechart labelKey={'test'} dataset={dataset} width={'95%'} height={'400px'} />;
}

export default {
  title: 'Julian | Test',
  component: LineRechart
};
