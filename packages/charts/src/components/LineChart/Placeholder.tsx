import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React from 'react';
import ContentLoader from 'react-content-loader';

export const LineChartPlaceholder = (props) => {
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
      <rect x="10" y="135" width="135" height="1" />
      <path
        d="M20 135 L40 80 L60 70 L80 30 L100 50 L120 65 L 135 100 L120 67 L100 52 L80 32 L60 72 L40 82 L20 137 Z"
        fill="none"
        strokeWidth="2"
      />
    </ContentLoader>
  );
};
