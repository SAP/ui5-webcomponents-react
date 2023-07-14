import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React from 'react';
import ContentLoader from 'react-content-loader/dist/react-content-loader.es.js';
import type { IChartMeasure } from '../../interfaces/IChartMeasure.js';

const barContentVertical = (
  <>
    <rect x="20" y="20" width="85" height="15" />
    <rect x="20" y="40" width="117" height="15" />
    <rect x="20" y="60" width="67" height="15" />
    <rect x="20" y="80" width="75" height="15" />
    <rect x="20" y="100" width="125" height="15" />
    <rect x="20" y="120" width="60" height="15" />
  </>
);

const barContentHorizontal = (
  <>
    <rect x="20" y="50" width="15" height="85" />
    <rect x="40" y="18" width="15" height="117" />
    <rect x="60" y="68" width="15" height="67" />
    <rect x="80" y="60" width="15" height="75" />
    <rect x="100" y="10" width="15" height="125" />
    <rect x="120" y="75" width="15" height="60" />
  </>
);

const lineContentVertical = (
  <>
    <path
      d="M20 20 L75 40 L85 60 L125 80 L105 100 L90 120 L55 135 L92 120 L107 100 L127 80 L87 60 L77 40 L22 20 Z"
      fill="none"
      strokeWidth="2"
    />
  </>
);

const lineContentHorizontal = (
  <>
    <path
      d="M20 135 L40 80 L60 70 L80 30 L100 50 L120 65 L135 100 L120 67 L100 52 L80 32 L60 72 L40 82 L20 137 Z"
      fill="none"
      strokeWidth="2"
    />
  </>
);

interface ComposedChartPlaceholderPropTypes {
  layout: 'vertical' | 'horizontal';
  measures: (IChartMeasure & { type: string })[];
}

export const ComposedChartPlaceholder = ({ layout, measures }: ComposedChartPlaceholderPropTypes) => {
  const distinctElements = new Set(measures.map((item) => item.type));

  return (
    <ContentLoader
      viewBox="0 0 165 145"
      preserveAspectRatio="xMidYMid meet"
      width="100%"
      height="100%"
      speed={2}
      backgroundColor={ThemingParameters.sapContent_ImagePlaceholderBackground}
      foregroundColor={ThemingParameters.sapContent_ImagePlaceholderForegroundColor}
      backgroundOpacity={ThemingParameters.sapContent_DisabledOpacity as any}
    >
      {layout === 'vertical' && <rect x="20" y="10" width="1" height="135" />}
      {layout === 'horizontal' && <rect x="10" y="135" width="135" height="1" />}
      {layout === 'vertical' && distinctElements.has('bar') && barContentVertical}
      {layout === 'horizontal' && distinctElements.has('bar') && barContentHorizontal}
      {layout === 'vertical' && (distinctElements.has('line') || distinctElements.has('area')) && lineContentVertical}
      {layout === 'horizontal' &&
        (distinctElements.has('line') || distinctElements.has('area')) &&
        lineContentHorizontal}
    </ContentLoader>
  );
};
