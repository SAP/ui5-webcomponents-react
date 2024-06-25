import { composeStories } from '@storybook/react';
import * as CardStories from '../../packages/main/src/webComponents/Card/Card.stories.js';
import './CssPartsExample.css';

const { Default: CardComponent } = composeStories(CardStories);

export const CssPartsExample = () => {
  return (
    <div>
      <CardComponent className="card" />
    </div>
  );
};
