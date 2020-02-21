import React from 'react';
import ContentLoader from 'react-content-loader';
import * as parameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';

export const PieChartPlaceholder = (props) => {
  return (
    <ContentLoader
      height={150}
      width={150}
      speed={2}
      backgroundColor={parameters.sapContent_ImagePlaceholderBackground}
      foregroundColor={parameters.sapContent_ImagePlaceholderForegroundColor}
      backgroundOpacity={parameters.sapContent_DisabledOpacity as any}
      {...props}
    >
      <circle cy="75" cx="85" r="60" />
    </ContentLoader>
  );
};
