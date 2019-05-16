import { fonts } from '@fiori-for-react/styles';
import { Event, StyleClassHelper } from '@fiori-for-react/utils';
import { ContentDensity } from '../../lib/ContentDensity';
import { Icon } from '../../lib/Icon';
import React, { Component } from 'react';
import { ClassProps } from '../../interfaces/ClassProps';
import { Fiori3CommonProps } from '../../interfaces/Fiori3CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { withStyles } from '@fiori-for-react/styles';
import styles from './Token.jss';

export interface TokenPropTypes extends Fiori3CommonProps {
  selected?: boolean;
  editable?: boolean;
  id?: string;
  children: string;
  onClick?: (event: Event) => void;
  onSelect?: (event: Event) => void;
  onDeSelect?: (event: Event) => void;
  onDeleteClick?: (event: Event) => void;
}

interface TokenState {
  selectedProp: boolean;
  selected: boolean;
}

interface TokenInternalProps extends TokenPropTypes, ClassProps {
  theme?: JSSTheme;
  withinTokenizer?: boolean;
  tokenizerEditable?: boolean;
}

@withStyles(styles)
export class Token extends Component<TokenPropTypes, TokenState> {
  static defaultProps = {
    selected: false,
    editable: true,
    withinTokenizer: false,
    tokenizerEditable: true
  };

  private iconRef: HTMLElement;

  private onClick = (e) => {
    const { onDeleteClick, onClick, onSelect, onDeSelect } = this.props;

    const tokenProps = {
      ...this.props
    };

    const target = e.target;
    if (e === this.iconRef || (target && this.iconRef && this.iconRef.contains(target))) {
      return this.triggerClickEvent(e, onDeleteClick, tokenProps);
    }

    const isSelected = !this.state.selected;
    this.setState({
      selected: isSelected
    });

    if (isSelected) {
      this.triggerClickEvent(e, onSelect, tokenProps);
    } else {
      this.triggerClickEvent(e, onDeSelect, tokenProps);
    }

    return this.triggerClickEvent(e, onClick, tokenProps);
  };

  private triggerClickEvent(e, clickHandler, tokenProps) {
    if (clickHandler) {
      clickHandler(Event.of(this, e, tokenProps));
    }
  }

  constructor(props) {
    super(props);
    const { selected } = this.props;
    this.state = {
      selectedProp: selected,
      selected
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.selected !== prevState.selectedProp) {
      return {
        selectedProp: nextProps.selected,
        selected: nextProps.selected
      };
    }
    return null;
  }

  render() {
    const { theme, editable, classes, children, withinTokenizer, tokenizerEditable, className, style, tooltip } = this
      .props as TokenInternalProps;

    const { parameters } = theme;

    const { selected } = this.state;

    const tokenClasses = StyleClassHelper.of(classes.token);

    if (theme.contentDensity === ContentDensity.Compact) {
      tokenClasses.put(classes.compact);
    }

    if (selected) {
      tokenClasses.put(classes.selected);
    }

    if (!editable || !tokenizerEditable) {
      tokenClasses.put(classes.readOnly);
    }

    if (withinTokenizer) {
      tokenClasses.put(classes.withinTokenizer);
    }

    if (!tokenizerEditable) {
      tokenClasses.put(classes.tokenizerReadOnly);
    }

    if (className) {
      tokenClasses.put(className);
    }

    return (
      <div
        onClick={this.onClick}
        tabIndex={-1}
        className={tokenClasses.valueOf()}
        style={style}
        title={tooltip}
        data-ui5-slot={this.props['data-ui5-slot']}
      >
        <span className={classes.tokenText}>{children}</span>
        {editable && tokenizerEditable && (
          <div
            ref={(ref) => {
              this.iconRef = ref;
            }}
            className={classes.tokenIcon}
          >
            {
              <Icon
                src="decline"
                style={{
                  fontSize: fonts.sapMFontSmallSize,
                  color: selected ? parameters.sapUiToggleButtonPressedTextColor : parameters.sapUiContentIconColor
                }}
              />
            }
          </div>
        )}
      </div>
    );
  }
}
