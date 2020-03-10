import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';
import React, { FC, RefObject, useMemo } from 'react';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { ZIndex } from '../../enums/ZIndex';

interface Props {
  scrollBarRef: RefObject<HTMLDivElement>;
  innerScrollBarRef: RefObject<HTMLDivElement>;
  width: number;
}

const styles = {
  outerScrollbar: {
    position: 'absolute',
    right: 0,
    overflow: 'hidden',
    height: '100%',
    zIndex: ZIndex.ResponsivePopover,
    backgroundColor: ThemingParameters.sapUiObjectHeaderBackground,
    '& ::-webkit-scrollbar': {
      backgroundColor: '#ffffff'
    },
    '& ::-webkit-scrollbar-thumb': {
      backgroundColor: '#949494',
      '&:hover': {
        backgroundColor: '#8c8c8c'
      }
    },
    '& ::-webkit-scrollbar-corner': {
      backgroundColor: '#ffffff'
    }
  },
  innerScrollbar: {
    width: '34px',
    overflowY: 'scroll',
    overflowX: 'hidden',
    height: '100%'
  }
};

const useScrollBarStyles = createComponentStyles(styles, { name: 'ObjectPageScrollBar' });

export const ObjectPageScrollBar: FC<Props> = (props) => {
  const { scrollBarRef, innerScrollBarRef, width } = props;

  const [scrollBarWidthStyle, scrollBarWidthMargin] = useMemo(() => {
    return [{ width: `${width}px` }, { marginLeft: `-${width}px`, width: `${2 * width}px` }];
  }, [width]);

  const classes = useScrollBarStyles();

  return (
    <div style={scrollBarWidthStyle} className={classes.outerScrollbar}>
      <div ref={scrollBarRef} style={scrollBarWidthMargin} className={classes.innerScrollbar}>
        <div ref={innerScrollBarRef} style={scrollBarWidthStyle} />
      </div>
    </div>
  );
};
