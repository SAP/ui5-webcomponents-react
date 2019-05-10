import { StyleClassHelper } from '@fiori-for-react/utils';
import React, { CSSProperties, PureComponent, ReactText } from 'react';
import { UnknownFlavourException } from '../../exceptions/UnknownFlavourException';
import { ClassProps } from '../../interfaces/ClassProps';
import { Fiori3CommonProps } from '../../interfaces/Fiori3CommonProps';
import { isNumeric } from '../../utils/isNumeric';
import { withStyles } from '@fiori-for-react/styles';
import styles from './InfoLabel.jss';

export interface InfoLabelPropTypes extends Fiori3CommonProps {
  children?: ReactText;
  displayOnly?: boolean;
  flavour?: ReactText;
  width?: CSSProperties['width'];
}

interface InfoLabelInternalProps extends InfoLabelPropTypes, ClassProps {}

@withStyles(styles)
export class InfoLabel extends PureComponent<InfoLabelPropTypes> {
  static defaultProps = {
    children: '',
    displayOnly: true,
    flavour: 3
  };

  render() {
    const { children, classes, displayOnly, width, style, className, flavour, tooltip } = this
      .props as InfoLabelInternalProps;

    if (!(flavour >= 1 && flavour <= 9)) {
      throw new UnknownFlavourException('Unknown Flavour prop passed to InfoLabel');
    }

    const containerStyles = StyleClassHelper.of(classes.infoLabelContainer);

    if (isNumeric(children)) {
      containerStyles.put(classes.numeric);
    } else {
      containerStyles.put(classes.text);
    }

    if (displayOnly) {
      containerStyles.put(classes.displayOnly);
    }

    if (className) {
      containerStyles.put(className);
    }

    const inlineStyle = { width };
    if (style) {
      Object.assign(inlineStyle, style);
    }

    return (
      <div
        style={inlineStyle}
        className={containerStyles.valueOf()}
        title={tooltip}
        data-ui5-slot={this.props['data-ui5-slot']}
      >
        <span className={classes.label}>{children}</span>
      </div>
    );
  }
}
