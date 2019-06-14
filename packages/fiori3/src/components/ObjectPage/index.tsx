import { ObjectPageMode } from '../../lib/ObjectPageMode';
import { ClassProps } from '../../interfaces/ClassProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { withStyles } from '@ui5-webcomponents-react/styles';
import { Event, StyleClassHelper } from '@ui5-webcomponents-react/utils';
import React, { Children, cloneElement, PureComponent, ReactElement, ReactNode, ReactNodeArray } from 'react';
import { scroller } from 'react-scroll';
import { Fiori3CommonProps } from '../../interfaces/Fiori3CommonProps';
import styles from './ObjectPage.jss';
import { ObjectPageAnchor } from './ObjectPageAnchor';
import { Button } from '../../lib/Button';

const objectPageContentStyles = ({ parameters }: JSSTheme) => ({
  sectionsContainer: {
    '&:before': {
      display: 'table',
      content: '""'
    },
    '& :first-child > div[role="heading"]': {
      display: 'none'
    },
    position: 'relative',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    backgroundColor: parameters.sapUiBaseBG,
    '&:after': {
      clear: 'both',
      display: 'table',
      content: '""'
    }
  }
});

const ObjectPageContent = withStyles(objectPageContentStyles)((props) => {
  const { children, classes, getFillerDivDomRef } = props;

  return (
    <section id="ObjectPageSections" className={classes.sectionsContainer}>
      {children}
      <div ref={getFillerDivDomRef} />
    </section>
  );
});

export interface ObjectPagePropTypes extends Fiori3CommonProps {
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

  private objectPage: HTMLElement;
  private fillerDivDomRef: HTMLElement;

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

  private getFillerDivDomRef = (ref) => {
    this.fillerDivDomRef = ref;
  };

  componentDidMount() {
    this.adjustDummyDivHeight();
    if (this.props.mode !== ObjectPageMode.IconTabBar) {
      window.addEventListener('resize', this.adjustDummyDivHeight);
      if (this.props.selectedSectionId && this.state.selectedSectionIndex >= 0) {
        scroller.scrollTo(`ObjectPageSection-${this.props.selectedSectionId}`, {
          containerId: 'ObjectPageSections',
          smooth: true
        });
      }
    }
  }

  componentDidUpdate(
    prevProps: Readonly<ObjectPagePropTypes>,
    prevState: Readonly<ObjectPageState>,
    snapshot?: any
  ): void {
    if (
      this.props.selectedSectionId !== prevProps.selectedSectionId &&
      this.props.mode === ObjectPageMode.Default &&
      this.state.selectedSectionIndex >= 0
    ) {
      requestAnimationFrame(() => {
        scroller.scrollTo(`ObjectPageSection-${this.props.selectedSectionId}`, {
          containerId: 'ObjectPageSections'
        });
      });
    }
  }

  componentWillUnmount() {
    if (this.props.mode !== ObjectPageMode.IconTabBar) {
      window.removeEventListener('resize', this.adjustDummyDivHeight);
    }
  }

  adjustDummyDivHeight() {
    if (!this.objectPage) {
      // in case componentWillUnmount didn´t fire
      window.removeEventListener('resize', this.adjustDummyDivHeight);
      return;
    }
    if (this.props.mode !== ObjectPageMode.Default) {
      return;
    }

    const sections = this.objectPage.querySelectorAll('[id^="ObjectPageSection"]');
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
    this.fillerDivDomRef.style.height = `${heightDiff}px`;
  }

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
      tooltip
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
        data-ui5-slot={this.props['data-ui5-slot']}
        className={objectPageClasses.toString()}
        style={style}
        ref={(el) => {
          this.objectPage = el;
        }}
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
            <span className={classes.actions}>
              {headerActions.map((action, index) =>
                cloneElement(action, {
                  key: index
                })
              )}
            </span>
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
                  style={{ position: 'absolute', '--_ui5_button_compact_height': '1rem', lineHeight: '1.25rem' }}
                  icon={this.state.showHeader ? 'sap-icon://navigation-up-arrow' : 'sap-icon://navigation-down-arrow'}
                  onPress={this.changeHeader}
                />
              )}
            </div>
          </div>
          <section className={classes.anchorBar} role="navigation">
            {Children.map(children, (section, index) => (
              <ObjectPageAnchor
                key={`Anchor-${index}`}
                section={section}
                index={index}
                mode={mode}
                selected={index === selectedSectionIndex}
                classes={classes}
                onAnchorSelected={this.handleOnAnchorSelected(index)}
                onSubSectionSelected={this.handleOnSubSectionSelected(index)}
              />
            ))}
          </section>
        </header>
        <ObjectPageContent getFillerDivDomRef={this.getFillerDivDomRef}>{content}</ObjectPageContent>
      </div>
    );
  }

  private changeHeader = () => {
    this.setState({ showHeader: !this.state.showHeader });
  };

  private handleOnSubSectionSelected = (index) => (e) => {
    if (this.props.mode === ObjectPageMode.IconTabBar) {
      const scrollId = e.getParameter('props').id;
      this.setState(
        {
          selectedSectionIndex: index
        },
        () => {
          scroller.scrollTo(`ObjectPageSection-${scrollId}`, {
            containerId: 'ObjectPageSections',
            smooth: true
          });
        }
      );
    }
  };

  private handleOnAnchorSelected = (index) => (e) => {
    if (this.props.mode !== ObjectPageMode.Default) {
      this.setState({
        selectedSectionIndex: index
      });
    }

    this.props.onSelectedSectionChanged(
      Event.of(this, e.getOriginalEvent(), {
        selectedSectionIndex: index,
        selectedSectionId: e.getParameter('props').id,
        section: e.getParameters()
      })
    );
  };
}
