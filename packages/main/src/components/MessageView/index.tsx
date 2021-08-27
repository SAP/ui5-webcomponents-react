import { Bar, List, SegmentedButton, SegmentedButtonItem, ValueState } from '@ui5/webcomponents-react';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import React, { Children, forwardRef, ReactNode, ReactNodeArray, Ref, useState } from 'react';
import { getIconNameForType } from './utils';
import '@ui5/webcomponents-icons/dist/error';
import '@ui5/webcomponents-icons/dist/sys-enter-2';
import '@ui5/webcomponents-icons/dist/alert';
import '@ui5/webcomponents-icons/dist/information';
import { createUseStyles } from 'react-jss';

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
    button: {
      '&[data-key="Error"]:not([pressed])': { color: ThemingParameters.sapNegativeElementColor },
      '&[data-key="Warning"]:not([pressed])': { color: ThemingParameters.sapCriticalElementColor },
      '&[data-key="Success"]:not([pressed])': { color: ThemingParameters.sapPositiveElementColor },
      '&[data-key="Information"]:not([pressed])': { color: ThemingParameters.sapNeutralElementColor }
    }
  },
  { name: 'MessageView' }
);

const MessageView = forwardRef((props: MessageViewPropTypes, ref: Ref<HTMLDivElement>) => {
  const { children } = props;

  const classes = useStyles();

  const [listFilter, setListFilter] = useState('All');
  const [showDetails, setShowDetails] = useState(false);

  const messageTypes: Record<ValueState, number> = Children.toArray(children)
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

  const filledTypes = Object.values(messageTypes).filter((count) => count > 0).length;

  const handleListFilterChange = (e) => {
    setListFilter(e.detail.selectedItem.dataset.key);
  };

  return (
    <div ref={ref}>
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
          : Children.toArray(children).filter((message) => {
              if (listFilter === ValueState.Information) {
                return message?.props?.type === ValueState.Information || message?.props?.type === ValueState.None;
              }
              return message?.props?.type === listFilter;
            })}
      </List>
    </div>
  );
});

MessageView.displayName = 'MessageView';

export { MessageView };
