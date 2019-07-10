import { Event, StyleClassHelper, withStyles } from '@ui5/webcomponents-react-base';
import React, { Children, createRef, PureComponent, ReactElement, ReactNode, ReactNodeArray, RefObject } from 'react';
import { scroller } from 'react-scroll';
import { ClassProps } from '../../interfaces/ClassProps';
import { CommonProps } from '../../interfaces/CommonProps';
import { Button } from '../../lib/Button';
import { ObjectPageMode } from '../../lib/ObjectPageMode';
import styles from './ObjectPage.jss';
import { ObjectPageAnchor } from './ObjectPageAnchor';
import { ObjectPageContent } from './ObjectPageContent';

export interface ObjectPagePropTypes extends CommonProps {
  title?: string;
  subTitle?: string;
  image?: string;
  imageShapeCircle?: boolean;
  headerActions?: Array<ReactElement<any>>;
  renderHeaderContent?: () => JSX.Element;
  children?: ReactNode | ReactNodeArray;
  mode?: ObjectPageMode;
  selectedSectionId?: string;
  onSelectedSectionChanged?: (event: Event) => void;
  showHideHeaderButton?: boolean;
}

interface ObjectPageInternalProps extends ObjectPagePropTypes, ClassProps {}

interface ObjectPageState {
  selectedSectionIndex: number;
  prevProps: {
    selectedSectionId: string;
  };
  showHeader: boolean;
}

@withStyles(styles)
export class ObjectPage extends PureComponent<ObjectPagePropTypes, ObjectPageState> {
  static defaultProps = {
    title: '',
    subTitle: '',
    image: null,
    imageShapeCircle: false,
    headerActions: [],
    renderHeaderContent: null,
    mode: ObjectPageMode.Default,
    onSelectedSectionChanged: () => {},
    showHideHeaderButton: false
  };

  private objectPage: RefObject<HTMLDivElement> = (this.props as ObjectPageInternalProps).innerRef;
  private fillerDivDomRef: RefObject<HTMLDivElement> = createRef();

  static getDerivedStateFromProps(nextProps: ObjectPagePropTypes, prevState: ObjectPageState) {
    if (nextProps.selectedSectionId !== prevState.prevProps.selectedSectionId) {
      let selectedSectionIndex = Children.toArray(nextProps.children).findIndex(
        (objectPageSection: ReactElement<any>) => objectPageSection.props.id === nextProps.selectedSectionId
      );
      if (selectedSectionIndex < 0) selectedSectionIndex = 0;
      return {
        selectedSectionIndex,
        prevProps: {
          selectedSectionId: nextProps.selectedSectionId
        }
      };
    }
    return null;
  }

  state = {
    selectedSectionIndex: 0,
    prevProps: {
      selectedSectionId: ''
    },
    showHeader: true
  };

  private scrollToSectionWithId = (id) => {
    scroller.scrollTo(`ObjectPageSection-${id}`, {
      containerId: 'ObjectPageSections',
      smooth: true,
      offset: this.state.selectedSectionIndex > 0 ? 45 : 0
    });
  };

  componentDidMount() {
    this.adjustDummyDivHeight();
    if (this.props.mode !== ObjectPageMode.IconTabBar) {
      window.addEventListener('resize', this.adjustDummyDivHeight);
      if (this.props.selectedSectionId && this.state.selectedSectionIndex > 0) {
        this.scrollToSectionWithId(this.props.selectedSectionId);
      }
    }
  }

  getSnapshotBeforeUpdate(prevProps: Readonly<ObjectPagePropTypes>, prevState: Readonly<ObjectPageState>): any | null {
    const scrollPosition = this.objectPage.current.querySelector('section').scrollTop;
    const fillerDivHeight = this.fillerDivDomRef.current.style.height;
    return {
      scrollPosition,
      fillerDivHeight
    };
  }

  componentDidUpdate(
    prevProps: Readonly<ObjectPagePropTypes>,
    prevState: Readonly<ObjectPageState>,
    snapshot?: any
  ): void {
    this.objectPage.current.querySelector('section').scrollTop = snapshot.scrollPosition;
    this.fillerDivDomRef.current.style.height = snapshot.fillerDivHeight;
    if (
      this.props.selectedSectionId !== prevProps.selectedSectionId &&
      this.props.mode === ObjectPageMode.Default &&
      this.state.selectedSectionIndex >= 0
    ) {
      requestAnimationFrame(() => {
        this.scrollToSectionWithId(this.props.selectedSectionId);
      });
    }
  }

  componentWillUnmount() {
    if (this.props.mode !== ObjectPageMode.IconTabBar) {
      window.removeEventListener('resize', this.adjustDummyDivHeight);
    }
  }

  adjustDummyDivHeight() {
    requestAnimationFrame(() => {
      if (!this.objectPage.current) {
        // in case componentWillUnmount didn´t fire
        window.removeEventListener('resize', this.adjustDummyDivHeight);
        return;
      }
      if (this.props.mode !== ObjectPageMode.Default) {
        return;
      }

      const sections = this.objectPage.current.querySelectorAll('[id^="ObjectPageSection"]');
      if (!sections || sections.length < 1) {
        return;
      }

      const lastSectionDomRef = sections[sections.length - 1];
      const subSections = lastSectionDomRef.querySelectorAll('[id^="ObjectPageSubSection"]');

      let domRef = null;
      if (subSections.length > 0) {
        domRef = subSections[subSections.length - 1];
      } else {
        domRef = lastSectionDomRef;
      }

      let heightDiff = lastSectionDomRef.parentElement.offsetHeight - domRef.offsetHeight;
      heightDiff = heightDiff > 0 ? heightDiff : 0;
      this.fillerDivDomRef.current.style.height = `${heightDiff}px`;
    });
  }

  private changeHeader = () => {
    this.setState({ showHeader: !this.state.showHeader });
  };

  private handleOnSubSectionSelected = (index) => (e) => {
    const scrollId = e.getParameter('props').id;

    this.setState(
      {
        selectedSectionIndex: index
      },
      () => {
        scroller.scrollTo(`ObjectPageSubSection-${scrollId}`, {
          containerId: 'ObjectPageSections',
          smooth: true,
          offset: 36
        });
      }
    );
  };

  private handleOnAnchorSelected = (index) => (e) => {
    this.setState(
      {
        selectedSectionIndex: index
      },
      () => {
        if (this.props.mode === ObjectPageMode.Default) {
          const { id } = e.getParameter('props');
          requestAnimationFrame(() => {
            this.scrollToSectionWithId(id);
          });
        }
      }
    );

    this.props.onSelectedSectionChanged(
      Event.of(this, e.getOriginalEvent(), {
        selectedSectionIndex: index,
        selectedSectionId: e.getParameter('props').id,
        section: e.getParameters()
      })
    );
  };

  render() {
    const {
      title,
      image,
      subTitle,
      headerActions,
      renderHeaderContent,
      mode,
      imageShapeCircle,
      className,
      style,
      tooltip,
      slot
    } = this.props;

    const { selectedSectionIndex } = this.state;

    const { children, classes } = this.props as ObjectPageInternalProps;

    let content = null;

    switch (mode) {
      case ObjectPageMode.IconTabBar:
        content = Children.toArray(children)[selectedSectionIndex];
        break;
      default:
        content = children;
        break;
    }

    const objectPageClasses = StyleClassHelper.of(classes.objectPage);
    if (className) {
      objectPageClasses.put(className);
    }

    return (
      <div
        data-component-name="ObjectPage"
        slot={slot}
        className={objectPageClasses.toString()}
        style={style}
        ref={this.objectPage}
        title={tooltip}
      >
        <header className={classes.header}>
          {/* Title Bar */}
          <header className={classes.titleBar}>
            {image && (
              <span className={classes.image}>
                <img src={image} />
              </span>
            )}
            <span className={classes.container}>
              <h1 className={classes.title}>{title}</h1>
              <span className={classes.subTitle}>{subTitle}</span>
            </span>
            <span className={classes.actions}>{headerActions}</span>
          </header>
          {/* Header Content */}
          <div className={classes.headerContentWrapper}>
            {this.state.showHeader && (
              <div className={classes.headerContent}>
                {image && (
                  <span
                    className={classes.headerImage}
                    style={{ borderRadius: imageShapeCircle ? '50%' : 0, overflow: 'hidden' }}
                  >
                    <img src={image} style={{ width: '100%', height: '100%' }} />
                  </span>
                )}
                {renderHeaderContent && <span className={classes.headerCustomContent}>{renderHeaderContent()}</span>}
              </div>
            )}

            <div className={classes.hideHeaderContent}>
              {this.props.showHideHeaderButton && (
                <Button
                  style={{ position: 'absolute', '--_ui5_button_compact_height': '1rem', lineHeight: '1.25rem' } as any}
                  icon={this.state.showHeader ? 'sap-icon://navigation-up-arrow' : 'sap-icon://navigation-down-arrow'}
                  onClick={this.changeHeader}
                />
              )}
            </div>
          </div>
          <ul className={classes.anchorBar} role="navigation">
            {Children.map(children, (section, index) => (
              <ObjectPageAnchor
                key={`Anchor-${index}`}
                section={section}
                selected={index === selectedSectionIndex}
                classes={classes}
                onAnchorSelected={this.handleOnAnchorSelected(index)}
                onSubSectionSelected={this.handleOnSubSectionSelected(index)}
              />
            ))}
          </ul>
        </header>
        <ObjectPageContent ref={this.fillerDivDomRef}>{content}</ObjectPageContent>
      </div>
    );
  }
}
