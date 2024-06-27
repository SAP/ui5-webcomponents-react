'use client';

import LinkAccessibleRole from '@ui5/webcomponents/dist/types/LinkAccessibleRole.js';
import { useI18nBundle, useIsomorphicId, useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { CLOSE_POPOVER, SHOW_FULL_TEXT, SHOW_LESS, SHOW_MORE } from '../../i18n/i18n-defaults.js';
import { getUi5TagWithSuffix } from '../../internal/utils.js';
import type { CommonProps } from '../../types/index.js';
import type { LinkDomRef } from '../../webComponents/index.js';
import { Link } from '../../webComponents/index.js';
import { ResponsivePopover } from '../../webComponents/ResponsivePopover/index.js';
import type { TextPropTypes } from '../../webComponents/Text/index.js';
import { Text } from '../../webComponents/Text/index.js';
import { classNames, styleData } from './ExpandableText.module.css.js';

export interface ExpandableTextPropTypes extends Omit<TextPropTypes, 'maxLines' | 'children'>, CommonProps {
  /**
   * Determines the text to be displayed.
   */
  children?: string;
  /**
   * Specifies the maximum number of characters from the beginning of the text field that are shown initially.
   *
   * @default 100
   */
  maxCharacters?: number;
  /**
   * Determines if the full text should be displayed inside a `ResponsivePopover` or in-place.
   */
  showOverflowInPopover?: boolean;
  /**
   * Defines how white-space inside <code>Text</code> is handled. If set to true, sequences of white space are preserved.
   */
  renderWhitespace?: boolean;
}

/**
 * The `ExpandableText` component can be used to display long texts inside a table, list or form.
 *
 * Initially, only the first characters from the text are shown with a "Show More" link which allows the full text to be displayed. The `showOverflowInPopover` property determines if the full text will be displayed expanded in place (default) or in a popover (`showOverflowInPopover: true`). If the text is expanded a "Show Less" link is displayed, which allows collapsing the text field.
 *
 * @since 1.23.0
 */
const ExpandableText = forwardRef<HTMLSpanElement, ExpandableTextPropTypes>((props, ref) => {
  const { children, showOverflowInPopover, maxCharacters = 100, renderWhitespace, className, ...rest } = props;

  useStylesheet(styleData, ExpandableText.displayName);

  const [collapsed, setCollapsed] = useState(true);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const linkRef = useRef<LinkDomRef>(null);
  const uniqueId = useIsomorphicId();
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const trimmedChildren = renderWhitespace ? children : children?.replace(/\s+/g, ' ').trim();
  const isOverflow = trimmedChildren?.length >= maxCharacters;
  const strippedChildren =
    isOverflow && (collapsed || showOverflowInPopover) ? trimmedChildren?.slice(0, maxCharacters) : children;

  const handleClick = () => {
    if (showOverflowInPopover) {
      setPopoverOpen((prev) => !prev);
    }
    setCollapsed((prev) => !prev);
  };

  const closePopover = () => {
    setCollapsed(true);
    setPopoverOpen(false);
  };

  useEffect(() => {
    const tagName = getUi5TagWithSuffix('ui5-link');
    void customElements.whenDefined(tagName).then(() => {
      if (linkRef.current) {
        if (showOverflowInPopover) {
          linkRef.current.accessibilityAttributes = { hasPopup: 'dialog' };
        } else {
          linkRef.current.accessibilityAttributes = { expanded: !collapsed };
        }
      }
    });
  }, [collapsed, showOverflowInPopover]);

  return (
    <span className={clsx(className)} {...rest} ref={ref}>
      <Text className={clsx(classNames.text, renderWhitespace && classNames.renderWhitespace)}>{strippedChildren}</Text>
      {isOverflow && (
        <>
          <span className={classNames.ellipsis}>{showOverflowInPopover || collapsed ? '… ' : ' '}</span>
          <Link
            accessibleName={
              showOverflowInPopover
                ? collapsed
                  ? i18nBundle.getText(SHOW_FULL_TEXT)
                  : i18nBundle.getText(CLOSE_POPOVER)
                : undefined
            }
            accessibleRole={LinkAccessibleRole.Button}
            onClick={handleClick}
            ref={linkRef}
            id={`${uniqueId}-link`}
          >
            {collapsed ? i18nBundle.getText(SHOW_MORE) : i18nBundle.getText(SHOW_LESS)}
          </Link>
        </>
      )}
      {showOverflowInPopover && popoverOpen && (
        <ResponsivePopover opener={`${uniqueId}-link`} open onClose={closePopover} className={classNames.popover}>
          <Text className={clsx(classNames.text, renderWhitespace && classNames.renderWhitespace)}>{children}</Text>
        </ResponsivePopover>
      )}
    </span>
  );
});

ExpandableText.displayName = 'ExpandableText';

export { ExpandableText };
