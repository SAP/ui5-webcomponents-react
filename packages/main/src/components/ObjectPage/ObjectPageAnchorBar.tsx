import { addCustomCSS } from '@ui5/webcomponents-base/dist/Theming';
import '@ui5/webcomponents-icons/dist/icons/pushpin-off';
import '@ui5/webcomponents-icons/dist/icons/slim-arrow-down';
import '@ui5/webcomponents-icons/dist/icons/slim-arrow-up';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ToggleButton } from '@ui5/webcomponents-react/lib/ToggleButton';
import { ObjectPageMode } from '@ui5/webcomponents-react/lib/ObjectPageMode';
import React, { FC, ReactElement, useCallback, CSSProperties, forwardRef, RefObject } from 'react';
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

interface Props {
  classes: Record<string, string>;
  sections: ReactElement | ReactElement[];
  mode: ObjectPageMode;
  selectedSectionId: string;
  handleOnSectionSelected: (e: unknown) => void;
  handleOnSubSectionSelected: (e: unknown) => void;
  showHideHeaderButton: boolean;
  noHeader: boolean;
  headerContentPinnable: boolean;
  changeHeader: () => void;
  headerPinned: boolean;
  showHeaderContent: boolean;
  setHeaderPinned: (payload: any) => void;
  style?: CSSProperties;
}

const ObjectPageAnchorBar: FC<Props> = forwardRef((props: Props, ref: RefObject<HTMLElement>) => {
  const {
    classes,
    sections,
    mode,
    selectedSectionId,
    handleOnSectionSelected,
    handleOnSubSectionSelected,
    showHideHeaderButton,
    noHeader,
    headerContentPinnable,
    changeHeader,
    headerPinned,
    setHeaderPinned,
    showHeaderContent,
    style
  } = props;

  const shouldRenderHideHeaderButton = showHideHeaderButton && !noHeader;
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
          onClick={changeHeader}
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
