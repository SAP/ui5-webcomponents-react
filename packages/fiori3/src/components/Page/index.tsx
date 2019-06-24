import { Event, StyleClassHelper, withStyles } from '@ui5-webcomponents-react/base';
import React, { Component, ReactElement, ReactNode } from 'react';
import { ClassProps } from '../../interfaces/ClassProps';
import { Fiori3CommonProps } from '../../interfaces/Fiori3CommonProps';
import { Bar } from '../../lib/Bar';
import { Button } from '../../lib/Button';
import { ButtonType } from '../../lib/ButtonType';
import { PageBackgroundDesign } from '../../lib/PageBackgroundDesign';
import { Title } from '../../lib/Title';
import { TitleLevel } from '../../lib/TitleLevel';
import { BarPropTypes } from '../Bar';
import styles from './Page.jss';

export interface PagePropTypes extends Fiori3CommonProps {
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

interface PagePropsInternal extends PagePropTypes, ClassProps {}

@withStyles(styles)
export class Page extends Component<PagePropTypes> {
  static defaultProps = {
    showHeader: true,
    showFooter: false,
    showBackButton: true,
    renderCustomHeader: null,
    renderCustomFooter: null,
    title: '',
    backgroundDesign: PageBackgroundDesign.Standard
  };

  private handleNavBackButtonPress = (e) => {
    this.props.onNavButtonPress(Event.of(this, e.getOriginalEvent()));
  };

  private renderBackButton = () => {
    return (
      <Button icon="navigation-left-arrow" type={ButtonType.Transparent} onPress={this.handleNavBackButtonPress} />
    );
  };

  private renderTitle = () => <Title level={TitleLevel.H5}>{this.props.title}</Title>;

  private renderHeader = () => {
    const { showBackButton } = this.props;
    return (
      <Bar
        renderContentLeft={showBackButton ? this.renderBackButton : () => null}
        renderContentMiddle={this.renderTitle}
      />
    );
  };

  render() {
    const {
      children,
      showFooter,
      showHeader,
      classes,
      className,
      style,
      renderCustomHeader,
      renderCustomFooter,
      backgroundDesign,
      tooltip
    } = this.props as PagePropsInternal;

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

    return (
      <div
        className={pageContainer.valueOf()}
        style={style}
        title={tooltip}
        data-ui5-slot={this.props['data-ui5-slot']}
      >
        {showHeader && (
          <header className={headerClasses.valueOf()}>
            {renderCustomHeader && renderCustomHeader()}
            {!renderCustomHeader && this.renderHeader()}
          </header>
        )}
        <section className={classes.contentSection}>{children}</section>
        {showFooter && (
          <footer className={footerClasses.valueOf()}>{renderCustomFooter && renderCustomFooter()}</footer>
        )}
      </div>
    );
  }
}
