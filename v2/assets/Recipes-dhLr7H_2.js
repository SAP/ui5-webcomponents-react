import{j as e}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import{useMDXComponents as i}from"./index-yodfxRVR.js";import{M as l}from"./index-MBNUQN1o.js";import{M as a}from"./index-GOzqKEyy.js";import"./TagDesign-Dou_yO3g.js";import"./index-BQ1WsyJB.js";import"./index-BLtMylri.js";import"./chunk-HLWAVYOI-B4_B6NIi.js";import"./withWebComponent-DykTwaBJ.js";import"./copy-CIslHIHM.js";import"./Button-gEiq340s.js";import{F as s}from"./CommandsAndQueries-Wles9I58.js";import{T as c}from"./TableOfContent-KxK7zcUz.js";import"./WrappingType-CW8URInd.js";import"./iframe-CwARS6gk.js";import"../sb-preview/runtime.js";import"./_baseForOwn-DusBTQ6O.js";import"./mapValues-DfqGXSk1.js";import"./_baseUniq-BpWYsmmS.js";import"./index-Cagd9BgA.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CEPDwMcb.js";import"./utils-BXNPXA0w.js";import"./decline-PQHY0vmQ.js";import"./Icon-C1aVUqaK.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-Pg2MF6OO.js";import"./parameters-bundle.css-BFbT_feV.js";import"./i18n-defaults-4yB5uAXJ.js";import"./information-s0rUc520.js";import"./alert-B5x9ZRdn.js";import"./class-map-BBkLNtsu.js";import"./i18n-defaults-Ddp6Qu_n.js";import"./client-CM2XqZNc.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-Did8UXWE.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BB85D3ff.js";import"./Popover-xb-dB4fv.js";import"./PopupsCommon.css-BS0HwvId.js";import"./getEffectiveScrollbarStyle-C7TfqF8H.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CwA30WlK.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CP3POd5N.js";import"./BrowserScrollbar.css-3d9vQOhG.js";import"./index-B9FbJ8DR.js";import"./Label-Cn8Z-EZA.js";import"./index-Do9OgRe5.js";import"./index-rzCF1Tg5.js";import"./Link-DvVq2Sbg.js";import"./index-CwqXsTQ8.js";import"./index-BsDgV4lW.js";import"./I18nStore-DkMZE6H0.js";import"./useIsomorphicId-8WwglsiH.js";import"./addCustomCSSWithScoping-CP2Nptdn.js";import"./index-e_vxNwoE.js";import"./index-DW6ftPEc.js";import"./index-D25eRgej.js";import"./Avatar-CTYNbiCX.js";import"./employee-CVOZDo5u.js";import"./index-CGs3STtM.js";function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Recipes"}),`
`,e.jsx(n.h1,{id:"analyticaltable-recipes",children:"AnalyticalTable Recipes"}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"how-to-add-your-own-plugin-hooks",children:"How to add your own plugin hooks?"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"AnalyticalTable"})," internally uses all plugin hooks of the ",e.jsx(n.a,{href:"https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/overview.md",rel:"nofollow",children:"react-table v7"})," except for ",e.jsx(n.code,{children:"usePagination"}),` and hooks that change the layout.
If you pass a `,e.jsx(n.code,{children:"react-table"})," hook to the ",e.jsx(n.code,{children:"tableHooks"})," prop of the ",e.jsx(n.code,{children:"AnalyticalTable"}),` you will most likely experience some side effects or even break the table completely. We therefore strongly recommend to just not do it ;).
If you encounter a functionality that should be available with `,e.jsx(n.code,{children:"react-table"})," hooks, but isn't in the ",e.jsx(n.code,{children:"AnalyticalTable"})," please open an issue in GitHub."]}),`
`,e.jsx(a,{type:"Warning",hideCloseButton:!0,children:"Plugin hooks can manipulate the internal table instance. Please use with caution!"}),`
`,e.jsx(n.p,{children:"For adding custom plugin hooks you can use the following code snippet."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`export const TableWithCustomHook = (props) => {
  const { data, columns } = props;
  const customHook = (hooks) => {
    hooks.useInstance.push((instance) => {
      console.log(instance);
    });
  };
  return <AnalyticalTable data={data} columns={columns} tableHooks={[customHook]} />;
};
`})}),`
`,e.jsxs(n.p,{children:["With the ",e.jsx(n.code,{children:"customHook"})," callback you can plugin in all available hooks. Please note that some hooks need a return value (e.g. ",e.jsx(n.code,{children:"columns"}),") which is then always the first parameter of the function, and others are not allowed to return a value (e.g. ",e.jsx(n.code,{children:"useTable"}),`).
For further details please refer to the `,e.jsxs(n.a,{href:"https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/overview.md",rel:"nofollow",children:[e.jsx(n.code,{children:"react-table"})," v7 documentation"]}),"."]}),`
`,e.jsx(n.h2,{id:"how-to-select-rows-containing-active-elements",children:"How to select rows containing active elements?"}),`
`,e.jsxs(n.p,{children:["We've restricted the propagation of ",e.jsx(n.code,{children:"click"})," events of UI5 Web Components elements such as ",e.jsx(n.code,{children:"Button"}),", ",e.jsx(n.code,{children:"Link"}),", ",e.jsx(n.code,{children:"Switch"}),`, etc.
In case you still want to select the row when clicking the respective element, you can "mark" the event to allow such behavior. `,e.jsx("br",{}),`
Example: `,e.jsx(n.code,{children:"<Link onClick={(e) => {e.markerAllowTableRowSelection = true;}>My Link Text</Link>"})]}),`
`,e.jsxs(n.p,{children:["For other elements or components, we recommend disabling event propagation by setting ",e.jsx(n.code,{children:"event.stopPropagation()"})," on the respective event. Per default, propagation is not prevented!"]}),`
`,e.jsx(n.h2,{id:"how-to-stop-the-table-state-from-automatically-resetting-when-the-data-changes",children:"How to stop the table state from automatically resetting when the data changes?"}),`
`,e.jsxs(n.p,{children:["By default, the ",e.jsx(n.code,{children:"AnalyticalTable"}),` will reset the sorters, filters, grouping, selected rows, etc. when the table data changes. It will also reset all manually resized columns if the container width changes.
In case you want to keep the current state of the Table, you can disable this behavior by using the `,e.jsx(n.code,{children:"reactTableOptions"})," prop or for column resize the ",e.jsx(n.code,{children:"retainColumnWidth"})," prop."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const [data, setData] = React.useState([])
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
`,e.jsxs(n.p,{children:["For more details on this behavior you can double check the ",e.jsx(n.a,{href:"https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/faq.md#how-do-i-stop-my-table-state-from-automatically-resetting-when-my-data-changes",rel:"nofollow",children:"react-table v7 docs"}),"."]}),`
`,e.jsx(n.h2,{id:"how-to-scroll-to-a-specific-rowoffset",children:"How to scroll to a specific row/offset?"}),`
`,e.jsxs(n.p,{children:["The DOM instance of the ",e.jsx(n.code,{children:"AnalyticalTable"})," exposes methods for scrolling to a specific index or offset. (You can access the DOM element e.g. by creating a Ref ",e.jsx(n.code,{children:"ref={analyticalTableRef}"}),")"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"scrollTo: (offset: number, align?: 'start' | 'center' | 'end' | 'auto') => void"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"scrollToItem: (index: number, align?: 'start' | 'center' | 'end' | 'auto') => void"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"horizontalScrollTo: (offset: number, align?: 'start' | 'center' | 'end' | 'auto') => void"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"horizontalScrollToItem: (index: number, align?: 'start' | 'center' | 'end' | 'auto') => void"})}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"offset"})," is measured in ",e.jsx(n.code,{children:"px"})," and ",e.jsx(n.code,{children:"index"})," in rows. ",e.jsx(n.code,{children:"align"})," places the item/offset at the corresponding position of the visible scroll area (",e.jsx(n.code,{children:"'auto'"})," brings the item/offset into the visible scroll area either at the start or end, depending on which is closer). The default value for ",e.jsx(n.code,{children:"align"})," is ",e.jsx(n.code,{children:"'start'"}),"."]}),`
`,e.jsx(n.h2,{id:"how-to-manually-sort-filter-or-group-the-table",children:"How to manually sort, filter or group the table?"}),`
`,e.jsxs(n.p,{children:["For e.g. server side sorting, filtering or grouping, the default behavior of the table can be prevented. When setting the following ",e.jsx(n.code,{children:"reactTableOption"}),` the event is still fired and the indicator still set, but the internal data stays the same.
If you wish to implement your own data manipulation outside the table you can use:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<AnalyticalTable
  ...
  reactTableOptions={{
    manualSortBy: true,
    manualFilters: true,
    manualGroupBy: true
  }}
/>
`})}),`
`,e.jsxs(n.p,{children:["For more information please take a look at the ",e.jsx(n.a,{href:"https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/overview.md",rel:"nofollow",children:"React Table v7 docs"}),"."]}),`
`,e.jsxs(n.h2,{id:"how-to-distinguish-between-onrowclick-and-onrowselect-on-selection-cell-click",children:["How to distinguish between ",e.jsx(n.code,{children:"onRowClick"})," and ",e.jsx(n.code,{children:"onRowSelect"})," on selection-cell click?"]}),`
`,e.jsxs(n.p,{children:["When a selectable cell of the table is clicked, both ",e.jsx(n.code,{children:"onRowClick"})," and ",e.jsx(n.code,{children:"onRowSelect"})," are fired. Sometimes, but especially when the selection behavior is set to ",e.jsx(n.code,{children:"RowSelector"}),", you don't want ",e.jsx(n.code,{children:"onRowClick"}),` to execute the logic you defined in your handler when clicking the selection-cell.
To achieve this, you can check the `,e.jsx(n.code,{children:"target"})," inside the ",e.jsx(n.code,{children:"onRowClick"})," handler for the ",e.jsx(n.code,{children:"data-selection-cell"})," attribute contained in the ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset",rel:"nofollow",children:"dataset"})," and only execute your logic if this property doesn't equal ",e.jsx(n.code,{children:'"true"'}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// both events are fired if the clicked cell is selectable
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
`,e.jsx(n.h2,{id:"how-to-hide-columns",children:"How to hide columns?"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/useTable.md",rel:"nofollow",children:"React Table v7"})," exposes an API on the table instance to hide columns. You can leverage it for example by attaching a React Ref to the ",e.jsx(n.code,{children:"tableInstance"}),` prop.
Please note that the internal react-table is resetting its hidden state after hiding the column, which is most probably a bug. To prevent this you can set the `,e.jsx(n.code,{children:"autoResetHiddenColumns"})," table option to ",e.jsx(n.code,{children:"false"}),". (See ",e.jsx(n.a,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/data-display-analyticaltable--default-story#how-to-stop-the-table-state-from-automatically-resetting-when-the-data-changes",rel:"nofollow",children:"here"}),")"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`  <Button
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
`,e.jsx(n.h2,{id:"how-to-scale-custom-cells",children:"How to scale custom cells?"}),`
`,e.jsxs(n.p,{children:["Automatic scaling of custom cells is not supported when used with ",e.jsx(n.code,{children:"scaleWidthMode: AnalyticalTableScaleWidthMode.Grow"})," or ",e.jsx(n.code,{children:"scaleWidthMode: AnalyticalTableScaleWidthMode.Smart"}),`, as we're using the text of the cell for our calculation.
Since v1.22.0 you can use the column option `,e.jsx(n.code,{children:"scaleWidthModeOptions"})," to pass a string for the internal width calculation of the header cell (",e.jsx(n.code,{children:"headerString"}),") and the body cells (",e.jsx(n.code,{children:"cellString"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const columns = [
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<AnalyticalTable data={props.data} columns={columns} scaleWidthMode={AnalyticalTableScaleWidthMode.Smart} />
`})}),`
`,e.jsx(n.h2,{id:"how-to-render-active-components-dialogs-and-popovers-in-custom-cells",children:"How to render active components, dialogs and popovers in custom cells?"}),`
`,e.jsxs(n.p,{children:["The table implements ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Event",rel:"nofollow",children:"Events"}),` for keyboard navigation, selection, etc. When rendering an active element inside a custom cell, the events of the elements are bubbling up to the table.
To prevent this you can call `,e.jsx(n.code,{children:"event.stopPropagation()"})," inside the respective handler."]}),`
`,e.jsx(n.p,{children:"Below you can find two examples of typical pain points:"}),`
`,e.jsx(n.h3,{id:"dialogs--popovers",children:"Dialogs & Popovers"}),`
`,e.jsxs(n.p,{children:["In general, we recommend mounting modals like Dialogs or Popovers outside the ",e.jsx(n.code,{children:"AnalyticalTable"}),`.
Still, it's possible to also render them inside a custom cell, but there are some things to consider:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use conditional rendering to prevent the modal from being rendered for every cell."}),`
`,e.jsxs(n.li,{children:["Call ",e.jsx(n.code,{children:"event.stopPropagation()"})," in the respective handler of the event if you're facing issues with focus handling (",e.jsx(n.code,{children:"onFocus"}),"), keyboard navigation (i.a. ",e.jsx(n.code,{children:"onKeyDown"}),"), etc."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Here you can find an example of how to prevent the ",e.jsx(n.code,{children:"focus"})," event from bubbling up:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const columns = [
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
`,e.jsx(n.h3,{id:"inputs",children:"Inputs"}),`
`,e.jsxs(n.p,{children:["Per default the table stops event propagation for ",e.jsx(n.code,{children:"click"})," events of ui5-webcomponent inputs. This is not the case for native inputs (",e.jsx(n.code,{children:"<input>"}),") or other events like ",e.jsx(n.code,{children:"key"})," events."]}),`
`,e.jsxs(n.p,{children:[`A typical case is moving the caret inside an input via the arrow keys, which will bubble up to the table if propagation isn't stopped.
In the example below, you can see how you could stop the `,e.jsx(n.code,{children:"keydown"})," event from bubbling up to the table if arrow keys are pressed."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const columns = [
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
`,e.jsx(s,{})]})}function ke(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{ke as default};
