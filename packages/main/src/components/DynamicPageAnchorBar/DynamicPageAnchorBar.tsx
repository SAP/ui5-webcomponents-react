import { addCustomCSS } from '@ui5/webcomponents-base/dist/Theming';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { TabContainer } from '@ui5/webcomponents-react/lib/TabContainer';
import { ToggleButton } from '@ui5/webcomponents-react/lib/ToggleButton';
import React, { CSSProperties, forwardRef, ReactElement, RefObject, useCallback, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { safeGetChildrenArray } from '../DynamicPage/DynamicPageUtils';
import { DynamicPageAnchorButton } from './DynamicPageAnchorButton';
import { ObjectPageAnchorButton } from '../ObjectPage/ObjectPageAnchorButton';
import { Ui5PopoverDomRef } from '../../interfaces/Ui5PopoverDomRef';

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
  anchorBarActionButton: {
    position: 'absolute',
    '--_ui5_button_compact_height': '1.375rem',
    '--_ui5_button_base_height': '1.375rem',
    '--_ui5_button_base_min_width': '1.375rem',
    '--_ui5_button_base_min_compact_width': '1.375rem',
    top: `-0.6875rem`,
    marginLeft: `-0.6875rem`,
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
      backgroundImage: `linear-gradient(to left, ${ThemingParameters.sapHighlightColor}, rgba(8,84,160,0))`
    },
    '&:after': {
      backgroundImage: `linear-gradient(to right, ${ThemingParameters.sapHighlightColor}, rgba(8,84,160,0))`,
      left: '100%'
    }
  },
  anchorBarActionButtonExpandable: {},
  anchorBarActionButtonPinnable: {},
  anchorBarActionPinnableAndExandable: {
    '&$anchorBarActionButtonPinnable': {
      marginLeft: '0.25rem',
      '&:before': {
        backgroundImage: 'none'
      }
    },
    '&$anchorBarActionButtonExpandable': {
      marginLeft: '-1.75rem'
    }
  }
};

const useStyles = createUseStyles(anchorBarStyles, { name: 'DynamicPageAnchorBar' });

interface Props {
  className: string;
  style?: CSSProperties;
  sections: ReactElement | ReactElement[];
  headerContentHeight: number;
  headerContentPinnable: boolean;
  showHideHeaderButton: boolean;
  selectedSectionId: string;
}

const DynamicPageAnchorBar = forwardRef((props: Props, ref: RefObject<HTMLElement>) => {
  const {
    showHideHeaderButton,
    headerContentHeight,
    headerContentPinnable,
    className,
    style,
    sections,
    selectedSectionId
  } = props;
  const classes = useStyles();

  const shouldRenderHideHeaderButton = showHideHeaderButton;
  const shouldRenderHeaderPinnableButton = headerContentPinnable && headerContentHeight > 0;
  const showBothActions = shouldRenderHeaderPinnableButton && shouldRenderHideHeaderButton;
  const [popoverContent, setPopoverContent] = useState<ReactElement>(null);
  const popoverRef = useRef<Ui5PopoverDomRef>(null);

  const onShowSubSectionPopover = useCallback(
    (e, section) => {
      setPopoverContent(section);
      popoverRef.current.openBy(e.target.parentElement);
    },
    [setPopoverContent, popoverRef]
  );

  return (
    <section style={style} className={className}>
      <TabContainer collapsed fixed showOverflow>
        {safeGetChildrenArray(sections).map((section: ReactElement, index: number) => {
          return (
            <DynamicPageAnchorButton
              key={`Anchor-${section.props?.id}`}
              section={section}
              onShowSubSectionPopover={onShowSubSectionPopover}
              index={index}
              selected={selectedSectionId === section.props?.id}
            />
          );
        })}
      </TabContainer>
      {shouldRenderHideHeaderButton && (
        <Button
          icon={headerContentHeight === 0 ? 'slim-arrow-down' : 'slim-arrow-up'}
          data-ui5wcr-dynamic-page-header-action=""
          className={`${classes.anchorBarActionButton} ${classes.anchorBarActionButtonExpandable} ${
            showBothActions ? classes.anchorBarActionPinnableAndExandable : ''
          }`}
        />
      )}
      {shouldRenderHeaderPinnableButton && (
        <ToggleButton
          icon="pushpin-off"
          data-ui5wcr-dynamic-page-header-action=""
          className={`${classes.anchorBarActionButton} ${classes.anchorBarActionButtonPinnable} ${
            showBothActions ? classes.anchorBarActionPinnableAndExandable : ''
          }`}
        />
      )}
    </section>
  );
});

DynamicPageAnchorBar.displayName = 'DynamicPageAnchorBar';

export { DynamicPageAnchorBar };
