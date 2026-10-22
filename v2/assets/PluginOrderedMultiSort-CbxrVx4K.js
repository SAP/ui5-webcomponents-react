import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,r}from"./react-fLZJfuRT.js";import{_ as i,d as a,r as o}from"./blocks-CZIRCK8E.js";import{b as s,t as c,u as l,v as u,y as d}from"./components-C8vqF8qp.js";import{c as f,d as p}from"./AnalyticalTableHooks.stories-BjiFswbq.js";function m(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{title:`Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort`}),`
`,(0,g.jsx)(t.h1,{id:`analyticaltable-plugin-useorderedmultisort`,children:`AnalyticalTable Plugin: useOrderedMultiSort`}),`
`,(0,g.jsx)(u,{moduleName:`useOrderedMultiSort`,packageName:`@ui5/webcomponents-react/AnalyticalTableHooks`}),`
`,(0,g.jsxs)(t.p,{children:[`With the `,(0,g.jsx)(t.code,{children:`useOrderedMultiSort`}),` it's possible to define the sorting priority if multi-sort is enabled for the respective columns (`,(0,g.jsx)(t.code,{children:`enableMultiSort: true`}),`).`]}),`
`,(0,g.jsx)(t.p,{children:`It receives one parameter that defines the sorting priority by the column id.`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.code,{children:`orderedIds: string[]`}),`: Defines the sort priority when sorting by multiple columns, starting with the first column ID.`]}),`
`]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:`Note:`}),` Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column.`]}),`
`,(0,g.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,g.jsx)(o,{sourceState:`none`,of:f}),`
`,(0,g.jsx)(t.h3,{id:`current-parameter`,children:`Current Parameter`}),`
`,(0,g.jsx)(s,{of:f,hideHTMLPropsNote:!0,include:[`orderedIds`]}),`
`,(0,g.jsx)(t.h3,{id:`code`,children:`Code`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-jsx`,children:`const columns = [
  {
    Header: 'Name',
    accessor: 'name',
    enableMultiSort: true
  },
  {
    Header: 'Age',
    accessor: 'age',
    enableMultiSort: true
  },
  {
    Header: 'Name 2',
    accessor: 'name2',
    enableMultiSort: true
  },
  {
    Header: 'Age 2',
    accessor: 'age2',
    enableMultiSort: true
  }
];
const data = [
  { name: 'Peter', age: 40, name2: 'Alissa', age2: 18 },
  { name: 'Kristen', age: 40, name2: 'Randolph', age2: 21 },
  { name: 'Peter', age: 30, name2: 'Rose', age2: 90 },
  { name: 'Peter', age: 70, name2: 'Rose', age2: 22 },
  { name: 'Kristen', age: 60, name2: 'Willis', age2: 80 },
  { name: 'Kristen', age: 20, name2: 'Alissa', age2: 80 },
  { name: 'Graham', age: 40, name2: 'Alissa', age2: 80 },
  { name: 'Peter', age: 65, name2: 'Rose', age2: 26 },
  { name: 'Graham', age: 65, name2: 'Rose', age2: 26 },
  { name: 'Graham', age: 65, name2: 'Willis', age2: 26 },
  { name: 'Graham', age: 62, name2: 'Willis', age2: 26 }
];
const orderedIds = ['name', 'name2', 'age', 'age2'];
const tableHooks = [useOrderedMultiSort(orderedIds)]; // should be memoized
const TableComponent = () => {
  return (
    <AnalyticalTable
      columns={columns}
      data={data}
      sortable
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,(0,g.jsx)(l,{})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),d(),i(),c(),p()})))()}_();export{h as default};