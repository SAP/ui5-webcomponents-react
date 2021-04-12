import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/dist/usePassThroughHtmlProps';
import { BreadcrumbsSeparatorStyle } from '@ui5/webcomponents-react/dist/BreadcrumbsSeparatorStyle';
import { Label } from '@ui5/webcomponents-react/dist/Label';
import React, { Children, FC, forwardRef, Fragment, ReactNode, ReactNodeArray, Ref } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';

const SeparatorStyles = {
  BackSlash: '\\',
  DoubleBackSlash: '\\\\',
  DoubleGreaterThan: '>>',
  DoubleSlash: '//',
  GreaterThan: '>',
  Slash: '/'
};

const separatorInlineStyles = { margin: '0 0.25rem' };

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

/**
 * Enables users to navigate between items by providing a list of links to previous steps in the user's navigation path.
 */
const Breadcrumbs: FC<BreadcrumbsPropTypes> = forwardRef((props: BreadcrumbsPropTypes, ref: Ref<HTMLDivElement>) => {
  const { children, separatorStyle, currentLocationText, tooltip, style, className, slot } = props;
  const childrenArray = Children.toArray(children).filter(Boolean);

  const passThroughProps = usePassThroughHtmlProps(props);

  return (
    <nav
      ref={ref}
      title={tooltip}
      style={style}
      className={className}
      slot={slot}
      aria-label="Breadcrumb Trail"
      {...passThroughProps}
    >
      <ol
        style={{
          listStyleType: 'none',
          display: 'flex',
          alignItems: 'center',
          marginBlock: 0,
          paddingInline: 0,
          flexWrap: 'wrap'
        }}
      >
        {childrenArray.map((item, index) => {
          if (index === childrenArray.length - 1) {
            return <li key={`bc-${index}`}>{item}</li>;
          }
          return (
            <li key={`bc-${index}`} style={{ display: 'flex' }}>
              {item}
              <Label style={separatorInlineStyles} aria-hidden="true">
                {SeparatorStyles[separatorStyle]}
              </Label>
            </li>
          );
        })}
        {currentLocationText && (
          <li key={`bc-${currentLocationText}`} style={{ display: 'flex' }}>
            <Label style={separatorInlineStyles} aria-hidden="true">
              {SeparatorStyles[separatorStyle]}
            </Label>
            <Label aria-current="page">{currentLocationText}</Label>
          </li>
        )}
      </ol>
    </nav>
  );
});

Breadcrumbs.displayName = 'Breadcrumbs';
Breadcrumbs.defaultProps = {
  separatorStyle: BreadcrumbsSeparatorStyle.Slash
};

export { Breadcrumbs };
