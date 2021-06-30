import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import React from 'react';
import ContentLoader from 'react-content-loader';

export const ColumnChartWithTrendPlaceholder = (props) => {
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
      {...props}
    >
      <path
        d="M20 135 L40 80 L60 70 L80 30 L100 50 L120 65 L 135 100 L120 67 L100 52 L80 32 L60 72 L40 82 L20 137 Z"
        fill="none"
        strokeWidth="2"
        transform="translate(0,-30)"
      />
      <rect x="10" y="135" width="135" height="1" />
      <rect x="20" y="90" width="15" height="45" />
      <rect x="40" y="70" width="15" height="65" />
      <rect x="60" y="68" width="15" height="67" />
      <rect x="80" y="60" width="15" height="75" />
      <rect x="100" y="55" width="15" height="80" />
      <rect x="120" y="75" width="15" height="60" />
    </ContentLoader>
  );
};
