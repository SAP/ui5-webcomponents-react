import { useConsolidatedRef, useI18nBundle } from '@ui5/webcomponents-react-base/dist/hooks';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { ALL } from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import { Bar } from '@ui5/webcomponents-react/dist/Bar';
import { Button } from '@ui5/webcomponents-react/dist/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/dist/ButtonDesign';
import { FlexBox } from '@ui5/webcomponents-react/dist/FlexBox';
import { FlexBoxDirection } from '@ui5/webcomponents-react/dist/FlexBoxDirection';
import { GroupHeaderListItem } from '@ui5/webcomponents-react/dist/GroupHeaderListItem';
import { Icon } from '@ui5/webcomponents-react/dist/Icon';
import { List } from '@ui5/webcomponents-react/dist/List';
import { MessageViewContext } from '@ui5/webcomponents-react/dist/MessageViewContext';
import { SegmentedButton } from '@ui5/webcomponents-react/dist/SegmentedButton';
import { SegmentedButtonItem } from '@ui5/webcomponents-react/dist/SegmentedButtonItem';
import { Title } from '@ui5/webcomponents-react/dist/Title';
import { TitleLevel } from '@ui5/webcomponents-react/dist/TitleLevel';
import { ValueState } from '@ui5/webcomponents-react/dist/ValueState';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { MessageViewDomRef } from '@ui5/webcomponents-react/interfaces/MessageViewDomRef';
import { Ui5CustomEvent } from '@ui5/webcomponents-react/interfaces/Ui5CustomEvent';
import React, {
  Children,
  forwardRef,
  Fragment,
  ReactElement,
  ReactNode,
  ReactNodeArray,
  Ref,
  useCallback,
  useEffect,
  useState
} from 'react';
import { createUseStyles } from 'react-jss';
import { getIconNameForType } from './utils';
import '@ui5/webcomponents-icons/dist/alert.js';
import '@ui5/webcomponents-icons/dist/error.js';
import '@ui5/webcomponents-icons/dist/information.js';
import '@ui5/webcomponents-icons/dist/slim-arrow-left.js';
import '@ui5/webcomponents-icons/dist/sys-enter-2.js';
import type { MessageItemPropTypes } from './MessageItem';
import clsx from 'clsx';

export interface MessageViewPropTypes extends CommonProps {
  /**
   * Defines whether the messages are grouped or not.
   */
  groupItems?: boolean;

  /**
   * Defines whether the header of details page will be shown.
   */
  showDetailsPageHeader?: boolean;

  /**
   * A list with message items. If only one item is provided, the initial page will be the details page for the item.
   *
   * * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `Message` in order to preserve the intended design.
   */
  children: ReactNode | ReactNodeArray;

  /**
   * Event is fired when the details of a message are shown
   */
  onItemSelect?: (event: Ui5CustomEvent<HTMLElement, { item: ReactNode }>) => void;
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
      overflow: 'hidden',
      display: 'flex',
      height: 500,
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
      '&[data-type="Information"]': { color: ThemingParameters.sapNeutralElementColor }
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

const MessageView = forwardRef((props: MessageViewPropTypes, ref: Ref<MessageViewDomRef>) => {
  const { children, groupItems, showDetailsPageHeader, className, onItemSelect, tooltip, ...rest } = props;

  const internalRef = useConsolidatedRef<MessageViewDomRef>(ref);

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
      : childrenArray.filter((message: ReactElement<MessageItemPropTypes>) => {
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
    <div ref={internalRef} title={tooltip} {...rest} className={outerClasses}>
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
          <List onItemClick={onItemSelect}>
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
          {showDetailsPageHeader && (
            <Bar
              startContent={<Button design={ButtonDesign.Transparent} icon="slim-arrow-left" onClick={navigateBack} />}
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
        </div>
      </MessageViewContext.Provider>
    </div>
  );
});

MessageView.displayName = 'MessageView';

MessageView.defaultProps = {
  showDetailsPageHeader: false,
  groupItems: false
};

export { MessageView };
