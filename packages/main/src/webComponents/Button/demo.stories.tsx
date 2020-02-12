import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import React from 'react';

const customStyle1 = {
  color: 'red'
};

const customStyle2 = {
  width: '15rem'
};

class DemoButton extends React.Component {
  state = {
    showCS1: false,
    showCS2: false
  };

  render() {
    const { showCS1, showCS2 } = this.state;

    const innerStyles = {
      ...(showCS1 ? customStyle1 : {}),
      ...(showCS2 ? customStyle2 : {})
    };

    return (
      <div>
        <div>
          <Button onClick={() => this.setState({ showCS1: !showCS1 })}>Toggle Custom Style 1</Button>
          <Button onClick={() => this.setState({ showCS2: !showCS2 })}>Toggle Custom Style 2</Button>
        </div>
        <Button
          design={select('design', ButtonDesign, ButtonDesign.Default)}
          disabled={boolean('disabled', false)}
          icon={'add'}
          iconEnd={boolean('iconEnd', false)}
          onClick={action('Button clicked')}
          innerStyles={innerStyles}
        >
          Some Content
        </Button>
      </div>
    );
  }
}

export default {
  title: 'UI5 Web Components / Button',
  component: Button
};

export const generatedDefaultStory = () => (
  <Button
    design={select('design', ButtonDesign, ButtonDesign.Default)}
    disabled={boolean('disabled', false)}
    icon={'add'}
    iconEnd={boolean('iconEnd', false)}
    onClick={action('onClick')}
  >
    Some Content
  </Button>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};

export const withCustomStyles = () => <DemoButton />;

withCustomStyles.story = {
  name: 'With custom Styles'
};
