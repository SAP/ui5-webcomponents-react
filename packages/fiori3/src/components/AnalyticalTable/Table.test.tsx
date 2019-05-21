// import { TextAlign, VerticalAlign } from '@fiori4react/core/enums';
// import React from 'react';
// import generateData from './demo/generateData';
// import { Table } from './index';
// import { mountThemedComponent } from '@shared/tests/utils';
// import { getMinimumTest } from '@shared/tests/utils';
// import { Title } from '../Title';
//
// const columns = [
//   {
//     Header: 'Name',
//     accessor: 'name' // String-based value accessors!
//   },
//   {
//     Header: 'Age',
//     accessor: 'age'
//   },
//   {
//     Header: 'Friend Name',
//     accessor: 'friend.name' // Custom value accessors!
//   },
//   {
//     Header: () => <span>Friend Age</span>, // Custom header components!
//     accessor: 'friend.age'
//   }
// ];
//
// describe('Table', () => {
//   getMinimumTest(<Table />, true);
//
//   test('with Columns', () => {
//     const wrapper = mountThemedComponent(<Table columns={columns} />);
//     expect(wrapper.render()).toMatchSnapshot();
//   });
//
//   test('loading and alternateRowColors', () => {
//     const wrapper = mountThemedComponent(<Table loading alternateRowColors />);
//     expect(wrapper.render()).toMatchSnapshot();
//   });
//
//   test('custom numItems prop', () => {
//     const wrapper = mountThemedComponent(<Table columns={columns} numItems={300} />);
//     expect(wrapper.render()).toMatchSnapshot();
//   });
//
//   test('with Title', () => {
//     const wrapper = mountThemedComponent(<Table columns={columns} numItems={300} title="Test" />);
//     expect(wrapper.render()).toMatchSnapshot();
//   });
//
//   test('with custom title', () => {
//     const wrapper = mountThemedComponent(
//       <Table columns={columns} numItems={300} title={<Title>Custom Title</Title>} />
//     );
//     expect(wrapper.render()).toMatchSnapshot();
//   });
//
//   test('with extension', () => {
//     const wrapper = mountThemedComponent(
//       <Table columns={columns} numItems={300} title="Text" renderExtension={() => <Title>My Extension</Title>} />
//     );
//     expect(wrapper.render()).toMatchSnapshot();
//   });
//
//   test('with Column Alignment', () => {
//     const columnsWithAlignment = [
//       {
//         Header: 'Name',
//         accessor: 'name',
//         vAlign: VerticalAlign.Top
//       },
//       {
//         Header: 'Age',
//         accessor: 'age',
//         vAlign: VerticalAlign.Middle,
//         hAlign: TextAlign.End
//       }
//     ];
//     const data = [
//       {
//         name: 'John Doe',
//         age: 42
//       },
//       {
//         name: 'Jane Doe',
//         age: 1337
//       }
//     ];
//     const wrapper = mountThemedComponent(<Table columns={columnsWithAlignment} data={data} />);
//     expect(wrapper.render()).toMatchSnapshot();
//   });
// });
