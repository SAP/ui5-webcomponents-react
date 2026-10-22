import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,r}from"./react-fLZJfuRT.js";import{_ as i,d as a,r as o}from"./blocks-DnnW7All.js";import{t as s,u as c,v as l,y as u}from"./components-BFu365ZV.js";import{d,s as f}from"./AnalyticalTableHooks.stories-Ic1I-hYs.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{title:`Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize`}),`
`,(0,h.jsx)(t.h1,{id:`analyticaltable-plugin-useoncolumnresize`,children:`AnalyticalTable Plugin: useOnColumnResize`}),`
`,(0,h.jsx)(l,{moduleName:`useOnColumnResize`,packageName:`@ui5/webcomponents-react/AnalyticalTableHooks`}),`
`,(0,h.jsxs)(t.p,{children:[`The `,(0,h.jsx)(t.code,{children:`useOnColumnResize`}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,(0,h.jsx)(t.code,{children:`e: { columnWidth: number; header: Record<string, any> }) => void;`}),`), the second one are the optional `,(0,h.jsx)(t.code,{children:`options`}),` for controlling how often the callback should fire.`]}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`options`}),`:`]}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`liveUpdate`}),`: If `,(0,h.jsx)(t.code,{children:`liveUpdate`}),` is `,(0,h.jsx)(t.code,{children:`true`}),`, the resize function will fire every time the width has changed depending on the `,(0,h.jsx)(t.code,{children:`options.wait`}),` delay.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`wait`}),`: The number of milliseconds for which the calls are to be delayed. `,(0,h.jsxs)(t.strong,{children:[`Defaults to `,(0,h.jsx)(t.code,{children:`100`})]}),`. (Only has an effect if `,(0,h.jsx)(t.code,{children:`liveUpdate`}),` is `,(0,h.jsx)(t.code,{children:`true`}),`)`]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,h.jsx)(o,{sourceState:`none`,of:f}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-jsx`,children:`const TableComponent = (props) => {
  const handleColumResize = useCallback((e) => {
    console.log(e.columnWidth, e.header);
  }, []);

  const tableHooks = useMemo(
    () => [
      useOnColumnResize(handleColumResize, {
        liveUpdate: false,
        wait: 100,
      }),
    ],
    [handleColumResize],
  );

  return (
    <AnalyticalTable
      data={props.data}
      columns={props.columns}
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,(0,h.jsx)(c,{})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),r(),u(),i(),s(),d()})))()}g();export{m as default};