import '@ui5/webcomponents-icons/dist/icons/navigation-down-arrow';
import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { List } from '@ui5/webcomponents-react/lib/List';
import { ListItemTypes } from '@ui5/webcomponents-react/lib/ListItemTypes';
import { ListMode } from '@ui5/webcomponents-react/lib/ListMode';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import { Popover } from '@ui5/webcomponents-react/lib/Popover';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import React, { FC, forwardRef, Ref, useCallback, useEffect, useMemo, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';

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
  onSelect?: (event: Event) => void;
  level?: TitleLevel;
  disabled?: boolean;
}

const styles = ({ parameters }: JSSTheme) => ({
  VariantManagement: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    cursor: 'pointer'
  },
  VariantManagementText: {
    cursor: 'pointer',
    color: parameters.sapUiButtonTextColor,
    '&:hover': {
      color: parameters.sapUiHighlight
    },
    '&:active': {
      color: parameters.sapUiHighlight
    }
  },
  disabled: {
    color: parameters.sapUiGroupTitleTextColor,
    cursor: 'default',
    '&:hover': {
      color: parameters.sapUiGroupTitleTextColor
    },
    '&:active': {
      color: parameters.sapUiGroupTitleTextColor
    }
  },
  footer: {
    margin: '0.4375rem 1rem 0.4325rem auto'
  }
});

const useStyles = createUseStyles<keyof ReturnType<typeof styles>>(styles, { name: 'VariantManagement' });

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
    const [open, setOpen] = useState(false);
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
      setOpen(false);
    }, [setOpen]);

    const handleAfterOpen = useCallback(() => {
      setOpen(true);
    }, [setOpen]);

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

    const variantManagementButton = useMemo(() => {
      const selectedItem = getItemByKey(selectedKey) || variantItems[0];

      let textClasses = classes.VariantManagementText;
      if (disabled) {
        textClasses += ` ${classes.disabled}`;
      }

      return (
        <div className={classes.VariantManagement}>
          <Title level={level} className={textClasses}>
            {selectedItem.label}
          </Title>
          <Button design={ButtonDesign.Transparent} icon="navigation-down-arrow" disabled={disabled} />
        </div>
      );
    }, [classes, variantItems, level, selectedKey, disabled]);

    const handleVariantItemSelect = useCallback(
      (event) => {
        const newSelectedKey = event.getParameter('item').dataset.key;
        const selectedItem = getItemByKey(newSelectedKey) || variantItems[0];
        setSelectedKey(newSelectedKey);
        onSelect(Event.of(null, event.getOriginalEvent(), { selectedItem }));
        if (closeOnItemSelect) {
          handleCancelButtonClick();
        }
      },
      [handleCancelButtonClick, closeOnItemSelect, selectedKey, variantItems, setSelectedKey]
    );
    const passThroughProps = usePassThroughHtmlProps(props);

    return (
      <Popover
        ref={ref}
        open={open}
        onAfterOpen={handleAfterOpen}
        headerText={popupTitle}
        placementType={placement}
        openBy={variantManagementButton}
        openByStyle={{ pointerEvents: disabled ? 'none' : 'auto' }}
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
      </Popover>
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
