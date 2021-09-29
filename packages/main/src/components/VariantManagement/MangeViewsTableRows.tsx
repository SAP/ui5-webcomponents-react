import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { useI18nBundle } from '@ui5/webcomponents-react-base/hooks/useI18nBundle';
import { FILE_ALREADY_EXISTS } from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import { Button } from '@ui5/webcomponents-react/dist/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/dist/ButtonDesign';
import { CheckBox } from '@ui5/webcomponents-react/dist/CheckBox';
import { Icon } from '@ui5/webcomponents-react/dist/Icon';
import { Input } from '@ui5/webcomponents-react/dist/Input';
import { RadioButton } from '@ui5/webcomponents-react/dist/RadioButton';
import { TableCell } from '@ui5/webcomponents-react/dist/TableCell';
import { TableRow } from '@ui5/webcomponents-react/dist/TableRow';
import { Text } from '@ui5/webcomponents-react/dist/Text';
import { ValueState } from '@ui5/webcomponents-react/dist/ValueState';
import React, { useReducer, useRef, useState } from 'react';

//todo prop types
//todo styling
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
    variantNames,
    //todo
    setDefaultView,
    handleRowChange
  } = props;

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const errorText = i18nBundle.getText(FILE_ALREADY_EXISTS);

  const rowId = `${children ?? ''}-${index}`;
  const [internalFavorite, setFavorite] = useReducer((prev) => {
    return !prev;
  }, !!favorite);
  const iconName = internalFavorite ? 'favorite' : 'unfavorite';
  const currentVariant = useRef();
  const inputRef = useRef(undefined);

  const [variantNameValid, setVariantNameValid] = useState(true);

  const onFavoriteClick = (e) => {
    setFavorite();
    handleRowChange(e, { currentVariant: currentVariant.current, favorite: !internalFavorite });
  };

  const handleVariantInput = (e) => {
    if (variantNames.includes(e.target.value)) {
      setVariantNameValid(false);
      inputRef.current?.focus();
    } else {
      setVariantNameValid(true);
      //todo state needed?
      //todo propertyName
      handleRowChange(e, { currentVariant: currentVariant.current, children: e.target.value });
    }
  };

  //todo if default, always fav, not changable <-- is this true?
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
    return (
      <Input
        value={children}
        onInput={handleVariantInput}
        ref={inputRef}
        valueStateMessage={<div>{errorText}</div>}
        valueState={variantNameValid ? ValueState.None : ValueState.Error}
      />
    );
  };
  return (
    <React.Fragment key={rowId}>
      <TableRow data-id={children} ref={currentVariant}>
        <TableCell>
          {/*todo i18n aria*/}
          {isDefault ? (
            <Icon name="favorite" style={{ color: ThemingParameters.sapContent_NonInteractiveIconColor }} />
          ) : (
            <Icon
              name={iconName}
              interactive
              style={{ color: ThemingParameters.sapContent_MarkerIconColor, cursor: 'pointer' }}
              onClick={onFavoriteClick}
            />
          )}
        </TableCell>
        <TableCell>{renderView()}</TableCell>
        {/*todo i18n aria*/}
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
        {/*todo readOnly has nothing to to with this, I guess this is the public/private flag*/}
        <TableCell>{!readOnly && <Button icon="decline" design={ButtonDesign.Transparent} />}</TableCell>
      </TableRow>
    </React.Fragment>
  );
};
