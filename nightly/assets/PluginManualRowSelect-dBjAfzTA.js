import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,r}from"./react-fLZJfuRT.js";import{_ as i,d as a,r as o}from"./blocks-DlSYZzFD.js";import{t as s,u as c,v as l,y as u}from"./components-CHwaeZBs.js";import{d,o as f}from"./AnalyticalTableHooks.stories-BonTk4zh.js";function p(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{title:`Data Display / AnalyticalTable / Plugin Hooks / useManualRowSelect`}),`
`,(0,h.jsx)(t.h1,{id:`analyticaltable-plugin-usemanualrowselect`,children:`AnalyticalTable Plugin: useManualRowSelect`}),`
`,(0,h.jsx)(l,{moduleName:`useManualRowSelect`,packageName:`@ui5/webcomponents-react/AnalyticalTableHooks`}),`
`,(0,h.jsxs)(t.p,{children:[`The `,(0,h.jsx)(t.code,{children:`useManualRowSelect`}),` plugin hook allows controlling the selected rows manually. It accepts a parameter (`,(0,h.jsx)(t.code,{children:`manualRowSelectedKey`}),`) which defaults to `,(0,h.jsx)(t.code,{children:`isSelected`}),`.
If this key is found on the original data row, and it is `,(0,h.jsx)(t.code,{children:`true`}),`, this row will be manually selected.`]}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`Note:`}),` This hook sets `,(0,h.jsx)(t.code,{children:`autoResetSelectedRows`}),` to `,(0,h.jsx)(t.code,{children:`false`}),` by default unless explicitly defined via `,(0,h.jsx)(t.code,{children:`reactTableOptions`}),`. `,(0,h.jsx)(t.a,{href:`?path=/docs/data-display-analyticaltable-faq--docs#how-to-stop-the-table-state-from-automatically-resetting-when-the-data-changes`,children:`Learn more`})]}),`
`,(0,h.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,h.jsx)(o,{sourceState:`none`,of:f}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`// you could also omit the \`'isSelected'\`, as this is the default value
const tableHooks = [AnalyticalTableHooks.useManualRowSelect('isSelected')]; // should be memoized

function TableComponent({ initialData, columns }) {
  const tableInstanceRef = useRef<AnalyticalTableInstance>(null);
  const handleToggle = () => {
    tableInstanceRef.current?.toggleRowSelected('0');
  };
  const [data, toggleSecondRowSelected] = useReducer((prev) => {
    const newData = [...prev];
    newData[1] = { ...prev[1], isSelected: !prev[1].isSelected };
    return newData;
  }, initialData);

  return (
    <>
      <Button onClick={handleToggle}>Toggle selection of 1st row</Button>
      <Button onClick={toggleSecondRowSelected}>
        Toggle selection of 2nd row via data update (slow with large datasets)
      </Button>
      <AnalyticalTable
        selectionMode={AnalyticalTableSelectionMode.Multiple}
        data={data}
        columns={columns}
        tableHooks={tableHooks}
        tableInstance={tableInstanceRef}
      />
    </>
  );
}
`})}),`
`,(0,h.jsx)(c,{})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),r(),u(),i(),s(),d()})))()}g();export{m as default};