import { text } from '@storybook/addon-knobs';
import { Grid } from '@ui5/webcomponents-react/lib/Grid';
import React from 'react';

export const defaultStory = () => {
  return (
    <Grid
      defaultSpan={text('defaultSpan', 'XL3 L3 M6 S12')}
      defaultIndent={text('defaultIndent', 'XL0 L0 M0 S0')}
      vSpacing={text('vSpacing', '1rem')}
      hSpacing={text('hSpacing', '1rem')}
    >
      <div style={{ backgroundColor: 'lightgreen' }} data-layout={{ span: 'XL8 L8 M8 S12', indent: 'XL1 L1 M1 S0' }}>
        {`Div 1 with prop: data-layout={{ span: 'XL8 L8 M8 S12', indent: 'XL1 L1 M1 S0' }}`}
      </div>
      <div style={{ backgroundColor: 'yellow' }}>Div 2</div>
      <div style={{ backgroundColor: 'cyan' }}>Div 3</div>
      <div style={{ backgroundColor: 'orange' }}>Div 4</div>
      <div style={{ backgroundColor: 'red' }}>Div 5</div>
      <div style={{ backgroundColor: 'blue' }}>Div 6</div>
    </Grid>
  );
};

export default {
  title: 'Components / Grid',
  component: Grid
};
