import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React from 'react';
import ContentLoader from 'react-content-loader';

export const TimelineChartPlaceholder = () => {
  return (
    // @ts-expect-error: TypeScript is going crazy
    <ContentLoader
      viewBox="0 0 600 150"
      preserveAspectRatio="xMidYMid meet"
      width="100%"
      height="150"
      speed={2}
      backgroundColor={ThemingParameters.sapContent_ImagePlaceholderBackground}
      foregroundColor={ThemingParameters.sapContent_ImagePlaceholderForegroundColor}
      backgroundOpacity={ThemingParameters.sapContent_DisabledOpacity as unknown as number}
    >
      <rect x="0" y="0" width="149.5" height="49.5" />
      <rect x="150" y="0" width="450" height="49.5" />
      <rect x="0" y="50" width="149.5" height="24.5" />
      <rect x="150" y="50" width="450" height="24.5" />
      <rect x="0" y="75" width="149.5" height="24.5" />
      <rect x="150" y="75" width="450" height="24.5" />
      <rect x="0" y="100" width="149.5" height="24.5" />
      <rect x="150" y="100" width="450" height="24.5" />
      <rect x="0" y="125" width="149.5" height="25" />
      <rect x="150" y="125" width="450" height="25" />
    </ContentLoader>
  );
};
