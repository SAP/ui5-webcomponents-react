import React from 'react';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { Button } from '@ui5/webcomponents-react/dist/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/dist/ButtonDesign';
import { CheckBox } from '@ui5/webcomponents-react/dist/CheckBox';
import { Icon } from '@ui5/webcomponents-react/dist/Icon';
import { Input } from '@ui5/webcomponents-react/dist/Input';
import { RadioButton } from '@ui5/webcomponents-react/dist/RadioButton';
import { TableCell } from '@ui5/webcomponents-react/dist/TableCell';
import { TableRow } from '@ui5/webcomponents-react/dist/TableRow';
import { Text } from '@ui5/webcomponents-react/dist/Text';

//todo
export const ManageViewsTableRows = (props) => {
  const {
    labelReadOnly,
    favorite,
    children,
    global,
    isDefault,
    applyAutomatically,
    author,
    readOnly,
    index,
    defaultView,
    setDefaultView
  } = props;

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
          {/*todo icon not interactive (when - also with readOnly?), icon callback*/}
          {isDefault ? (
            <Icon name="favorite" style={{ color: ThemingParameters.sapContent_NonInteractiveIconColor }} />
          ) : (
            <Icon name={name} interactive style={{ color: ThemingParameters.sapContent_MarkerIconColor }} />
          )}
        </TableCell>
        <TableCell>{renderView()}</TableCell>
        {/*todo i18n*/}
        <TableCell>{global ? 'Public' : 'Private'}</TableCell>
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
};
