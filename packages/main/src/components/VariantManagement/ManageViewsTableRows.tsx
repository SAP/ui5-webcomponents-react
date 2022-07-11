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
    hideDelete
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
  const iconName = internalFavorite ? 'favorite' : 'unfavorite';
  const inputRef = useRef(undefined);

  const [variantNameInvalid, setVariantNameInvalid] = useState<boolean | string>(false);

  const onFavoriteClick = (e) => {
    setFavorite();
    handleRowChange(e, { currentVariant: children, favorite: !internalFavorite });
  };
  const handleVariantInput = (e) => {
    if (variantNames.includes(e.target.value) || Array.from(changedVariantNames.values()).includes(e.target.value)) {
      setVariantNameInvalid(errorTextAlreadyExists);
      setInvalidVariants((prev) => ({ ...prev, [`${children}`]: inputRef.current }));
      handleRowChange(e, { currentVariant: children, children: e.target.value });
    } else if (e.target.value.length === 0) {
      setVariantNameInvalid(errorTextEmpty);
      setInvalidVariants((prev) => ({ ...prev, [children]: inputRef.current }));
      handleRowChange(e, { currentVariant: children, children: e.target.value });
    } else {
      setVariantNameInvalid(false);
      setInvalidVariants((prev) => {
        const invalidRows = { ...prev };
        if (prev.hasOwnProperty(children)) {
          delete invalidRows[children];
        }
        return invalidRows;
      });
      handleRowChange(e, { currentVariant: children, children: e.target.value });
    }
    setChangedVariantNames((prev) => {
      const currentChangedVariants = new Map(prev);
      currentChangedVariants.set(children, e.target.value);
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
        value={children}
        onInput={handleVariantInput}
        ref={inputRef}
        valueStateMessage={<div>{variantNameInvalid}</div>}
        valueState={!variantNameInvalid ? ValueState.None : ValueState.Error}
      />
    );
  };
  return (
    <TableRow data-id={children} key={`${children}`}>
      <TableCell>
        {isDefault ? (
          <Icon name="favorite" style={{ color: ThemingParameters.sapContent_NonInteractiveIconColor }} />
        ) : (
          <Icon
            aria-label={a11yFavoriteText}
            title={iconName === 'favorite' ? favoriteIconTitleText : unfavoriteIconTitleText}
            name={iconName}
            interactive
            style={{ color: ThemingParameters.sapContent_MarkerIconColor, cursor: 'pointer' }}
            onClick={onFavoriteClick}
          />
        )}
      </TableCell>
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
            title={a11yDeleteText}
            accessibleName={a11yDeleteText}
            icon="decline"
            design={ButtonDesign.Transparent}
            onClick={handleDelete}
            data-children={children}
          />
        )}
      </TableCell>
    </TableRow>
  );
};
