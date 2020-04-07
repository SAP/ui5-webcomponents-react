import '@ui5/webcomponents-icons/dist/icons/navigation-down-arrow';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { List } from '@ui5/webcomponents-react/lib/List';
import { ListItemTypes } from '@ui5/webcomponents-react/lib/ListItemTypes';
import { ListMode } from '@ui5/webcomponents-react/lib/ListMode';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import { ResponsivePopover } from '@ui5/webcomponents-react/lib/ResponsivePopover';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import React, { FC, forwardRef, Ref, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5ResponsivePopoverDomRef } from '../../interfaces/Ui5ResponsivePopoverDomRef';

export interface VariantItem {
  key: string;
  label: string;
}

export interface VariantManagementPropTypes extends CommonProps {
  placement?: PlacementType;
  popupTitle?: string;
  initialSelectedKey?: string;
  closeOnItemSelect?: boolean;
  variantItems: VariantItem[];
  onSelect?: (event: CustomEvent<{ item: HTMLElement; selectedItem: VariantItem }>) => void;
  level?: TitleLevel;
  disabled?: boolean;
}

const styles = {
  VariantManagement: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    cursor: 'pointer'
  },
  VariantManagementText: {
    cursor: 'pointer',
    color: ThemingParameters.sapButton_TextColor,
    '&:hover': {
      color: ThemingParameters.sapHighlightColor
    },
    '&:active': {
      color: ThemingParameters.sapHighlightColor
    }
  },
  disabled: {
    color: ThemingParameters.sapGroup_TitleTextColor,
    cursor: 'default',
    '&:hover': {
      color: ThemingParameters.sapGroup_TitleTextColor
    },
    '&:active': {
      color: ThemingParameters.sapGroup_TitleTextColor
    }
  },
  footer: {
    margin: '0.4375rem 1rem 0.4325rem auto'
  }
};

const useStyles = createComponentStyles(styles, { name: 'VariantManagement' });

/**
 * <code>import { VariantManagement } from '@ui5/webcomponents-react/lib/VariantManagement';</code>
 */
const VariantManagement: FC<VariantManagementPropTypes> = forwardRef(
  (props: VariantManagementPropTypes, ref: Ref<any>) => {
    const {
      variantItems,
      popupTitle,
      className,
      style,
      tooltip,
      placement,
      level,
      initialSelectedKey,
      onSelect,
      closeOnItemSelect,
      disabled
    } = props;

    const classes = useStyles();
    const popoverRef = useRef<Ui5ResponsivePopoverDomRef>(null);

    const [selectedKey, setSelectedKey] = useState(
      initialSelectedKey ? initialSelectedKey : variantItems?.[0]?.key ?? null
    );

    if (!variantItems || variantItems.length < 1) {
      return null;
    }

    useEffect(() => {
      if (initialSelectedKey) {
        setSelectedKey(initialSelectedKey);
      }
    }, [initialSelectedKey, setSelectedKey]);

    const handleCancelButtonClick = useCallback(() => {
      popoverRef.current.close();
    }, [popoverRef]);

    const handleOpenVariantManagement = useCallback(
      (e) => {
        popoverRef.current.open(e.target);
      },
      [popoverRef]
    );

    const footerButtons = useMemo(() => {
      return (
        <Button className={classes.footer} onClick={handleCancelButtonClick} design={ButtonDesign.Emphasized}>
          Cancel
        </Button>
      );
    }, [classes.footer]);

    const getItemByKey = (key) => {
      return variantItems.find((item) => item.key === key);
    };

    const selectedItem = getItemByKey(selectedKey) || variantItems[0];

    let textClasses = classes.VariantManagementText;
    if (disabled) {
      textClasses += ` ${classes.disabled}`;
    }

    const handleVariantItemSelect = useCallback(
      (event) => {
        const newSelectedKey = event.detail.item.dataset.key;
        const selectedItem = getItemByKey(newSelectedKey) || variantItems[0];
        setSelectedKey(newSelectedKey);
        onSelect(enrichEventWithDetails(event, { ...event.details, selectedItem }));
        if (closeOnItemSelect) {
          handleCancelButtonClick();
        }
      },
      [handleCancelButtonClick, closeOnItemSelect, selectedKey, variantItems, setSelectedKey]
    );
    const passThroughProps = usePassThroughHtmlProps(props, ['onSelect']);

    return (
      <>
        <div className={classes.VariantManagement}>
          <Title level={level} className={textClasses}>
            {selectedItem.label}
          </Title>
          <Button
            onClick={handleOpenVariantManagement}
            design={ButtonDesign.Transparent}
            icon="navigation-down-arrow"
            disabled={disabled}
          />
        </div>
        <ResponsivePopover
          ref={popoverRef}
          headerText={popupTitle}
          placementType={placement}
          footer={footerButtons}
          className={className}
          style={style}
          tooltip={tooltip}
          {...passThroughProps}
        >
          <List onItemClick={handleVariantItemSelect} mode={ListMode.SingleSelect}>
            {variantItems.map((item) => (
              <StandardListItem
                style={{ width: '300px' }}
                data-key={item.key}
                type={ListItemTypes.Active}
                key={item.key}
                selected={selectedKey === item.key}
              >
                {item.label}
              </StandardListItem>
            ))}
          </List>
        </ResponsivePopover>
      </>
    );
  }
);

VariantManagement.defaultProps = {
  popupTitle: 'Variants',
  initialSelectedKey: null,
  onSelect: () => {},
  closeOnItemSelect: true,
  placement: PlacementType.Bottom,
  level: TitleLevel.H4,
  disabled: false
};
VariantManagement.displayName = 'Variant Management';

export { VariantManagement };
