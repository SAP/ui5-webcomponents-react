import React from 'react';
import ContentLoader from 'react-content-loader';

export const ColumnChartPlaceholder = (props) => {
  return (
    <ContentLoader
      height={145}
      width={165}
      speed={2}
      primaryColor="#6a6d70"
      secondaryColor="#d9d9d9"
      primaryOpacity={0.2}
      {...props}
    >
      <rect x="10" y="135" width="135" height="1" />
      <rect x="20" y="50" width="15" height="85" />
      <rect x="40" y="18" width="15" height="117" />
      <rect x="60" y="68" width="15" height="67" />
      <rect x="80" y="60" width="15" height="75" />
      <rect x="100" y="10" width="15" height="125" />
      <rect x="120" y="75" width="15" height="60" />
    </ContentLoader>
  );
};
