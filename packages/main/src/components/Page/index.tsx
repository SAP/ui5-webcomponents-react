import '@ui5/webcomponents-icons/dist/navigation-left-arrow';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { Bar } from '@ui5/webcomponents-react/lib/Bar';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { PageBackgroundDesign } from '@ui5/webcomponents-react/lib/PageBackgroundDesign';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import React, {
  FC,
  forwardRef,
  ReactElement,
  ReactNode,
  Ref,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import styles from './Page.jss';

export interface PagePropTypes extends CommonProps {
  /**
   * The title text appearing in the page header bar.
   */
  title?: string;
  /**
   * It is used to set the background color of a page.
   */
  backgroundDesign?: PageBackgroundDesign;
  /**
   * The (optional) custom header of this page. Use this prop only when a custom header
   * is constructed where the default header consisting of title text + nav button is not sufficient.
   */
  customHeader?: ReactNode;
  /**
   * The (optional) custom footer of this page.
   */
  customFooter?: ReactNode;
  /**
   * A back button will be rendered on the left area of header bar if this property is set to true.
   *
   * __Note__: If a custom header is used, `showBackButton` has no effect.
   */
  showBackButton?: boolean;
  /**
   * Whether this page shall have a footer.
   */
  showFooter?: boolean;
  /**
   * Whether this page shall have a header.
   *
   * __Note:__ If the `customHeader` prop is not defined, `showHeader` has no effect.
   */
  showHeader?: boolean;
  /**
   * This event is fired when Nav Button is pressed.
   */
  onNavButtonPress?: (e: CustomEvent<{}>) => void;
  /**
   * The content area of the page.
   */
  children: ReactElement<any> | ReactElement<any>[] | ReactNode;
}

const useStyles = createComponentStyles(styles, {
  name: 'Page'
});

/**
 * A layout component that holds one whole screen of an application.
 */
const Page: FC<PagePropTypes> = forwardRef((props: PagePropTypes, ref: Ref<HTMLDivElement>) => {
  const {
    children,
    showFooter,
    showHeader,
    showBackButton,
    className,
    style,
    backgroundDesign,
    tooltip,
    slot,
    onNavButtonPress,
    title,
    customFooter,
    customHeader
  } = props;

  const footerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);
  const [headerStyles, setHeaderStyles] = useState({});

  const classes = useStyles();

  const handleNavBackButtonPress = useCallback(
    (e) => {
      if (typeof onNavButtonPress === 'function') {
        onNavButtonPress(enrichEventWithDetails(e));
      }
    },
    [onNavButtonPress]
  );

  const renderBackButton = useCallback(() => {
    if (showBackButton) {
      return (
        <Button icon="navigation-left-arrow" design={ButtonDesign.Transparent} onClick={handleNavBackButtonPress} />
      );
    }
    return null;
  }, [showBackButton]);

  const renderTitle = useCallback(() => <Title level={TitleLevel.H5}>{title}</Title>, [title]);
  const header = useMemo(() => customHeader ?? <Bar contentLeft={renderBackButton()} contentMiddle={renderTitle()} />, [
    customHeader,
    renderTitle,
    renderBackButton
  ]);

  const pageContainer = StyleClassHelper.of(classes.pageContainer);
  const headerClasses = StyleClassHelper.of(classes.pageHeader, classes.baseBar);
  const footerClasses = StyleClassHelper.of(classes.pageFooter, classes.baseBar);

  if (showHeader && !customHeader) {
    pageContainer.put(classes.pageWithHeader);
  }

  useEffect(() => {
    if (customHeader && showHeader) {
      setHeaderStyles(headerRef.current?.offsetHeight ? { top: headerRef.current.offsetHeight } : {});
    }
    if (!showHeader) {
      setHeaderStyles({});
    }
  }, [headerRef.current, customHeader, showHeader]);

  if (className) {
    pageContainer.put(className);
  }

  useEffect(() => {
    if (customFooter && showFooter) {
      setFooterHeight(footerRef.current?.offsetHeight ?? 0);
    }
    if (!showFooter) {
      setFooterHeight(0);
    }
  }, [footerRef.current, customFooter, showFooter]);

  pageContainer.put(classes[`background${backgroundDesign}`]);

  const passThroughProps = usePassThroughHtmlProps(props, ['onNavButtonPress']);

  return (
    <div ref={ref} className={pageContainer.valueOf()} style={style} title={tooltip} slot={slot} {...passThroughProps}>
      {showHeader && (
        <header ref={headerRef} className={headerClasses.valueOf()}>
          {header}
        </header>
      )}
      <section className={classes.contentSection} style={{ bottom: footerHeight, ...headerStyles }}>
        {children}
      </section>
      {showFooter && (
        <footer ref={footerRef} className={footerClasses.valueOf()}>
          {customFooter}
        </footer>
      )}
    </div>
  );
});

Page.defaultProps = {
  showHeader: true,
  showFooter: false,
  showBackButton: true,
  title: '',
  backgroundDesign: PageBackgroundDesign.Standard
};

Page.displayName = 'Page';

export { Page };
