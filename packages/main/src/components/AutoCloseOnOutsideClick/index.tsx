import { Event } from '@ui5/webcomponents-react-base';
import React, { PureComponent, ReactNode, RefObject } from 'react';

export interface AutoCloseOnOutsideClickPropTypes {
  onOutsideClick?: (e: Event) => void;
  children?: ReactNode[] | ReactNode;
}

export interface AutoCloseOnOutsideClickState {
  isContentAreaOpen: boolean;
}

export class AutoCloseOnOutsideClick extends PureComponent<
  AutoCloseOnOutsideClickPropTypes,
  AutoCloseOnOutsideClickState
> {
  static defaultProps = {
    onOutsideClick: () => {}
  };
  state = {
    isContentAreaOpen: true
  };

  private contentRef: RefObject<HTMLDivElement> = React.createRef();

  componentDidMount() {
    document.addEventListener('mousedown', this.checkFocus);
  }

  private checkFocus = (oEvent) => {
    const contentDiv = this.contentRef.current;

    if (contentDiv) {
      if (!contentDiv.contains(oEvent.target)) {
        this.setState({
          isContentAreaOpen: !this.state.isContentAreaOpen
        });
        document.removeEventListener('mousedown', this.checkFocus);
        this.props.onOutsideClick(Event.of(this, oEvent));
      }
    }
  };

  render() {
    const { children } = this.props;
    const { isContentAreaOpen } = this.state;
    if (!isContentAreaOpen) return null;
    return (
      <div id="contentDiv" tabIndex={0} ref={this.contentRef}>
        {children}
      </div>
    );
  }
}
