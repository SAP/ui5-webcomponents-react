import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { ObjectStatus } from '@ui5/webcomponents-react/dist/ObjectStatus';
import { ValueState } from '@ui5/webcomponents-react/dist/ValueState';
import { IndicationColor } from '@ui5/webcomponents-react/dist/IndicationColor';
import React from 'react';

describe('ObjectStatus', () => {
  test.each(Object.values({ ...ValueState, ...IndicationColor }))('state=%s', (state) => {
    const { asFragment } = render(<ObjectStatus state={state} showDefaultIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  createCustomPropsTest(ObjectStatus);
});
