import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/dist/FlexBoxJustifyContent';
import { forwardRef, ReactNode, ReactNodeArray, Ref } from 'react';
import { ReflexElement } from 'react-reflex';

export interface SplitterElementPropTypes {
  resizable?: boolean;
  size?: number;
  minSize?: number;
  maxSize?: number;
  justifyContent?: FlexBoxJustifyContent | keyof typeof FlexBoxJustifyContent;
  children?: ReactNode | ReactNodeArray;
}

const SplitterElement = forwardRef((props: SplitterElementPropTypes, ref: Ref<HTMLDivElement>) => {
  const { size, minSize, maxSize, children, justifyContent } = props;

  return (
    <ReflexElement
      ref={ref}
      size={size}
      minSize={minSize}
      maxSize={maxSize}
      style={{
        display: 'flex',
        justifyContent,
        backgroundColor: ThemingParameters.sapBackgroundColor
      }}
      {...props}
    >
      {children}
    </ReflexElement>
  );
});

SplitterElement.displayName = 'SplitterElement';

export { SplitterElement };
