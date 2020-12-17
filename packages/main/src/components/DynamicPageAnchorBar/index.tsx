import { addCustomCSS } from '@ui5/webcomponents-base/dist/Theming';
import '@ui5/webcomponents-icons/dist/slim-arrow-down.js';
import '@ui5/webcomponents-icons/dist/slim-arrow-up.js';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ToggleButton } from '@ui5/webcomponents-react/lib/ToggleButton';
import React, { CSSProperties, forwardRef, RefObject, useCallback } from 'react';
import { createUseStyles } from 'react-jss';

addCustomCSS(
  'ui5-button',
  `
:host([data-ui5wcr-dynamic-page-header-action]) .ui5-button-root {
 padding: 0;
}`
);
addCustomCSS(
  'ui5-togglebutton',
  `
:host([data-ui5wcr-dynamic-page-header-action]) .ui5-button-root {
 padding: 0;
}`
);

const anchorBarStyles = {
  anchorBarActionButton: {
    position: 'absolute',
    '--_ui5_button_compact_height': '1.375rem',
    '--_ui5_button_base_height': '1.375rem',
    '--_ui5_button_base_min_width': '1.375rem',
    '--_ui5_button_base_min_compact_width': '1.375rem',
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
  }
};

const useStyles = createUseStyles(anchorBarStyles, { name: 'DynamicPageAnchorBar' });

interface Props {
  /**
   * Determines the style of the anchor bar.
   */
  style?: CSSProperties;
  /**
   * Determines the height of the header content.
   */
  headerContentHeight: number;
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
}

/**
 * The dynamic page anchor bar contains the expand/collapse (expands or collapses the header content)
 * and pin button (pins the content header).
 */
const DynamicPageAnchorBar = forwardRef((props: Props, ref: RefObject<HTMLElement>) => {
  const {
    showHideHeaderButton,
    headerContentHeight,
    headerContentPinnable,
    headerPinned,
    setHeaderPinned,
    onToggleHeaderContentVisibility,
    onHoverToggleButton,
    style
  } = props;

  const classes = useStyles();

  const shouldRenderHeaderPinnableButton = headerContentPinnable && headerContentHeight > 0;
  const showBothActions = shouldRenderHeaderPinnableButton && showHideHeaderButton;

  const onPinHeader = useCallback(
    (e) => {
      setHeaderPinned(e.target.pressed);
    },
    [setHeaderPinned]
  );

  return (
    <section
      style={style}
      role="navigation"
      className={showHideHeaderButton || headerContentPinnable ? classes.anchorBarActionButton : null}
      ref={ref}
    >
      {showHideHeaderButton && (
        <Button
          icon={headerContentHeight === 0 ? 'slim-arrow-down' : 'slim-arrow-up'}
          data-ui5wcr-dynamic-page-header-action=""
          className={`${classes.anchorBarActionButton} ${classes.anchorBarActionButtonExpandable} ${
            showBothActions ? classes.anchorBarActionPinnableAndExpandable : ''
          }`}
          onClick={onToggleHeaderContentVisibility}
          onMouseOver={onHoverToggleButton}
          onMouseLeave={onHoverToggleButton}
        />
      )}
      {shouldRenderHeaderPinnableButton && (
        <ToggleButton
          icon="pushpin-off"
          data-ui5wcr-dynamic-page-header-action=""
          className={`${classes.anchorBarActionButton} ${classes.anchorBarActionButtonPinnable} ${
            showBothActions ? classes.anchorBarActionPinnableAndExpandable : ''
          }`}
          pressed={headerPinned}
          onClick={onPinHeader}
        />
      )}
    </section>
  );
});

DynamicPageAnchorBar.displayName = 'DynamicPageAnchorBar';

export { DynamicPageAnchorBar };
