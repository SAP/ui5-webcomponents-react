'use client';

import iconArrowRight from '@ui5/webcomponents-icons/dist/slim-arrow-right.js';
import { useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import { forwardRef, useContext } from 'react';
import { FlexBoxAlignItems, FlexBoxDirection, ListItemType, ValueState } from '../../enums/index.js';
import { MessageViewContext } from '../../internal/MessageViewContext.js';
import type { CommonProps } from '../../types/index.js';
import type { CustomListItemDomRef } from '../../webComponents/CustomListItem/index.js';
import { CustomListItem } from '../../webComponents/CustomListItem/index.js';
import { Icon } from '../../webComponents/Icon/index.js';
import { Label } from '../../webComponents/Label/index.js';
import { FlexBox } from '../FlexBox/index.js';
import { classNames, styleData } from './MessageItem.module.css.js';
import { getIconNameForType } from './utils.js';

export interface MessageItemPropTypes extends CommonProps {
  /**
   * Specifies the title of the message
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use text or `Link` in order to preserve the intended design.
   */
  titleText: ReactNode;

  /**
   * Specifies the subtitle of the message
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  subtitleText?: ReactNode;

  /**
   * Defines the number of messages for a given message type.
   */
  counter?: number;

  /**
   * Specifies the type of the message
   */
  type?: ValueState | keyof typeof ValueState;

  /**
   * Name of a message group the current item belongs to.
   */
  groupName?: string;

  /**
   * Specifies detailed description of the message
   */
  children?: ReactNode | ReactNode[];
}

/**
 * A component used to hold different types of system messages inside the `MessageView` component.
 */
const MessageItem = forwardRef<CustomListItemDomRef, MessageItemPropTypes>((props, ref) => {
  const { titleText, subtitleText, counter, type = ValueState.Error, children, className, ...rest } = props;

  useStylesheet(styleData, MessageItem.displayName);

  const { selectMessage } = useContext(MessageViewContext);

  const listItemClasses = clsx(
    classNames.listItem,
    Reflect.get(classNames, `type${type}`),
    className,
    subtitleText && classNames.withSubtitle
  );

  const messageClasses = clsx(classNames.message, children && classNames.withChildren);

  const handleListItemClick = (e) => {
    if (children) {
      selectMessage(props);
      if (typeof rest.onClick === 'function') {
        rest.onClick(e);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (typeof rest.onKeyDown === 'function') {
      rest.onKeyDown(e);
    }
    if (e.code === 'Enter') {
      handleListItemClick(e);
    }
  };
  return (
    <CustomListItem
      onClick={handleListItemClick}
      onKeyDown={handleKeyDown}
      data-title={titleText}
      data-type={type}
      type={children ? ListItemType.Active : ListItemType.Inactive}
      {...rest}
      className={listItemClasses}
      ref={ref}
    >
      <FlexBox alignItems={FlexBoxAlignItems.Center} className={messageClasses}>
        <div className={classNames.iconContainer}>
          <Icon name={getIconNameForType(type as ValueState)} className={classNames.icon} />
        </div>
        <FlexBox
          direction={FlexBoxDirection.Column}
          style={{ flex: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
        >
          {titleText && <span className={classNames.title}>{titleText}</span>}
          {subtitleText && <Label className={classNames.subtitle}>{subtitleText}</Label>}
        </FlexBox>
        {counter != null && <span className={classNames.counter}>{counter}</span>}
        {children && <Icon className={classNames.navigation} name={iconArrowRight} />}
      </FlexBox>
    </CustomListItem>
  );
});

MessageItem.displayName = 'MessageItem';

export { MessageItem };
