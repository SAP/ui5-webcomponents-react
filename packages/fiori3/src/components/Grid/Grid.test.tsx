import React from 'react';
import { mount } from '@shared/tests/utils';
import { Grid, GridPosition } from './index';

const GridContent = () => (
  <>
    <div
      style={{
        height: '6rem',
        width: '100%',
        backgroundColor: '#A9EAFF'
      }}
    />
    <div
      style={{
        height: '6rem',
        width: '100%',
        backgroundColor: '#A9EAFF'
      }}
    />
    <div
      style={{
        height: '6rem',
        width: '100%',
        backgroundColor: '#A9EAFF'
      }}
    />
    <div
      style={{
        height: '6rem',
        width: '100%',
        backgroundColor: '#A9EAFF'
      }}
    />
  </>
);

describe('Grid', () => {
  test('Renders Children', () => {
    const wrapper = mount(
      <Grid>
        <GridContent />
      </Grid>
    );
    expect(wrapper.render()).toMatchSnapshot();
    wrapper.unmount();
  });

  test('Custom Class Names and Styling', () => {
    const wrapper = mount(
      <Grid width="60%" style={{ backgroundColor: 'purple' }} className="customClassName" hSpacing={0}>
        <GridContent />
      </Grid>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Renders Children with custom layout data', () => {
    const wrapper = mount(
      <Grid>
        <div
          style={{
            height: '6rem',
            width: '100%',
            backgroundColor: '#A9EAFF'
          }}
          data-layout={{ span: 'XL12 L12 M12 S12' }}
        />
        <div
          style={{
            height: '6rem',
            width: '100%',
            backgroundColor: '#A9EAFF'
          }}
          data-layout={{ indent: 'XL1 L1 M1 S1' }}
        />
      </Grid>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Grid Position Center', () => {
    const wrapper = mount(
      <Grid width="60%" position={GridPosition.Center}>
        <GridContent />
      </Grid>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });
  test('Grid Position Right', () => {
    const wrapper = mount(
      <Grid width="60%" position={GridPosition.Right}>
        <GridContent />
      </Grid>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });
});
