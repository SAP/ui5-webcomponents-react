import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,r}from"./react-fLZJfuRT.js";import{_ as i,d as a,r as o}from"./blocks-BD0bJBIM.js";import{t as s,u as c,v as l,y as u}from"./components-C7NATuQn.js";import{d,i as f}from"./AnalyticalTableHooks.stories-Bfw9qukk.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{title:`Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection`}),`
`,(0,h.jsx)(t.h1,{id:`analyticaltable-plugin-userowdisableselection`,children:`AnalyticalTable Plugin: useRowDisableSelection`}),`
`,(0,h.jsx)(l,{moduleName:`useRowDisableSelection`,packageName:`@ui5/webcomponents-react/AnalyticalTableHooks`}),`
`,(0,h.jsx)(`hr`,{}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`Deprecated!`}),` It is not recommended to disable table rows, mainly because of the following reasons:`]}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`Users are not informed why items cannot be selected.`}),`
`,(0,h.jsx)(t.li,{children:`ARIA lacks built-in support for selective item selection, complicating accessibility.`}),`
`,(0,h.jsx)(t.li,{children:`Consistency to other applications which do not offer disabled items.`}),`
`]}),`
`,(0,h.jsx)(`hr`,{}),`
`,(0,h.jsxs)(t.p,{children:[`With the `,(0,h.jsx)(t.code,{children:`useRowDisableSelection`}),` it's possible to disable the selection of specific rows. It can receive two types of parameters:`]}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`string`}),`: Defines the key in the dataset for disabling rows. If the value of the key is `,(0,h.jsx)(t.code,{children:`true`}),`, then the row will not be selectable.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`Function(row) => boolean`}),`: Programmatically disable rows for selection. The function receives the current row as parameter.`]}),`
`]}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`Note:`}),` The "Select All" checkbox is not available with this hook.`]}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`Note:`}),` Using this hook in combination with the `,(0,h.jsx)(t.code,{children:`useIndeterminateRowSelection`}),` hook is not supported!`]}),`
`,(0,h.jsx)(o,{sourceState:`none`,of:f}),`
`,(0,h.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-jsx`,children:`const disableRowFunc = (row) => row.original.age < 40;
const tableHooks = [useRowDisableSelection(disableRowFunc)]; // this array should be memoized

const WithFunctionParameter = () => {

  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      selectionMode={AnalyticalTableSelectionMode.Multiple}
      tableHooks={tableHooks}
    />
  );
};

`})}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-jsx`,children:`const data = [
  {
    name: "Peter Franco",
    age: 22,
    //...
    disableSelection: Math.random() < 0.5,
  },
  //...
];
const tableHooks = [useRowDisableSelection("disableSelection")]; // this array should be memoized

const WithStringParameter = () => {
  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      selectionMode={AnalyticalTableSelectionMode.Multiple}
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,(0,h.jsx)(c,{})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),r(),u(),i(),s(),d()})))()}g();export{m as default};