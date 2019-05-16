import { Dialog } from '../../lib/Dialog';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('UI5 Web Components | Dialog', module).add('Generated default story', () => (
  <Dialog
    initialFocus={''}
    hideHeader={boolean('hideHeader', false)}
    headerText={'generatedString'}
    stretch={boolean('stretch', false)}
    open={boolean('open', true)}
    onBeforeOpen={null}
    onAfterOpen={null}
    onBeforeClose={null}
    onAfterClose={null}
    content={<div>DialogContent</div>}
    header={null}
    footer={<div>Footer</div>}
  />
));
