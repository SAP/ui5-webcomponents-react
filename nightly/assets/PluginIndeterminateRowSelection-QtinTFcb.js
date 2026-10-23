import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./MessageStrip-BkCnOGMm.js";import{i,r as a}from"./react-fLZJfuRT.js";import{_ as o,d as s,r as c}from"./blocks-yOUxazR9.js";import{t as l,u,v as d,y as f}from"./components-Ca6LGLpj.js";import{a as p,d as m}from"./AnalyticalTableHooks.stories-DbmSyy2x.js";function h(e){let t={code:`code`,h1:`h1`,h2:`h2`,h4:`h4`,p:`p`,pre:`pre`,strong:`strong`,...i(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s,{title:`Data Display / AnalyticalTable / Plugin Hooks / useIndeterminateRowSelection`}),`
`,(0,_.jsx)(t.h1,{id:`analyticaltable-plugin-useindeterminaterowselection`,children:`AnalyticalTable Plugin: useIndeterminateRowSelection`}),`
`,(0,_.jsx)(d,{moduleName:`useIndeterminateRowSelection`,packageName:`@ui5/webcomponents-react/AnalyticalTableHooks`}),`
`,(0,_.jsxs)(t.p,{children:[`The `,(0,_.jsx)(t.code,{children:`useIndeterminateRowSelection`}),` plugin hook allows marking parent rows as indeterminate when a child row is selected.
When using this hook, it is recommended to also select all sub-rows when selecting a row. (`,(0,_.jsx)(t.code,{children:`reactTableOptions={{ selectSubRows: true }}`}),`)`]}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.strong,{children:`Note:`}),` This hook has to traverse the whole data tree on each selection, which can lead to performance degradation with large datasets. Please use with caution!`]}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.strong,{children:`Note:`}),` Using this hook in combination with the deprecated `,(0,_.jsx)(t.code,{children:`useRowDisableSelection`}),` plugin hook is not supported!`]}),`
`,(0,_.jsx)(r,{hideCloseButton:!0,children:(0,_.jsxs)(_.Fragment,{children:[`The indeterminate state has a higher priority than the selected state. Therefore, a row can be selected and indeterminate at the same time. This can for example happen, if `,(0,_.jsx)(t.code,{children:`selectSubRows: true`}),` is set and a row with sub-rows is selected and then a sub-row is unselected.`]})}),`
`,(0,_.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,_.jsx)(c,{sourceState:`none`,of:p}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-jsx`,children:`const tableHooks = [useIndeterminateRowSelection()]; // should be memoized

<AnalyticalTable
  selectionMode={AnalyticalTableSelectionMode.Multiple}
  data={data}
  columns={columns}
  isTreeTable
  tableHooks={tableHooks}
  reactTableOptions={{ selectSubRows: true }}
/>
`})}),`
`,(0,_.jsx)(t.h4,{id:`optional-function-parameter`,children:`Optional function parameter`}),`
`,(0,_.jsx)(t.p,{children:`The plugin hook allows passing a callback as parameter with the following structure:`}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-js`,children:`({indeterminateRowsById, tableInstance}) => void;
`})}),`
`,(0,_.jsxs)(t.p,{children:[`The callback is fired, every time the internal `,(0,_.jsx)(t.code,{children:`indeterminateRows`}),` state is changed.
The event parameter is an object, with all indeterminate rows by id (e.g. `,(0,_.jsx)(t.code,{children:`{"0.1":true}`}),`) and the table instance.`]}),`
`,(0,_.jsx)(u,{})]})}function g(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),a(),f(),o(),l(),n(),m()})))()}v();export{g as default};