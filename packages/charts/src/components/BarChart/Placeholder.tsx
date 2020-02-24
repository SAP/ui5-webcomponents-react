import * as parameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';
import React from 'react';
import ContentLoader from 'react-content-loader';

export const BarChartPlaceholder = () => {
  return (
    <ContentLoader
      height={145}
      width={165}
      speed={2}
      backgroundColor={parameters.sapContent_ImagePlaceholderBackground}
      foregroundColor={parameters.sapContent_ImagePlaceholderForegroundColor}
      backgroundOpacity={parameters.sapContent_DisabledOpacity as any}
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
