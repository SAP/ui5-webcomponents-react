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

    <rect x="115" y="17.5" width="2" height="20" />
    <rect x="150" y="37.5" width="2" height="20" />
    <rect x="90" y="57.5" width="2" height="20" />
    <rect x="100" y="77.5" width="2" height="20" />
    <rect x="120" y="97.5" width="2" height="20" />
    <rect x="87" y="117.5" width="2" height="20" />
  </>
);

const barContentHorizontal = (
  <>
    <rect x="20" y="50" width="15" height="85" />
    <rect x="40" y="70" width="15" height="65" />
    <rect x="60" y="68" width="15" height="67" />
    <rect x="80" y="60" width="15" height="75" />
    <rect x="100" y="10" width="15" height="125" />
    <rect x="120" y="75" width="15" height="60" />

    <rect x="17.5" y="35" width="20" height="2" />
    <rect x="37.5" y="62" width="20" height="2" />
    <rect x="57.5" y="56" width="20" height="2" />
    <rect x="77.5" y="37" width="20" height="2" />
    <rect x="97.5" y="45" width="20" height="2" />
    <rect x="117.5" y="70" width="20" height="2" />
  </>
);

interface BulletChartPlaceholderPropTypes {
  layout: 'vertical' | 'horizontal';
  measures: (IChartMeasure & { type: string })[];
}

export const BulletChartPlaceholder = ({ layout, measures }: BulletChartPlaceholderPropTypes) => {
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
      {layout === 'vertical' && distinctElements.has('primary') && barContentVertical}
      {layout === 'horizontal' && distinctElements.has('primary') && barContentHorizontal}
    </ContentLoader>
  );
};
