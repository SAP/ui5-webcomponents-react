import React from 'react';
import ContentLoader from 'react-content-loader';

export const PieChartPlaceholder = (props) => {
  return (
    <ContentLoader
      height={150}
      width={150}
      speed={2}
      primaryColor="#6a6d70"
      secondaryColor="#d9d9d9"
      primaryOpacity={0.2}
      {...props}
    >
      <circle cy="75" cx="85" r="60" />
    </ContentLoader>
  );
};
