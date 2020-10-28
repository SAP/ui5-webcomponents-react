import { render } from '@shared/tests';
import { createPassThroughPropsTest } from '@shared/tests/utils';
import { Grid } from '@ui5/webcomponents-react/lib/Grid';
import React from 'react';
import { GridPosition } from '@ui5/webcomponents-react/lib/GridPosition';

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
    const { asFragment } = render(
      <Grid>
        <GridContent />
      </Grid>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Custom Class Names and Styling', () => {
    const { asFragment } = render(
      <Grid style={{ backgroundColor: 'purple' }} className="customClassName" hSpacing={0}>
        <GridContent />
      </Grid>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Renders Children with custom layout data', () => {
    const { asFragment } = render(
      <Grid>
        <div
          style={{
            height: '6rem',
            width: '100%',
            backgroundColor: '#A9EAFF'
          }}
          data-layout-span="XL12 L12 M12 S12"
        />
        <div
          style={{
            height: '6rem',
            width: '100%',
            backgroundColor: '#A9EAFF'
          }}
          data-layout-indent="XL1 L1 M1 S1"
        />
      </Grid>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Grid Position Center', () => {
    const { asFragment } = render(
      <Grid style={{ width: '60%' }} position={GridPosition.Center}>
        <GridContent />
      </Grid>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test('Grid Position Right', () => {
    const { asFragment } = render(
      <Grid style={{ width: '60%' }} position={GridPosition.Right}>
        <GridContent />
      </Grid>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  createPassThroughPropsTest(Grid);
});
