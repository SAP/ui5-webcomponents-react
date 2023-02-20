import declineIcon from '@ui5/webcomponents-icons/dist/decline.js';
import favoriteIcon from '@ui5/webcomponents-icons/dist/favorite.js';
import unfavoriteIcon from '@ui5/webcomponents-icons/dist/unfavorite.js';
import { ThemingParameters, useI18nBundle } from '@ui5/webcomponents-react-base';
import React, { useReducer, useRef, useState } from 'react';
import { ButtonDesign } from '../../enums/ButtonDesign';
import { ValueState } from '../../enums/ValueState';
import {
  APPLY_AUTOMATICALLY,
  DELETE_VIEW,
  FILE_ALREADY_EXISTS,
  MARK_AS_FAVORITE,
  MARK_AS_STANDARD,
  PRIVATE,
  PUBLIC,
  SELECTED_AS_FAVORITE,
  SPECIFY_VIEW_NAME,
  UNSELECTED_AS_FAVORITE,
  VIEW
} from '../../i18n/i18n-defaults';
import { trimAndRemoveSpaces } from '../../internal/utils';
import { Button } from '../../webComponents/Button';
import { CheckBox } from '../../webComponents/CheckBox';
import { Icon } from '../../webComponents/Icon';
import { Input } from '../../webComponents/Input';
import { RadioButton } from '../../webComponents/RadioButton';
import { TableCell } from '../../webComponents/TableCell';
import { TableRow } from '../../webComponents/TableRow';
import { Text } from '../Text';
import { VariantItemPropTypes } from './VariantItem';

interface ManageViewsTableRowsProps extends VariantItemPropTypes {
  variantNames: string[];
  handleRowChange: (e: Event, payload: any) => void;
  handleDelete: (e: any) => void;
  defaultView: string;
  setDefaultView: (view: string) => void;
  showShare: boolean;
  showApplyAutomatically: boolean;
  showSetAsDefault: boolean;
  showCreatedBy: boolean;
  showOnlyFavorites?: boolean;
  changedVariantNames: Map<string, any>;
  setChangedVariantNames: (varNames: any) => void;
  setInvalidVariants: (invalidVars: any) => void;
}

export const ManageViewsTableRows = (props: ManageViewsTableRowsProps) => {
  const {
    variantNames,
    changedVariantNames,
    setChangedVariantNames,
    handleRowChange,
    handleDelete,
    defaultView,
    setDefaultView,
    showShare,
    showApplyAutomatically,
    showSetAsDefault,
    showCreatedBy,
    labelReadOnly,
    favorite,
    children,
    global,
    isDefault,
    applyAutomatically,
    author,
    setInvalidVariants,
    hideDelete,
    showOnlyFavorites
  } = props;

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const errorTextAlreadyExists = i18nBundle.getText(FILE_ALREADY_EXISTS);
  const errorTextEmpty = i18nBundle.getText(SPECIFY_VIEW_NAME);
  const publicText = i18nBundle.getText(PUBLIC);
  const privateText = i18nBundle.getText(PRIVATE);
  const a11yFavoriteText = i18nBundle.getText(MARK_AS_FAVORITE);
  const a11yStandardText = i18nBundle.getText(MARK_AS_STANDARD);
  const a11yDeleteText = i18nBundle.getText(DELETE_VIEW);
  const a11yApplyAutomaticallyText = i18nBundle.getText(APPLY_AUTOMATICALLY);
  const favoriteIconTitleText = i18nBundle.getText(SELECTED_AS_FAVORITE);
  const unfavoriteIconTitleText = i18nBundle.getText(UNSELECTED_AS_FAVORITE);
  const inputPlaceHolder = i18nBundle.getText(VIEW);

  const [internalFavorite, setFavorite] = useReducer((prev) => {
    return !prev;
  }, !!favorite);
  const iconName = internalFavorite ? favoriteIcon : unfavoriteIcon;
  const inputRef = useRef(undefined);

  const [variantNameInvalid, setVariantNameInvalid] = useState<boolean | string>(false);

  const onFavoriteClick = (e) => {
    setFavorite();
    handleRowChange(e, { currentVariant: children, favorite: !internalFavorite });
  };
  const handleVariantInput = (e) => {
    if (typeof props.manageViewsInputProps?.onInput === 'function') {
      props.manageViewsInputProps?.onInput(e);
    }
    const trimmedValue = trimAndRemoveSpaces(e.target.value);
    if (variantNames.includes(trimmedValue) || Array.from(changedVariantNames.values()).includes(trimmedValue)) {
      setVariantNameInvalid(errorTextAlreadyExists);
      setInvalidVariants((prev) => ({ ...prev, [`${children}`]: inputRef.current }));
      handleRowChange(e, { currentVariant: children, children: trimmedValue });
    } else if (trimmedValue.length === 0) {
      setVariantNameInvalid(errorTextEmpty);
      setInvalidVariants((prev) => ({ ...prev, [children]: inputRef.current }));
      handleRowChange(e, { currentVariant: children, children: trimmedValue });
    } else if (e.isInvalid) {
      setInvalidVariants((prev) => ({ ...prev, [`${children}`]: inputRef.current }));
    } else {
      setVariantNameInvalid(false);
      setInvalidVariants((prev) => {
        const invalidRows = { ...prev };
        if (prev.hasOwnProperty(children)) {
          delete invalidRows[children];
        }
        return invalidRows;
      });
      handleRowChange(e, { currentVariant: children, children: trimmedValue });
    }
  };

  const handleVariantChange = (e) => {
    if (typeof props.manageViewsInputProps?.onChange === 'function') {
      props.manageViewsInputProps?.onChange(e);
    }
    const trimmedValue = trimAndRemoveSpaces(e.target.value);
    setChangedVariantNames((prev) => {
      const currentChangedVariants = new Map(prev);
      currentChangedVariants.set(children, trimmedValue);
      return currentChangedVariants;
    });
  };

  const handleDefaultChange = () => {
    setDefaultView(children);
  };

  const handleApplyAutomaticallyChange = (e) => {
    handleRowChange(e, { currentVariant: children, applyAutomatically: e.target.checked });
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
    return (
      <Input
        placeholder={inputPlaceHolder}
        ref={inputRef}
        {...props.manageViewsInputProps}
        valueStateMessage={props.manageViewsInputProps?.valueStateMessage ?? <div>{variantNameInvalid}</div>}
        valueState={
          props.manageViewsInputProps?.valueState ?? (!variantNameInvalid ? ValueState.None : ValueState.Error)
        }
        value={children}
        onInput={handleVariantInput}
        onChange={handleVariantChange}
      />
    );
  };
  return (
    <TableRow data-id={children} key={`${children}`}>
      {showOnlyFavorites && (
        <TableCell>
          {isDefault ? (
            <Icon name={favoriteIcon} style={{ color: ThemingParameters.sapContent_NonInteractiveIconColor }} />
          ) : (
            <Icon
              aria-label={a11yFavoriteText}
              title={iconName === favoriteIcon ? favoriteIconTitleText : unfavoriteIconTitleText}
              name={iconName}
              interactive
              style={{ color: ThemingParameters.sapContent_MarkerIconColor, cursor: 'pointer' }}
              onClick={onFavoriteClick}
            />
          )}
        </TableCell>
      )}
      <TableCell>{renderView()}</TableCell>
      {showShare && <TableCell>{global ? publicText : privateText}</TableCell>}
      {showSetAsDefault && (
        <TableCell>
          <RadioButton
            aria-label={a11yStandardText}
            checked={defaultView !== undefined ? defaultView === children : isDefault}
            onChange={handleDefaultChange}
          />
        </TableCell>
      )}
      {showApplyAutomatically && (
        <TableCell>
          <CheckBox
            aria-label={a11yApplyAutomaticallyText}
            checked={applyAutomatically}
            onChange={handleApplyAutomaticallyChange}
          />
        </TableCell>
      )}
      {showCreatedBy && (
        <TableCell>
          <Text>{author}</Text>
        </TableCell>
      )}
      <TableCell>
        {!(hideDelete ?? global) && (
          <Button
            tooltip={a11yDeleteText}
            accessibleName={a11yDeleteText}
            icon={declineIcon}
            design={ButtonDesign.Transparent}
            onClick={handleDelete}
            data-children={children}
          />
        )}
      </TableCell>
    </TableRow>
  );
};
