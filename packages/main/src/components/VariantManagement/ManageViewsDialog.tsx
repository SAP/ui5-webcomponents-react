import '@ui5/webcomponents-icons/dist/decline.js';
import '@ui5/webcomponents-icons/dist/favorite.js';
import '@ui5/webcomponents-icons/dist/unfavorite.js';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { Button } from '@ui5/webcomponents-react/dist/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/dist/ButtonDesign';
import { CheckBox } from '@ui5/webcomponents-react/dist/CheckBox';
import { Dialog } from '@ui5/webcomponents-react/dist/Dialog';
import { Icon } from '@ui5/webcomponents-react/dist/Icon';
import { Input } from '@ui5/webcomponents-react/dist/Input';
import { RadioButton } from '@ui5/webcomponents-react/dist/RadioButton';
import { Table } from '@ui5/webcomponents-react/dist/Table';
import { TableCell } from '@ui5/webcomponents-react/dist/TableCell';
import { TableColumn } from '@ui5/webcomponents-react/dist/TableColumn';
import { TableRow } from '@ui5/webcomponents-react/dist/TableRow';
import { Text } from '@ui5/webcomponents-react/dist/Text';
import React, { Children, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Ui5DialogDomRef } from '../../interfaces/Ui5DialogDomRef';

const COLUMNS = [
  {
    accessor: 'favorite',
    Header: () => {
      return null;
    },
    Cell: ({ value }) => {
      const name = value ? 'favorite' : 'unfavorite';
      //todo callback onChange
      return <Icon name={name} interactive />;
    }
  }
];

const COLUMNS_TABLE = (
  <>
    <TableColumn key="favorite-variant-item" />
    <TableColumn>View</TableColumn>
    <TableColumn>Sharing</TableColumn>
    <TableColumn>Default</TableColumn>
    <TableColumn>Apply Automatically</TableColumn>
    <TableColumn>Created By</TableColumn>
    <TableColumn key="delete-variant-item" />
  </>
);

export const ManageViewsDialog = (props) => {
  const { children, onAfterClose } = props;
  const manageViewsRef = useRef<Ui5DialogDomRef>(null);

  useEffect(() => {
    manageViewsRef.current.show();
    return () => {
      manageViewsRef.current?.close();
    };
  }, []);

  const childrenProps = Children.map(children, (child) => {
    return child.props;
  });
  console.log(childrenProps);
  const [defaultView, setDefaultView] = useState<undefined | string>();
  //todo apply view automatically
  const [applyViewAutomatically, setApplyViewAutomatically] = useState<undefined | string[]>();
  return createPortal(
    //todo i18n
    <Dialog ref={manageViewsRef} onAfterClose={onAfterClose} headerText="Manage Views">
      {/*todo create separate component*/}
      <Table columns={COLUMNS_TABLE} style={{ minWidth: '600px' }}>
        {childrenProps.map((itemProps, index) => {
          const { labelReadOnly, favorite, children, isGlobal, isDefault, applyAutomatically, author, readOnly } =
            itemProps;
          const rowId = `${children ?? ''}-${index}`;

          const name = favorite ? 'favorite' : 'unfavorite';
          const renderView = () => {
            if (labelReadOnly) {
              return (
                <Text
                  style={{
                    fontFamily: isDefault ? ThemingParameters.sapFontBoldFamily : ThemingParameters.sapFontFamily
                  }}
                >
                  {children}
                </Text>
              );
            }
            return <Input value={children} />;
          };
          return (
            <React.Fragment key={rowId}>
              <TableRow>
                <TableCell>
                  {/*todo icon not interactive (when?), icon callback*/}
                  <Icon name={name} interactive />
                </TableCell>
                <TableCell>{renderView()}</TableCell>
                {/*todo i18n*/}
                <TableCell>{isGlobal ? 'Public' : 'Private'}</TableCell>
                {/*todo callback --> handle interaction (only single checked)*/}
                <TableCell>
                  <RadioButton
                    data-row-id={rowId}
                    checked={defaultView !== undefined ? defaultView === rowId : isDefault}
                    onChange={(e) => {
                      //todo user callback (targetRow, rowId, state, )
                      setDefaultView(e.target.dataset.rowId);
                    }}
                  />
                </TableCell>
                {/*todo cb*/}
                <TableCell>
                  <CheckBox checked={applyAutomatically} />
                </TableCell>
                <TableCell>
                  <Text>{author}</Text>
                </TableCell>
                <TableCell>{!readOnly && <Button icon="decline" design={ButtonDesign.Transparent} />}</TableCell>
              </TableRow>
            </React.Fragment>
          );
        })}
      </Table>
    </Dialog>,
    document.body
  );
};
