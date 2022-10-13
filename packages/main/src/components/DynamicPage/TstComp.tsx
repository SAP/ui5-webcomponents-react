import React, { useState } from 'react';
import {
  DynamicPage,
  DynamicPageHeader,
  Title,
  AnalyticalTable,
  FlexibleColumnLayout,
  FCLLayout,
  Button
} from '@ui5/webcomponents-react';
import { useMemo } from 'react';
import {
  FilterBar,
  FilterGroupItem,
  Input,
  RatingIndicator,
  StepInput,
  Switch,
  ObjectPage
} from '@ui5/webcomponents-react';
import { DynamicPageTitle } from '../DynamicPageTitle';

export const DummyFilterBar = () => {
  return (
    <FilterBar>
      <FilterGroupItem label="StepInput">
        <StepInput />
      </FilterGroupItem>
      <FilterGroupItem label="RatingIndicator" required>
        <RatingIndicator />
      </FilterGroupItem>
      <FilterGroupItem label="Input">
        <Input placeholder="Placeholder" />
      </FilterGroupItem>
      <FilterGroupItem label="Switch">
        <Switch />
      </FilterGroupItem>
    </FilterBar>
  );
};

export const useTableColumns = () => {
  const screenWidth =
    document.getElementById('flexibleContainer') && document.getElementById('flexibleContainer').clientWidth / 2.5;

  return useMemo(
    () => [
      {
        id: 'column1',
        Header: 'Column 1',
        accessor: 'column1'
      },
      {
        id: 'column2',
        Header: 'Column 2',
        accessor: 'column2',
        responsivePopIn: true,
        responsiveMinWidth: screenWidth
      },
      {
        id: 'column3',
        Header: 'Column 3',
        accessor: 'column3',
        responsivePopIn: true,
        responsiveMinWidth: screenWidth
      }
    ],
    [screenWidth]
  );
};

export const TestComp = () => {
  const [layout, setLayout] = useState(FCLLayout.OneColumn);
  const columns = useTableColumns();

  const flexibleColumn1Data = Array(100).fill({
    column1: 'Data 1',
    column2: 'Data 2',
    column3: 'Data 3'
  });

  const onStartColumnClick = (e) => {
    setLayout(FCLLayout.TwoColumnsMidExpanded);
  };

  return (
    <FlexibleColumnLayout
      style={{ height: document.documentElement.clientHeight }}
      layout={layout}
      id="flexibleContainer"
      startColumn={
        <DynamicPage
          style={{ height: '500px' }}
          showHideHeaderButton={true}
          footer={<div style={{ height: '60px', background: 'yellow', zIndex: 12312312 }}>asd</div>}
          headerContentPinnable={true}
          headerTitle={
            <DynamicPageTitle header="Test AKSJDHj kASHDJKH AKJSHDKJHA JKDHjksahdjkha jdhasjkdh kJAHSKJHAKJSHDkj haskjdhKJAHSD KJhAKJShAKJHkj hkjASHKJDhSAKJd hKJHS kjHAKJ hAKSJ hKJASH DkjHASKJDH jkhsakjh djkahsjkd haKJHASKJDHkj hjkhjkahsdkj hakjsdh kjashdjk ahs" />
          }
          headerContent={
            <DynamicPageHeader>
              <DummyFilterBar />
            </DynamicPageHeader>
          }
        >
          <div style={{ height: '300px', background: 'lightblue' }} />
        </DynamicPage>
      }
      midColumn={
        <>
          <Button
            icon="decline"
            onClick={() => {
              setLayout(FCLLayout.OneColumn);
            }}
          />
          <AnalyticalTable
            style={{ width: '100%' }}
            data={[...flexibleColumn1Data]}
            columns={columns}
            adjustTableHeightOnPopIn
            header={<Title level="H4">{'Table title'}</Title>}
            onRowClick={onStartColumnClick}
            scaleWidthMode="Grow"
          />
        </>
      }
    />
  );
};
