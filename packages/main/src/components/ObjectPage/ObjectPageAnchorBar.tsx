import { addCustomCSS } from '@ui5/webcomponents-base/dist/Theming';
import '@ui5/webcomponents-icons/dist/icons/pushpin-off';
import '@ui5/webcomponents-icons/dist/icons/slim-arrow-down';
import '@ui5/webcomponents-icons/dist/icons/slim-arrow-up';
import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ObjectPageMode } from '@ui5/webcomponents-react/lib/ObjectPageMode';
import { ToggleButton } from '@ui5/webcomponents-react/lib/ToggleButton';
import React, { CSSProperties, FC, forwardRef, ReactElement, RefObject, useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { ObjectPageAnchorButton } from './ObjectPageAnchorButton';
import { safeGetChildrenArray } from './ObjectPageUtils';

addCustomCSS(
  'ui5-button',
  `
:host([data-ui5wcr-object-page-header-action]) .ui5-button-root {
 padding: 0;
}`
);
addCustomCSS(
  'ui5-togglebutton',
  `
:host([data-ui5wcr-object-page-header-action]) .ui5-button-root {
 padding: 0;
}`
);

const anchorBarStyles = {
  anchorBar: {
    paddingLeft: '2rem',
    backgroundColor: ThemingParameters.sapUiObjectHeaderBackground,
    boxShadow: `inset 0 -0.0625rem ${ThemingParameters.sapUiObjectHeaderBorderColor}, inset 0 0.0625rem ${ThemingParameters.sapUiObjectHeaderBorderColor}`,
    display: 'flex',
    height: '2.75rem',
    minHeight: '2.75rem',
    position: 'sticky',
    zIndex: 2
  },
  anchorBarActionButton: {
    position: 'absolute',
    '--_ui5_button_compact_height': '1.375rem',
    '--_ui5_button_base_height': '1.375rem',
    '--_ui5_button_base_min_compact_width': '1.375rem',
    top: `-0.6875rem`,
    marginLeft: `-0.6875rem`,
    left: '50%'
  },
  anchorBarActionButtonExpandable: {},
  anchorBarActionButtonPinnable: {},
  anchorBarActionPinnableAndExandable: {
    '&$anchorBarActionButtonPinnable': {
      marginLeft: '0.25rem'
    },
    '&$anchorBarActionButtonExpandable': {
      marginLeft: '-1.75rem'
    }
  }
};

const useStyles = createUseStyles(anchorBarStyles, { name: 'ObjectPageAnchorBar' });

interface Props {
  sections: ReactElement | ReactElement[];
  mode: ObjectPageMode;
  selectedSectionId: string;
  handleOnSectionSelected: (e: unknown) => void;
  handleOnSubSectionSelected: (e: unknown) => void;
  showHideHeaderButton: boolean;
  headerContentPinnable: boolean;
  headerPinned: boolean;
  showHeaderContent: boolean;
  setHeaderPinned: (payload: any) => void;
  style?: CSSProperties;
  onToggleHeaderContentVisibility: (e: any) => void;
}

const ObjectPageAnchorBar: FC<Props> = forwardRef((props: Props, ref: RefObject<HTMLElement>) => {
  const {
    sections,
    mode,
    selectedSectionId,
    handleOnSectionSelected,
    handleOnSubSectionSelected,
    showHideHeaderButton,
    headerContentPinnable,
    onToggleHeaderContentVisibility,
    headerPinned,
    setHeaderPinned,
    showHeaderContent,
    style
  } = props;

  const classes = useStyles();

  const shouldRenderHideHeaderButton = showHideHeaderButton;
  const shouldRenderHeaderPinnableButton = headerContentPinnable && showHeaderContent;
  const showBothActions = shouldRenderHeaderPinnableButton && shouldRenderHideHeaderButton;

  const onPinHeader = useCallback(
    (e) => {
      setHeaderPinned(e.getParameter('pressed'));
    },
    [setHeaderPinned]
  );

  return (
    <section className={classes.anchorBar} role="navigation" style={style} ref={ref}>
      {safeGetChildrenArray(sections).map((section, index) => {
        return (
          <ObjectPageAnchorButton
            key={`Anchor-${section.props?.id}`}
            section={section}
            index={index}
            selected={selectedSectionId === section.props?.id}
            mode={mode}
            onSectionSelected={handleOnSectionSelected}
            onSubSectionSelected={handleOnSubSectionSelected}
            collapsedHeader={!showHeaderContent}
          />
        );
      })}
      {shouldRenderHideHeaderButton && (
        <Button
          icon={showHeaderContent ? 'slim-arrow-up' : 'slim-arrow-down'}
          onClick={onToggleHeaderContentVisibility}
          className={`${classes.anchorBarActionButton} ${classes.anchorBarActionButtonExpandable} ${
            showBothActions ? classes.anchorBarActionPinnableAndExandable : ''
          }`}
          data-ui5wcr-object-page-header-action=""
        />
      )}
      {shouldRenderHeaderPinnableButton && (
        <ToggleButton
          icon="pushpin-off"
          pressed={headerPinned}
          onClick={onPinHeader}
          className={`${classes.anchorBarActionButton} ${classes.anchorBarActionButtonPinnable} ${
            showBothActions ? classes.anchorBarActionPinnableAndExandable : ''
          }`}
          data-ui5wcr-object-page-header-action=""
        />
      )}
    </section>
  );
});

ObjectPageAnchorBar.displayName = 'ObjectPageAnchorBar';

export { ObjectPageAnchorBar };
