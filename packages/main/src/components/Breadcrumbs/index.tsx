import { BreadcrumbsSeparatorStyle } from '@ui5/webcomponents-react/lib/BreadcrumbsSeparatorStyle';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import React, { Children, FC, forwardRef, Fragment, ReactNode, Ref, ReactNodeArray } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';

const SeparatorStyles = {
  BackSlash: '\\',
  DoubleBackSlash: '\\\\',
  DoubleGreaterThan: '>>',
  DoubleSlash: '//',
  GreaterThan: '>',
  Slash: '/'
};

export interface BreadcrumbsPropTypes extends CommonProps {
  /**
   *  A list of all the active link elements in the Breadcrumbs control. Please use the `Link` component.
   */
  children: ReactNode | ReactNodeArray;
  /**
   * Determines the visual style of the separator between the Breadcrumbs elements.
   */
  separatorStyle?: BreadcrumbsSeparatorStyle;
  /**
   * Determines the text of current/last element in the Breadcrumbs path.
   */
  currentLocationText?: string;
}

const Breadcrumbs: FC<BreadcrumbsPropTypes> = forwardRef((props: BreadcrumbsPropTypes, ref: Ref<HTMLDivElement>) => {
  const { children, separatorStyle, currentLocationText, tooltip, style, className, slot } = props;
  const childrenArray = Children.toArray(children).filter(Boolean);

  return (
    <div ref={ref} title={tooltip} style={style} className={className} slot={slot}>
      {childrenArray.map((item, index) => {
        if (index === childrenArray.length - 1) {
          return item;
        }
        return (
          <Fragment key={index}>
            {item}
            <Label style={{ margin: '0 0.25rem' }} children={SeparatorStyles[separatorStyle]} />
          </Fragment>
        );
      })}
      {currentLocationText && (
        <>
          <Label style={{ margin: '0 0.25rem' }}>{SeparatorStyles[separatorStyle]}</Label>
          <Label>{currentLocationText}</Label>
        </>
      )}
    </div>
  );
});

Breadcrumbs.displayName = 'Breadcrumbs';
Breadcrumbs.defaultProps = {
  separatorStyle: BreadcrumbsSeparatorStyle.Slash
};

export { Breadcrumbs };
