import { Button } from '@lib/Button';
import { ContentDensity } from '@lib/ContentDensity';
import { MessageToast } from '@lib/MessageToast';
import { ThemeProvider } from '@lib/ThemeProvider';
import { Themes } from '@lib/Themes';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('F4R Components | MessageToast', module).add(
  'Default',
  () => (
    <ThemeProvider theme={Themes.sap_fiori3_light} contentDensity={ContentDensity.Compact} withToastContainer>
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
    </ThemeProvider>
  ),
  {
    info: {
      propTablesExclude: [ThemeProvider, Button],
      text: `
#### Success Message Toast:
import { MessageToast } from '@fiori-for-react/fiori3';

MessageToast.success('Hello Success Message Toast');

#### Warning Message Toast:
import { MessageToast } from '@fiori-for-react/fiori3';

MessageToast.warning('Hello Warning Message Toast');


#### Error Message Toast:
import { MessageToast } from '@fiori-for-react/fiori3';

MessageToast.error('Hello Error Message Toast');



#### Generic Message Toast:
import { MessageToast } from '@fiori-for-react/fiori3';

MessageToast.show('Hello Generic Message Toast');


    `
    }
  }
);
