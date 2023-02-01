import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

export const PieChartPlaceholder = (props: IContentLoaderProps) => {
  return (
    <ContentLoader
      viewBox="0 0 165 145"
      preserveAspectRatio="xMidYMid meet"
      width="100%"
      height="100%"
      speed={2}
      backgroundColor={ThemingParameters.sapContent_ImagePlaceholderBackground}
      foregroundColor={ThemingParameters.sapContent_ImagePlaceholderForegroundColor}
      backgroundOpacity={ThemingParameters.sapContent_DisabledOpacity as unknown as number}
      {...props}
    >
      <circle cy="75" cx="85" r="60" />
    </ContentLoader>
  );
};
