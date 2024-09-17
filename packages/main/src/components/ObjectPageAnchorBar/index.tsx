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
import { Button, ToggleButton } from '../../index.js';
import type { ButtonDomRef } from '../../index.js';
import { cssVarVersionInfoPrefix, getUi5TagWithSuffix } from '../../internal/utils.js';
import type { CommonProps } from '../../types/index.js';
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
   * Defines if the pin button is hidden.
   */
  hidePinButton: boolean;
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
   * Defines internally used accessibility properties/attributes.
   */
  accessibilityAttributes?: {
    objectPageAnchorBar?: {
      role?: string;
    };
  };
  /**
   * Fired when the `headerContent` changes its pinned state.
   */
  onPinButtonToggle?: (pinned: boolean) => void;
}

/**
 * The `ObjectPageAnchorBar` bar contains the expand/collapse (expands or collapses the header content) and pin button (pins the content header).
 */
const ObjectPageAnchorBar = forwardRef<HTMLElement, ObjectPageAnchorBarPropTypes>((props, ref) => {
  const {
    headerContentVisible,
    hidePinButton,
    headerPinned,
    style,
    accessibilityAttributes,
    setHeaderPinned,
    onPinButtonToggle,
    onToggleHeaderContentVisibility,
    onHoverToggleButton
  } = props;

  useStylesheet(styleData, ObjectPageAnchorBar.displayName);
  const showHideHeaderBtnRef = useRef<ButtonDomRef>(null);
  const shouldRenderHeaderPinnableButton = !hidePinButton && headerContentVisible;
  const showBothActions = shouldRenderHeaderPinnableButton;

  const onPinHeader = useCallback(
    (e) => {
      setHeaderPinned(e.target.pressed);
    },
    [setHeaderPinned]
  );

  const isInitial = useRef(true);
  useEffect(() => {
    if (!isInitial.current && typeof onPinButtonToggle === 'function') {
      onPinButtonToggle(headerPinned);
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
      role={accessibilityAttributes?.objectPageAnchorBar?.role}
      className={!hidePinButton ? classNames.container : null}
      ref={ref}
    >
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
