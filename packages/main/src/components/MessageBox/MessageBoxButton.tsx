import React, { PureComponent } from 'react';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { MessageBoxActions } from '@ui5/webcomponents-react/lib/MessageBoxActions';

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
        onClick={this.handleClick}
        design={emphasize ? ButtonDesign.Emphasized : ButtonDesign.Transparent}
      >
        {this.props.action}
      </Button>
    );
  }
}
