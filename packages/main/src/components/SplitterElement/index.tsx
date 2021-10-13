import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/dist/FlexBoxJustifyContent';
import React, { forwardRef, ReactNode, ReactNodeArray, Ref } from 'react';

export interface SplitterElementPropTypes {
  resizable?: boolean;
  size?: number | string;
  minSize?: number | string;
  maxSize?: number | string;
  justifyContent?: FlexBoxJustifyContent | keyof typeof FlexBoxJustifyContent;
  children?: ReactNode | ReactNodeArray;
}

const SplitterElement = forwardRef((props: SplitterElementPropTypes, ref: Ref<HTMLDivElement>) => {
  const { children, justifyContent } = props;

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        justifyContent,
        backgroundColor: ThemingParameters.sapBackgroundColor
      }}
      {...props}
    >
      {children}
    </div>
  );
});

SplitterElement.displayName = 'SplitterElement';

export { SplitterElement };
