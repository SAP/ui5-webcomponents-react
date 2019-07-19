import { Loader } from './Loader';
import React from 'react';

export const getLoadingState = (loading, datasets, Placeholder) => {
  if (!loading) {
    return null;
  }

  if (loading && datasets.length > 0) {
    return <Loader />;
  }

  if (loading && datasets.length === 0) {
    return <Placeholder />;
  }

  return null;
};
