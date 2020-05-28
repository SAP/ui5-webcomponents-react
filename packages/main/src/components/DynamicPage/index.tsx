import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/hooks';
import React, { forwardRef, Ref, ReactNodeArray, ReactElement, ReactNode } from 'react';
import { PageBackgroundDesign } from '../..';

import { CommonProps } from '../../interfaces/CommonProps';

export interface DynamicPageProps extends CommonProps {
  /**
   * Determines the background color of DynamicPage.
   */
  backgroundDesign?: PageBackgroundDesign;
  /**
   * Determines whether the footer is visible.
   */
  showFooter?: boolean;

  // slots
  title?: ReactElement;

  header?: ReactElement;

  content: ReactNode | ReactNodeArray;

  footer?: ReactElement;
}

const DynamicPage = forwardRef((props: DynamicPageProps, ref: Ref<HTMLDivElement>) => {
  const { className, tooltip, slot, style } = props;

  const passThroughProps = usePassThroughHtmlProps(props);

  return <div ref={ref} slot={slot} title={tooltip} className={className} style={style} {...passThroughProps}></div>;
});

DynamicPage.displayName = 'DynamicPage';

export { DynamicPage };
