// import React from 'react';
// import {ColumnHeader} from './index';
// import {mountThemedComponent} from '@shared/tests/utils';
// import {ColumnHeaderModal} from '../columnHeaderModal/index';
// import {StandardListItem} from '../../../webComponents/StandardListItem';
// import {matchSnapshot} from 'chai-karma-snapshot';
// import {expect, use} from 'chai';
// import {List} from "../../../webComponents/List";
//
// const column = {
//   id: 'column1',
//   show: true,
//   sortable: true,
//   filterable: true,
//   sorted: false
// };
//
// const sortedWithColumn = [
//   // is usually provided by react-table
//   {
//     id: 'column1',
//     desc: true
//   }
// ];
//
// const filteredWithColumn = [
//   // is usually provided by react-table
//   {
//     id: 'column1'
//   }
// ];
//
//
// use(matchSnapshot);
//
// describe('Table/ColumnHeader', () => {
//   it('With Props', () => {
//     // @ts-ignore
//     const wrapper = mountThemedComponent(<ColumnHeader column={column} sorted={[]} filtered={[]}/>);
//     expect(wrapper.debug()).to.matchSnapshot();
//   });
//
//   it('Render Sorted Column', () => {
//     const wrapper = mountThemedComponent(
//       // @ts-ignore
//       <ColumnHeader column={column} sorted={sortedWithColumn} filtered={filteredWithColumn}/>)
//     ;
//     expect(wrapper.debug()).to.matchSnapshot();
//   });
//
//   it('invisible Column', () => {
//     const col = {
//       ...column,
//       show: false
//     };
//     // @ts-ignore
//     const wrapper = mountThemedComponent(<ColumnHeader column={col} sorted={[]} filtered={[]}/>);
//     expect(wrapper.debug()).to.matchSnapshot();
//   });
//
//   it('invisible Column', () => {
//     const col = {
//       ...column,
//       show: false
//     };
//     // @ts-ignore
//     const wrapper = mountThemedComponent(<ColumnHeader column={col} sorted={[]} filtered={[]}/>);
//     expect(wrapper.debug()).to.matchSnapshot();
//   });
//
//   it('Sort ascending', () => {
//     const dummyToggleSort = () => null; // is usually being provided by react-table
//     const wrapper = mountThemedComponent(
//       // @ts-ignore
//       <ColumnHeader column={column} toggleSort={dummyToggleSort} sortable sorted={[]} filtered={[]}/>
//     );
//     wrapper.simulate('click');
//     wrapper.update();
//     expect(wrapper.debug()).to.matchSnapshot();
//   });
//
//   it('Sort descending', () => {
//     const dummyToggleSort = () => null; // is usually being provided by react-table
//     const wrapper = mountThemedComponent(
//       // @ts-ignore
//       <ColumnHeader column={column} toggleSort={dummyToggleSort} sortable sorted={[]} filtered={[]}/>
//     );
//     wrapper.simulate('click');
//     wrapper.update();
//     const items = wrapper.find(ColumnHeaderModal).find(StandardListItem);
//     items.at(1).simulate('click');
//     wrapper.update();
//     expect(wrapper.debug()).to.matchSnapshot();
//   });
//
//   it('Sort when already sorted - ascending', () => {
//     const dummyToggleSort = () => null; // is usually being provided by react-table
//     const wrapper = mountThemedComponent(
//       // @ts-ignore
//       <ColumnHeader column={column} toggleSort={dummyToggleSort} sortable sorted={sortedWithColumn} filtered={[]}/>
//     );
//     wrapper.simulate('click');
//     wrapper.update();
//     const items = wrapper.find(ColumnHeaderModal).find(StandardListItem);
//     items.at(0).simulate('click');
//     wrapper.update();
//     expect(wrapper.debug()).to.matchSnapshot();
//   });
//
//   // it('With Props', () => {
//   //   // @ts-ignore
//   //   const wrapper = mountThemedComponent(<ColumnHeader column={column} sorted={[]} filtered={[]}/>);
//   //   expect(wrapper.debug()).to.matchSnapshot();
//   // });
//
//
//   // it('Sort when already sorted - descending', () => {
//   //   const dummyToggleSort = () => null; // is usually being provided by react-table
//   //   const wrapper = mountThemedComponent(
//   //     // @ts-ignore
//   //     <ColumnHeader column={column} toggleSort={dummyToggleSort} sortable sorted={sortedWithColumn} filtered={[]}/>
//   //   );
//   //   wrapper.simulate('click');
//   //   wrapper.update();
//   //   const items = wrapper.find(ColumnHeaderModal).find(StandardListItem);
//   //   items.at(0).simulate('click');
//   //   wrapper.update();
//   //   expect(wrapper.debug()).to.matchSnapshot();
//   // });
//
//
// });
