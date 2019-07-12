import { Event, StyleClassHelper, withStyles } from '@ui5/webcomponents-react-base';
import React, {
  Children,
  createRef,
  FC,
  forwardRef,
  PureComponent,
  ReactElement,
  ReactNode,
  ReactNodeArray,
  RefObject
} from 'react';
import { scroller } from 'react-scroll';
import debounce from 'lodash.debounce';
import { ClassProps } from '../../interfaces/ClassProps';
import { CommonProps } from '../../interfaces/CommonProps';
import { ObjectPageMode } from '../../lib/ObjectPageMode';
import styles from './ObjectPage.jss';
import { ObjectPageAnchorButton } from './ObjectPageAnchorButton';
import { ObjectPageContent } from './ObjectPageContent';
import { ObjectPageHeader } from './ObjectPageHeader';

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
    showHideHeaderButton: false,
    selectedSectionId: ''
  };
  state = {
    selectedSectionIndex: 0,
    prevProps: {
      selectedSectionId: ''
    }
  };
  private objectPage: RefObject<HTMLDivElement> = (this.props as ObjectPageInternalProps).innerRef;
  private fillerDivDomRef: RefObject<HTMLDivElement> = createRef();
  private objectPageContent: RefObject<HTMLDivElement> = createRef();

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

  componentDidMount() {
    this.adjustDummyDivHeight();
    if (this.props.mode !== ObjectPageMode.IconTabBar) {
      window.addEventListener('resize', this.adjustDummyDivHeight);
      if (this.props.selectedSectionId && this.state.selectedSectionIndex > 0) {
        this.scrollToSectionWithId(this.props.selectedSectionId);
      }
    }
  }

  componentDidUpdate(
    prevProps: Readonly<ObjectPagePropTypes>,
    prevState: Readonly<ObjectPageState>,
    snapshot?: Readonly<{}>
  ): void {
    if (
      this.props.selectedSectionId !== prevProps.selectedSectionId &&
      this.props.mode === ObjectPageMode.Default &&
      this.state.selectedSectionIndex >= 0
    ) {
      this.scrollToSectionWithId(this.props.selectedSectionId);
    }
  }

  componentWillUnmount() {
    if (this.props.mode !== ObjectPageMode.IconTabBar) {
      window.removeEventListener('resize', this.adjustDummyDivHeight);
    }
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
      tooltip,
      slot,
      showHideHeaderButton
    } = this.props;

    const { selectedSectionIndex } = this.state;

    const { children, classes } = this.props as ObjectPageInternalProps;

    let content = children;
    if (mode === ObjectPageMode.IconTabBar) {
      content = Children.toArray(children)[selectedSectionIndex];
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
        <ObjectPageHeader
          title={title}
          subTitle={subTitle}
          image={image}
          headerActions={headerActions}
          renderHeaderContent={renderHeaderContent}
          imageShapeCircle={imageShapeCircle}
          showHideHeaderButton={showHideHeaderButton}
        />
        <section className={classes.anchorBar} role="navigation">
          {Children.map(children, (section, index) => (
            <ObjectPageAnchorButton
              key={`Anchor-${index}`}
              section={section}
              index={index}
              classes={classes}
              onAnchorSelected={this.handleOnAnchorSelected}
            />
          ))}
        </section>
        <ObjectPageContent ref={this.objectPageContent} fillerRef={this.fillerDivDomRef}>
          {content}
        </ObjectPageContent>
      </div>
    );
  }

  private scrollToSectionWithId = (id) => {
    requestAnimationFrame(() => {
      scroller.scrollTo(`ObjectPageSection-${id}`, {
        containerId: 'ObjectPageSections',
        smooth: true,
        offset: this.state.selectedSectionIndex > 0 ? 45 : 0
      });
    });
  };

  private handleOnAnchorSelected = debounce((e) => {
    this.props.onSelectedSectionChanged(
      Event.of(this, e.getOriginalEvent(), {
        selectedSectionIndex: e.getParameter('index'),
        selectedSectionId: e.getParameter('props').id,
        section: e.getParameters()
      })
    );
  }, 500);

  private adjustDummyDivHeight = () => {
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
  };
}
