import{j as e}from"./jsx-runtime-5926aa06.js";import"./DomRefTable.module-8a800f77.js";import{M as i}from"./chunk-PCJTTTQV-74adf8ee.js";import"./index-ebeaab24.js";import{T as l}from"./TableOfContent-fd84de8d.js";import{F as r}from"./Footer-1b79793a.js";import{u as s}from"./index-bda0bad7.js";import{M as c}from"./index-8d7b31c3.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-cbae0ba3.js";import"./UI5Element-3b11b083.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./utils-69f7a0e0.js";import"./index-8ac54959.js";import"./iframe-b355495e.js";import"../sb-preview/runtime.js";import"./withWebComponent-d4224c1c.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-9aa64f88.js";import"./Icons-f64cf5a7.js";import"./Device-99b8bbf4.js";import"./Integer-f7f172c9.js";import"./class-map-18f572ce.js";import"./i18n-defaults-f002f496.js";import"./index-331d0237.js";import"./Avatar-d2efa509.js";import"./ResizeHandler-13af62ac.js";import"./employee-ef49f0ae.js";import"./index-c7a4d25c.js";import"./AriaLabelHelper-43a261ec.js";import"./index-351273a5.js";import"./Link-d41264a5.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./index-2c77de22.js";import"./index-85bd0d17.js";import"./Label-9108dd9e.js";import"./index-471c441b.js";import"./Button-86524f67.js";import"./index-57c33b8d.js";import"./Popover-76648ec8.js";import"./PopupsCommon.css-7ddbcd9a.js";import"./FocusableElements-baf79594.js";import"./isElementHidden-01c07146.js";import"./decline-5f59d729.js";import"./i18n-defaults-80781f7e.js";import"./MediaRange-25b98f31.js";import"./style-map-54298215.js";import"./BrowserScrollbar.css-cca56078.js";import"./information-73174d4b.js";function we(o={}){const{wrapper:n}=Object.assign({},s(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(a,{})})):a();function a(){const t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li"},s(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Data Display / AnalyticalTable / Recipes"}),`
`,e.jsx(t.h1,{id:"analyticaltable-recipes",children:"AnalyticalTable Recipes"}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"how-to-add-your-own-plugin-hooks",children:"How to add your own plugin hooks?"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"AnalyticalTable"})," internally uses all plugin hooks of the ",e.jsx(t.a,{href:"https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/overview.md",target:"_blank",rel:"nofollow noopener noreferrer",children:"react-table v7"})," except for ",e.jsx(t.code,{children:"usePagination"}),` and hooks that change the layout.
If you pass a `,e.jsx(t.code,{children:"react-table"})," hook to the ",e.jsx(t.code,{children:"tableHooks"})," prop of the ",e.jsx(t.code,{children:"AnalyticalTable"}),` you will most likely experience some side effects or even break the table completely. We therefore strongly recommend to just not do it ;).
If you encounter a functionality that should be available with `,e.jsx(t.code,{children:"react-table"})," hooks, but isn't in the ",e.jsx(t.code,{children:"AnalyticalTable"})," please open an issue in GitHub."]}),`
`,e.jsx(c,{type:"Warning",hideCloseButton:!0,children:"Plugin hooks can manipulate the internal table instance. Please use with caution!"}),`
`,e.jsx(t.p,{children:"For adding custom plugin hooks you can use the following code snippet."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`export const TableWithCustomHook = (props) => {
  const { data, columns } = props;
  const customHook = (hooks) => {
    hooks.useInstance.push((instance) => {
      console.log(instance);
    });
  };
  return <AnalyticalTable data={data} columns={columns} tableHooks={[customHook]} />;
};
`})}),`
`,e.jsxs(t.p,{children:["With the ",e.jsx(t.code,{children:"customHook"})," callback you can plugin in all available hooks. Please note that some hooks need a return value (e.g. ",e.jsx(t.code,{children:"columns"}),") which is then always the first parameter of the function, and others are not allowed to return a value (e.g. ",e.jsx(t.code,{children:"useTable"}),`).
For further details please refer to the `,e.jsxs(t.a,{href:"https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/overview.md",target:"_blank",rel:"nofollow noopener noreferrer",children:[e.jsx(t.code,{children:"react-table"})," v7 documentation"]}),"."]}),`
`,e.jsx(t.h2,{id:"how-to-select-rows-containing-active-elements",children:"How to select rows containing active elements?"}),`
`,e.jsxs(t.p,{children:["We've restricted the propagation of ",e.jsx(t.code,{children:"click"})," events of UI5 Web Components elements such as ",e.jsx(t.code,{children:"Button"}),", ",e.jsx(t.code,{children:"Link"}),", ",e.jsx(t.code,{children:"Switch"}),`, etc.
In case you still want to select the row when clicking the respective element, you can "mark" the event to allow such behavior. `,e.jsx("br",{}),`
Example: `,e.jsx(t.code,{children:"<Link onClick={(e) => {e.markerAllowTableRowSelection = true;}>My Link Text</Link>"})]}),`
`,e.jsxs(t.p,{children:["For other elements or components, we recommend disabling event propagation by setting ",e.jsx(t.code,{children:"event.stopPropagation()"})," on the respective event. Per default, propagation is not prevented!"]}),`
`,e.jsx(t.h2,{id:"how-to-stop-the-table-state-from-automatically-resetting-when-the-data-changes",children:"How to stop the table state from automatically resetting when the data changes?"}),`
`,e.jsxs(t.p,{children:["By default, the ",e.jsx(t.code,{children:"AnalyticalTable"}),` will reset the sorters, filters, grouping, selected rows, etc. when the table data changes. It will also reset all manually resized columns if the container width changes.
In case you want to keep the current state of the Table, you can disable this behavior by using the `,e.jsx(t.code,{children:"reactTableOptions"})," prop or for column resize the ",e.jsx(t.code,{children:"retainColumnWidth"})," prop."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const [data, setData] = React.useState([])
const skipPageResetRef = React.useRef(false)

const updateData = newData => {
  // When data gets updated with this function, set a flag
  // to disable all of the auto resetting
  skipPageResetRef.current = true

  setData(newData)
}

React.useEffect(() => {
  // After the table has updated, always remove the flag
  skipPageResetRef.current = false
})
<AnalyticalTable
  columns={columns}
  data={data}
  // disable auto reset of columns width if a column has been manually resized
  retainColumnWidth
  // react-table options
  reactTableOptions={{
    // ... any other options you want to set
    autoResetHiddenColumns: !skipPageResetRef.current,
    autoResetPage: !skipPageResetRef.current,
    autoResetExpanded: !skipPageResetRef.current,
    autoResetGroupBy: !skipPageResetRef.current,
    autoResetSelectedRows: !skipPageResetRef.current,
    autoResetSortBy: !skipPageResetRef.current,
    autoResetFilters: !skipPageResetRef.current,
    autoResetRowState: !skipPageResetRef.current,
    autoResetResize: !skipPageResetRef.current
  }}
/>
`})}),`
`,e.jsxs(t.p,{children:["For more details on this behavior you can double check the ",e.jsx(t.a,{href:"https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/faq.md#how-do-i-stop-my-table-state-from-automatically-resetting-when-my-data-changes",target:"_blank",rel:"nofollow noopener noreferrer",children:"react-table v7 docs"}),"."]}),`
`,e.jsx(t.h2,{id:"how-to-scroll-to-a-specific-rowoffset",children:"How to scroll to a specific row/offset?"}),`
`,e.jsxs(t.p,{children:["The DOM instance of the ",e.jsx(t.code,{children:"AnalyticalTable"})," exposes methods for scrolling to a specific index or offset. (You can access the DOM element e.g. by creating a Ref ",e.jsx(t.code,{children:"ref={analyticalTableRef}"}),")"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"scrollTo: (offset: number, align?: 'start' | 'center' | 'end' | 'auto') => void"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"scrollToItem: (index: number, align?: 'start' | 'center' | 'end' | 'auto') => void"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"horizontalScrollTo: (offset: number, align?: 'start' | 'center' | 'end' | 'auto') => void"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"horizontalScrollToItem: (index: number, align?: 'start' | 'center' | 'end' | 'auto') => void"})}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"offset"})," is measured in ",e.jsx(t.code,{children:"px"})," and ",e.jsx(t.code,{children:"index"})," in rows. ",e.jsx(t.code,{children:"align"})," places the item/offset at the corresponding position of the visible scroll area (",e.jsx(t.code,{children:"'auto'"})," brings the item/offset into the visible scroll area either at the start or end, depending on which is closer). The default value for ",e.jsx(t.code,{children:"align"})," is ",e.jsx(t.code,{children:"'start'"}),"."]}),`
`,e.jsx(t.h2,{id:"how-to-manually-sort-filter-or-group-the-table",children:"How to manually sort, filter or group the table?"}),`
`,e.jsxs(t.p,{children:["For e.g. server side sorting, filtering or grouping, the default behavior of the table can be prevented. When setting the following ",e.jsx(t.code,{children:"reactTableOption"}),` the event is still fired and the indicator still set, but the internal data stays the same.
If you wish to implement your own data manipulation outside the table you can use:`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`<AnalyticalTable
  ...
  reactTableOptions={{
    manualSortBy: true,
    manualFilters: true,
    manualGroupBy: true
  }}
/>
`})}),`
`,e.jsxs(t.p,{children:["For more information please take a look at the ",e.jsx(t.a,{href:"https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/overview.md",target:"_blank",rel:"nofollow noopener noreferrer",children:"React Table v7 docs"}),"."]}),`
`,e.jsxs(t.h2,{id:"how-to-distinguish-between-onrowclick-and-onrowselect-on-selection-cell-click",children:["How to distinguish between ",e.jsx(t.code,{children:"onRowClick"})," and ",e.jsx(t.code,{children:"onRowSelect"})," on selection-cell click?"]}),`
`,e.jsxs(t.p,{children:["When a selectable cell of the table is clicked, both ",e.jsx(t.code,{children:"onRowClick"})," and ",e.jsx(t.code,{children:"onRowSelect"})," are fired. Sometimes, but especially when the selection behavior is set to ",e.jsx(t.code,{children:"RowSelector"}),", you don't want ",e.jsx(t.code,{children:"onRowClick"}),` to execute the logic you defined in your handler when clicking the selection-cell.
To achieve this, you can check the `,e.jsx(t.code,{children:"target"})," inside the ",e.jsx(t.code,{children:"onRowClick"})," handler for the ",e.jsx(t.code,{children:"data-selection-cell"})," attribute contained in the ",e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset",target:"_blank",rel:"nofollow noopener noreferrer",children:"dataset"})," and only execute your logic if this property is falsy."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`// both events are fired if the clicked cell is selectable
const onRowClick = (e) => {
  if (!e.target.dataset.selectionCell) {
    // only do something if other cells than the selection cell are clicked
  }
};
const onRowSelect = (e) => {
  // do something on row select
};
`})}),`
`,e.jsx(t.h2,{id:"how-to-hide-columns",children:"How to hide columns?"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/useTable.md",target:"_blank",rel:"nofollow noopener noreferrer",children:"React Table v7"})," exposes an API on the table instance to hide columns. You can leverage it for example by attaching a React Ref to the ",e.jsx(t.code,{children:"tableInstance"}),` prop.
Please note that the internal react-table is resetting its hidden state after hiding the column, which is most probably a bug. To prevent this you can set the `,e.jsx(t.code,{children:"autoResetHiddenColumns"})," table option to ",e.jsx(t.code,{children:"false"}),". (See ",e.jsx(t.a,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/data-display-analyticaltable--default-story#how-to-stop-the-table-state-from-automatically-resetting-when-the-data-changes",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),")"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`  <Button
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
`,e.jsx(r,{})]})}}export{we as default};
//# sourceMappingURL=Recipes-2c46d3ef.js.map
