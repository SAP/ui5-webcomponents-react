import '@ui5/webcomponents-icons/dist/icons/action';
import '@ui5/webcomponents-icons/dist/icons/full-screen';
import '@ui5/webcomponents-icons/dist/icons/exit-full-screen';
import '@ui5/webcomponents-icons/dist/icons/decline';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import React from 'react';
import { Badge } from '../..';
import { Breadcrumbs } from '../../lib/Breadcrumbs';
import { Link } from '../../webComponents/Link';
import { DynamicPageTitle } from '../DynamicPageTitle';
import { DynamicPage } from './index';
import { Button } from '../../lib/Button';

export default {
  title: 'Components / DynamicPage',
  component: DynamicPage,
  parameters: {
    subcomponents: { DynamicPageTitle }
  }
};

export const defaultStory = (props) => {
  return (
    <DynamicPage
      title={
        <DynamicPageTitle
          actions={
            <>
              <Button design="Emphasized">Edit</Button>
              <Button design="Transparent">Delete</Button>
              <Button type="Transparent">Copy</Button>
              <Button design="Transparent">Toggle Footer</Button>
              <Button icon="action" type="Transparent"></Button>
            </>
          }
          breadcrumbs={
            <Breadcrumbs>
              <Link>Home</Link>
              <Link>Page 1</Link>
              <Link>Page 2</Link>
              <Link>Page 3</Link>
              <Link>Page 4</Link>
              <Link>Page 5</Link>
            </Breadcrumbs>
          }
          heading={<Title>Header Title</Title>}
          navigationActions={
            <>
              <Button icon="full-screen" design="Transparent" />
              <Button icon="exit-full-screen" design="Transparent" />
              <Button icon="decline" design="Transparent" />
            </>
          }
        >
          <Badge>Status: OK</Badge>
        </DynamicPageTitle>
      }
    >
      Dynamic Page Content
    </DynamicPage>
  );
};
