import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import React from 'react';
import ContentLoader from 'react-content-loader';

export const TrendLinePlaceholder = (props) => {
  return (
    <ContentLoader
      viewBox="0 0 600 115"
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
        d="M 66 71 L 117 28 L 154 68 L 211 81 L 289 36 L 390 13 L 499 73 L 496 73 L 389 19 L 291 41 L 212 85 L 152 71 L 117 34 Z"
        fill="none"
        strokeWidth="2"
      />
    </ContentLoader>
  );
};
