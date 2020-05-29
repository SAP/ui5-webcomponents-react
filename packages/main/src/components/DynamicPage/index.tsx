import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/hooks';
import React, { forwardRef, ReactElement, ReactNode, ReactNodeArray, Ref, FC } from 'react';
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

  children: ReactNode | ReactNodeArray;

  footer?: ReactElement;
}

const DynamicPage: FC<DynamicPageProps> = forwardRef((props: DynamicPageProps, ref: Ref<HTMLDivElement>) => {
  const { title, className, tooltip, style } = props;

  const passThroughProps = usePassThroughHtmlProps(props);

  return (
    <div ref={ref} title={tooltip} className={className} style={style} {...passThroughProps}>
      {title}
    </div>
  );
});

DynamicPage.displayName = 'DynamicPage';

export { DynamicPage };
