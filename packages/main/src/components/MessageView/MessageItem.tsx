'use client';

import IconMode from '@ui5/webcomponents/dist/types/IconMode.js';
import ListItemType from '@ui5/webcomponents/dist/types/ListItemType.js';
import WrappingType from '@ui5/webcomponents/dist/types/WrappingType.js';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import iconArrowRight from '@ui5/webcomponents-icons/dist/slim-arrow-right.js';
import { useI18nBundle, useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import { Children, isValidElement, forwardRef, useContext, useEffect, useRef, useState } from 'react';
import { FlexBoxAlignItems, FlexBoxDirection } from '../../enums/index.js';
import { COUNTER, HAS_DETAILS } from '../../i18n/i18n-defaults.js';
import { MessageViewContext } from '../../internal/MessageViewContext.js';
import type { CommonProps } from '../../types/index.js';
import { Icon } from '../../webComponents/Icon/index.js';
import { Label } from '../../webComponents/Label/index.js';
import type { LinkPropTypes } from '../../webComponents/Link/index.js';
import type { ListItemCustomDomRef, ListItemCustomPropTypes } from '../../webComponents/ListItemCustom/index.js';
import { ListItemCustom } from '../../webComponents/ListItemCustom/index.js';
import { FlexBox } from '../FlexBox/index.js';
import { classNames, styleData } from './MessageItem.module.css.js';
import { getIconNameForType, getValueStateMap } from './utils.js';

export interface MessageItemPropTypes extends Pick<ListItemCustomPropTypes, 'accessibleName' | 'tooltip'>, CommonProps {
  /**
   * Specifies the title of the message
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use text or `Link` (with `wrappingType="None"`) in order to preserve the intended design.
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
const MessageItem = forwardRef<ListItemCustomDomRef, MessageItemPropTypes>((props, ref) => {
  const { titleText, subtitleText, counter, type = ValueState.Negative, children, className, ...rest } = props;
  const [isTitleTextOverflowing, setIsTitleTextIsOverflowing] = useState(false);
  const [titleTextStr, setTitleTextStr] = useState('');
  const titleTextRef = useRef<HTMLSpanElement>(null);
  const hasDetails = !!(children || isTitleTextOverflowing);
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  useStylesheet(styleData, MessageItem.displayName);

  const { selectMessage } = useContext(MessageViewContext);

  const listItemClasses = clsx(
    classNames.listItem,
    Reflect.get(classNames, `type${type}`),
    className,
    subtitleText && classNames.withSubtitle,
  );

  const messageClasses = clsx(classNames.message, hasDetails && classNames.withChildren);

  const handleListItemClick = (e) => {
    if (hasDetails) {
      selectMessage({ ...props, titleTextStr });
      if (typeof rest.onClick === 'function') {
        rest.onClick(e);
      }
    }
  };

  const handleKeyDown: ListItemCustomPropTypes['onKeyDown'] = (e) => {
    if (typeof rest.onKeyDown === 'function') {
      rest.onKeyDown(e);
    }
    if (e.code === 'Enter') {
      handleListItemClick(e);
    }
  };

  const hasChildren = Children.count(children);
  useEffect(() => {
    const titleTextObserver = new ResizeObserver(([titleTextSpanEntry]) => {
      const child = titleTextSpanEntry.target.children[0];
      const target = titleTextSpanEntry.target;
      const isTargetOverflowing = target.scrollWidth > target.clientWidth;
      let isChildOverflowing = false;

      if (!isTargetOverflowing) {
        const firstChild = child?.shadowRoot?.firstChild as HTMLAnchorElement | undefined;
        if (firstChild) {
          isChildOverflowing = firstChild.scrollWidth > firstChild.clientWidth;
        }
      }
      setIsTitleTextIsOverflowing(isTargetOverflowing || isChildOverflowing);
    });
    if (!hasChildren && titleTextRef.current) {
      titleTextObserver.observe(titleTextRef.current);
    }
    return () => {
      titleTextObserver.disconnect();
    };
  }, [hasChildren]);

  useEffect(() => {
    if (typeof titleText === 'string') {
      setTitleTextStr(titleText);
    } else if (isValidElement(titleText) && typeof (titleText.props as LinkPropTypes)?.children === 'string') {
      // @ts-expect-error: props.children is available and a string
      setTitleTextStr(titleText.props.children);
    }
  }, [titleText]);

  return (
    <ListItemCustom
      onClick={handleListItemClick}
      onKeyDown={handleKeyDown}
      data-title={titleTextStr}
      data-type={type}
      type={hasDetails ? ListItemType.Active : ListItemType.Inactive}
      {...rest}
      className={listItemClasses}
      ref={ref}
    >
      <FlexBox alignItems={FlexBoxAlignItems.Center} className={messageClasses}>
        <div className={classNames.iconContainer}>
          <Icon name={getIconNameForType(type as ValueState)} className={classNames.icon} mode={IconMode.Decorative} />
        </div>
        <FlexBox
          direction={FlexBoxDirection.Column}
          style={{ flex: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
        >
          {titleText && (
            <span className={classNames.title} ref={titleTextRef}>
              {titleText}
            </span>
          )}
          {titleText && subtitleText && (
            <Label className={classNames.subtitle} wrappingType={WrappingType.None}>
              {subtitleText}
            </Label>
          )}
        </FlexBox>
        {counter != null && (
          <span className={classNames.counter} aria-label={`. ${i18nBundle.getText(COUNTER)} ${counter}`}>
            {counter}
          </span>
        )}
        {hasDetails && <Icon className={classNames.navigation} name={iconArrowRight} mode={IconMode.Decorative} />}
        {hasDetails && <span className={classNames.pseudoInvisibleText}>. {i18nBundle.getText(HAS_DETAILS)}</span>}
        {type !== ValueState.None && type !== ValueState.Information && (
          <span className={classNames.pseudoInvisibleText}>. {getValueStateMap(i18nBundle)[type]}</span>
        )}
      </FlexBox>
    </ListItemCustom>
  );
});

MessageItem.displayName = 'MessageItem';

export { MessageItem };
