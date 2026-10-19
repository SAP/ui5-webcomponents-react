import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{f as t,o as n}from"./AnalyticalTable.stories-WT5n7r0q.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{n as i,t as a}from"./MessageStrip-QEYtOLFz.js";import{i as o,r as s}from"./react-fLZJfuRT.js";import{_ as c,d as l,r as u}from"./blocks-BSPOX0ie.js";import{g as d,t as f,u as p}from"./components-BHJ_1NFA.js";function m(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...o(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l,{title:`Data Display / AnalyticalTable / FAQ`}),`
`,(0,g.jsx)(t.h1,{id:`analyticaltable-faq`,children:`AnalyticalTable FAQ`}),`
`,(0,g.jsx)(d,{}),`
`,(0,g.jsx)(t.h2,{id:`why-is-the-analyticaltable-slower-in-development-mode`,children:`Why is the AnalyticalTable slower in development mode?`}),`
`,(0,g.jsxs)(t.p,{children:[`The `,(0,g.jsx)(t.code,{children:`AnalyticalTable`}),` (and other virtualized components) run somewhat slower in development mode than in production builds. This gap has been reduced significantly over time and is usually a minor annoyance rather than a blocker, but on slower machines or with very large datasets you may still notice it.`]}),`
`,(0,g.jsx)(t.p,{children:`If the difference is bothering you, the following tend to help:`}),`
`,(0,g.jsxs)(t.ol,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Test with production builds`}),` when working on performance-sensitive features — this also gives you accurate performance metrics.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Try Firefox or Safari for development`}),` — they have lighter debugger overhead in dev mode than Chromium-based browsers.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Close DevTools when not actively debugging`}),`, and consider disabling the React DevTools browser extension — both add overhead even when DevTools is closed.`]}),`
`]}),`
`,(0,g.jsxs)(t.p,{children:[`Beyond dev mode itself, general `,(0,g.jsx)(t.code,{children:`AnalyticalTable`}),` performance practices (memoizing `,(0,g.jsx)(t.code,{children:`columns`}),`, `,(0,g.jsx)(t.code,{children:`data`}),`, custom `,(0,g.jsx)(t.code,{children:`Cell`}),` components, etc.) apply equally in dev and prod — see the relevant sections in this FAQ and in the main documentation.`]}),`
`,(0,g.jsxs)(`details`,{children:[(0,g.jsx)(`summary`,{children:`Why dev mode is slower`}),(0,g.jsx)(t.p,{children:`Two main factors contribute:`}),(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`React's development build`}),` adds Strict Mode double-rendering, validation checks (hooks order, prop types, deprecated APIs), extended error messages, and development-only warnings. For a virtualized table that frequently mounts and unmounts cells while scrolling, this overhead adds up.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Browser debugger instrumentation`}),` in Chromium-based browsers (Chrome, Edge, Brave, etc.) instruments async operations via the V8 engine even when DevTools is closed. Firefox and Safari tend to be lighter in this regard.`]}),`
`]}),(0,g.jsxs)(t.p,{children:[`For the original investigation and detailed findings, see `,(0,g.jsx)(t.a,{href:`https://github.com/SAP/ui5-webcomponents-react/issues/8234`,rel:`nofollow`,children:`GitHub issue #8234`}),` — note that the numbers in that issue predate the performance improvements and should be read as historical context, not current behavior.`]})]}),`
`,(0,g.jsx)(t.h2,{id:`how-to-add-your-own-plugin-hooks`,children:`How to add your own plugin hooks?`}),`
`,(0,g.jsxs)(t.p,{children:[`The `,(0,g.jsx)(t.code,{children:`AnalyticalTable`}),` internally uses all plugin hooks of the `,(0,g.jsx)(t.a,{href:`https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/overview.md`,rel:`nofollow`,children:`react-table v7`}),` except for `,(0,g.jsx)(t.code,{children:`usePagination`}),` and hooks that change the layout.
If you pass a `,(0,g.jsx)(t.code,{children:`react-table`}),` hook to the `,(0,g.jsx)(t.code,{children:`tableHooks`}),` prop of the `,(0,g.jsx)(t.code,{children:`AnalyticalTable`}),` you will most likely experience some side effects or even break the table completely. We therefore strongly recommend to just not do it ;).
If you encounter a functionality that should be available with `,(0,g.jsx)(t.code,{children:`react-table`}),` hooks, but isn't in the `,(0,g.jsx)(t.code,{children:`AnalyticalTable`}),` please open an issue in GitHub.`]}),`
`,(0,g.jsx)(a,{type:`Warning`,hideCloseButton:!0,children:`Plugin hooks can manipulate the internal table instance. Please use with caution!`}),`
`,(0,g.jsx)(t.p,{children:`For adding custom plugin hooks you can use the following code snippet.`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-jsx`,children:`export const TableWithCustomHook = (props) => {
  const { data, columns } = props;
  const customHook = (hooks) => {
    hooks.useInstance.push((instance) => {
      console.log(instance);
    });
  };
  return <AnalyticalTable data={data} columns={columns} tableHooks={[customHook]} />;
};
`})}),`
`,(0,g.jsxs)(t.p,{children:[`With the `,(0,g.jsx)(t.code,{children:`customHook`}),` callback you can plugin in all available hooks. Please note that some hooks need a return value (e.g. `,(0,g.jsx)(t.code,{children:`columns`}),`) which is then always the first parameter of the function, and others are not allowed to return a value (e.g. `,(0,g.jsx)(t.code,{children:`useTable`}),`).
For further details please refer to the `,(0,g.jsxs)(t.a,{href:`https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/overview.md`,rel:`nofollow`,children:[(0,g.jsx)(t.code,{children:`react-table`}),` v7 documentation`]}),`.`]}),`
`,(0,g.jsx)(t.h2,{id:`how-to-select-rows-containing-active-elements`,children:`How to select rows containing active elements?`}),`
`,(0,g.jsxs)(t.p,{children:[`We've restricted the `,(0,g.jsx)(t.code,{children:`click`}),` events of UI5 Web Components elements such as `,(0,g.jsx)(t.code,{children:`Button`}),`, `,(0,g.jsx)(t.code,{children:`Link`}),`, `,(0,g.jsx)(t.code,{children:`Switch`}),`, etc. to not fire the `,(0,g.jsx)(t.code,{children:`onRowSelect`}),` or `,(0,g.jsx)(t.code,{children:`onRowClick`}),` events of the `,(0,g.jsx)(t.code,{children:`AnalyticalTable`}),`. This is to prevent unwanted selection or row click behavior when interacting with these elements.
In case you still want to select or click the row when clicking the respective element, you can "mark" the event to allow such behavior.`]}),`
`,(0,g.jsxs)(t.p,{children:[`Example: `,(0,g.jsx)(t.code,{children:`<Link onClick={(e) => {e.markerAllowTableRowSelection = true;}>My Link Text</Link>`})]}),`
`,(0,g.jsxs)(t.p,{children:[`For other elements or components, we recommend either disabling event propagation by calling `,(0,g.jsx)(t.code,{children:`event.stopPropagation()`}),` in the respective handler, or checking for the target. `,(0,g.jsx)(t.strong,{children:`Per default, propagation is not prevented!`})]}),`
`,(0,g.jsxs)(`details`,{children:[(0,g.jsx)(`summary`,{children:`UI5 Web Components that Block Row Selection by Default`}),(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsx)(t.li,{children:`UI5-AI-BUTTON`}),`
`,(0,g.jsx)(t.li,{children:`UI5-AI-PROMPT-INPUT`}),`
`,(0,g.jsx)(t.li,{children:`UI5-AVATAR`}),`
`,(0,g.jsx)(t.li,{children:`UI5-BUTTON`}),`
`,(0,g.jsx)(t.li,{children:`UI5-CALENDAR`}),`
`,(0,g.jsx)(t.li,{children:`UI5-CHECKBOX`}),`
`,(0,g.jsx)(t.li,{children:`UI5-COLOR-PICKER`}),`
`,(0,g.jsx)(t.li,{children:`UI5-COMBOBOX`}),`
`,(0,g.jsx)(t.li,{children:`UI5-DATE-PICKER`}),`
`,(0,g.jsx)(t.li,{children:`UI5-DATERANGE-PICKER`}),`
`,(0,g.jsx)(t.li,{children:`UI5-DATETIME-PICKER`}),`
`,(0,g.jsx)(t.li,{children:`UI5-DURATION-PICKER`}),`
`,(0,g.jsx)(t.li,{children:`UI5-DYNAMIC-DATE-RANGE`}),`
`,(0,g.jsx)(t.li,{children:`UI5-FILE-UPLOADER`}),`
`,(0,g.jsx)(t.li,{children:`UI5-ICON`}),`
`,(0,g.jsx)(t.li,{children:`UI5-INPUT`}),`
`,(0,g.jsx)(t.li,{children:`UI5-LINK`}),`
`,(0,g.jsx)(t.li,{children:`UI5-MENU-ITEM`}),`
`,(0,g.jsx)(t.li,{children:`UI5-MENU-ITEM-GROUP`}),`
`,(0,g.jsx)(t.li,{children:`UI5-MULTI-COMBOBOX`}),`
`,(0,g.jsx)(t.li,{children:`UI5-MULTI-INPUT`}),`
`,(0,g.jsx)(t.li,{children:`UI5-RADIO-BUTTON`}),`
`,(0,g.jsx)(t.li,{children:`UI5-RANGE-SLIDER`}),`
`,(0,g.jsx)(t.li,{children:`UI5-RATING-INDICATOR`}),`
`,(0,g.jsx)(t.li,{children:`UI5-SEGMENTED-BUTTON`}),`
`,(0,g.jsx)(t.li,{children:`UI5-SELECT`}),`
`,(0,g.jsx)(t.li,{children:`UI5-SLIDER`}),`
`,(0,g.jsx)(t.li,{children:`UI5-SPLIT-BUTTON`}),`
`,(0,g.jsx)(t.li,{children:`UI5-STEP-INPUT`}),`
`,(0,g.jsx)(t.li,{children:`UI5-SWITCH`}),`
`,(0,g.jsx)(t.li,{children:`UI5-TEXT-AREA`}),`
`,(0,g.jsx)(t.li,{children:`UI5-TIME-PICKER`}),`
`,(0,g.jsx)(t.li,{children:`UI5-TOGGLE-BUTTON`}),`
`,(0,g.jsx)(t.li,{children:`UI5-UPLOAD-COLLECTION`}),`
`]})]}),`
`,(0,g.jsx)(t.h2,{id:`how-to-stop-the-table-state-from-automatically-resetting-when-the-data-changes`,children:`How to stop the table state from automatically resetting when the data changes?`}),`
`,(0,g.jsxs)(t.p,{children:[`By default, the `,(0,g.jsx)(t.code,{children:`AnalyticalTable`}),` resets most table state whenever the `,(0,g.jsx)(t.code,{children:`data`}),` or `,(0,g.jsx)(t.code,{children:`columns`}),` reference changes.`]}),`
`,(0,g.jsx)(t.h3,{id:`what-resets-when`,children:`What resets when?`}),`
`,(0,g.jsxs)(t.p,{children:[`Each `,(0,g.jsx)(t.code,{children:`autoReset*`}),` option defaults to `,(0,g.jsx)(t.code,{children:`true`}),`. Most trigger on `,(0,g.jsx)(t.strong,{children:(0,g.jsx)(t.code,{children:`data`})}),` changes, but `,(0,g.jsx)(t.code,{children:`autoResetResize`}),` is the exception - it triggers on `,(0,g.jsx)(t.strong,{children:(0,g.jsx)(t.code,{children:`columns`})}),` changes.`]}),`
`,(0,g.jsxs)(`details`,{children:[(0,g.jsxs)(`summary`,{children:[`Full list of `,(0,g.jsx)(`code`,{children:`autoReset*`}),` options`]}),(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.th,{children:[(0,g.jsx)(t.code,{children:`reactTableOptions`}),` option`]}),(0,g.jsx)(t.th,{children:`Default`}),(0,g.jsx)(t.th,{children:`Resets on`}),(0,g.jsx)(t.th,{children:`What it resets`})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`autoResetSelectedRows`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`true`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`data`}),` change`]}),(0,g.jsxs)(t.td,{children:[`Row selection (`,(0,g.jsx)(t.code,{children:`selectedRowIds`}),`)`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`autoResetSortBy`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`true`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`data`}),` change`]}),(0,g.jsxs)(t.td,{children:[`Sort state (unless `,(0,g.jsx)(t.code,{children:`manualSortBy`}),`)`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`autoResetFilters`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`true`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`data`}),` change`]}),(0,g.jsxs)(t.td,{children:[`Filter state (unless `,(0,g.jsx)(t.code,{children:`manualFilters`}),`)`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`autoResetGlobalFilter`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`true`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`data`}),` change`]}),(0,g.jsxs)(t.td,{children:[`Global filter (unless `,(0,g.jsx)(t.code,{children:`manualGlobalFilter`}),`)`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`autoResetGroupBy`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`true`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`data`}),` change`]}),(0,g.jsxs)(t.td,{children:[`Grouping state (unless `,(0,g.jsx)(t.code,{children:`manualGroupBy`}),`)`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`autoResetExpanded`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`true`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`data`}),` change`]}),(0,g.jsx)(t.td,{children:`Expanded rows`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`autoResetHiddenColumns`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`true`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`data`}),` change`]}),(0,g.jsx)(t.td,{children:`Hidden columns`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`autoResetResize`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`true`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`columns`}),` change`]}),(0,g.jsx)(t.td,{children:`User-resized column widths`})]})]})]})]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:`Important:`}),` Column resize widths are never reset by `,(0,g.jsx)(t.code,{children:`data`}),` changes - only by `,(0,g.jsx)(t.code,{children:`columns`}),` changes. If you want to preserve user-resized widths across column changes, set `,(0,g.jsx)(t.code,{children:`autoResetResize: false`}),`.`]}),`
`,(0,g.jsxs)(t.h3,{id:`retaincolumnwidth-prop`,children:[(0,g.jsx)(t.code,{children:`retainColumnWidth`}),` prop`]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`retainColumnWidth`}),` is a separate mechanism from `,(0,g.jsx)(t.code,{children:`autoResetResize`}),`. It controls what happens on `,(0,g.jsx)(t.strong,{children:`container resizes`}),` (e.g., window resize):`]}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Without`}),` `,(0,g.jsx)(t.code,{children:`retainColumnWidth`}),`: A container resize clears user-resized column widths and triggers dynamic width recalculation.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`With`}),` `,(0,g.jsx)(t.code,{children:`retainColumnWidth`}),`: User-resized column widths are preserved across container resizes.`]}),`
`]}),`
`,(0,g.jsx)(t.h3,{id:`keeping-state-across-data-updates`,children:`Keeping state across data updates`}),`
`,(0,g.jsxs)(t.p,{children:[`To prevent automatic resets when updating data, set the corresponding `,(0,g.jsx)(t.code,{children:`autoReset*`}),` option to `,(0,g.jsx)(t.code,{children:`false`}),` in `,(0,g.jsx)(t.code,{children:`reactTableOptions`}),`. The ref-based flag shown below is optional - it avoids an unnecessary re-render by reading the flag during render instead of toggling state:`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-jsx`,children:`const [data, setData] = useState([])
const skipPageResetRef = useRef(false)

const updateData = newData => {
  // When data gets updated with this function, set a flag to disable all of the auto resetting
  skipPageResetRef.current = true

  setData(newData)
}

useEffect(() => {
  // After the table has updated, remove the flag
  skipPageResetRef.current = false
})
<AnalyticalTable
  columns={columns}
  data={data}
  // preserve user-resized widths across container resizes
  retainColumnWidth
  reactTableOptions={{
    // ... any other options you want to set
    autoResetHiddenColumns: !skipPageResetRef.current,
    autoResetExpanded: !skipPageResetRef.current,
    autoResetGroupBy: !skipPageResetRef.current,
    autoResetSelectedRows: !skipPageResetRef.current,
    autoResetSortBy: !skipPageResetRef.current,
    autoResetFilters: !skipPageResetRef.current,
    // resets on \`columns\` changes, not \`data\`
    autoResetResize: false,
  }}
/>
`})}),`
`,(0,g.jsxs)(t.p,{children:[`For more details on this behavior you can double check the `,(0,g.jsx)(t.a,{href:`https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/faq.md#how-do-i-stop-my-table-state-from-automatically-resetting-when-my-data-changes`,rel:`nofollow`,children:`react-table v7 docs`}),`.`]}),`
`,(0,g.jsx)(t.h2,{id:`how-to-scroll-to-a-specific-rowoffset`,children:`How to scroll to a specific row/offset?`}),`
`,(0,g.jsxs)(t.p,{children:[`The DOM instance of the `,(0,g.jsx)(t.code,{children:`AnalyticalTable`}),` exposes methods for scrolling to a specific index or offset. (You can access the DOM element e.g. by creating a Ref `,(0,g.jsx)(t.code,{children:`ref={analyticalTableRef}`}),`)`]}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsx)(t.li,{children:(0,g.jsx)(t.code,{children:`scrollTo: (offset: number, align?: 'start' | 'center' | 'end' | 'auto') => void`})}),`
`,(0,g.jsx)(t.li,{children:(0,g.jsx)(t.code,{children:`scrollToItem: (index: number, align?: 'start' | 'center' | 'end' | 'auto') => void`})}),`
`,(0,g.jsx)(t.li,{children:(0,g.jsx)(t.code,{children:`horizontalScrollTo: (offset: number, align?: 'start' | 'center' | 'end' | 'auto') => void`})}),`
`,(0,g.jsx)(t.li,{children:(0,g.jsx)(t.code,{children:`horizontalScrollToItem: (index: number, align?: 'start' | 'center' | 'end' | 'auto') => void`})}),`
`]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`offset`}),` is measured in `,(0,g.jsx)(t.code,{children:`px`}),` and `,(0,g.jsx)(t.code,{children:`index`}),` in rows. `,(0,g.jsx)(t.code,{children:`align`}),` places the item/offset at the corresponding position of the visible scroll area (`,(0,g.jsx)(t.code,{children:`'auto'`}),` brings the item/offset into the visible scroll area either at the start or end, depending on which is closer). The default value for `,(0,g.jsx)(t.code,{children:`align`}),` is `,(0,g.jsx)(t.code,{children:`'start'`}),`.`]}),`
`,(0,g.jsx)(t.h2,{id:`how-to-manually-sort-filter-or-group-the-table`,children:`How to manually sort, filter or group the table?`}),`
`,(0,g.jsxs)(t.p,{children:[`For e.g. server side sorting, filtering or grouping, the default behavior of the table can be prevented. When setting the following `,(0,g.jsx)(t.code,{children:`reactTableOption`}),` the event is still fired and the indicator still set, but the internal data stays the same.
If you wish to implement your own data manipulation outside the table you can use:`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-jsx`,children:`<AnalyticalTable
  ...
  reactTableOptions={{
    manualSortBy: true,
    manualFilters: true,
    manualGroupBy: true
  }}
/>
`})}),`
`,(0,g.jsxs)(t.p,{children:[`For more information please take a look at the `,(0,g.jsx)(t.a,{href:`https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/overview.md`,rel:`nofollow`,children:`React Table v7 docs`}),`.`]}),`
`,(0,g.jsxs)(t.h2,{id:`how-to-distinguish-between-onrowclick-and-onrowselect-on-selection-cell-click`,children:[`How to distinguish between `,(0,g.jsx)(t.code,{children:`onRowClick`}),` and `,(0,g.jsx)(t.code,{children:`onRowSelect`}),` on selection-cell click?`]}),`
`,(0,g.jsxs)(t.p,{children:[`When a selectable cell of the table is clicked, both `,(0,g.jsx)(t.code,{children:`onRowClick`}),` and `,(0,g.jsx)(t.code,{children:`onRowSelect`}),` are fired. Sometimes, but especially when the selection behavior is set to `,(0,g.jsx)(t.code,{children:`RowSelector`}),`, you don't want `,(0,g.jsx)(t.code,{children:`onRowClick`}),` to execute the logic you defined in your handler when clicking the selection-cell.
To achieve this, you can check the `,(0,g.jsx)(t.code,{children:`target`}),` inside the `,(0,g.jsx)(t.code,{children:`onRowClick`}),` handler for the `,(0,g.jsx)(t.code,{children:`data-selection-cell`}),` attribute contained in the `,(0,g.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset`,rel:`nofollow`,children:`dataset`}),` and only execute your logic if this property doesn't equal `,(0,g.jsx)(t.code,{children:`"true"`}),`.`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-js`,children:`// both events are fired if the clicked cell is selectable
const onRowClick = (e) => {
  if (e.target.dataset.selectionCell === 'true') {
    // do something if the selection cell is clicked
  } else {
    // do something if other cells than the selection cell are clicked
  }
};
const onRowSelect = (e) => {
  // do something on row select
};
`})}),`
`,(0,g.jsx)(t.h2,{id:`how-to-hide-columns`,children:`How to hide columns?`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.a,{href:`https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/useTable.md`,rel:`nofollow`,children:`React Table v7`}),` exposes an API on the table instance to hide columns. You can leverage it for example by attaching a React Ref to the `,(0,g.jsx)(t.code,{children:`tableInstance`}),` prop.
Please note that the internal react-table is resetting its hidden state after hiding the column, which is most probably a bug. To prevent this you can set the `,(0,g.jsx)(t.code,{children:`autoResetHiddenColumns`}),` table option to `,(0,g.jsx)(t.code,{children:`false`}),`. (See `,(0,g.jsx)(t.a,{href:`?path=/docs/data-display-analyticaltable--default-story#how-to-stop-the-table-state-from-automatically-resetting-when-the-data-changes`,children:`here`}),`)`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-jsx`,children:`  <Button
    onClick={() => {
      tableInstanceRef.current.toggleHideColumn("age");
    }}
  >
    Toggle Age Col
  </Button>
  <AnalyticalTable
    columns={COLUMNS}
    data={DATA}
    tableInstance={tableInstanceRef}
    reactTableOptions={{
      autoResetHiddenColumns: false
    }}
  />
`})}),`
`,(0,g.jsx)(t.h2,{id:`how-to-scale-custom-cells`,children:`How to scale custom cells?`}),`
`,(0,g.jsxs)(t.p,{children:[`Automatic scaling of custom cells is not supported when used with `,(0,g.jsx)(t.code,{children:`scaleWidthMode: AnalyticalTableScaleWidthMode.Grow`}),` or `,(0,g.jsx)(t.code,{children:`scaleWidthMode: AnalyticalTableScaleWidthMode.Smart`}),`, as we're using the text of the cell for our calculation.
Since v1.22.0 you can use the column option `,(0,g.jsx)(t.code,{children:`scaleWidthModeOptions`}),` to pass a string for the internal width calculation of the header cell (`,(0,g.jsx)(t.code,{children:`headerString`}),`) and the body cells (`,(0,g.jsx)(t.code,{children:`cellString`}),`).`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-jsx`,children:`const columns = [
  // This column is automatically scaled because the header and body cells consists of text content only.
  { Header: 'Text Content', accessor: 'name' },
  {
    accessor: 'age',
    // The header isn't included in the calculation of the column width, because it contains a custom component.
    Header: () => (
      <FlexBox direction={FlexBoxDirection.Column}>
        <Text wrapping={false}>Long header text in a vertical layout</Text>
        <Link>Click me!</Link>
      </FlexBox>
    ),
    scaleWidthModeOptions: {
      headerString: 'Long header text in a vertical layout'
    }
  },
  {
    id: '1',
    // The body cells aren't included in the calculation of the column width, because they contain a custom component.
    Header: 'Custom cell',
    Cell: () => (
      <FlexBox direction={FlexBoxDirection.Column}>
        <Text wrapping={false}>Long body cell text in a vertical layout</Text>
        <Link>Click me!</Link>
      </FlexBox>
    ),
    scaleWidthModeOptions: {
      cellString: 'Long body cell text in a vertical layout'
    }
  },
  {
    id: '2',
    // Neither the header nor the body cells are included in the calculation of the column width,
    // because they contain a custom component.
    Header: () => (
      <FlexBox direction={FlexBoxDirection.Column}>
        <Text wrapping={false}>Long header text in a vertical layout</Text>
        <Link>Click me!</Link>
      </FlexBox>
    ),
    Cell: () => (
      <FlexBox direction={FlexBoxDirection.Column}>
        <Text wrapping={false}>Long body cell text in a vertical layout</Text>
        <Link>Click me!</Link>
      </FlexBox>
    ),
    scaleWidthModeOptions: {
      headerString: 'Long header text in a vertical layout',
      cellString: 'Long body cell text in a vertical layout'
    }
  }
];
`})}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-jsx`,children:`<AnalyticalTable data={props.data} columns={columns} scaleWidthMode={AnalyticalTableScaleWidthMode.Smart} />
`})}),`
`,(0,g.jsx)(t.h2,{id:`how-to-render-active-components-dialogs-and-popovers-in-custom-cells`,children:`How to render active components, dialogs and popovers in custom cells?`}),`
`,(0,g.jsxs)(t.p,{children:[`The table implements `,(0,g.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/Event`,rel:`nofollow`,children:`Events`}),` for keyboard navigation, selection, etc. When rendering an active element inside a custom cell, the events of the elements are bubbling up to the table.
To prevent this you can call `,(0,g.jsx)(t.code,{children:`event.stopPropagation()`}),` inside the respective handler.`]}),`
`,(0,g.jsx)(t.p,{children:`Below you can find two examples of typical pain points:`}),`
`,(0,g.jsx)(t.h3,{id:`dialogs--popovers`,children:`Dialogs & Popovers`}),`
`,(0,g.jsxs)(t.p,{children:[`In general, we recommend mounting modals like Dialogs or Popovers outside the `,(0,g.jsx)(t.code,{children:`AnalyticalTable`}),`.
Still, it's possible to also render them inside a custom cell, but there are some things to consider:`]}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsx)(t.li,{children:`Use conditional rendering to prevent the modal from being rendered for every cell.`}),`
`,(0,g.jsxs)(t.li,{children:[`Call `,(0,g.jsx)(t.code,{children:`event.stopPropagation()`}),` in the respective handler of the event if you're facing issues with focus handling (`,(0,g.jsx)(t.code,{children:`onFocus`}),`), keyboard navigation (i.a. `,(0,g.jsx)(t.code,{children:`onKeyDown`}),`), etc.`]}),`
`]}),`
`,(0,g.jsxs)(t.p,{children:[`Here you can find an example of how to prevent the `,(0,g.jsx)(t.code,{children:`focus`}),` event from bubbling up:`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-jsx`,children:`const columns = [
  {
    id: 'custom',
    Header: 'Custom cell with button and dialog',
    Cell: () => {
      const [open, toggle] = useReducer((prev) => !prev, false);
      const uniqueId = useId();
      return (
        <>
          <Button onClick={toggle}>Open</Button>
          <Dialog
            open={open}
            initialFocus={uniqueId}
            onFocus={(e) => {
              e.stopPropagation();
            }}
          >
            <Input placeholder="Focus me!" id={uniqueId} />
          </Dialog>
        </>
      );
    }
  }
];
`})}),`
`,(0,g.jsx)(t.h3,{id:`inputs`,children:`Inputs`}),`
`,(0,g.jsxs)(t.p,{children:[`Per default the table stops event propagation for `,(0,g.jsx)(t.code,{children:`click`}),` events of ui5-webcomponent inputs. This is not the case for native inputs (`,(0,g.jsx)(t.code,{children:`<input>`}),`) or other events like `,(0,g.jsx)(t.code,{children:`key`}),` events.`]}),`
`,(0,g.jsxs)(t.p,{children:[`A typical case is moving the caret inside an input via the arrow keys, which will bubble up to the table if propagation isn't stopped.
In the example below, you can see how you could stop the `,(0,g.jsx)(t.code,{children:`keydown`}),` event from bubbling up to the table if arrow keys are pressed.`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-jsx`,children:`const columns = [
  {
    Header: 'Column with Inputs',
    id: 'inputs',
    Cell: () => {
      return (
        <Input
          onKeyDown={(e) => {
            if (e.key.startsWith('Arrow')) {
              e.stopPropagation();
            }
          }}
        />
      );
    }
  }
];
`})}),`
`,(0,g.jsx)(t.h2,{id:`how-to-initially-set-a-table-state`,children:`How to initially set a table state?`}),`
`,(0,g.jsxs)(t.p,{children:[`To initially select or expand a row; reorder, filter, group, hide or sort a column you can use the `,(0,g.jsx)(t.code,{children:`reactTableOptions.initialState`}),` object:`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-jsx`,children:`<AnalyticalTable
  {...otherProps}
  reactTableOptions={{
    initialState: {
      columnOrder: ['age', 'name'],
      filters: [{ id: 'age', value: '27' }],
      groupBy: ['age'],
      hiddenColumns: ['name'],
      selectedRowIds: { 2: true, 5: true, ['18.3']: true },
      sortBy: [
        {
          id: 'age',
          desc: true
        }
      ],
      expanded: {
        18: true,
        18.3: true
      }
    }
  }}
/>
`})}),`
`,(0,g.jsx)(t.h2,{id:`how-to-show-ellipsis-for-custom-cells`,children:`How to show ellipsis for custom Cells?`}),`
`,(0,g.jsx)(t.p,{children:(0,g.jsx)(t.strong,{children:`Applicable since v2.16.1`})}),`
`,(0,g.jsxs)(t.p,{children:[`When using custom `,(0,g.jsx)(t.code,{children:`Cell`}),` renderers, text truncation with ellipsis works automatically if you return a plain string. However, when rendering custom content, you need to handle ellipsis styling yourself.`]}),`
`,(0,g.jsx)(t.h3,{id:`automatic-ellipsis-plain-strings`,children:`Automatic Ellipsis (Plain Strings)`}),`
`,(0,g.jsxs)(t.p,{children:[`If your custom `,(0,g.jsx)(t.code,{children:`Cell`}),` renderer returns a plain string, ellipsis is ensured automatically:`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-jsx`,children:`const columns = [
  {
    Header: 'Name',
    accessor: 'name',
    Cell: ({ value }) => value // Plain string - ellipsis works automatically
  },
];
`})}),`
`,(0,g.jsx)(t.h3,{id:`manual-ellipsis-custom-elements`,children:`Manual Ellipsis (Custom Elements)`}),`
`,(0,g.jsx)(t.p,{children:`When rendering custom elements, you need to apply ellipsis styling:`}),`
`,(0,g.jsx)(t.h4,{id:`inline-content`,children:`Inline Content`}),`
`,(0,g.jsxs)(t.p,{children:[`Use the `,(0,g.jsx)(t.code,{children:`webComponentsReactProperties.classes.textEllipsis`}),` class for inline content that should truncate with ellipsis:`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-jsx`,children:`const columns = [
  {
    Header: 'Name',
    accessor: 'name',
    Cell: ({ value, webComponentsReactProperties }) => (
      <span
        className={webComponentsReactProperties.classes.textEllipsis}
        title={value} // Show full text on hover
      >
        {value}
      </span>
    ),
  },
];
`})}),`
`,(0,g.jsx)(t.h4,{id:`for-web-components-with-built-in-text-handling`,children:`For Web Components with Built-in Text Handling`}),`
`,(0,g.jsxs)(t.p,{children:[`Some Web Components like `,(0,g.jsx)(t.code,{children:`Text`}),` and `,(0,g.jsx)(t.code,{children:`Label`}),` handle text truncation internally and don't require the `,(0,g.jsx)(t.code,{children:`textEllipsis`}),` class:`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-jsx`,children:`import { Text } from '@ui5/webcomponents-react';

const columns = [
  {
    Header: 'Description',
    accessor: 'description',
    Cell: ({ value }) => (
      <Text maxLines={1}>{value}</Text> // Text component handles ellipsis internally
    ),
  },
];
`})}),`
`,(0,g.jsx)(t.h4,{id:`for-other-custom-components`,children:`For Other Custom Components`}),`
`,(0,g.jsx)(t.p,{children:`For multi-line content or custom components that don't handle ellipsis, truncation must be ensured by defining the styles yourself.`}),`
`,(0,g.jsx)(t.h3,{id:`example`,children:`Example`}),`
`,(0,g.jsxs)(`details`,{children:[(0,g.jsx)(`summary`,{children:`Show Example`}),(0,g.jsx)(u,{of:n})]}),`
`,(0,g.jsx)(`br`,{}),`
`,(0,g.jsx)(`br`,{}),`
`,(0,g.jsx)(p,{})]})}function h(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=r(),s(),f(),c(),i(),t()})))()}_();export{h as default};