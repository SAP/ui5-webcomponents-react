import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import React from 'react';
import { IndicationColor, ObjectStatus, ValueState } from '../..';

describe('ObjectStatus', () => {
  test.each(Object.values({ ...ValueState, ...IndicationColor }))('state=%s', (state) => {
    const { asFragment } = render(<ObjectStatus state={state} showDefaultIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  createCustomPropsTest(ObjectStatus);
});
