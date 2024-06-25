'use client';

import iconPushPinOff from '@ui5/webcomponents-icons/dist/pushpin-off.js';
import iconPushPinOn from '@ui5/webcomponents-icons/dist/pushpin-on.js';
import iconArrowDown from '@ui5/webcomponents-icons/dist/slim-arrow-down.js';
import iconArrowUp from '@ui5/webcomponents-icons/dist/slim-arrow-up.js';
import { enrichEventWithDetails, useI18nBundle, useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { CSSProperties } from 'react';
import { forwardRef, useCallback, useEffect, useRef } from 'react';
import { COLLAPSE_HEADER, EXPAND_HEADER, PIN_HEADER, UNPIN_HEADER } from '../../i18n/i18n-defaults.js';
import { cssVarVersionInfoPrefix, getUi5TagWithSuffix } from '../../internal/utils.js';
import type { CommonProps } from '../../types/index.js';
import { Button, ToggleButton } from '../../webComponents/index.js';
import type { ButtonDomRef } from '../../webComponents/index.js';
import { classNames, styleData } from './ObjectPageAnchorBar.module.css.js';

const _buttonBaseMinWidth = `${cssVarVersionInfoPrefix}button_base_min_width`;
const _buttonBaseHeight = `${cssVarVersionInfoPrefix}button_base_height`;

const anchorButtonVariables = {
  [_buttonBaseMinWidth]: '1.5rem',
  [_buttonBaseHeight]: '1.5rem'
} as CSSProperties;

interface ObjectPageAnchorBarPropTypes extends CommonProps {
  /**
   * Determines if the header content is visible.
   */
  headerContentVisible: boolean;
  /**
   * Determines if the header content is pinnable .
   */
  headerContentPinnable: boolean;
  /**
   * Determines if the hide header button is shown .
   */
  showHideHeaderButton: boolean;
  /**
   * Determines if the header is initially pinned .
   */
  headerPinned?: boolean;
  /**
   * Set the header to the state pinned.
   */
  setHeaderPinned?: (payload: any) => void;
  /**
   * Toggles the header content to be hidden or visible .
   */
  onToggleHeaderContentVisibility: (e: any) => void;
  /**
   * Highlight title when hovered.
   */
  onHoverToggleButton?: (e: any) => void;
  /**
   * Defines internally used a11y properties.
   */
  a11yConfig?: {
    objectPageAnchorBar?: {
      role?: string;
    };
  };
  /**
   * Fired when the `headerContent` changes its pinned state.
   */
  onPinnedStateChange?: (pinned: boolean) => void;
}

/**
 * The `ObjectPageAnchorBar` bar contains the expand/collapse (expands or collapses the header content) and pin button (pins the content header).
 */
const ObjectPageAnchorBar = forwardRef<HTMLElement, ObjectPageAnchorBarPropTypes>((props, ref) => {
  const {
    showHideHeaderButton,
    headerContentVisible,
    headerContentPinnable,
    headerPinned,
    style,
    a11yConfig,
    setHeaderPinned,
    onPinnedStateChange,
    onToggleHeaderContentVisibility,
    onHoverToggleButton
  } = props;

  useStylesheet(styleData, ObjectPageAnchorBar.displayName);
  const showHideHeaderBtnRef = useRef<ButtonDomRef>(null);
  const shouldRenderHeaderPinnableButton = headerContentPinnable && headerContentVisible;
  const showBothActions = shouldRenderHeaderPinnableButton && showHideHeaderButton;

  const onPinHeader = useCallback(
    (e) => {
      setHeaderPinned(e.target.pressed);
    },
    [setHeaderPinned]
  );

  const isInitial = useRef(true);
  useEffect(() => {
    if (!isInitial.current && typeof onPinnedStateChange === 'function') {
      onPinnedStateChange(headerPinned);
    }
    if (isInitial.current) {
      isInitial.current = false;
    }
  }, [headerPinned]);

  useEffect(() => {
    const tagName = getUi5TagWithSuffix('ui5-button');
    const showHideHeaderBtn = showHideHeaderBtnRef.current;
    customElements.whenDefined(tagName).then(() => {
      if (showHideHeaderBtn) {
        showHideHeaderBtn.accessibilityAttributes = { expanded: !!headerContentVisible };
      }
    });
  }, [!!headerContentVisible]);

  const onToggleHeaderButtonClick = (e) => {
    onToggleHeaderContentVisibility(enrichEventWithDetails(e, { visible: !headerContentVisible }));
  };
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  return (
    <section
      data-component-name="ObjectPageAnchorBar"
      style={style}
      role={a11yConfig?.objectPageAnchorBar?.role}
      className={showHideHeaderButton || headerContentPinnable ? classNames.container : null}
      ref={ref}
    >
      {showHideHeaderButton && (
        <Button
          ref={showHideHeaderBtnRef}
          icon={!headerContentVisible ? iconArrowDown : iconArrowUp}
          data-ui5wcr-dynamic-page-header-action=""
          className={clsx(
            classNames.anchorBarActionButton,
            classNames.anchorBarActionButtonExpandable,
            showBothActions && classNames.anchorBarActionPinnableAndExpandable
          )}
          style={anchorButtonVariables}
          onClick={onToggleHeaderButtonClick}
          onMouseOver={onHoverToggleButton}
          onMouseLeave={onHoverToggleButton}
          tooltip={i18nBundle.getText(!headerContentVisible ? EXPAND_HEADER : COLLAPSE_HEADER)}
          accessibleName={i18nBundle.getText(!headerContentVisible ? EXPAND_HEADER : COLLAPSE_HEADER)}
          data-component-name="ObjectPageAnchorBarExpandBtn"
        />
      )}
      {shouldRenderHeaderPinnableButton && (
        <ToggleButton
          icon={headerPinned ? iconPushPinOn : iconPushPinOff}
          data-ui5wcr-dynamic-page-header-action=""
          className={clsx(classNames.anchorBarActionButton, classNames.anchorBarActionButtonPinnable)}
          style={anchorButtonVariables}
          pressed={headerPinned}
          onClick={onPinHeader}
          tooltip={i18nBundle.getText(headerPinned ? UNPIN_HEADER : PIN_HEADER)}
          accessibleName={i18nBundle.getText(headerPinned ? UNPIN_HEADER : PIN_HEADER)}
          data-component-name="ObjectPageAnchorBarPinBtn"
        />
      )}
    </section>
  );
});

ObjectPageAnchorBar.displayName = 'ObjectPageAnchorBar';

export { ObjectPageAnchorBar };
