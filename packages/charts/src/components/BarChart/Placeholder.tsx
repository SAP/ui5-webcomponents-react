import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React from 'react';
import ContentLoader from 'react-content-loader/dist/react-content-loader.es.js';

export const BarChartPlaceholder = () => {
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
      <rect x="20" y="10" width="1" height="135" />
      <rect x="20" y="20" width="85" height="15" />
      <rect x="20" y="40" width="117" height="15" />
      <rect x="20" y="60" width="67" height="15" />
      <rect x="20" y="80" width="75" height="15" />
      <rect x="20" y="100" width="125" height="15" />
      <rect x="20" y="120" width="60" height="15" />
    </ContentLoader>
  );
};
