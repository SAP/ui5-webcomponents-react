import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{F as l}from"./ProjectTemplate-xyjKJ_pC.js";import{M as s}from"./chunk-HLWAVYOI-9EjweJIn.js";import"./index-OjgoNOWw.js";import"./index-QYh6idnL.js";import{T as r}from"./TableOfContent-d5_aOOTC.js";import{u as i}from"./index-RwE9nQVW.js";import{M as c}from"./index-Xc2_hnnU.js";import"./react-jss.esm-tmBtHfec.js";import"./index-ndaVN1fR.js";import"./clsx-Zbgk8kpT.js";import"./index-iBTVCgpy.js";import"./iframe-WUzyVZLd.js";import"../sb-preview/runtime.js";import"./Label-GIHgrMyy.js";import"./UI5Element-_cJDeK03.js";import"./i18nBundle-YDapVb1x.js";import"./VersionInfo-AzzP9wS2.js";import"./CustomElementsScopeUtils-IpwVqUeG.js";import"./withWebComponent--kEkWNJH.js";import"./utils-rNFQc6Ui.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./WrappingType-avPrqc94.js";import"./i18n-defaults-3YbdkqSs.js";import"./parameters-bundle.css-mPCp9TQx.js";import"./index-X9dUpppA.js";import"./Button-Q_btruTx.js";import"./event-lM5HanI-.js";import"./slot-HSrR9XJ-.js";import"./Keys-Mzj2D4aO.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./Icons-dG5I7pqk.js";import"./Icon-1HyKfQwB.js";import"./HasPopup-9BAMrqbD.js";import"./index-4AMSq7ht.js";import"./Link--uQmFIhM.js";import"./index-LgDveIJ_.js";import"./Popover-4Jmhfo0j.js";import"./Integer-kog98579.js";import"./PopupUtils-WqNPYdCF.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-U0zEo08F.js";import"./FocusableElements-YRGIpHeQ.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./ResizeHandler-xTi6PJ7P.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-5njKSr-C.js";import"./class-map-Y-YjCFqX.js";import"./BrowserScrollbar.css-OKoQbzr6.js";import"./index-G1ylA0vb.js";import"./i18n-defaults-a20Pyi7e.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-evY60Rnm.js";import"./ModalsContext-T9gUbaXC.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-fxF1oxJv.js";import"./index-4-md_Zx9.js";import"./index-H7PYZHKc.js";import"./Avatar-zEbB_F4h.js";import"./employee-2wNDT3_m.js";import"./alert-dnfYKYS3.js";import"./index-CssVpXzJ.js";import"./react-18-1WT2dSvK.js";import"./_baseForOwn-z3VktcOy.js";import"./mapValues-Iyc0g4nJ.js";import"./_baseUniq-PeaQ4i79.js";import"./index-PPLHz8o0.js";import"./index-ru46B3pF.js";import"./decline-TrFDzgUZ.js";import"./i18n-defaults-iZnAAWr4.js";import"./information-hXM74YAc.js";function Me(n={}){const{wrapper:o}=Object.assign({},i(),n.components);return o?e.jsx(o,Object.assign({},n,{children:e.jsx(a,{})})):a();function a(){const t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li"},i(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Recipes"}),`
`,e.jsx(t.h1,{id:"analyticaltable-recipes",children:"AnalyticalTable Recipes"}),`
`,e.jsx(r,{}),`
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
`,e.jsx(t.h2,{id:"how-to-scale-custom-cells",children:"How to scale custom cells?"}),`
`,e.jsxs(t.p,{children:["Automatic scaling of custom cells is not supported when used with ",e.jsx(t.code,{children:"scaleWidthMode: AnalyticalTableScaleWidthMode.Grow"})," or ",e.jsx(t.code,{children:"scaleWidthMode: AnalyticalTableScaleWidthMode.Smart"}),`, as we're using the text of the cell for our calculation.
Since v1.22.0 you can use the column option `,e.jsx(t.code,{children:"scaleWidthModeOptions"})," to pass a string for the internal width calculation of the header cell (",e.jsx(t.code,{children:"headerString"}),") and the body cells (",e.jsx(t.code,{children:"cellString"}),")."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const columns = [
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
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`<AnalyticalTable data={props.data} columns={columns} scaleWidthMode={AnalyticalTableScaleWidthMode.Smart} />
`})}),`
`,e.jsx(t.h2,{id:"how-to-focus-the-content-of-a-dialog-or-popover-rendered-inside-a-cell",children:"How to focus the content of a Dialog or Popover rendered inside a cell?"}),`
`,e.jsxs(t.p,{children:["If a Dialog or Popover is rendered inside a cell, the ",e.jsx(t.code,{children:"focus"}),` event is bubbling up to the table which implements its own logic for focus handling to support keyboard navigation.
This applies even if a React portal is used to mount the HTML element outside the table, because React event propagation still applies as if it were rendered inside.`]}),`
`,e.jsxs(t.p,{children:["To prevent this behavior, you can use the ",e.jsx(t.code,{children:"stopPropagation"})," method of the ",e.jsx(t.code,{children:"onFocus"})," event of the Dialog or Popover."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const columns = [
  {
    id: 'custom',
    Header: 'Custom cell with button and dialog',
    Cell: () => {
      const [open, toggle] = useReducer((prev) => !prev, false);
      const uniqueId = useId();
      return (
        <>
          <Button onClick={toggle}>Open</Button>
          {createPortal(
            <Dialog
              open={open}
              initialFocus={uniqueId}
              onFocus={(e) => {
                e.stopPropagation();
              }}
            >
              <Input placeholder="Focus me!" id={uniqueId} />
            </Dialog>,
            document.body
          )}
        </>
      );
    }
  }
];
`})}),`
`,e.jsx(l,{})]})}}export{Me as default};
