import React, { PureComponent } from 'react';
import { Button } from '../../webComponents/Button';
import { ButtonType } from '../../enums/ButtonType';
import { MessageBoxActions } from './index';

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
        type={emphasize ? ButtonType.Emphasized : ButtonType.Transparent}
      >
        {this.props.action}
      </Button>
    );
  }
}
