import React from 'react';
import { AnalyticalTable, Button, TableSelectionBehavior, TableSelectionMode } from '@ui5/webcomponents-react/';
import generateData from './demo/generateData';
//
// const columns = [
//   {
//     Header: 'Name',
//     accessor: 'name' // String-based value accessors!
//   },
//   {
//     Header: 'Age',
//     accessor: 'age',
//     hAlign: TextAlign.End,
//     disableGroupBy: true,
//     disableSortBy: false,
//     disableFilters: false,
//     className: 'superCustomClass'
//   },
//   {
//     Header: 'Friend Name',
//     accessor: 'friend.name'
//   },
//   {
//     Header: () => <span>Friend Age</span>,
//     accessor: 'friend.age',
//     hAlign: TextAlign.End,
//     filter: (rows, accessor, filterValue) => {
//       if (filterValue === 'all') {
//         return rows;
//       }
//       if (filterValue === 'true') {
//         return rows.filter((row) => row.values[accessor] >= 21);
//       }
//       return rows.filter((row) => row.values[accessor] < 21);
//     },
//     Filter: ({ column }) => {
//       return (
//         <select
//           onChange={(event) => column.setFilter(event.target.value)}
//           style={{ width: '100%' }}
//           value={column.filterValue ? column.filterValue : 'all'}
//         >
//           <option value="all">Show All</option>
//           <option value="true">Can Drink</option>
//           <option value="false">Can't Drink</option>
//         </select>
//       );
//     }
//   },
//   {
//     id: 'actions',
//     Header: 'Actions',
//     accessor: '.',
//     width: 100,
//     canResize: false,
//     Cell: ({ cell, row }) => {
//       // console.log('This is your row data', row.original);
//       return (
//         <FlexBox>
//           <Button icon="edit" />
//           <Button icon="delete" />
//         </FlexBox>
//       );
//     }
//   }
// ];
// const dataTree = generateData(20, true);
const data = generateData(10_000);
//
// export const TestTable = () => {
//   const TABLE_COLUMNS = [
//     { Header: 'Account ID', accessor: 'account.id' },
//     { Header: 'Account Name', accessor: 'account.description' }
//   ];
//
//   const data = generateData(200);
//   const columns = [
//     {
//       Header: 'Age',
//       accessor: 'age',
//       hAlign: TextAlign.End,
//       disableGroupBy: true,
//       disableSortBy: false,
//       disableFilters: false,
//       className: 'superCustomClass'
//     },
//     {
//       Header: 'Friend Name',
//       accessor: 'friend.name'
//     },
//     {
//       Header: () => <span>Friend Age</span>,
//       accessor: 'friend.age',
//       hAlign: TextAlign.End,
//       filter: (rows, accessor, filterValue) => {
//         if (filterValue === 'all') {
//           return rows;
//         }
//         if (filterValue === 'true') {
//           return rows.filter((row) => row.values[accessor] >= 21);
//         }
//         return rows.filter((row) => row.values[accessor] < 21);
//       },
//       Filter: ({ column }) => {
//         return (
//           <select
//             onChange={(event) => column.setFilter(event.target.value)}
//             style={{ width: '100%' }}
//             value={column.filterValue ? column.filterValue : 'all'}
//           >
//             <option value="all">Show All</option>
//             <option value="true">Can Drink</option>
//             <option value="false">Can't Drink</option>
//           </select>
//         );
//       }
//     },
//     {
//       id: 'actions',
//       Header: 'Actions',
//       accessor: '.',
//       width: 2000,
//       canResize: false,
//       Cell: ({ cell, row }) => {
//         // console.log('This is your row data', row.original);
//         return (
//           <FlexBox>
//             <Button
//               onClick={(e) => {
//                 console.log(e, 'button');
//               }}
//             />
//             <DatePicker
//               onChange={(e) => {
//                 console.log(e, 'datepicker');
//               }}
//             />
//           </FlexBox>
//         );
//       }
//     },
//     {
//       Header: 'Name',
//       accessor: 'name' // String-based value accessors!
//     }
//   ];
//
//   const dialogRef = useRef(null);
//   useEffect(() => {
//     if (dialogRef.current) {
//       //@ts-ignore
//       dialogRef.current.open();
//     }
//   }, [dialogRef]);
//
//   const [selectedRowId, setSelectedRowId] = useState(2);
//
//   return (
//     <AnalyticalTable
//       columns={columns}
//       data={data}
//       // loading={myAccounts.isLoading}
//       selectionMode={TableSelectionMode.SINGLE_SELECT}
//       selectionBehavior={TableSelectionBehavior.ROW}
//       selectedRowIds={{ [2]: true }}
//       onRowSelected={(e) => {
//         console.log(e, 'select');
//       }}
//       // visibleRows={20}
//     />
//   );
//
//   // return createPortal(
//   //   <Dialog
//   //     ref={dialogRef}
//   //   >
//   //     <Button
//   //       onClick={() => {
//   //         setSelectedRowId(2);
//   //       }}
//   //     >
//   //       Click
//   //     </Button>
//   //   </Dialog>,
//   //   document.body
//   // );
// };
//
// export const TestTable2 = () => {
//   const columns = [{ header: 'test', accessor: 'test' }];
//   const data = [{ test: 'special' }];
//   return (
//     <AnalyticalTable
//       selectionMode={TableSelectionMode.SINGLE_SELECT}
//       selectionBehavior={TableSelectionBehavior.ROW_ONLY}
//       loading={false}
//       data={data}
//       columns={columns}
//       visibleRows={10}
//       minRows={10}
//       onRowSelected={null}
//       // reactTableOptions={{
//       //   getRowId: (row, relativeIndex, parent) => {
//       //     return `${row.test}`;
//       //   }
//       // }}
//       selectedRowIds={{
//         ['special']: true
//       }}
//     />
//   );
// };
//
// export const TestTable3 = () => {
//   const columns = [{ header: 'test', accessor: 'test' }];
//   return (
//     <ThemeProvider>
//       <ShellBar primaryTitle="UI5 Web Components for React Issue Template" />
//       <AnalyticalTable
//         selectionMode={TableSelectionMode.SINGLE_SELECT}
//         selectionBehavior={TableSelectionBehavior.ROW_ONLY}
//         loading={false}
//         data={[{ test: 'custom row id' }]}
//         columns={columns}
//         visibleRows={10}
//         minRows={10}
//         reactTableOptions={{
//           getRowId: (row, relativeIndex, parent) => {
//             return `${row.test}`;
//           }
//         }}
//         selectedRowIds={{
//           ['notexistingrow']: true
//         }}
//       />
//     </ThemeProvider>
//   );
// };
//
// export const TestTable4 = () => {
//   const [expanded, setExpanded] = useState({});
//   return (
//     <>
//       <Button
//         onClick={() => {
//           setExpanded({ '0': true, '0.1': true });
//         }}
//       >
//         Expand
//       </Button>
//       <AnalyticalTable
//         selectionMode={TableSelectionMode.SINGLE_SELECT}
//         selectionBehavior={TableSelectionBehavior.ROW_ONLY}
//         loading={false}
//         data={dataTree}
//         columns={columns}
//         visibleRows={10}
//         minRows={10}
//         isTreeTable
//         reactTableOptions={{
//           useControlledState: (state) => {
//             return useMemo(
//               () => ({
//                 ...state,
//                 expanded
//               }),
//               [state, expanded]
//             );
//           }
//         }}
//       />
//     </>
//   );
// };
//
// export const TestTable5 = () => {
//   const columns = [
//     {
//       Header: 'Name',
//       accessor: 'name' // String-based value accessors!
//     },
//     {
//       Header: 'Age',
//       accessor: 'age',
//       hAlign: TextAlign.End,
//       disableGroupBy: true,
//       disableSortBy: false,
//       disableFilters: false,
//       className: 'superCustomClass'
//     },
//     {
//       Header: 'Friend Name',
//       accessor: 'friend.name'
//     }
//   ];
//   return (
//     <AnalyticalTable
//       data={data}
//       columns={columns}
//       visibleRows={10}
//       minRows={10}
//       columnOrder={['age', 'friend.name', 'name']}
//     />
//   );
// };
//
// export const TestTable6 = () => {
//   return (
//     <AnalyticalTable
//       selectionMode={TableSelectionMode.MULTI_SELECT}
//       selectionBehavior={TableSelectionBehavior.ROW}
//       onRowSelected={(e) => {
//         console.log('event', e.detail);
//       }}
//       data={data}
//       columns={columns}
//       visibleRows={10}
//       minRows={10}
//       reactTableOptions={{ manualRowSelectedKey: 'selectMe' }}
//     />
//   );
// };

const columns2 = new Array(1000).fill(null).map((_, index) => ({
  Header: `Header${index}`,
  accessor: ['name', 'age', 'friend.name', 'friend.age'][index % 4],
  id: index,
  width: 200
}));
export const TableWithManyColumns = () => {
  return <AnalyticalTable data={data} columns={columns2} visibleRows={10} minRows={10} />;
};
