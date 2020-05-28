import { Breadcrumbs } from '@ui5/webcomponents-react/lib/Breadcrumbs';
import { BreadcrumbsSeparatorStyle } from '@ui5/webcomponents-react/lib/BreadcrumbsSeparatorStyle';
import { Link } from '@ui5/webcomponents-react/lib/Link';
import React from 'react';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

export const defaultStory = (props) => {
  return (
    <Breadcrumbs separatorStyle={props.separatorStyle}>
      <Link>Products</Link>
      <Link>Hardware</Link>
      <Link>Notebooks</Link>
      <Link>13 inch</Link>
    </Breadcrumbs>
  );
};
defaultStory.storyName = 'Default';
export const withCurrentLocation = (props) => {
  return (
    <Breadcrumbs separatorStyle={props.separatorStyle} currentLocationText={props.currentLocationText}>
      <Link>Products</Link>
      <Link>Hardware</Link>
      <Link>Notebooks</Link>
      <Link>13 inch</Link>
    </Breadcrumbs>
  );
};
withCurrentLocation.storyName = 'with currentLocation';

export default {
  title: 'Components / Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    subcomponents: { Link }
  },
  argTypes: {
    ...createSelectArgTypes({ separatorStyle: BreadcrumbsSeparatorStyle })
  },
  args: {
    separatorStyle: BreadcrumbsSeparatorStyle.Slash,
    currentLocationText: 'Super Slim Notebook 13 inch'
  }
};
