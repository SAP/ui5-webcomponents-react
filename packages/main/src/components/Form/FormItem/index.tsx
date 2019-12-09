import React, {
  Children,
  FC,
  forwardRef,
  Ref,
  ReactElement,
  ReactNode,
  useState,
  CSSProperties,
  useCallback,
  ReactNodeArray
} from 'react';
import { useRateChanged } from '../hooks/useRateChanged';
import { Label } from '../../..';
import { styles } from '../Form.jss';

export interface FormItemProps {
  id?: string;
  labelText?: string;
  children: ReactNode | ReactNodeArray;
  type?: string;
}

const calculateWidth = (rate) => {
  return Math.floor((100 / 12) * rate) + '%';
};

const FormItem: FC<FormItemProps> = forwardRef((props: FormItemProps, ref: Ref<HTMLDivElement>) => {
  const { id, labelText, children } = props;

  const [currentRate, setCurrentRate] = useState('');
  const subscribe = useRateChanged()[1];
  const onRateChange = useCallback(
    (rate) => {
      setCurrentRate(rate);
    },
    [currentRate]
  );

  const [initSubscribe, setInitSubscribe] = useState(true);
  if (initSubscribe) {
    subscribe(onRateChange);
    setInitSubscribe(false);
  }

  const renderChildren = (child: ReactElement<any>) => {
    if (currentRate === '') return '';
    let labelWidth,
      labelTextAlign = 'flex-end',
      display = 'flex',
      elementWidth;

    switch (currentRate) {
      case 'S':
        labelWidth = '100%';
        elementWidth = '100%';
        display = 'block';
        labelTextAlign = 'flex-start';
        break;
      case 'M':
        labelWidth = calculateWidth(2);
        elementWidth = calculateWidth(10);
        break;
      case 'L':
      case 'XL':
        labelWidth = calculateWidth(4);
        elementWidth = calculateWidth(8);
        break;
    }

    const topDivStyle = { ...styles.formItemTopDiv, display: display } as CSSProperties;
    const labelStyle = { ...styles.formLabel, width: labelWidth, justifyContent: labelTextAlign } as CSSProperties;
    const elementStyle = { ...styles.formElement, width: elementWidth } as CSSProperties;

    return (
      <div style={topDivStyle}>
        <Label style={labelStyle}>{labelText ? labelText : ''}</Label>
        <div style={elementStyle}>{child}</div>
      </div>
    );
  };

  return (
    <div id={id} ref={ref}>
      {Children.map(children, renderChildren)}
    </div>
  );
});

FormItem.defaultProps = {
  type: 'formItem'
};

export { FormItem };
