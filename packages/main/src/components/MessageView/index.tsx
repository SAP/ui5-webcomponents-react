'use client';

import iconSlimArrowLeft from '@ui5/webcomponents-icons/dist/slim-arrow-left.js';
import { ThemingParameters, useI18nBundle, useSyncRef } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ReactElement, ReactNode } from 'react';
import React, { Children, forwardRef, Fragment, isValidElement, useCallback, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import {
  ButtonDesign,
  FlexBoxDirection,
  GlobalStyleClasses,
  TitleLevel,
  ValueState,
  WrappingType
} from '../../enums/index.js';
import { ALL, LIST_NO_DATA } from '../../i18n/i18n-defaults.js';
import type { CommonProps } from '../../interfaces/index.js';
import { MessageViewContext } from '../../internal/MessageViewContext.js';
import { Bar } from '../../webComponents/Bar/index.js';
import { Button } from '../../webComponents/Button/index.js';
import { GroupHeaderListItem } from '../../webComponents/GroupHeaderListItem/index.js';
import { Icon } from '../../webComponents/Icon/index.js';
import { List } from '../../webComponents/List/index.js';
import type { ListPropTypes } from '../../webComponents/List/index.js';
import { SegmentedButton } from '../../webComponents/SegmentedButton/index.js';
import { SegmentedButtonItem } from '../../webComponents/SegmentedButtonItem/index.js';
import { Title } from '../../webComponents/Title/index.js';
import { FlexBox } from '../FlexBox/index.js';
import type { MessageItemPropTypes } from './MessageItem.js';
import { getIconNameForType } from './utils.js';

export interface MessageViewDomRef extends HTMLDivElement {
  /**
   * Navigates back to the list page
   */
  navigateBack: () => void;
}

export interface MessageViewPropTypes extends CommonProps {
  /**
   * Defines whether the messages are grouped or not.
   */
  groupItems?: boolean;

  /**
   * Defines whether the header of the details page will be shown.
   */
  showDetailsPageHeader?: boolean;

  /**
   * A list with message items. If only one item is provided, the initial page will be the details page for the item.
   *
   * * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `Message` in order to preserve the intended design.
   */
  children: ReactNode | ReactNode[];

  /**
   * Event is fired when the details of a message are shown.
   */
  onItemSelect?: ListPropTypes['onItemClick'];
}

export const resolveMessageTypes = (children: ReactElement<MessageItemPropTypes>[]) => {
  return (children ?? [])
    .map((message) => message?.props?.type)
    .reduce(
      (acc, type) => {
        const finalType = type === ValueState.None ? ValueState.Information : type;
        if (acc.hasOwnProperty(finalType)) {
          acc[finalType]++;
        }
        return acc;
      },
      {
        [ValueState.Error]: 0,
        [ValueState.Warning]: 0,
        [ValueState.Success]: 0,
        [ValueState.Information]: 0
      }
    );
};

export const resolveMessageGroups = (children: ReactElement<MessageItemPropTypes>[]) => {
  const groups = (children ?? []).reduce((acc, val) => {
    const groupName = val?.props?.groupName ?? '';
    if (acc.hasOwnProperty(groupName)) {
      acc[groupName].push(val);
    } else {
      acc[groupName] = [val];
    }
    return acc;
  }, {});

  return Object.entries<ReactElement<MessageItemPropTypes>[]>(groups).sort((a, b) => {
    return a[0].localeCompare(b[0]);
  });
};

const useStyles = createUseStyles(
  {
    container: {
      width: '100%',
      overflowX: 'hidden',
      overflowY: 'auto',
      display: 'flex',
      height: '100%',
      '& > *': {
        width: '100%',
        flexShrink: 0,
        transition: 'transform 200ms ease-in-out'
      }
    },
    showDetails: {
      '& > *': {
        transform: 'translateX(-100%)'
      }
    },
    button: {
      '&[data-key="Error"]:not([pressed])': { color: ThemingParameters.sapNegativeElementColor },
      '&[data-key="Warning"]:not([pressed])': { color: ThemingParameters.sapCriticalElementColor },
      '&[data-key="Success"]:not([pressed])': { color: ThemingParameters.sapPositiveElementColor },
      '&[data-key="Information"]:not([pressed])': { color: ThemingParameters.sapInformativeElementColor }
    },
    details: {
      padding: '1rem'
    },
    detailsIcon: {
      flexShrink: 0,
      margin: '0 1rem 0 0.5rem',
      '&[data-type="Error"]': { color: ThemingParameters.sapNegativeElementColor },
      '&[data-type="Warning"]': { color: ThemingParameters.sapCriticalElementColor },
      '&[data-type="Success"]': { color: ThemingParameters.sapPositiveElementColor },
      '&[data-type="Information"],&[data-type="None"]': { color: ThemingParameters.sapInformativeElementColor }
    },
    detailsTextContainer: { overflow: 'hidden' },
    detailsTitle: {
      marginBlockEnd: '1rem'
    },
    detailsText: {
      fontFamily: ThemingParameters.sapFontFamily,
      fontSize: ThemingParameters.sapFontSize,
      lineHeight: 1.4,
      color: ThemingParameters.sapTextColor,
      marginBlockEnd: '1rem'
    },
    messagesContainer: {
      height: '100%'
    },
    detailsContainer: {
      height: '100%'
    }
  },
  { name: 'MessageView' }
);

/**
 * The `MessageView` is used to display a summarized list of different types of messages (error, warning, success, and information messages).
 */
const MessageView = forwardRef<MessageViewDomRef, MessageViewPropTypes>((props, ref) => {
  const { children, groupItems, showDetailsPageHeader, className, onItemSelect, ...rest } = props;

  const [componentRef, internalRef] = useSyncRef<MessageViewDomRef>(ref);

  const classes = useStyles();
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  const [listFilter, setListFilter] = useState<ValueState | 'All'>('All');
  const [selectedMessage, setSelectedMessage] = useState<MessageItemPropTypes>(null);

  const childrenArray = Children.toArray(children);
  const messageTypes = resolveMessageTypes(childrenArray as ReactElement<MessageItemPropTypes>[]);
  const filledTypes = Object.values(messageTypes).filter((count) => count > 0).length;

  const filteredChildren =
    listFilter === 'All'
      ? childrenArray
      : childrenArray.filter((message) => {
          if (!isValidElement(message)) {
            return false;
          }
          if (listFilter === ValueState.Information) {
            return message?.props?.type === ValueState.Information || message?.props?.type === ValueState.None;
          }
          return message?.props?.type === listFilter;
        });

  const groupedMessages = resolveMessageGroups(filteredChildren as ReactElement<MessageItemPropTypes>[]);

  const navigateBack = useCallback(() => {
    setSelectedMessage(null);
  }, [setSelectedMessage]);

  useEffect(() => {
    if (internalRef.current) {
      internalRef.current.navigateBack = navigateBack;
    }
  }, [internalRef.current, navigateBack]);

  const handleListFilterChange = (e) => {
    setListFilter(e.detail.selectedItem.dataset.key);
  };

  const outerClasses = clsx(
    classes.container,
    GlobalStyleClasses.sapScrollBar,
    className,
    selectedMessage && classes.showDetails
  );

  return (
    <div ref={componentRef} {...rest} className={outerClasses}>
      <MessageViewContext.Provider
        value={{
          selectMessage: setSelectedMessage
        }}
      >
        <div style={{ visibility: selectedMessage ? 'hidden' : 'visible' }} className={classes.messagesContainer}>
          {!selectedMessage && (
            <>
              {filledTypes > 1 && (
                <Bar
                  startContent={
                    <SegmentedButton onSelectionChange={handleListFilterChange}>
                      <SegmentedButtonItem data-key="All" pressed={listFilter === 'All'}>
                        {i18nBundle.getText(ALL)}
                      </SegmentedButtonItem>
                      {/* @ts-expect-error: The key can't be typed, it's always `string`, but since the `ValueState` enum only contains strings it's fine to use here*/}
                      {Object.entries(messageTypes).map(([valueState, count]: [ValueState, number]) => {
                        if (count === 0) {
                          return null;
                        }
                        return (
                          <SegmentedButtonItem
                            key={valueState}
                            data-key={valueState}
                            pressed={listFilter === valueState}
                            icon={getIconNameForType(valueState)}
                            className={classes.button}
                          >
                            {count}
                          </SegmentedButtonItem>
                        );
                      })}
                    </SegmentedButton>
                  }
                />
              )}
              <List onItemClick={onItemSelect} noDataText={i18nBundle.getText(LIST_NO_DATA)}>
                {groupItems
                  ? groupedMessages.map(([groupName, items]) => {
                      return (
                        <Fragment key={groupName}>
                          {groupName && <GroupHeaderListItem>{groupName}</GroupHeaderListItem>}
                          {items}
                        </Fragment>
                      );
                    })
                  : filteredChildren}
              </List>
            </>
          )}
        </div>
        <div className={classes.detailsContainer}>
          {childrenArray.length > 0 ? (
            <>
              {showDetailsPageHeader && selectedMessage && (
                <Bar
                  startContent={
                    <Button design={ButtonDesign.Transparent} icon={iconSlimArrowLeft} onClick={navigateBack} />
                  }
                />
              )}
              {selectedMessage && (
                <FlexBox className={classes.details}>
                  <Icon
                    data-type={selectedMessage.type}
                    name={getIconNameForType(selectedMessage.type)}
                    className={classes.detailsIcon}
                  />
                  <FlexBox direction={FlexBoxDirection.Column} className={classes.detailsTextContainer}>
                    <Title level={TitleLevel.H5} className={classes.detailsTitle} wrappingType={WrappingType.Normal}>
                      {selectedMessage.titleText}
                    </Title>
                    <div className={classes.detailsText}>{selectedMessage.children}</div>
                  </FlexBox>
                </FlexBox>
              )}
            </>
          ) : null}
        </div>
      </MessageViewContext.Provider>
    </div>
  );
});

MessageView.displayName = 'MessageView';

export { MessageView };
