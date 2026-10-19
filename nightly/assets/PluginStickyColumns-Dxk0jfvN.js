import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,r}from"./react-fLZJfuRT.js";import{_ as i,d as a,r as o}from"./blocks-BSPOX0ie.js";import{h as s,m as c,t as l,u,v as d,y as f}from"./components-BHJ_1NFA.js";import{d as p,l as m,u as h}from"./AnalyticalTableHooks.stories-Df7ynSqb.js";function g(e){let t={blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{title:`Data Display / AnalyticalTable / Plugin Hooks / useStickyColumns`,tags:[`experimental`]}),`
`,(0,v.jsxs)(t.h1,{id:`analyticaltable-plugin-usestickycolumns-`,children:[`AnalyticalTable Plugin: useStickyColumns `,(0,v.jsx)(c,{type:`experimental`})]}),`
`,(0,v.jsx)(d,{moduleName:`useStickyColumns`,packageName:`@ui5/webcomponents-react/AnalyticalTableHooks`}),`
`,(0,v.jsxs)(t.p,{children:[`The `,(0,v.jsx)(t.code,{children:`useStickyColumns`}),` plugin hook freezes columns to the start of the table so they stay pinned while the remaining columns scroll horizontally.`]}),`
`,(0,v.jsxs)(t.blockquote,{children:[`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.strong,{children:`Note:`}),` This feature is `,(0,v.jsx)(t.strong,{children:`experimental`}),` — its API and behavior may change without notice.`]}),`
`]}),`
`,(0,v.jsxs)(t.p,{children:[`Set `,(0,v.jsx)(t.code,{children:`sticky: 'start'`}),` on a column to seed the initial frozen state. `,(0,v.jsx)(t.code,{children:`state.stickyColumns`}),` is the source of truth afterwards, so at runtime you freeze/unfreeze columns either through the column header popover ("Freeze Column" / "Unfreeze Column") or programmatically via the table instance:`]}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.code,{children:`tableInstance.current.toggleStickyColumn(columnId)`})}),`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.code,{children:`tableInstance.current.setStickyColumns(columnIds | (old) => columnIds)`})}),`
`]}),`
`,(0,v.jsxs)(t.p,{children:[`Grouped columns are pinned automatically. The hook auto-disables the sticky `,(0,v.jsx)(t.em,{children:`rendering`}),` when the container is too narrow to fit the frozen columns plus a usable scrollable area, and re-enables it once the container grows again. The frozen-set config (`,(0,v.jsx)(t.code,{children:`state.stickyColumns`}),`) is `,(0,v.jsx)(t.strong,{children:`kept`}),` across auto-disable, so pins are not lost on resize — this matters for user-resizable containers such as dialogs or splitters, where reverting the order on every threshold crossing would be jarring.`]}),`
`,(0,v.jsxs)(t.p,{children:[`While auto-disabled, a frozen column that is not the first column stays hoisted to the start as an ordinary (unfrozen) column. To revert its order when there is not enough room, toggle its sticky state off (via the popover or `,(0,v.jsx)(t.code,{children:`toggleStickyColumn`}),`).`]}),`
`,(0,v.jsxs)(t.p,{children:[`Set `,(0,v.jsx)(t.code,{children:`disableSticky: true`}),` on a column to remove its "Freeze Column" / "Unfreeze Column" popover entry.`]}),`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`Limitations:`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`renderRowSubComponent`}),` and `,(0,v.jsx)(t.code,{children:`responsivePopIn`}),` are not supported.`]}),`
`,(0,v.jsxs)(t.li,{children:[`Sticky mode makes the table body the single scroll container, so it shows the `,(0,v.jsx)(t.strong,{children:`browser's native scrollbar`}),` rather than the custom styled scrollbar used elsewhere.`]}),`
`,(0,v.jsxs)(t.li,{children:[`Currently only `,(0,v.jsx)(t.code,{children:`sticky: 'start'`}),` is supported (no `,(0,v.jsx)(t.code,{children:`'end'`}),`).`]}),`
`]}),`
`,(0,v.jsx)(t.p,{children:`The hook accepts an options object with two optional callbacks:`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`onStickyColumnsChange`}),` fires `,(0,v.jsx)(t.strong,{children:`only`}),` when a column is frozen/unfrozen via the header popover — programmatic pinning (`,(0,v.jsx)(t.code,{children:`toggleStickyColumn`}),`/`,(0,v.jsx)(t.code,{children:`setStickyColumns`}),`) does not trigger it, since the app already controls those calls. Its `,(0,v.jsx)(t.code,{children:`detail`}),` object:`]}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`column`}),`: the column that was frozen or unfrozen.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`sticky`}),`: `,(0,v.jsx)(t.code,{children:`true`}),` if the column is now frozen, `,(0,v.jsx)(t.code,{children:`false`}),` if it was unfrozen.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`stickyColumns`}),`: the resulting list of user-frozen column ids after the toggle.`]}),`
`]}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`onAutoToggleSticky`}),` fires when the sticky rendering auto-disables because the container became too narrow, and again when it re-enables. The frozen set itself is unchanged; use it to reflect the state change in the UI (e.g. a toast). Its `,(0,v.jsx)(t.code,{children:`detail`}),` object:`]}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`enabled`}),`: `,(0,v.jsx)(t.code,{children:`true`}),` if sticky rendering is now active (columns fit), `,(0,v.jsx)(t.code,{children:`false`}),` if auto-disabled.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`stickyColumns`}),`: the current user-frozen column ids (unchanged by the auto-toggle).`]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,v.jsx)(o,{sourceState:`none`,of:m}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-jsx`,children:`const columns = [
  { Header: 'Name', accessor: 'name', sticky: 'start', width: 300 }, // seeds the initial frozen state
  { Header: 'Age', accessor: 'age', width: 500 },
  { Header: 'Friend Name', accessor: 'friend.name', width: 1000 },
  { Header: 'Friend Age', accessor: 'friend.age', width: 500 },
];

const TableComponent = (props) => {
  // Fired only when a column is frozen/unfrozen via the header popover, not on programmatic toggling.
  const tableHooks = useMemo(
    () => [
      useStickyColumns({
        onStickyColumnsChange: (detail) => {
          console.log(detail.column, detail.sticky, detail.stickyColumns);
        },
      }),
    ],
    [],
  );

  return <AnalyticalTable data={props.data} columns={columns} sortable filterable groupable tableHooks={tableHooks} />;
};
`})}),`
`,(0,v.jsx)(t.h2,{id:`resizable-container`,children:`Resizable container`}),`
`,(0,v.jsxs)(t.p,{children:[`Sticky rendering auto-disables when the container is too narrow and re-enables when it grows; use `,(0,v.jsx)(t.code,{children:`onAutoToggleSticky`}),` to react to that transition (here, a toast). There are two strategies for the too-narrow case:`]}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Default — keep the frozen set.`}),` The pins persist across auto-disable, so a non-first frozen column stays hoisted to the start (unfrozen) and re-freezes automatically when the container grows again. Best for user-resizable containers, where reverting the order on every threshold crossing would be jarring.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Clear when too narrow.`}),` Call `,(0,v.jsx)(t.code,{children:`setStickyColumns([])`}),` from the `,(0,v.jsx)(t.code,{children:`onAutoToggleSticky`}),` disabled branch to drop the pins and revert the column order. Re-freeze via the column header when there is room again.`]}),`
`]}),`
`,(0,v.jsx)(t.p,{children:`Toggle the button above the table in the example below to compare both.`}),`
`,(0,v.jsx)(o,{sourceState:`none`,of:h}),`
`,(0,v.jsxs)(`details`,{children:[(0,v.jsx)(`summary`,{children:`Default — the frozen set is kept on auto-disable`}),(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-jsx`,children:`const TableComponentDefault = (props) => {
  const [toastOpen, setToastOpen] = useState(false);
  const [toastText, setToastText] = useState('');

  const tableHooks = useMemo(
    () => [
      useStickyColumns({
        onAutoToggleSticky: ({ enabled }) => {
          setToastText(enabled ? 'Sticky columns re-enabled' : 'Sticky columns disabled — container too narrow');
          setToastOpen(true);
        },
      }),
    ],
    [],
  );

  const columns = useMemo(
    () => [
      { Header: 'Name', accessor: 'name', width: 200 },
      { Header: 'Age', accessor: 'age', width: 200 },
      { Header: 'Friend Name', accessor: 'friend.name', sticky: 'start', width: 300 }, // a non-first frozen column
      { Header: 'Friend Age', accessor: 'friend.age', width: 300 },
    ],
    [],
  );

  return (
    <>
      <div style={{ resize: 'horizontal', overflow: 'auto', width: 600, minWidth: 150, maxWidth: 900 }}>
        <AnalyticalTable data={props.data} columns={columns} tableHooks={tableHooks} />
      </div>
      <Toast open={toastOpen} onClose={() => setToastOpen(false)}>
        {toastText}
      </Toast>
    </>
  );
};
`})})]}),`
`,(0,v.jsxs)(`details`,{children:[(0,v.jsx)(`summary`,{children:`Clear the sticky columns when too narrow (reverts the column order)`}),(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-jsx`,children:`const TableComponentAutoClear = (props) => {
  const tableInstanceRef = useRef(null);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastText, setToastText] = useState('');

  const tableHooks = useMemo(
    () => [
      useStickyColumns({
        onAutoToggleSticky: ({ enabled }) => {
          if (!enabled) {
            tableInstanceRef.current?.setStickyColumns([]); // drop the pins → columns revert to defined order
            setToastText('Not enough space — sticky columns cleared (re-freeze via the header)');
          } else {
            setToastText('Sticky columns re-enabled');
          }
          setToastOpen(true);
        },
      }),
    ],
    [],
  );

  const columns = useMemo(
    () => [
      { Header: 'Name', accessor: 'name', width: 200 },
      { Header: 'Age', accessor: 'age', width: 200 },
      { Header: 'Friend Name', accessor: 'friend.name', sticky: 'start', width: 300 },
      { Header: 'Friend Age', accessor: 'friend.age', width: 300 },
    ],
    [],
  );

  return (
    <>
      <div style={{ resize: 'horizontal', overflow: 'auto', width: 600, minWidth: 150, maxWidth: 900 }}>
        <AnalyticalTable tableInstance={tableInstanceRef} data={props.data} columns={columns} tableHooks={tableHooks} />
      </div>
      <Toast open={toastOpen} onClose={() => setToastOpen(false)}>
        {toastText}
      </Toast>
    </>
  );
};
`})})]}),`
`,(0,v.jsx)(u,{})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=t(),r(),f(),i(),l(),s(),p()})))()}y();export{_ as default};