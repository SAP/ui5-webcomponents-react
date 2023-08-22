// import {
//   AnalyticalTable,
//   FlexBox,
//   FlexBoxAlignItems,
//   FlexBoxDirection,
//   FlexBoxJustifyContent,
//   TableVisibleRowCountMode,
//   TableSelectionBehavior,
//   TableSelectionMode,
//   Text,
//   ThemeProvider
// } from '@ui5/webcomponents-react';
// import React from 'react';
// import { AnalyticalTableSubComponentsBehavior } from '../../enums/index.js';
// import dataTree from '@sb/mockData/FriendsTree.json';
//
// export default function App() {
//   const renderRowSubComponent = (row) => {
//     // console.log(row);
//     // if (row.originalSubRows[0]?.title) {
//     return (
//       <FlexBox
//         style={{ backgroundColor: 'lightblue', height: `${row.originalSubRows[0]?.height ?? 100}px` }}
//         justifyContent={FlexBoxJustifyContent.Center}
//         alignItems={FlexBoxAlignItems.Center}
//         direction={FlexBoxDirection.Column}
//       >
//         <Text>{row.originalSubRows[0]?.title}</Text>
//       </FlexBox>
//     );
//     // }
//   };
//
//   return (
//     <div className="App">
//       <ThemeProvider>
//         <div style={{ overflow: 'hidden' }}>
//           <AnalyticalTable
//             style={{ height: '600px' }}
//             adjustTableHeightOnPopIn
//             data={dataTree}
//             columns={[
//               {
//                 Header: 'Row ID',
//                 accessor: 'name'
//               },
//               {
//                 Header: 'Title',
//                 accessor: 'age'
//               }
//             ]}
//             visibleRows={6}
//             isTreeTable
//             visibleRowCountMode={TableVisibleRowCountMode.Auto}
//             alternateRowColor={true}
//             selectionMode={TableSelectionMode.MultiSelect}
//             selectionBehavior={TableSelectionBehavior.RowSelector}
//             renderRowSubComponent={renderRowSubComponent}
//             alwaysShowSubComponent={true}
//             // subComponentsBehavior={AnalyticalTableSubComponentsBehavior.Visible}
//           />
//         </div>
//       </ThemeProvider>
//     </div>
//   );
// }

export default function App() {
  return null;
}
