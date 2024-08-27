import { IconButton } from '@storybook/components';
import { addons, types } from '@storybook/manager-api';
import { ActionSheet, Button, ThemeProvider } from '@ui5/webcomponents-react';
import * as React from 'react';

const ADDON_ID = 'version-switch';
const TOOL_ID = `${ADDON_ID}/toolbar`;

addons.register(ADDON_ID, (api) => {
  addons.add(TOOL_ID, {
    type: types.TOOLEXTRA,
    title: 'Version Switch',
    render: () => {
      const [open, setOpen] = React.useState(false);

      const handleVersionSelect = (e) => {
        const { slug } = e.target.dataset;
        window.location.href = `https://sap.github.io/ui5-webcomponents-react/${slug}/`;
      };

      const activeVersionSlug =
        window.location.pathname.replace('/ui5-webcomponents-react/', '').replaceAll('/', '') || 'nightly';
      const activeVersion = activeVersionSlug.at(0).toUpperCase() + activeVersionSlug.slice(1);
      return (
        <ThemeProvider>
          <IconButton
            active
            key={TOOL_ID}
            id={TOOL_ID}
            title="Version Switch"
            style={{ order: -1 }}
            onClick={() => {
              setOpen(true);
            }}
          >
            Version: {activeVersion}
          </IconButton>
          <ActionSheet
            placementType="Bottom"
            open={open}
            opener={TOOL_ID}
            onAfterClose={() => {
              setOpen(false);
            }}
          >
            <Button onClick={handleVersionSelect} data-slug={'v2'}>
              Version 2
            </Button>
            <Button onClick={handleVersionSelect} data-slug={'v1'}>
              Version 1
            </Button>
            <Button onClick={handleVersionSelect} data-slug={'nightly'}>
              🚧 Nightly
            </Button>
          </ActionSheet>
        </ThemeProvider>
      );
    }
  });
});
