import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,r}from"./react-fLZJfuRT.js";import{_ as i,d as a,r as o}from"./blocks-Dpdc-KY2.js";import{t as s,u as c,v as l,y as u}from"./components-DfVAzoCK.js";import{d,r as f}from"./AnalyticalTableHooks.stories-DwoGqXTZ.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{title:`Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells`}),`
`,(0,h.jsx)(t.h1,{id:`analyticaltable-plugin-useannounceemptycells`,children:`AnalyticalTable Plugin: useAnnounceEmptyCells`}),`
`,(0,h.jsx)(l,{moduleName:`useAnnounceEmptyCells`,packageName:`@ui5/webcomponents-react/AnalyticalTableHooks`}),`
`,(0,h.jsxs)(t.p,{children:[`The `,(0,h.jsx)(t.code,{children:`useAnnounceEmptyCells`}),` plugin hook adds screen reader announcements for empty cells.`]}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`Note:`}),` Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells.`]}),`
`,(0,h.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,h.jsx)(o,{sourceState:`none`,of:f}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-jsx`,children:`const tableHooks = [useAnnounceEmptyCells] // this array should be memoized

<AnalyticalTable
  data={data}
  columns={columns}
  visibleRows={5}
  tableHooks={tableHooks}
/>
`})}),`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`First data entry with empty values or undefined fields:`})}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-js`,children:`{
  age: undefined,
  friend: {
    name: '',
    age: 0
  },
  status: 'Error'
}
`})}),`
`,(0,h.jsx)(c,{})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),r(),u(),i(),s(),d()})))()}g();export{m as default};