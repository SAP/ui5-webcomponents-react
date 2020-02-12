import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import React, {
  Children,
  cloneElement,
  FC,
  forwardRef,
  ReactNode,
  Ref,
  RefObject,
  useCallback,
  useEffect,
  useState
} from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';

export type SelectedKey = string | number;

export interface SegmentedButtonPropTypes extends CommonProps {
  disabled?: boolean;
  selectedKey?: SelectedKey;
  children: ReactNode | ReactNode[];
  onItemSelected?: (event: Event) => void;
}

const styles = {
  segmentedButton: {
    verticalAlign: 'top',
    position: 'relative',
    margin: '0',
    padding: CssSizeVariables.sapWcrSegmentedButtonPadding,
    border: 'none',
    whiteSpace: 'nowrap',
    display: 'inline-block',
    boxSizing: 'border-box',
    maxWidth: '100%',
    height: CssSizeVariables.sapWcrSegmentedButtonHeight,
    '&:focus': {
      outline: 'none'
    }
  }
};

const useStyles = createUseStyles(styles, { name: 'SegmentedButton' });

/**
 * <code>import { SegmentedButton } from '@ui5/webcomponents-react/lib/SegmentedButton';</code>
 */
const SegmentedButton: FC<SegmentedButtonPropTypes> = forwardRef(
  (props: SegmentedButtonPropTypes, ref: Ref<HTMLUListElement>) => {
    const { children, disabled, className, style, tooltip, slot, onItemSelected, selectedKey } = props;

    const listRef: RefObject<HTMLUListElement> = useConsolidatedRef(ref);

    const [internalSelectedKey, setSelectedKey] = useState(() => {
      if (selectedKey) return selectedKey;
      const firstChild: any = Children.toArray(children)[0];
      if (firstChild && firstChild.props) {
        return firstChild.props.id;
      }
      return null;
    });

    useEffect(() => {
      if (selectedKey) {
        setSelectedKey(selectedKey);
      }
    }, [selectedKey, setSelectedKey]);

    const classes = useStyles();

    const segmentedBtnClasses = StyleClassHelper.of(classes.segmentedButton);
    if (className) {
      segmentedBtnClasses.put(className);
    }

    const handleSegmentedButtonItemSelected = useCallback(
      (originalOnclick) => (e) => {
        const newSelectedKey = e.getParameter('selectedKey');
        if (newSelectedKey !== internalSelectedKey) {
          setSelectedKey(newSelectedKey);
          if (typeof onItemSelected === 'function') {
            onItemSelected(Event.of(null, e.getOriginalEvent(), e.getParameters()));
          }
        }
        if (typeof originalOnclick === 'function') {
          originalOnclick(e);
        }
      },
      [internalSelectedKey, setSelectedKey, onItemSelected]
    );

    useEffect(() => {
      requestAnimationFrame(() => {
        if (!listRef.current) return;
        let maxWidth = 0;
        for (let i = 0; i < listRef.current.childElementCount; i++) {
          const item = listRef.current.children.item(i) as HTMLLIElement;
          if (item.offsetWidth && item.offsetWidth > maxWidth) {
            maxWidth = item.offsetWidth;
          }
        }
        if (maxWidth < listRef.current.offsetWidth) {
          for (let i = 0; i < listRef.current.childElementCount; i++) {
            const item = listRef.current.children.item(i) as HTMLLIElement;
            if (item.getAttribute('data-has-own-width') === 'false') {
              item.style.width = `${maxWidth}px`;
            }
          }
        }
      });
    }, [children, listRef]);

    const passThroughProps = usePassThroughHtmlProps(props);

    return (
      <ul
        tabIndex={0}
        role="radiogroup"
        className={segmentedBtnClasses.toString()}
        style={style}
        ref={listRef}
        title={tooltip}
        slot={slot}
        {...passThroughProps}
      >
        {Children.toArray(children)
          .filter(Boolean)
          .map((item: any) =>
            cloneElement(item, {
              key: item.props.id,
              selected: internalSelectedKey === item.props.id,
              disabled: disabled === true ? disabled : item.props.disabled,
              onClick: handleSegmentedButtonItemSelected(item.props.onClick)
            })
          )}
      </ul>
    );
  }
);

SegmentedButton.displayName = 'SegmentedButton';

SegmentedButton.defaultProps = {
  disabled: false,
  selectedKey: '',
  onItemSelected: null
};

export { SegmentedButton };
