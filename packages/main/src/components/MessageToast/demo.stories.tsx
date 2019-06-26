import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button } from '../../lib/Button';
import { MessageToast } from '../../lib/MessageToast';
import { ThemeProvider } from '../../lib/ThemeProvider';

storiesOf('Components | MessageToast', module).add(
  'Default',
  () => (
    <div>
      <Button
        onPress={() => {
          MessageToast.show('Hello World');
        }}
      >
        Click to trigger Message Toast
      </Button>

      <Button
        onPress={() => {
          MessageToast.error('Hello World');
        }}
      >
        Click to trigger Error Toast
      </Button>

      <Button
        onPress={() => {
          MessageToast.success('Hello World');
        }}
      >
        Click to trigger Success Toast
      </Button>

      <Button
        onPress={() => {
          MessageToast.warning('Hello World this is a very long message. Just testing. Hello Hello Hello.');
        }}
      >
        Click to trigger Warning Toast
      </Button>
    </div>
  ),
  {
    info: {
      propTablesExclude: [ThemeProvider, Button],
      text: `
#### Success Message Toast:
import { MessageToast } from '@ui5/webcomponents-react';

MessageToast.success('Hello Success Message Toast');

#### Warning Message Toast:
import { MessageToast } from '@ui5/webcomponents-react';

MessageToast.warning('Hello Warning Message Toast');


#### Error Message Toast:
import { MessageToast } from '@ui5/webcomponents-react';

MessageToast.error('Hello Error Message Toast');



#### Generic Message Toast:
import { MessageToast } from '@ui5/webcomponents-react';

MessageToast.show('Hello Generic Message Toast');


    `
    }
  }
);
