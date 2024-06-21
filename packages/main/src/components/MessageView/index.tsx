'use client';

import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import ListSeparators from '@ui5/webcomponents/dist/types/ListSeparators.js';
import TitleLevel from '@ui5/webcomponents/dist/types/TitleLevel.js';
import WrappingType from '@ui5/webcomponents/dist/types/WrappingType.js';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import iconSlimArrowLeft from '@ui5/webcomponents-icons/dist/slim-arrow-left.js';
import { useI18nBundle, useStylesheet, useSyncRef } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ReactElement, ReactNode } from 'react';
import { Children, forwardRef, Fragment, isValidElement, useCallback, useEffect, useState } from 'react';
import { FlexBoxDirection, GlobalStyleClasses } from '../../enums/index.js';
import { ALL, LIST_NO_DATA } from '../../i18n/i18n-defaults.js';
import { MessageViewContext } from '../../internal/MessageViewContext.js';
import type { CommonProps } from '../../types/index.js';
import { Bar } from '../../webComponents/Bar/index.js';
import { Button } from '../../webComponents/Button/index.js';
import { Icon } from '../../webComponents/Icon/index.js';
import type { ListPropTypes } from '../../webComponents/List/index.js';
import { List } from '../../webComponents/List/index.js';
import { ListItemGroup } from '../../webComponents/ListItemGroup/index.js';
import type { SegmentedButtonPropTypes } from '../../webComponents/SegmentedButton/index.js';
import { SegmentedButton } from '../../webComponents/SegmentedButton/index.js';
import { SegmentedButtonItem } from '../../webComponents/SegmentedButtonItem/index.js';
import { Title } from '../../webComponents/Title/index.js';
import { FlexBox } from '../FlexBox/index.js';
import type { MessageItemPropTypes } from './MessageItem.js';
import { classNames, styleData } from './MessageView.module.css.js';
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
        [ValueState.Negative]: 0,
        [ValueState.Critical]: 0,
        [ValueState.Positive]: 0,
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

/**
 * The `MessageView` is used to display a summarized list of different types of messages (error, warning, success, and information messages).
 */
const MessageView = forwardRef<MessageViewDomRef, MessageViewPropTypes>((props, ref) => {
  const { children, groupItems, showDetailsPageHeader, className, onItemSelect, ...rest } = props;

  useStylesheet(styleData, MessageView.displayName);

  const [componentRef, internalRef] = useSyncRef<MessageViewDomRef>(ref);

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
          const castMessage = message as ReactElement<MessageItemPropTypes>;
          if (listFilter === ValueState.Information) {
            return castMessage?.props?.type === ValueState.Information || castMessage?.props?.type === ValueState.None;
          }
          return castMessage?.props?.type === listFilter;
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

  const handleListFilterChange: SegmentedButtonPropTypes['onSelectionChange'] = (e) => {
    setListFilter(e.detail.selectedItems.at(0).dataset.key as never);
  };

  const outerClasses = clsx(
    classNames.container,
    GlobalStyleClasses.sapScrollBar,
    className,
    selectedMessage && classNames.showDetails
  );

  return (
    <div ref={componentRef} {...rest} className={outerClasses}>
      <MessageViewContext.Provider
        value={{
          selectMessage: setSelectedMessage
        }}
      >
        <div style={{ visibility: selectedMessage ? 'hidden' : 'visible' }} className={classNames.messagesContainer}>
          {!selectedMessage && (
            <>
              {filledTypes > 1 && (
                <Bar
                  startContent={
                    <SegmentedButton onSelectionChange={handleListFilterChange}>
                      <SegmentedButtonItem data-key="All" selected={listFilter === 'All'}>
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
                            selected={listFilter === valueState}
                            icon={getIconNameForType(valueState)}
                            className={classNames.button}
                          >
                            {count}
                          </SegmentedButtonItem>
                        );
                      })}
                    </SegmentedButton>
                  }
                />
              )}
              <List
                onItemClick={onItemSelect}
                noDataText={i18nBundle.getText(LIST_NO_DATA)}
                separators={ListSeparators.Inner}
              >
                {groupItems
                  ? groupedMessages.map(([groupName, items]) => {
                      if (!groupName) {
                        return items;
                      }
                      return (
                        <Fragment key={groupName}>
                          {groupName && <ListItemGroup headerText={groupName}>{items}</ListItemGroup>}
                        </Fragment>
                      );
                    })
                  : filteredChildren}
              </List>
            </>
          )}
        </div>
        <div className={classNames.detailsContainer}>
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
                <FlexBox className={classNames.details}>
                  <Icon
                    data-type={selectedMessage.type}
                    name={getIconNameForType(selectedMessage.type)}
                    className={classNames.detailsIcon}
                  />
                  <FlexBox direction={FlexBoxDirection.Column} className={classNames.detailsTextContainer}>
                    <Title level={TitleLevel.H5} className={classNames.detailsTitle} wrappingType={WrappingType.Normal}>
                      {selectedMessage.titleText}
                    </Title>
                    <div className={classNames.detailsText}>{selectedMessage.children}</div>
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
