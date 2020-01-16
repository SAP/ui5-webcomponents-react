import '@ui5/webcomponents-icons/dist/icons/navigation-left-arrow';
import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { Bar } from '@ui5/webcomponents-react/lib/Bar';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { PageBackgroundDesign } from '@ui5/webcomponents-react/lib/PageBackgroundDesign';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import React, { FC, forwardRef, ReactElement, ReactNode, Ref, useCallback, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { BarPropTypes } from '../Bar';
import styles from './Page.jss';

export interface PagePropTypes extends CommonProps {
  title?: string;
  backgroundDesign?: PageBackgroundDesign;
  renderCustomHeader?: () => ReactElement<BarPropTypes>;
  renderCustomFooter?: () => ReactElement<BarPropTypes>;
  showBackButton?: boolean;
  showFooter?: boolean;
  showHeader?: boolean;
  onNavButtonPress?: (e: Event) => void;
  children: ReactElement<any> | Array<ReactElement<any>> | ReactNode;
}

const useStyles = createUseStyles<keyof ReturnType<typeof styles>>(styles, {
  name: 'Page'
});

/**
 * <code>import { Page } from '@ui5/webcomponents-react/lib/Page';</code>
 */
const Page: FC<PagePropTypes> = forwardRef((props: PagePropTypes, ref: Ref<HTMLDivElement>) => {
  const {
    children,
    showFooter,
    showHeader,
    showBackButton,
    className,
    style,
    renderCustomHeader,
    renderCustomFooter,
    backgroundDesign,
    tooltip,
    slot,
    onNavButtonPress,
    title
  } = props;

  const classes = useStyles();

  const handleNavBackButtonPress = useCallback(
    (e) => {
      if (typeof onNavButtonPress === 'function') {
        onNavButtonPress(Event.of(null, e.getOriginalEvent()));
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

  const header = useMemo(() => {
    if (renderCustomHeader) {
      return renderCustomHeader();
    }

    return <Bar renderContentLeft={renderBackButton} renderContentMiddle={renderTitle} />;
  }, [renderCustomHeader, renderTitle, renderBackButton]);

  const pageContainer = StyleClassHelper.of(classes.pageContainer);
  const headerClasses = StyleClassHelper.of(classes.pageHeader, classes.baseBar);
  const footerClasses = StyleClassHelper.of(classes.pageFooter, classes.baseBar);

  if (showHeader) {
    pageContainer.put(classes.pageWithHeader);
  }

  if (showFooter) {
    pageContainer.put(classes.pageWithFooter);
  }

  if (className) {
    pageContainer.put(className);
  }

  pageContainer.put(classes[`background${backgroundDesign}`]);

  const passThroughProps = usePassThroughHtmlProps(props);

  return (
    <div ref={ref} className={pageContainer.valueOf()} style={style} title={tooltip} slot={slot} {...passThroughProps}>
      {showHeader && <header className={headerClasses.valueOf()}>{header}</header>}
      <section className={classes.contentSection}>{children}</section>
      {showFooter && <footer className={footerClasses.valueOf()}>{renderCustomFooter && renderCustomFooter()}</footer>}
    </div>
  );
});

Page.defaultProps = {
  showHeader: true,
  showFooter: false,
  showBackButton: true,
  renderCustomHeader: null,
  renderCustomFooter: null,
  title: '',
  backgroundDesign: PageBackgroundDesign.Standard
};

Page.displayName = 'Page';

export { Page };
