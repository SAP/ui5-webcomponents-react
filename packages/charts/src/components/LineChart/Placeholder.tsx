import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import React from 'react';
import ContentLoader from 'react-content-loader';

export const LineChartPlaceholder = (props) => {
  return (
    <ContentLoader
      height={300}
      width={300}
      speed={2}
      backgroundColor={ThemingParameters.sapContent_ImagePlaceholderBackground}
      foregroundColor={ThemingParameters.sapContent_ImagePlaceholderForegroundColor}
      backgroundOpacity={ThemingParameters.sapContent_DisabledOpacity as any}
      {...props}
    >
      <path
        d="M30 260 L60 190 L90 150 L120 90 L150 140 L180 110 L210 80 L240 150 L270 130 L270 135 L240 155 L210 85 L180 115 L150 145 L120 95 L90 155 L60 195 L30 265 Z"
        fill="transparent"
        strokeWidth="5"
      />
    </ContentLoader>
  );
};
