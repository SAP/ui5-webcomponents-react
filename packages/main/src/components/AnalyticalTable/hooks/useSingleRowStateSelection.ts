import React from 'react';
import { PluginHook } from 'react-table';

export const useSingleRowStateSelection: PluginHook<{}> = (hooks) => {
  hooks.getRowProps.push((passedRowProps, { instance, row }) => {
    const rowProps = { ...passedRowProps };
    return rowProps;
  });
};
