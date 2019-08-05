import { Event, StyleClassHelper, useConsolidatedRef } from '@ui5/webcomponents-react-base';
import debounce from 'lodash.debounce';
import React, {
  Children,
  forwardRef,
  ReactElement,
  ReactNode,
  ReactNodeArray,
  RefForwardingComponent,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { createUseStyles } from 'react-jss';
import { scroller } from 'react-scroll';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
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
  noHeader?: boolean;
}

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'ObjectPage' });

const findSectionIndexById = (sections, id) => {
  const index = Children.toArray(sections).findIndex(
    (objectPageSection: ReactElement<any>) => objectPageSection.props.id === id
  );
  if (index === -1) {
    return 0;
  }
  return index;
};

const scrollToSectionById = (id, index) => {
  requestAnimationFrame(() => {
    scroller.scrollTo(`ObjectPageSection-${id}`, {
      containerId: 'ObjectPageSections',
      smooth: true,
      offset: index > 0 ? 45 : 0,
      duration: 400
    });
  });
};

const ObjectPage: RefForwardingComponent<HTMLDivElement, ObjectPagePropTypes> = forwardRef(
  (props: ObjectPagePropTypes, ref: RefObject<HTMLDivElement>) => {
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
      showHideHeaderButton,
      children,
      onSelectedSectionChanged,
      selectedSectionId,
      noHeader
    } = props;

    const [selectedSectionIndex, setSelectedSectionIndex] = useState(findSectionIndexById(children, selectedSectionId));
    const [selectedSubSectionId, setSelectedSubSectionId] = useState(null);
    const objectPage: RefObject<HTMLDivElement> = useConsolidatedRef(ref);
    const fillerDivDomRef: RefObject<HTMLDivElement> = useRef();
    const objectPageContent: RefObject<HTMLDivElement> = useRef();

    useEffect(() => {
      let selectedIndex = findSectionIndexById(children, selectedSectionId);
      if (selectedIndex === -1) {
        selectedIndex = 0;
      }

      if (selectedSectionIndex !== selectedIndex) {
        setSelectedSectionIndex(selectedIndex);
      }
    }, [selectedSectionId]);

    let content = children;
    if (mode === ObjectPageMode.IconTabBar) {
      content = Children.toArray(children)[selectedSectionIndex];
    }

    const adjustDummyDivHeight = () => {
      requestAnimationFrame(() => {
        if (!objectPage.current) {
          // in case componentWillUnmount didn´t fire
          window.removeEventListener('resize', adjustDummyDivHeight);
          return;
        }

        const sections = objectPage.current.querySelectorAll('[id^="ObjectPageSection"]');
        if (!sections || sections.length < 1) {
          return;
        }

        const lastSectionDomRef = sections[sections.length - 1];
        const subSections = lastSectionDomRef.querySelectorAll('[id^="ObjectPageSubSection"]');
        let scrollOffset = 0;

        let domRef = null;
        if (subSections.length > 0) {
          domRef = subSections[subSections.length - 1];
        } else {
          domRef = lastSectionDomRef;
          scrollOffset = 45;
        }

        let heightDiff = objectPageContent.current.offsetHeight - domRef.offsetHeight + scrollOffset;
        heightDiff = heightDiff > 0 ? heightDiff : 0;
        fillerDivDomRef.current.style.height = `${heightDiff}px`;
      });
    };

    // register resize handler
    useEffect(() => {
      window.addEventListener('resize', adjustDummyDivHeight);
      return window.removeEventListener('resize', adjustDummyDivHeight);
    }, []);

    useEffect(() => {
      adjustDummyDivHeight();
    }, [noHeader]);

    // scroll to selected section after mount
    useEffect(() => {
      if (mode !== ObjectPageMode.IconTabBar) {
        if (selectedSectionId && selectedSectionIndex > 0) {
          scrollToSectionById(selectedSectionId, selectedSectionIndex);
        }
      }
    }, []);

    useEffect(() => {
      if (selectedSubSectionId && mode === ObjectPageMode.IconTabBar) {
        requestAnimationFrame(() => {
          scroller.scrollTo(`ObjectPageSubSection-${selectedSubSectionId}`, {
            containerId: 'ObjectPageSections',
            smooth: true,
            offset: 36,
            duration: 400
          });
        });
      }
    }, [selectedSubSectionId]);

    useEffect(() => {
      if (mode === ObjectPageMode.Default) {
        // @ts-ignore
        scrollToSectionById(Children.toArray(children)[selectedSectionIndex].props.id, selectedSectionIndex);
      }
      if (mode === ObjectPageMode.IconTabBar) {
        adjustDummyDivHeight();
      }
    }, [selectedSectionIndex]);

    const fireOnSelectedChangedEvent = debounce((e) => {
      onSelectedSectionChanged(
        Event.of(null, e.getOriginalEvent(), {
          selectedSectionIndex: e.getParameter('index'),
          selectedSectionId: e.getParameter('props').id,
          section: e.getParameters()
        })
      );
    }, 500);

    const handleOnSectionSelected = useCallback(
      (e) => {
        if (mode === ObjectPageMode.IconTabBar) {
          setSelectedSectionIndex(e.getParameter('index'));
        }
        fireOnSelectedChangedEvent(e);
      },
      [onSelectedSectionChanged]
    );

    const handleOnSubSectionSelected = useCallback(
      (e) => {
        if (mode === ObjectPageMode.IconTabBar) {
          const sectionIndex = e.getParameter('sectionIndex');
          const subSection = e.getParameter('subSection');
          setSelectedSectionIndex(sectionIndex);
          setSelectedSubSectionId(subSection.props.id);
        }
      },
      [mode]
    );

    const classes = useStyles();
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
        ref={objectPage}
        title={tooltip}
      >
        {!noHeader && (
          <ObjectPageHeader
            title={title}
            subTitle={subTitle}
            image={image}
            headerActions={headerActions}
            renderHeaderContent={renderHeaderContent}
            imageShapeCircle={imageShapeCircle}
            showHideHeaderButton={showHideHeaderButton}
          />
        )}
        <section className={classes.anchorBar} role="navigation">
          {Children.map(children, (section, index) => (
            <ObjectPageAnchorButton
              key={`Anchor-${index}`}
              section={section}
              index={index}
              selected={selectedSectionIndex === index}
              mode={mode}
              onSectionSelected={handleOnSectionSelected}
              onSubSectionSelected={handleOnSubSectionSelected}
            />
          ))}
        </section>
        <ObjectPageContent ref={objectPageContent} fillerRef={fillerDivDomRef}>
          {content}
        </ObjectPageContent>
      </div>
    );
  }
);

ObjectPage.defaultProps = {
  title: '',
  subTitle: '',
  image: null,
  imageShapeCircle: false,
  headerActions: [],
  renderHeaderContent: null,
  mode: ObjectPageMode.Default,
  onSelectedSectionChanged: () => {},
  showHideHeaderButton: false,
  selectedSectionId: null,
  noHeader: false
};

ObjectPage.displayName = 'ObjectPage';

export { ObjectPage };
