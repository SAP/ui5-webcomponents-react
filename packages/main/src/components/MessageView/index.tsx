import {
  Bar,
  Button,
  ButtonDesign,
  FlexBox,
  FlexBoxDirection,
  Icon,
  List,
  SegmentedButton,
  SegmentedButtonItem,
  Title,
  TitleLevel,
  ValueState
} from '@ui5/webcomponents-react';
import { StyleClassHelper, ThemingParameters } from '@ui5/webcomponents-react-base';
import { MessageViewContext } from '@ui5/webcomponents-react/dist/MessageViewContext';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import React, {
  Children,
  forwardRef,
  ReactElement,
  ReactNode,
  ReactNodeArray,
  Ref,
  useCallback,
  useState
} from 'react';
import { createUseStyles } from 'react-jss';
import type { MessagePropTypes } from './Message';
import { getIconNameForType } from './utils';
import '@ui5/webcomponents-icons/dist/error';
import '@ui5/webcomponents-icons/dist/sys-enter-2';
import '@ui5/webcomponents-icons/dist/alert';
import '@ui5/webcomponents-icons/dist/information';

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
}

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

const MessageView = forwardRef((props: MessageViewPropTypes, ref: Ref<HTMLDivElement>) => {
  const { children, groupItems, showDetailsPageHeader, ...rest } = props;

  const classes = useStyles();

  const [listFilter, setListFilter] = useState('All');
  const [selectedMessage, setSelectedMessage] = useState<MessagePropTypes>(null);

  const childrenArray = Children.toArray(children);
  const messageTypes = childrenArray
    .map((message: ReactElement<MessagePropTypes>) => message?.props?.type)
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

  const filledTypes = Object.values(messageTypes).filter((count) => count > 0).length;

  const navigateBack = useCallback(() => {
    setSelectedMessage(null);
  }, [setSelectedMessage]);

  const handleListFilterChange = (e) => {
    setListFilter(e.detail.selectedItem.dataset.key);
  };

  const outerClasses = StyleClassHelper.of(classes.container);
  if (selectedMessage) {
    outerClasses.put(classes.showDetails);
  }

  return (
    <div ref={ref} {...rest} style={{}} className={outerClasses.className}>
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
                    All
                  </SegmentedButtonItem>
                  {messageTypes[ValueState.Error] > 0 && (
                    <SegmentedButtonItem
                      data-key={ValueState.Error}
                      pressed={listFilter === ValueState.Error}
                      icon={getIconNameForType(ValueState.Error)}
                      className={classes.button}
                    >
                      {messageTypes[ValueState.Error]}
                    </SegmentedButtonItem>
                  )}
                  {messageTypes[ValueState.Warning] > 0 && (
                    <SegmentedButtonItem
                      data-key={ValueState.Warning}
                      pressed={listFilter === ValueState.Warning}
                      icon={getIconNameForType(ValueState.Warning)}
                      className={classes.button}
                    >
                      {messageTypes[ValueState.Warning]}
                    </SegmentedButtonItem>
                  )}
                  {messageTypes[ValueState.Success] > 0 && (
                    <SegmentedButtonItem
                      data-key={ValueState.Success}
                      pressed={listFilter === ValueState.Success}
                      icon={getIconNameForType(ValueState.Success)}
                      className={classes.button}
                    >
                      {messageTypes[ValueState.Success]}
                    </SegmentedButtonItem>
                  )}
                  {messageTypes[ValueState.Information] > 0 && (
                    <SegmentedButtonItem
                      pressed={listFilter === ValueState.Information}
                      data-key={ValueState.Information}
                      icon={getIconNameForType(ValueState.Information)}
                      className={classes.button}
                    >
                      {messageTypes[ValueState.Information]}
                    </SegmentedButtonItem>
                  )}
                </SegmentedButton>
              }
            />
          )}
          <List>
            {listFilter === 'All'
              ? children
              : childrenArray.filter((message: ReactElement<MessagePropTypes>) => {
                  if (listFilter === ValueState.Information) {
                    return message?.props?.type === ValueState.Information || message?.props?.type === ValueState.None;
                  }
                  return message?.props?.type === listFilter;
                })}
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

export { MessageView };
