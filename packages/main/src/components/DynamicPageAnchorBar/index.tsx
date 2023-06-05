'use client';

import iconPushPin from '@ui5/webcomponents-icons/dist/pushpin-off.js';
import iconArrowDown from '@ui5/webcomponents-icons/dist/slim-arrow-down.js';
import iconArrowUp from '@ui5/webcomponents-icons/dist/slim-arrow-up.js';
import { enrichEventWithDetails, ThemingParameters, useI18nBundle } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import React, { forwardRef, useCallback, useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';
import { createUseStyles } from 'react-jss';
import { COLLAPSE_HEADER, EXPAND_HEADER, PIN_HEADER, UNPIN_HEADER } from '../../i18n/i18n-defaults.js';
import type { CommonProps } from '../../interfaces/index.js';
import { Button, ToggleButton } from '../../webComponents/index.js';

const anchorBarStyles = {
  container: {
    position: 'absolute',
    left: '50%',
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      width: '4rem',
      top: '50%',
      height: '0.0625rem'
    },
    '&:before': {
      right: '100%',
      backgroundImage: `linear-gradient(to left, ${ThemingParameters.sapObjectHeader_BorderColor}, transparent)`
    },
    '&:after': {
      backgroundImage: `linear-gradient(to right, ${ThemingParameters.sapObjectHeader_BorderColor}, transparent)`,
      left: '100%'
    }
  },
  anchorBarActionButton: {
    '--ui5wcr_anchor-btn-center': `calc((var(--_ui5_button_base_min_width) - var(--sapButton_BorderWidth)) / 2)`,
    position: 'absolute',
    insetBlockStart: `calc(-1 * var(--ui5wcr_anchor-btn-center))`,
    insetInlineStart: 'calc(50% - var(--ui5wcr_anchor-btn-center))',
    zIndex: 3,
    '&:not([pressed])': {
      backgroundColor: ThemingParameters.sapObjectHeader_Background
    }
  },
  anchorBarActionButtonExpandable: {
    '& + $anchorBarActionButtonPinnable': {
      insetInlineStart: 'calc(50% - var(--ui5wcr_anchor-btn-center) + 1rem)'
    }
  },
  anchorBarActionButtonPinnable: {},
  anchorBarActionPinnableAndExpandable: {
    '&$anchorBarActionButtonExpandable': {
      insetInlineStart: 'calc(50% - var(--ui5wcr_anchor-btn-center) - 1rem)'
    }
  }
};

const useStyles = createUseStyles(anchorBarStyles, { name: 'DynamicPageAnchorBar' });

interface DynamicPageAnchorBarPropTypes extends CommonProps {
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
    dynamicPageAnchorBar?: {
      role?: string;
    };
  };
  /**
   * Fired when the `headerContent` changes its pinned state.
   */
  onPinnedStateChange?: (pinned: boolean) => void;
}

const anchorButtonVariables = {
  '--_ui5_button_base_min_width': '1.5rem',
  '--_ui5_button_base_height': '1.5rem'
} as CSSProperties;

/**
 * The dynamic page anchor bar contains the expand/collapse (expands or collapses the header content)
 * and pin button (pins the content header).
 */
const DynamicPageAnchorBar = forwardRef<HTMLElement, DynamicPageAnchorBarPropTypes>((props, ref) => {
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

  const classes = useStyles();
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

  const onToggleHeaderButtonClick = (e) => {
    onToggleHeaderContentVisibility(enrichEventWithDetails(e, { visible: !headerContentVisible }));
  };
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  return (
    <section
      data-component-name="DynamicPageAnchorBar"
      style={style}
      role={a11yConfig?.dynamicPageAnchorBar?.role ?? 'navigation'}
      className={showHideHeaderButton || headerContentPinnable ? classes.container : null}
      ref={ref}
    >
      {showHideHeaderButton && (
        <Button
          icon={!headerContentVisible ? iconArrowDown : iconArrowUp}
          data-ui5wcr-dynamic-page-header-action=""
          className={clsx(
            classes.anchorBarActionButton,
            classes.anchorBarActionButtonExpandable,
            showBothActions && classes.anchorBarActionPinnableAndExpandable
          )}
          style={anchorButtonVariables}
          onClick={onToggleHeaderButtonClick}
          onMouseOver={onHoverToggleButton}
          onMouseLeave={onHoverToggleButton}
          tooltip={i18nBundle.getText(!headerContentVisible ? EXPAND_HEADER : COLLAPSE_HEADER)}
          accessibleName={i18nBundle.getText(!headerContentVisible ? EXPAND_HEADER : COLLAPSE_HEADER)}
          data-component-name="DynamicPageAnchorBarExpandBtn"
        />
      )}
      {shouldRenderHeaderPinnableButton && (
        <ToggleButton
          icon={iconPushPin}
          data-ui5wcr-dynamic-page-header-action=""
          className={clsx(classes.anchorBarActionButton, classes.anchorBarActionButtonPinnable)}
          style={anchorButtonVariables}
          pressed={headerPinned}
          onClick={onPinHeader}
          tooltip={i18nBundle.getText(headerPinned ? UNPIN_HEADER : PIN_HEADER)}
          accessibleName={i18nBundle.getText(headerPinned ? UNPIN_HEADER : PIN_HEADER)}
          data-component-name="DynamicPageAnchorBarPinBtn"
        />
      )}
    </section>
  );
});

DynamicPageAnchorBar.displayName = 'DynamicPageAnchorBar';

export { DynamicPageAnchorBar };
