import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';
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
import { JSSTheme } from '../../interfaces/JSSTheme';

export type SelectedKey = string | number;

export interface SegmentedButtonPropTypes extends CommonProps {
  disabled?: boolean;
  selectedKey?: SelectedKey;
  children: ReactNode | ReactNode[];
  onItemSelected?: (event: Event) => void;
}

const styles = ({ contentDensity }) => ({
  segmentedButton: {
    verticalAlign: 'top',
    position: 'relative',
    margin: '0',
    padding: contentDensity === ContentDensity.Compact ? '0.1875rem 0' : '0.250rem 0',
    border: 'none',
    whiteSpace: 'nowrap',
    display: 'inline-block',
    boxSizing: 'border-box',
    maxWidth: '100%',
    height: contentDensity === ContentDensity.Compact ? '2rem' : '3rem',
    '&:focus': {
      outline: 'none'
    }
  }
});

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'SegmentedButton' });

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
      (e) => {
        const newSelectedKey = e.getParameter('selectedKey');
        if (newSelectedKey !== internalSelectedKey) {
          setSelectedKey(newSelectedKey);
          if (typeof onItemSelected === 'function') {
            onItemSelected(Event.of(null, e.getOriginalEvent(), e.getParameters()));
          }
        }
      },
      [internalSelectedKey, setSelectedKey, onItemSelected]
    );

    useEffect(() => {
      requestAnimationFrame(() => {
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

    return (
      <ul
        tabIndex={0}
        role="radiogroup"
        className={segmentedBtnClasses.toString()}
        style={style}
        ref={listRef}
        title={tooltip}
        slot={slot}
      >
        {Children.toArray(children)
          .filter(Boolean)
          .map((item: any) =>
            cloneElement(item, {
              key: item.props.id,
              selected: internalSelectedKey === item.props.id,
              disabled: disabled === true ? disabled : item.props.disabled,
              onClick: handleSegmentedButtonItemSelected
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
