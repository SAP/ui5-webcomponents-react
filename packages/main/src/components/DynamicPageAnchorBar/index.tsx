import { addCustomCSS } from '@ui5/webcomponents-base/dist/Theming.js';
import '@ui5/webcomponents-icons/dist/pushpin-off.js';
import '@ui5/webcomponents-icons/dist/slim-arrow-down.js';
import '@ui5/webcomponents-icons/dist/slim-arrow-up.js';
import { useI18nBundle, useIsRTL, useSyncRef } from '@ui5/webcomponents-react-base/dist/hooks';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/dist/Utils';
import {
  COLLAPSE_HEADER,
  EXPAND_HEADER,
  PIN_HEADER,
  UNPIN_HEADER
} from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import { Button } from '@ui5/webcomponents-react/dist/Button';
import { ToggleButton } from '@ui5/webcomponents-react/dist/ToggleButton';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import React, { forwardRef, RefObject, useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

addCustomCSS(
  'ui5-button',
  `
  :host([data-ui5wcr-dynamic-page-header-action]){
    width: 1.375rem;
    height: 1.375rem;
    min-width: 1.375rem;
  }
  :host([data-ui5wcr-dynamic-page-header-action]) .ui5-button-root {
    padding: 0;
  }`
);
addCustomCSS(
  'ui5-toggle-button',
  `
    :host([data-ui5wcr-dynamic-page-header-action]){
    width: 1.375rem;
    height: 1.375rem;
    min-width: 1.375rem;
  }
  :host([data-ui5wcr-dynamic-page-header-action]) .ui5-button-root {
    padding: 0;
  }`
);

const anchorBarStyles = {
  anchorBarActionButton: {
    position: 'absolute',
    top: `-0.6875rem`,
    marginLeft: `-0.6875rem`,
    left: '50%',
    zIndex: 3,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      width: '4rem',
      top: '50%',
      height: '0.0625rem'
    },
    '&:before': {
      right: '100%',
      backgroundImage: `linear-gradient(to left, ${ThemingParameters.sapHighlightColor}, rgba(8,84,160,0))`
    },
    '&:after': {
      backgroundImage: `linear-gradient(to right, ${ThemingParameters.sapHighlightColor}, rgba(8,84,160,0))`,
      left: '100%'
    }
  },
  anchorBarActionButtonRtl: {
    marginRight: `-0.6875rem`,
    marginLeft: 0
  },
  anchorBarActionButtonExpandable: {},
  anchorBarActionButtonPinnable: {},
  anchorBarActionPinnableAndExpandable: {
    '&$anchorBarActionButtonPinnable': {
      marginLeft: '0.25rem',
      '&:before': {
        backgroundColor: 'white'
      }
    },
    '&$anchorBarActionButtonExpandable': {
      marginLeft: '-1.75rem'
    }
  },
  anchorBarActionPinnableAndExpandableRtl: {
    '&$anchorBarActionButtonPinnable': {
      marginRight: '0.25rem',
      '&:before': {
        backgroundColor: 'white'
      }
    },
    '&$anchorBarActionButtonExpandable': {
      marginRight: '-1.75rem'
    }
  }
};

const useStyles = createUseStyles(anchorBarStyles, { name: 'DynamicPageAnchorBar' });

interface Props extends CommonProps {
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
}

/**
 * The dynamic page anchor bar contains the expand/collapse (expands or collapses the header content)
 * and pin button (pins the content header).
 */
const DynamicPageAnchorBar = forwardRef((props: Props, ref: RefObject<HTMLElement>) => {
  const {
    showHideHeaderButton,
    headerContentVisible,
    headerContentPinnable,
    headerPinned,
    setHeaderPinned,
    onToggleHeaderContentVisibility,
    onHoverToggleButton,
    style,
    a11yConfig
  } = props;

  const classes = useStyles();
  const [componentRef, anchorBarRef] = useSyncRef<HTMLElement>(ref);
  const isRTL = useIsRTL(anchorBarRef);

  const shouldRenderHeaderPinnableButton = headerContentPinnable && headerContentVisible;
  const showBothActions = shouldRenderHeaderPinnableButton && showHideHeaderButton;

  const onPinHeader = useCallback(
    (e) => {
      setHeaderPinned(e.target.pressed);
    },
    [setHeaderPinned]
  );

  const anchorBarActionButtonClasses = clsx(classes.anchorBarActionButton, isRTL && classes.anchorBarActionButtonRtl);

  const bothActionClasses = clsx(
    classes.anchorBarActionPinnableAndExpandable,
    isRTL && classes.anchorBarActionPinnableAndExpandableRtl
  );

  const onToggleHeaderButtonClick = (e) => {
    onToggleHeaderContentVisibility(enrichEventWithDetails(e, { visible: !headerContentVisible }));
  };
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  return (
    <section
      data-component-name="DynamicPageAnchorBar"
      style={style}
      role={a11yConfig?.dynamicPageAnchorBar?.role ?? 'navigation'}
      className={showHideHeaderButton || headerContentPinnable ? classes.anchorBarActionButton : null}
      ref={componentRef}
    >
      {showHideHeaderButton && (
        <Button
          icon={!headerContentVisible ? 'slim-arrow-down' : 'slim-arrow-up'}
          data-ui5wcr-dynamic-page-header-action=""
          className={clsx(
            anchorBarActionButtonClasses,
            classes.anchorBarActionButtonExpandable,
            showBothActions && bothActionClasses
          )}
          onClick={onToggleHeaderButtonClick}
          onMouseOver={onHoverToggleButton}
          onMouseLeave={onHoverToggleButton}
          tooltip={i18nBundle.getText(!headerContentVisible ? EXPAND_HEADER : COLLAPSE_HEADER)}
          aria-label={i18nBundle.getText(!headerContentVisible ? EXPAND_HEADER : COLLAPSE_HEADER)}
        />
      )}
      {shouldRenderHeaderPinnableButton && (
        <ToggleButton
          icon="pushpin-off"
          data-ui5wcr-dynamic-page-header-action=""
          className={clsx(
            anchorBarActionButtonClasses,
            classes.anchorBarActionButtonPinnable,
            showBothActions && bothActionClasses
          )}
          pressed={headerPinned}
          onClick={onPinHeader}
          tooltip={i18nBundle.getText(headerPinned ? UNPIN_HEADER : PIN_HEADER)}
          aria-label={i18nBundle.getText(headerPinned ? UNPIN_HEADER : PIN_HEADER)}
        />
      )}
    </section>
  );
});

DynamicPageAnchorBar.displayName = 'DynamicPageAnchorBar';

export { DynamicPageAnchorBar };
