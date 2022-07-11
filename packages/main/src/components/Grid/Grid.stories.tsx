import React from 'react';
import { Grid } from './index';

const Template = (args) => (
  <Grid {...args}>
    <div style={{ backgroundColor: '#afd69b' }} data-layout-span="XL8 L8 M8 S12" data-layout-indent="XL1 L1 M1 S0">
      {`Div 1 with prop: data-layout-span="XL8 L8 M8 S12" and data-layout-indent="XL1 L1 M1 S0"`}
    </div>
    <div style={{ backgroundColor: '#b7cc9d' }}>Div 2</div>
    <div style={{ backgroundColor: '#a6dbbc' }}>Div 3</div>
    <div style={{ backgroundColor: '#8fb6ab' }}>Div 4</div>
    <div style={{ backgroundColor: '#8ca19e' }}>Div 5</div>
    <div style={{ backgroundColor: '#838f8c' }}>Div 6</div>
  </Grid>
);

export const DefaultStory = Template.bind({});
