import { Event, StyleClassHelper } from '@fiori-for-react/utils';
import { Token } from '@lib/Token';
import React, { cloneElement, Component, CSSProperties } from 'react';
import { ClassProps } from '../../interfaces/ClassProps';
import { Fiori3CommonProps } from '../../interfaces/Fiori3CommonProps';
import { InputBaseItemType } from '../../interfaces/InputBaseItemType';
import { withStyles } from '../../utils/withStyles';
import styles from './Tokenizer.jss';

export interface TokenizerPropTypes extends Fiori3CommonProps {
  width?: CSSProperties['width'];
  items?: InputBaseItemType[];
  renderToken?: (item?: InputBaseItemType) => JSX.Element;
  editable?: boolean;
  onTokenChange?: (event: Event) => void;
}

interface TokenizerInternalProps extends TokenizerPropTypes, ClassProps {}

@withStyles(styles)
export class Tokenizer extends Component<TokenizerPropTypes> {
  static defaultProps = {
    children: [],
    editable: true,
    width: null,
    items: []
  };

  private domRef = null;
  private scrollContainer = null;
  private iX = null;
  private iY = null;

  static removeTokensByIdGenerator = (id) => (items) => {
    return items.filter((item) => (item.key ? item.key !== id : item !== id));
  };

  private onMouseDown = (e) => {
    const point = e.touches ? e.touches[0] : e;
    this.iX = point.pageX;
    this.iY = point.pageY;
  };

  private onMouseMove = (event) => {
    const e = event.originalEvent || event;
    if ((e.buttons || e.which) === 1 || e.pressure) {
      this.domRef.scrollLeft = this.domRef.scrollLeft + this.iX - event.pageX;
      this.iX = event.pageX;
      this.iY = event.pageY;
    }
  };

  private renderToken = (item) => {
    const { editable } = this.props;

    return (
      <Token
        key={item.key}
        withinTokenizer
        tokenizerEditable={editable}
        onDeleteClick={this.onTokenDeleteClick}
        id={item.key}
      >
        {item.text}
      </Token>
    );
  };

  private onTokenDeleteClick = (e) => {
    const { onTokenChange } = this.props;
    if (onTokenChange) {
      onTokenChange(
        Event.of(this, e.getOriginalEvent(), {
          token: e.getParameters(),
          removeTokensById: Tokenizer.removeTokensByIdGenerator(e.getParameter('id'))
        })
      );
    }
  };

  private enhanceToken = (token) => {
    const { editable } = this.props;

    return cloneElement(token, {
      withinTokenizer: true,
      tokenizerEditable: editable,
      onDeleteClick: (e) => {
        if (token.props.onTokenDelete) {
          token.props.onTokenDelete(e);
        }
        this.onTokenDeleteClick(e);
      }
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.items.length !== this.props.items.length) {
      this.domRef.scrollLeft = this.scrollContainer.scrollWidth;
    }
  }

  render() {
    const { classes, width, editable, items, renderToken, className, style, tooltip } = this
      .props as TokenizerInternalProps;

    const tokenizerClasses = StyleClassHelper.of(classes.tokenizer);
    const inlineStyle = { width };

    if (!editable) {
      tokenizerClasses.put(classes.tokenizerReadOnly);
    }
    if (items.length === 0) {
      tokenizerClasses.put(classes.tokenizerEmpty);
    }

    if (className) {
      tokenizerClasses.put(className);
    }

    if (style) {
      Object.assign(inlineStyle, style);
    }

    return (
      <div
        ref={(ref) => {
          this.domRef = ref;
        }}
        onMouseDown={this.onMouseDown}
        onMouseMove={this.onMouseMove}
        style={inlineStyle}
        role="list"
        className={tokenizerClasses.valueOf()}
        tabIndex={0}
        title={tooltip}
        data-ui5-slot={this.props['data-ui5-slot']}
      >
        <div
          ref={(ref) => {
            this.scrollContainer = ref;
          }}
          className={classes.tokenizerScrollContainer}
        >
          {items.map((item) => (renderToken ? this.enhanceToken(renderToken(item)) : this.renderToken(item)))}
        </div>
      </div>
    );
  }
}
