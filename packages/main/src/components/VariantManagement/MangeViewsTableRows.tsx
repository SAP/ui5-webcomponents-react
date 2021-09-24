import React, { useReducer, useRef, useState } from 'react';
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
    showShare,
    showApplyAutomatically,
    showSetAsDefault,
    //todo
    setDefaultView,
    handleRowChange
  } = props;
  const rowId = `${children ?? ''}-${index}`;
  const [internalFavorite, setFavorite] = useReducer((prev) => {
    return !prev;
  }, !!favorite);
  const name = internalFavorite ? 'favorite' : 'unfavorite';
  const currentVariant = useRef();

  const onFavoriteClick = (e) => {
    setFavorite();
    handleRowChange(e, { currentVariant: currentVariant.current, favorite: !internalFavorite });
  };

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
    // todo Variant name is unique
    return <Input value={children} />;
  };
  return (
    <React.Fragment key={rowId}>
      <TableRow data-id={children} ref={currentVariant}>
        <TableCell>
          {/*todo icon not interactive (when - also with readOnly?), icon callback*/}
          {isDefault ? (
            <Icon name="favorite" style={{ color: ThemingParameters.sapContent_NonInteractiveIconColor }} />
          ) : (
            <Icon
              name={name}
              interactive
              style={{ color: ThemingParameters.sapContent_MarkerIconColor }}
              onClick={onFavoriteClick}
            />
          )}
        </TableCell>
        <TableCell>{renderView()}</TableCell>
        {/*todo i18n*/}
        {showShare && <TableCell>{global ? 'Public' : 'Private'}</TableCell>}
        {/*todo callback --> handle interaction (only single checked)*/}
        {showSetAsDefault && (
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
        )}
        {/*todo cb*/}
        {showApplyAutomatically && (
          <TableCell>
            <CheckBox checked={applyAutomatically} />
          </TableCell>
        )}
        <TableCell>
          <Text>{author}</Text>
        </TableCell>
        <TableCell>{!readOnly && <Button icon="decline" design={ButtonDesign.Transparent} />}</TableCell>
      </TableRow>
    </React.Fragment>
  );
};
