import { createUseStyles } from 'react-jss';
import React, { CSSProperties, forwardRef, ReactElement, RefObject } from 'react';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ToggleButton } from '@ui5/webcomponents-react/lib/ToggleButton';

const anchorBarStyles = {};

const useStyles = createUseStyles(anchorBarStyles, { name: 'DynamicPageAnchorBar' });

interface Props {
  className: string;
  style?: CSSProperties;
  sections: ReactElement | ReactElement[];
  headerContentHeight: number;
  headerContentPinnable: boolean;
  showHideHeaderButton: boolean;
}

const DynamicPageAnchorBar = forwardRef((props: Props, ref: RefObject<HTMLElement>) => {
  const { showHideHeaderButton, headerContentHeight, headerContentPinnable, className, style } = props;
  const classes = useStyles();

  const shouldRenderHideHeaderButton = showHideHeaderButton;
  const shouldRenderHeaderPinnableButton = headerContentPinnable && headerContentHeight > 0;
  const showBothActions = shouldRenderHeaderPinnableButton && shouldRenderHideHeaderButton;

  return (
    <section style={style} className={className}>
      {shouldRenderHideHeaderButton && (
        <Button
          icon={headerContentHeight === 0 ? 'slim-arrow-down' : 'slim-arrow-up'}
          data-ui5wcr-dynamic-page-header-action=""
          // className={}
        />
      )}
      {shouldRenderHeaderPinnableButton && (
        <ToggleButton
          icon="pushpin-off"
          data-ui5wcr-dynamic-page-header-action=""
          // className={}
        />
      )}
    </section>
  );
});

DynamicPageAnchorBar.displayName = 'DynamicPageAnchorBar';

export { DynamicPageAnchorBar };
