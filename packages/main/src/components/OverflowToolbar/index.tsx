import React, { Children, Component, CSSProperties, ReactNode, ReactNodeArray, RefObject } from 'react';
import styles from './OverflowToolbar.jss';
import { StyleClassHelper, withStyles } from '@ui5-webcomponents-react/base';
import { ToolbarAlignment } from '../../lib/ToolbarAlignment';
import { ToolbarDesign } from '../../lib/ToolbarDesign';
import { CommonProps } from '../../interfaces/CommonProps';
import { ClassProps } from '../../interfaces/ClassProps';
import { Popover } from '../../lib/Popover';
import { Button } from '../../lib/Button';
import { PlacementType } from '../..';
import boot from '@ui5/webcomponents-base/src/boot';

export interface ToolbarPropTypes extends CommonProps {
  width?: CSSProperties['width'];

  children: ReactNode | ReactNodeArray;

  align?: ToolbarAlignment;

  toolbarDesign?: ToolbarDesign;

  overflow?: boolean;
}

interface ToolbarInternalProps extends ToolbarPropTypes, ClassProps {}

@withStyles(styles)
export class OverflowToolbar extends Component<ToolbarInternalProps> {
  static defaultProps = {
    width: 'auto',
    align: ToolbarAlignment.Start,
    toolbarDesign: ToolbarDesign.ContentBar,
    overflow: false
  };
  state = {
    children: this.props.children,
    toolbarWidth: 0,
    popoverElements: [],
    popoverOpen: true,
    renderToggle: false,
    previousWidth: []
  };
  private toolbarRef: RefObject<HTMLDivElement> = React.createRef();

  componentDidMount(): void {
    boot().then(() => {
      if (this.props.overflow) {
        if (this.state.toolbarWidth === 0) {
          this.setState({ toolbarWidth: this.toolbarRef.current.scrollWidth });
        }
        window.addEventListener('resize', () => {
          setTimeout(() => {
            this.handleResize();
          }, 50);
        });
      }
    });
  }

  componentDidUpdate(prevProps: Readonly<ToolbarInternalProps>, prevState, snapshot?: any): void {
    boot().then(() => {
      if (this.props.overflow) {
        if (this.toolbarRef.current.clientWidth < this.toolbarRef.current.scrollWidth) {
          this.handleResize();
        }
        if (this.props.width !== prevProps.width) {
          this.handleResize();
        }
      }
    });
  }

  componentWillUnmount(): void {
    window.removeEventListener('resize', this.handleResize);
  }

  private handleResize() {
    let newChildren = this.state.children;
    let { popoverElements, renderToggle, previousWidth } = this.state;
    if (this.state.toolbarWidth > this.toolbarRef.current.clientWidth) {
      if (this.toolbarRef.current.clientWidth < this.toolbarRef.current.scrollWidth) {
        newChildren = Children.toArray(this.state.children).slice(0, -1);
        popoverElements = [Children.toArray(this.state.children).slice(-1)[0]].concat(this.state.popoverElements);
        renderToggle = true;
        previousWidth = [this.toolbarRef.current.scrollWidth + 10].concat(this.state.previousWidth);
      }
      this.setState({
        toolbarWidth: this.toolbarRef.current.scrollWidth,
        children: newChildren,
        renderToggle,
        popoverElements,
        previousWidth
      });
    }
    if (this.state.toolbarWidth < this.toolbarRef.current.clientWidth) {
      this.addToolbarItem(newChildren, popoverElements, previousWidth, renderToggle);
    }
  }

  private addToolbarItem(newChildren, popoverElements, previousWidth, renderToggle) {
    if (Children.count(this.props.children) !== Children.count(this.state.children)) {
      if (
        this.toolbarRef.current.clientWidth === this.toolbarRef.current.scrollWidth &&
        this.toolbarRef.current.clientWidth >= this.state.previousWidth[0]
      ) {
        const currentChildrenLength = Children.count(this.state.children);
        newChildren = Children.toArray(this.state.children).concat([
          Children.only(Children.toArray(this.props.children)[currentChildrenLength])
        ]);
        popoverElements.shift();
        previousWidth.shift();
      }
    }
    this.setState({
      toolbarWidth: this.toolbarRef.current.clientWidth,
      children: newChildren,
      popoverElements,
      previousWidth
    });
    if (Children.count(this.props.children) !== Children.count(this.state.children)) {
      if (
        this.toolbarRef.current.clientWidth === this.toolbarRef.current.scrollWidth &&
        this.toolbarRef.current.clientWidth >= this.state.previousWidth[0]
      ) {
        this.addToolbarItem(newChildren, popoverElements, previousWidth, renderToggle);
      }
    } else {
      this.setState({ renderToggle: false });
    }
  }

  render() {
    const { width, align, toolbarDesign, classes, className, style, tooltip } = this.props;
    const rootClasses = StyleClassHelper.of(classes.toolbarRoot);
    const overflowClasses = StyleClassHelper.of(classes.overflowRoot);

    switch (align) {
      case ToolbarAlignment.Start:
        rootClasses.put(classes.toolbarAlignStart);
        break;
      case ToolbarAlignment.End:
        rootClasses.put(classes.toolbarAlignEnd);
        break;
      case ToolbarAlignment.Middle:
        rootClasses.put(classes.toolbarAlignMiddle);
        break;
      case ToolbarAlignment.SpaceBetween:
        rootClasses.put(classes.toolbarAlignSpaceBetween);
        break;
      default:
        rootClasses.put(classes.toolbarAlignStart);
    }

    switch (toolbarDesign) {
      case ToolbarDesign.ContentBar:
        rootClasses.put(classes.contentBar);
        overflowClasses.put(classes.contentBar);
        break;
      case ToolbarDesign.PageFooter:
        rootClasses.put(classes.pageFooter);
        overflowClasses.put(classes.pageFooter);
        break;
      case ToolbarDesign.ContainerBar:
        rootClasses.put(classes.containerBar);
        overflowClasses.put(classes.containerBar);
        break;
      case ToolbarDesign.ContentBarTransparent:
        rootClasses.put(classes.contentBarTransparent);
        overflowClasses.put(classes.contentBarTransparent);
        break;
      default:
        rootClasses.put(classes.containerBar);
        overflowClasses.put(classes.containerBar);
    }

    if (className) {
      rootClasses.put(className);
    }

    const inlineStyle = { width };
    if (style) {
      Object.assign(inlineStyle, style);
    }
    const PopoverWrapper = () => {
      if (this.state.renderToggle) {
        return (
          <Popover
            style={{ marginLeft: 'auto' }}
            key="popover"
            openBy={<Button icon="overflow" key={'overflowButton'} />}
            noHeader={true}
            placementType={PlacementType.Bottom}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>{this.state.popoverElements}</div>
          </Popover>
        );
      }
      return null;
    };
    return (
      <div className={rootClasses.valueOf()} style={{ ...inlineStyle }} title={tooltip} ref={this.toolbarRef}>
        {this.state.children}
        <PopoverWrapper />
      </div>
    );
  }
}
