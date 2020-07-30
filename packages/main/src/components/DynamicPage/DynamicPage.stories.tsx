import '@ui5/webcomponents-icons/dist/icons/action';
import '@ui5/webcomponents-icons/dist/icons/full-screen';
import '@ui5/webcomponents-icons/dist/icons/exit-full-screen';
import '@ui5/webcomponents-icons/dist/icons/decline';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import React from 'react';
import { Badge, FlexBox, FlexBoxDirection, ObjectStatus } from '../..';
import { Breadcrumbs } from '../../lib/Breadcrumbs';
import { Link } from '../../webComponents/Link';
import { DynamicPageTitle } from '../DynamicPageTitle';
import { DynamicPage } from './index';
import { Button } from '../../lib/Button';
import { DynamicPageHeader } from '../DynamicPageHeader';

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
              <Button design="Transparent">Copy</Button>
              <Button design="Transparent">Toggle Footer</Button>
              <Button icon="action" design="Transparent"></Button>
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
          subHeading={<Label>This is a subheading</Label>}
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
      header={
        <DynamicPageHeader
          headerContent={
            <>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Label>Location: Warehouse A</Label>
                <Label>Halway: 23L</Label>
                <Label>Rack: 34</Label>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Label>Availability:</Label>
                <ObjectStatus state={'Success'}>In Stock</ObjectStatus>
              </div>
            </>
          }
        />
      }
    >
      Dynamic Page Content
    </DynamicPage>
  );
};
