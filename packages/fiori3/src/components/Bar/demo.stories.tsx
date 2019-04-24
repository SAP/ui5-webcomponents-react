import React from 'react';
import { storiesOf } from '@storybook/react';
import { Bar } from './index';
import { Label } from '../../webComponents/Label';

function renderStory() {
  return (
    <Bar
      renderContentLeft={() => <Label>Content Left</Label>}
      renderContentMiddle={() => <Label>Content Middle</Label>}
      renderContentRight={() => <Label>Content Right</Label>}
    />
  );
}

function renderWithExtendedStyles() {
  const styles = () => ({
    bar: {
      backgroundColor: 'pink'
    }
  });

  const leftStyles = () => ({
    left: {
      backgroundColor: (props) => {
        return 'black';
      }
    }
  });

  const heightAndRightStyles = () => {
    return {
      bar: {
        height: '5rem'
      },
      right: {
        backgroundColor: 'green'
      }
    };
  };

  // @ts-ignore
  const ExtendedBar = Bar.withCustomStyles(styles, heightAndRightStyles, leftStyles);

  return (
    <ExtendedBar
      renderContentLeft={() => <Label>Content Left</Label>}
      renderContentMiddle={() => <Label>Content Middle</Label>}
      renderContentRight={() => <Label>Content Right</Label>}
    />
  );
}

storiesOf('F4R Components | Bar', module)
  .add('Default', renderStory)
  .add('Extended Styles', renderWithExtendedStyles);
