import { InfoLabel } from './index';
import { mountThemedComponent } from '@shared/tests/utils';
import React from 'react';

describe('InfoLabel', () => {
  test('Render without crashing', () => {
    const wrapper = mountThemedComponent(<InfoLabel />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('With Text', () => {
    const wrapper = mountThemedComponent(
      <InfoLabel flavour={3} displayOnly={false} width="100px">
        Test
      </InfoLabel>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('With Number', () => {
    const wrapper = mountThemedComponent(
      <InfoLabel flavour={3} displayOnly={false} width="100px">
        123
      </InfoLabel>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });
});
