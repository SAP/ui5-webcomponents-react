import React, { PureComponent } from 'react';
import { Button } from '../../lib/Button';
import { ButtonDesign } from '../../lib/ButtonDesign';
import { MessageBoxActions } from '../../lib/MessageBoxActions';

export class MessageBoxButton extends PureComponent<{
  action: MessageBoxActions;
  onClick: (e, action: MessageBoxActions) => void;
  emphasize?: boolean;
}> {
  private handleClick = (e) => this.props.onClick(e, this.props.action);

  render() {
    const { emphasize } = this.props;

    return (
      <Button
        style={{
          minWidth: '4rem'
        }}
        onPress={this.handleClick}
        design={emphasize ? ButtonDesign.Emphasized : ButtonDesign.Transparent}
      >
        {this.props.action}
      </Button>
    );
  }
}
