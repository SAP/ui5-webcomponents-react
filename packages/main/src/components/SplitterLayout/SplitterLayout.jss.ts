import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { FlexBoxDirection } from '@ui5/webcomponents-react/dist/FlexBoxDirection';

const styles = {
  splitterLayout: (props) => ({
    display: 'flex',
    overflow: 'hidden',
    flexDirection: props?.orientation === 'vertical' ? FlexBoxDirection.Row : FlexBoxDirection.Column,
    flex: `0 0 ${props?.orientation === 'vertical' ? props?.width : props?.height}`,
    width: props.width,
    height: props.height
  }),
  splitterElementVertical: (props) => ({
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: ThemingParameters.sapBackgroundColor,
    height: props?.containerHeight,
    flex: !!props?.size && props?.size !== 'auto' ? `0 0 ${props?.size}` : '1 0 auto',
    minWidth: props?.minSize ?? 0,
    maxWidth: props?.maxSize,
    willChange: 'flex'
  }),
  splitterElementHorizontal: (props) => ({
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: ThemingParameters.sapBackgroundColor,
    width: props?.containerWidth,
    flex: !!props?.size || props?.size === 'auto' ? `0 0 ${props?.size}` : '1 0 auto',
    minHeight: props?.minSize ?? 0,
    maxHeight: props?.maxSize,
    willChange: 'flex'
  })
};

export { styles };
