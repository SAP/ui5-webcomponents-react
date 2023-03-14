'use client';

import iconSlimArrowLeft from '@ui5/webcomponents-icons/dist/slim-arrow-left.js';
import { ThemingParameters, useI18nBundle, useSyncRef } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import React, {
  Children,
  forwardRef,
  Fragment,
  isValidElement,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useState
} from 'react';
import { createUseStyles } from 'react-jss';
import { ButtonDesign } from '../../enums/ButtonDesign';
import { FlexBoxDirection } from '../../enums/FlexBoxDirection';
import { TitleLevel } from '../../enums/TitleLevel';
import { ValueState } from '../../enums/ValueState';
import { ALL, LIST_NO_DATA } from '../../i18n/i18n-defaults';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { MessageViewContext } from '../../internal/MessageViewContext';
import { Bar } from '../../webComponents/Bar';
import { Button } from '../../webComponents/Button';
import { GroupHeaderListItem } from '../../webComponents/GroupHeaderListItem';
import { Icon } from '../../webComponents/Icon';
import { List } from '../../webComponents/List';
import { SegmentedButton } from '../../webComponents/SegmentedButton';
import { SegmentedButtonItem } from '../../webComponents/SegmentedButtonItem';
import { Title } from '../../webComponents/Title';
import { FlexBox } from '../FlexBox';
import type { MessageItemPropTypes } from './MessageItem';
import { getIconNameForType } from './utils';

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
  onItemSelect?: (event: Ui5CustomEvent<HTMLElement, { item: HTMLElement }>) => void;
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
      '&[data-key="Information"]:not([pressed])': { color: ThemingParameters.sapNeutralElementColor }
    },
    detailsContainer: {
      padding: '1rem'
    },
    detailsIcon: {
      flexShrink: 0,
      margin: '0 1rem 0 0.5rem',
      '&[data-type="Error"]': { color: ThemingParameters.sapNegativeElementColor },
      '&[data-type="Warning"]': { color: ThemingParameters.sapCriticalElementColor },
      '&[data-type="Success"]': { color: ThemingParameters.sapPositiveElementColor },
      '&[data-type="Information"],&[data-type="None"]': { color: ThemingParameters.sapNeutralElementColor }
    },
    detailsTitle: {
      marginBottom: '1rem'
    },
    detailsText: {
      fontFamily: ThemingParameters.sapFontFamily,
      fontSize: ThemingParameters.sapFontSize,
      lineHeight: 1.4,
      color: ThemingParameters.sapTextColor,
      marginBottom: '1rem'
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

  const [listFilter, setListFilter] = useState('All');
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

  const outerClasses = clsx(classes.container, className, selectedMessage && classes.showDetails);

  return (
    <div ref={componentRef} {...rest} className={outerClasses}>
      <MessageViewContext.Provider
        value={{
          selectMessage: setSelectedMessage
        }}
      >
        <div>
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
        </div>
        <div>
          {childrenArray.length > 0 ? (
            <>
              {showDetailsPageHeader && (
                <Bar
                  startContent={
                    <Button design={ButtonDesign.Transparent} icon={iconSlimArrowLeft} onClick={navigateBack} />
                  }
                />
              )}
              {selectedMessage && (
                <FlexBox className={classes.detailsContainer}>
                  <Icon
                    data-type={selectedMessage.type}
                    name={getIconNameForType(selectedMessage.type)}
                    className={classes.detailsIcon}
                  />
                  <FlexBox direction={FlexBoxDirection.Column}>
                    <Title level={TitleLevel.H5} className={classes.detailsTitle}>
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
