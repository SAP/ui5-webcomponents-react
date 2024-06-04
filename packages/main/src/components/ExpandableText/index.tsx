'use client';

import { useI18nBundle, useIsomorphicId, useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CLOSE_POPOVER, SHOW_FULL_TEXT, SHOW_LESS, SHOW_MORE } from '../../i18n/i18n-defaults.js';
import { useCanRenderPortal } from '../../internal/ssr.js';
import { getUi5TagWithSuffix } from '../../internal/utils.js';
import type { CommonProps } from '../../types/index.js';
import type { LinkDomRef } from '../../webComponents/index.js';
import { Link } from '../../webComponents/index.js';
import { ResponsivePopover } from '../../webComponents/ResponsivePopover/index.js';
import type { TextPropTypes } from '../Text/index.js';
import { Text } from '../Text/index.js';
import { classNames, styleData } from './ExpandableText.module.css.js';

export interface ExpandableTextPropTypes
  extends Omit<TextPropTypes, 'maxLines' | 'wrapping' | 'children'>,
    CommonProps {
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
   * Defines where modals are rendered into via `React.createPortal`.
   *
   * You can find out more about this [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-working-with-portals--page).
   *
   * @default document.body
   */
  portalContainer?: Element;
}

/**
 * The `ExpandableText` component can be used to display long texts inside a table, list or form.
 *
 * Initially, only the first characters from the text are shown with a "Show More" link which allows the full text to be displayed. The `showOverflowInPopover` property determines if the full text will be displayed expanded in place (default) or in a popover (`showOverflowInPopover: true`). If the text is expanded a "Show Less" link is displayed, which allows collapsing the text field.
 *
 * @since 1.23.0
 */
const ExpandableText = forwardRef<HTMLSpanElement, ExpandableTextPropTypes>((props, ref) => {
  const {
    children,
    emptyIndicator,
    renderWhitespace,
    hyphenated,
    showOverflowInPopover,
    maxCharacters = 100,
    portalContainer,
    className,
    ...rest
  } = props;

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

  const canRenderPortal = useCanRenderPortal();
  if (showOverflowInPopover && !canRenderPortal) {
    return null;
  }
  return (
    <span className={clsx(classNames.expandableText, className)} {...rest} ref={ref}>
      <Text
        emptyIndicator={emptyIndicator}
        renderWhitespace={renderWhitespace}
        hyphenated={hyphenated}
        className={classNames.text}
      >
        {strippedChildren}
      </Text>
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
            accessibleRole="button"
            onClick={handleClick}
            ref={linkRef}
            id={`${uniqueId}-link`}
          >
            {collapsed ? i18nBundle.getText(SHOW_MORE) : i18nBundle.getText(SHOW_LESS)}
          </Link>
        </>
      )}
      {showOverflowInPopover &&
        popoverOpen &&
        createPortal(
          <ResponsivePopover
            opener={`${uniqueId}-link`}
            open
            onAfterClose={closePopover}
            className={classNames.popover}
          >
            <Text renderWhitespace={renderWhitespace} hyphenated={hyphenated} className={classNames.text}>
              {children}
            </Text>
          </ResponsivePopover>,
          portalContainer ?? document.body
        )}
    </span>
  );
});

ExpandableText.displayName = 'ExpandableText';

export { ExpandableText };
