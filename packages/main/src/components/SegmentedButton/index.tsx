import { Event, StyleClassHelper, withStyles } from '@ui5/webcomponents-react-base';
import React, { Children, cloneElement, Component, CSSProperties, RefObject, ReactNode } from 'react';
import { ClassProps } from '../../interfaces/ClassProps';
import { CommonProps } from '../../interfaces/CommonProps';
import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';

export type SelectedKey = string | number;

export interface SegmentedButtonPropTypes extends CommonProps {
  enabled?: boolean;
  selectedKey?: SelectedKey;
  children: ReactNode | ReactNode[];
  onItemSelected?: (event: Event) => void;
}

interface SegmentedButtonInternalProps extends SegmentedButtonPropTypes, ClassProps {}

interface SegmentedButtonState {
  selectedKey: SelectedKey;
  prevPropSelectedKey: SelectedKey;
  itemWidth: CSSProperties['width'];
}

const styles = ({ contentDensity }) => ({
  segmentedButton: {
    verticalAlign: 'top',
    position: 'relative',
    margin: '0',
    padding: contentDensity === ContentDensity.Compact ? '0.1875rem 0' : '0.250rem 0',
    WebkitTapHighlightColor: 'rgba(255, 255, 255, 0)',
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

@withStyles(styles)
export class SegmentedButton extends Component<SegmentedButtonPropTypes, SegmentedButtonState> {
  static defaultProps = {
    enabled: true,
    selectedKey: '',
    onItemSelected: null,
    width: null
  };

  state = {
    selectedKey: null,
    prevPropSelectedKey: null,
    itemWidth: 'auto'
  };

  items: RefObject<HTMLUListElement> = (this.props as SegmentedButtonInternalProps).innerRef;

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.prevPropSelectedKey !== nextProps.selectedKey) {
      const newKey = nextProps.selectedKey ? nextProps.selectedKey : nextProps.children[0].props.id;
      return {
        selectedKey: newKey,
        prevPropSelectedKey: newKey
      };
    }
    return null;
  }

  private handleSegmentedButtonItemSelected = (e) => {
    const selectedKey = e.getParameter('selectedKey');
    if (selectedKey !== this.state.selectedKey) {
      this.setState({
        selectedKey
      });
      if (this.props.onItemSelected) {
        this.props.onItemSelected(Event.of(this, e.getOriginalEvent(), e.getParameters()));
      }
    }
  };

  private updateChildElementSize() {
    let maxWidth = 0;
    requestAnimationFrame(() => {
      for (let i = 0; i < this.items.current.childElementCount; i++) {
        const item = this.items.current.children.item(i) as HTMLUListElement;
        if (item.offsetWidth && item.offsetWidth > maxWidth) {
          maxWidth = item.offsetWidth;
        }
      }

      if (maxWidth > this.items.current.offsetWidth) {
        this.setState({
          itemWidth: 'auto'
        });
      } else if (this.state.itemWidth !== `${maxWidth}px`) {
        this.setState({
          itemWidth: `${maxWidth}px`
        });
      }
    });
  }

  componentDidMount() {
    this.updateChildElementSize();
  }

  componentDidUpdate() {
    this.updateChildElementSize();
  }

  render() {
    const { children, enabled, classes, className, style, tooltip, slot } = this.props as SegmentedButtonInternalProps;
    const { selectedKey } = this.state;

    const segmentedBtnClasses = StyleClassHelper.of(classes.segmentedButton);
    if (className) {
      segmentedBtnClasses.put(className);
    }

    return (
      <ul
        tabIndex={0}
        role="radiogroup"
        className={segmentedBtnClasses.toString()}
        style={style}
        ref={this.items}
        title={tooltip}
        slot={slot}
      >
        {Children.toArray(children)
          .filter(Boolean)
          .map((item: any) =>
            cloneElement(item, {
              key: item.props.id,
              selected: selectedKey === item.props.id,
              enabled: enabled === false ? enabled : item.props.enabled,
              width: item.props.width ? item.props.width : this.state.itemWidth,
              onClick: this.handleSegmentedButtonItemSelected
            })
          )}
      </ul>
    );
  }
}
