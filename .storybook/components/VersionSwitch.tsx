/* eslint-disable react-hooks/rules-of-hooks */

import { IconButton } from '@storybook/components';
import { addons, types } from '@storybook/manager-api';
import '@ui5/webcomponents/dist/Menu.js';
import '@ui5/webcomponents/dist/MenuItem.js';
import * as React from 'react';

const ADDON_ID = 'version-switch';
const TOOL_ID = `${ADDON_ID}/toolbar`;

const handleVersionSelect = (e) => {
  const { slug } = e.detail.item.dataset;
  window.location.href = `https://sap.github.io/ui5-webcomponents-react/${slug}/`;
};

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOLEXTRA,
    title: 'Version Switch',
    render: () => {
      const [open, setOpen] = React.useState(false);
      const menuRef = React.useRef(null);

      const activeVersionSlug =
        window.location.pathname.replace('/ui5-webcomponents-react/', '').replaceAll('/', '') || 'nightly';
      const activeVersion = activeVersionSlug.at(0).toUpperCase() + activeVersionSlug.slice(1);

      React.useEffect(() => {
        const menu = menuRef.current;
        if (menu) {
          menuRef.current.open = open;
        }
      }, [open]);

      React.useEffect(() => {
        const menu = menuRef.current;
        const handleClose = () => {
          setOpen(false);
        };

        if (menu) {
          menu.addEventListener('item-click', handleVersionSelect);
          menu.addEventListener('close', handleClose);
        }

        return () => {
          if (menu) {
            menu.removeEventListener('item-click', handleVersionSelect);
            menu.removeEventListener('close', handleClose);
          }
        };
      }, []);

      return (
        <>
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
          {/*todo: use wcr components once supported*/}
          <ui5-menu opener={TOOL_ID} ref={menuRef}>
            <ui5-menu-item text="Version 2" data-slug={'v2'}></ui5-menu-item>
            <ui5-menu-item text="Version 1" data-slug={'v1'}></ui5-menu-item>
            <ui5-menu-item text="🚧 Nightly" data-slug={'nightly'}></ui5-menu-item>
          </ui5-menu>
        </>
      );
    }
  });
});
