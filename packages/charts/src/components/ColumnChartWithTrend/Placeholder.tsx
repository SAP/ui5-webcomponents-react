import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React from 'react';
import ContentLoader from 'react-content-loader';

export const ColumnChartWithTrendPlaceholder = (props) => {
  return (
    // @ts-expect-error: TypeScript is going crazy
    <ContentLoader
      viewBox="0 0 165 145"
      preserveAspectRatio="xMidYMid meet"
      width="100%"
      height="100%"
      speed={2}
      backgroundColor={ThemingParameters.sapContent_ImagePlaceholderBackground}
      foregroundColor={ThemingParameters.sapContent_ImagePlaceholderForegroundColor}
      backgroundOpacity={ThemingParameters.sapContent_DisabledOpacity as any}
      {...props}
    >
      <path
        d="M 20 56 L 39 33 L 57 25 L 77 5 L 99 25 L 125 31 L 139 25 L 125 32 L 98 27 L 77 10 L 58 27 L 39 35 L 20 56 Z"
        fill="none"
        strokeWidth="2"
      />
      <rect x="10" y="135" width="135" height="1" />
      <rect x="20" y="65" width="15" height="70" />
      <rect x="40" y="58" width="15" height="77" />
      <rect x="60" y="68" width="15" height="67" />
      <rect x="80" y="60" width="15" height="75" />
      <rect x="100" y="35" width="15" height="100" />
      <rect x="120" y="75" width="15" height="60" />
    </ContentLoader>
  );
};
