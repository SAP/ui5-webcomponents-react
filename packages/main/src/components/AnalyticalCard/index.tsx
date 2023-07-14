'use client';

import { deprecationNotice, useStylesheet } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';
import React, { forwardRef, useEffect } from 'react';
import type { CommonProps } from '../../interfaces/index.js';
import type { CardDomRef } from '../../webComponents/index.js';
import { Card } from '../../webComponents/index.js';
import { classNames, styleData } from './AnalyticalCard.module.css.js';

export interface AnalyticalCardPropTypes extends CommonProps {
  /**
   * The Card header Component. Using the `AnalyticalCardHeader` is recommended.
   */
  header?: ReactNode;
  /**
   * The content of the `AnalyticalCard`.
   */
  children: ReactNode | ReactNode[];
}

/**
 * The `AnalyticalCard` is mainly used for data visualization. It consists of two areas – a header area and a chart area with a visual representation of the data.<br />
 *
 * @deprecated This component is deprecated and will be removed with our next major release (v2.0.0)! Please use the [Card](https://sap.github.io/ui5-webcomponents-react/?path=/docs/data-display-card) instead.
 */
const AnalyticalCard = forwardRef<CardDomRef, AnalyticalCardPropTypes>((props, ref) => {
  const { children, header, ...rest } = props;

  useStylesheet(styleData, AnalyticalCard.displayName);

  useEffect(() => {
    deprecationNotice(
      'AnalyticalCard',
      'This component is deprecated and will be removed with our next major release (v2.0.0)! Please use the Card component instead.'
    );
  }, []);

  return (
    <Card ref={ref} {...rest}>
      {header}
      <div className={classNames.content} role="group">
        {children}
      </div>
    </Card>
  );
});

AnalyticalCard.displayName = 'AnalyticalCard';

export { AnalyticalCard };
