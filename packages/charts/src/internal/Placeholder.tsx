import { Loader } from '@ui5/webcomponents-react/lib/Loader';
import React, { CSSProperties } from 'react';

const loaderStyles: CSSProperties = {
  position: 'absolute'
};

export const getLoadingState = (loading, datasets, Placeholder) => {
  if (!loading) {
    return null;
  }

  if (loading && datasets.length > 0) {
    return <Loader style={loaderStyles} />;
  }

  if (loading && datasets.length === 0) {
    return <Placeholder />;
  }

  return null;
};
