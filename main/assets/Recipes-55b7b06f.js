import{j as t,a as n,F as c}from"./jsx-runtime-670450c2.js";import"./DomRefTable.module-28ed66d1.js";import"./chunk-PCJTTTQV-41fcc609.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{M as r}from"./index-0855e773.js";import"./index-f1f749bf.js";import"./Import-46f5c8e6.js";import{T as s}from"./TableOfContent-fc9ead8f.js";import"./index-96c5f47c.js";import"./Footer.module-f90cad7d.js";import{u as l}from"./index-4fb8b842.js";import{M as h}from"./index-f6cc2fae.js";import"./react-jss.esm-fe4dc3ff.js";import"./inheritsLoose-93e09647.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-810e6183.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./event-97133b94.js";import"./decline-f2b294b3.js";import"./Icons-7b82f601.js";import"./i18n-defaults-80781f7e.js";import"./information-50e1ad0f.js";import"./class-map-5d8e4b2b.js";import"./Icon-459702a7.js";import"./Keys-3acbae73.js";import"./Button-876771f0.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-6bc67b6a.js";function ne(o={}){const{wrapper:a}=Object.assign({},l(),o.components);return a?t(a,Object.assign({},o,{children:t(i,{})})):i();function i(){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li"},l(),o.components);return n(c,{children:[t(r,{title:"Data Display / AnalyticalTable / Recipes"}),`
`,t(e.h1,{children:"AnalyticalTable Recipes"}),`
`,t(s,{}),`
`,t(e.h2,{children:"How to add your own plugin hooks?"}),`
`,n(e.p,{children:["The ",t(e.code,{children:"AnalyticalTable"})," internally uses all plugin hooks of the ",t(e.a,{href:"https://github.com/tannerlinsley/react-table",children:"react-table"})," except for ",t(e.code,{children:"usePagination"}),` and hooks that change the layout.
If you pass a `,t(e.code,{children:"react-table"})," hook to the ",t(e.code,{children:"tableHooks"})," prop of the ",t(e.code,{children:"AnalyticalTable"}),` you will most likely experience some side effects or even break the table completely. We therefore strongly recommend to just not do it ;).
If you encounter a functionality that should be available with `,t(e.code,{children:"react-table"})," hooks, but isn't in the ",t(e.code,{children:"AnalyticalTable"})," please open an issue in github or write us in Slack."]}),`
`,t(h,{type:"Warning",hideCloseButton:!0,children:"Plugin hooks can manipulate the internal table instance. Please use with caution!"}),`
`,t(e.p,{children:"For adding custom plugin hooks you can use the following code snippet."}),`
`,t(e.pre,{children:t(e.code,{className:"language-jsx",children:`export const TableWithCustomHook = (props) => {
  const { data, columns } = props;
  const customHook = (hooks) => {
    hooks.useInstance.push((instance) => {
      console.log(instance);
    });
  };
  return <AnalyticalTable data={data} columns={columns} tableHooks={[customHook]} />;
};
`})}),`
`,n(e.p,{children:["With the ",t(e.code,{children:"customHook"})," callback you can plugin in all available hooks. Please note that some hooks need a return value (e.g. ",t(e.code,{children:"columns"}),") which is then always the first parameter of the function, and others are not allowed to return a value (e.g. ",t(e.code,{children:"useTable"}),`).
For further details please refer to the `,n(e.a,{href:"https://react-table-v7.tanstack.com/docs/api/overview",children:[t(e.code,{children:"react-table"})," documentation"]}),"."]}),`
`,t(e.h2,{children:"How to select rows containing active elements?"}),`
`,n(e.p,{children:["We've restricted the propagation of ",t(e.code,{children:"click"})," events of UI5 Web Components elements such as ",t(e.code,{children:"Button"}),", ",t(e.code,{children:"Link"}),", ",t(e.code,{children:"Switch"}),`, etc.
In case you still want to select the row when clicking the respective element, you can "mark" the event to allow such behavior. `,t("br",{}),`
Example: `,t(e.code,{children:"<Link onClick={(e) => {e.markerAllowTableRowSelection = true;}>My Link Text</Link>"})]}),`
`,n(e.p,{children:["For other elements or components, we recommend disabling event propagation by setting ",t(e.code,{children:"event.stopPropagation()"})," on the respective event. Per default, propagation is not prevented!"]}),`
`,t(e.h2,{children:"How to stop the table state from automatically resetting when the data changes?"}),`
`,n(e.p,{children:["By default, the ",t(e.code,{children:"AnalyticalTable"}),` will reset the sorters, filters, grouping, selected rows, etc. when the table data changes. It will also reset all manually resized columns if the container width changes.
In case you want to keep the current state of the Table, you can disable this behavior by using the `,t(e.code,{children:"reactTableOptions"})," prop or for column resize the ",t(e.code,{children:"retainColumnWidth"})," prop."]}),`
`,t(e.pre,{children:t(e.code,{className:"language-jsx",children:`const [data, setData] = React.useState([])
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
`,n(e.p,{children:["For more details on this behavior you can double check the ",t(e.a,{href:"https://react-table-v7.tanstack.com/docs/faq#how-do-i-stop-my-table-state-from-automatically-resetting-when-my-data-changes",children:"react-table docs"}),"."]}),`
`,t(e.h2,{children:"How to scroll to a specific row/offset?"}),`
`,n(e.p,{children:["The DOM instance of the ",t(e.code,{children:"AnalyticalTable"})," exposes methods for scrolling to a specific index or offset. (You can access the DOM element e.g. by creating a Ref ",t(e.code,{children:"ref={analyticalTableRef}"}),")"]}),`
`,n(e.ul,{children:[`
`,t(e.li,{children:t(e.code,{children:"scrollTo: (offset: number, align?: 'start' | 'center' | 'end' | 'auto') => void"})}),`
`,t(e.li,{children:t(e.code,{children:"scrollToItem: (index: number, align?: 'start' | 'center' | 'end' | 'auto') => void"})}),`
`,t(e.li,{children:t(e.code,{children:"horizontalScrollTo: (offset: number, align?: 'start' | 'center' | 'end' | 'auto') => void"})}),`
`,t(e.li,{children:t(e.code,{children:"horizontalScrollToItem: (index: number, align?: 'start' | 'center' | 'end' | 'auto') => void"})}),`
`]}),`
`,n(e.p,{children:[t(e.code,{children:"offset"})," is measured in ",t(e.code,{children:"px"})," and ",t(e.code,{children:"index"})," in rows. ",t(e.code,{children:"align"})," places the item/offset at the corresponding position of the visible scroll area (",t(e.code,{children:"'auto'"})," brings the item/offset into the visible scroll area either at the start or end, depending on which is closer). The default value for ",t(e.code,{children:"align"})," is ",t(e.code,{children:"'start'"}),"."]}),`
`,t(e.h2,{children:"How to manually sort, filter or group the table?"}),`
`,n(e.p,{children:["For e.g. server side sorting, filtering or grouping, the default behavior of the table can be prevented. When setting the following ",t(e.code,{children:"reactTableOption"}),` the event is still fired and the indicator still set, but the internal data stays the same.
If you wish to implement your own data manipulation outside the table you can use:`]}),`
`,t(e.pre,{children:t(e.code,{className:"language-jsx",children:`<AnalyticalTable
  ...
  reactTableOptions={{
    manualSortBy: true,
    manualFilters: true,
    manualGroupBy: true
  }}
/>
`})}),`
`,n(e.p,{children:["For more information please take a look at the ",t(e.a,{href:"https://react-table-v7.tanstack.com/docs/api/overview",children:"React Table v7 docs"}),"."]}),`
`,n(e.h2,{children:["How to distinguish between ",t(e.code,{children:"onRowClick"})," and ",t(e.code,{children:"onRowSelect"})," on selection-cell click?"]}),`
`,n(e.p,{children:["When a selectable cell of the table is clicked, both ",t(e.code,{children:"onRowClick"})," and ",t(e.code,{children:"onRowSelect"})," are fired. Sometimes, but especially when the selection behavior is set to ",t(e.code,{children:"RowSelector"}),", you don't want ",t(e.code,{children:"onRowClick"}),` to execute the logic you defined in your handler when clicking the selection-cell.
To achieve this, you can check the `,t(e.code,{children:"target"})," inside the ",t(e.code,{children:"onRowClick"})," handler for the ",t(e.code,{children:"data-selection-cell"})," attribute contained in the ",t(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset",children:"dataset"})," and only execute your logic if this property is falsy."]}),`
`,t(e.pre,{children:t(e.code,{className:"language-js",children:`// both events are fired if the clicked cell is selectable
const onRowClick = (e) => {
  if (!e.target.dataset.selectionCell) {
    // only do something if other cells than the selection cell are clicked
  }
};
const onRowSelect = (e) => {
  // do something on row select
};
`})}),`
`,t(e.h2,{children:"How to hide columns?"}),`
`,n(e.p,{children:[t(e.a,{href:"https://react-table-v7.tanstack.com/docs/api/useTable",children:"React Table v7"})," exposes an API on the table instance to hide columns. You can leverage it for example by attaching a React Ref to the ",t(e.code,{children:"tableInstance"}),` prop.
Please note that the internal react-table is resetting its hidden state after hiding the column, which is most probably a bug. To prevent this you can set the `,t(e.code,{children:"autoResetHiddenColumns"})," table option to ",t(e.code,{children:"false"}),". (See ",t(e.a,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/data-display-analyticaltable--default-story#how-to-stop-the-table-state-from-automatically-resetting-when-the-data-changes",children:"here"}),")"]}),`
`,t(e.pre,{children:t(e.code,{className:"language-jsx",children:`  <Button
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
`})})]})}}export{ne as default};
//# sourceMappingURL=Recipes-55b7b06f.js.map
