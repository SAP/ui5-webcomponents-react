import { Button } from '@storybook/components';
import { addons, types } from '@storybook/manager-api';
import { ActionSheet } from '@ui5/webcomponents-react';
import * as React from 'react';

const ADDON_ID = 'version-switch';
const TOOL_ID = `${ADDON_ID}/toolbar`;

addons.register(ADDON_ID, (api) => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Version Switch',
    render: () => {
      const [open, setOpen] = React.useState(false);

      const handleVersionSelect = (e) => {
        const { slug } = e.target.dataset;
        window.location.href = `https://sap.github.io/ui5-webcomponents-react/${slug}/`;
      };
      return (
        <>
          <Button
            key={TOOL_ID}
            id={TOOL_ID}
            title="Version Switch"
            onClick={() => {
              setOpen(true);
            }}
          >
            Version
          </Button>
          <ActionSheet open={open} opener={TOOL_ID}>
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
        </>
      );
    }
  });
});
