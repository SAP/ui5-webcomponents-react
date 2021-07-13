import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import React from 'react';
import ContentLoader from 'react-content-loader';

export const ColumnWithTrendChartPlaceholder = (props) => {
  return (
    <ContentLoader
      viewBox="0 0 165 145"
      preserveAspectRatio="xMidYMax meet"
      width="100%"
      height="100%"
      speed={2}
      backgroundColor={ThemingParameters.sapContent_ImagePlaceholderBackground}
      foregroundColor={ThemingParameters.sapContent_ImagePlaceholderForegroundColor}
      backgroundOpacity={ThemingParameters.sapContent_DisabledOpacity as any}
      {...props}
    >
      <path
        d="M 0 58 L 46 67 L 65 65 L 76 49 L 95 42 L 113 42 L 137 56 L 137 56 L 114 44 L 96 44 L 78 51 L 65 67 L 45 70 Z"
        fill="none"
        strokeWidth="2"
      />
    </ContentLoader>
  );
};
