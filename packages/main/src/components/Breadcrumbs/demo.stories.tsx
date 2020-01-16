import { select, text } from '@storybook/addon-knobs';
import { Breadcrumbs } from '@ui5/webcomponents-react/lib/Breadcrumbs';
import { BreadcrumbsSeparatorStyle } from '@ui5/webcomponents-react/lib/BreadcrumbsSeparatorStyle';
import { Link } from '@ui5/webcomponents-react/lib/Link';
import React from 'react';

export const defaultStory = () => {
  return (
    <Breadcrumbs separatorStyle={select('separatorStyle', BreadcrumbsSeparatorStyle, BreadcrumbsSeparatorStyle.Slash)}>
      <Link>Products</Link>
      <Link>Hardware</Link>
      <Link>Notebooks</Link>
      <Link>13 inch</Link>
    </Breadcrumbs>
  );
};
defaultStory.story = {
  name: 'Default'
};
export const withCurrentLocation = () => {
  return (
    <Breadcrumbs
      separatorStyle={select('separatorStyle', BreadcrumbsSeparatorStyle, BreadcrumbsSeparatorStyle.Slash)}
      currentLocationText={text('currentLocationText', 'Super Slim Notebook 13 inch')}
    >
      <Link>Products</Link>
      <Link>Hardware</Link>
      <Link>Notebooks</Link>
      <Link>13 inch</Link>
    </Breadcrumbs>
  );
};
withCurrentLocation.story = {
  name: 'with currentLocation'
};

export default {
  title: 'Components / Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    subcomponents: { Link }
  }
};
