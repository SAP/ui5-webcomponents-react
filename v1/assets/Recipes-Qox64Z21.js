import{j as e}from"./useIsomorphicLayoutEffect-CRjHBNH3.js";import{useMDXComponents as i}from"./index-3-_tf5dF.js";import{M as l}from"./index-y53uacrZ.js";import{F as a}from"./ProjectTemplate-IbU-at1j.js";import"./chunk-HLWAVYOI-lGe2rtn5.js";import"./copy-CMUu1AT6.js";import"./index-BP8_t0zE.js";import{T as s}from"./TableOfContent-7RRAQGxT.js";import{M as c}from"./index-BvrWhPKo.js";import"./iframe-CR0up_Yh.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-GV3X1JHy.js";import"./main-HWtSBowW.js";import"./index-D15fe23r.js";import"./UI5Element-B2h7kErG.js";import"./Boot-C8BaHzi_.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScope-CE64eqAB.js";import"./withWebComponent-D63zXRZq.js";import"./utils-D8cetgVj.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-kZ6-2cpn.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-BU2Bb3zG.js";import"./Icons-YiE9tW4T.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-_D3nLw4H.js";import"./sys-help-2-Bvno1uwq.js";import"./information-C8ax4bqa.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-k6AQLLnO.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-C_UMjLXx.js";import"./index-uUsIfzfD.js";import"./Link-DXfsQCHY.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./index-Dletu86Y.js";import"./Popover-D-vbAx4K.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-BojsCAVA.js";import"./getActiveElement-BL9Yqj8a.js";import"./getEffectiveScrollbarStyle-BIR1dSFp.js";import"./PopupsCommon.css-Uumup36k.js";import"./FocusableElements-vHT1UwsK.js";import"./isElementHidden-Bpu2V8BK.js";import"./ResizeHandler-NsOSmMjZ.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-BqCgMbDz.js";import"./class-map-BQhMMhlU.js";import"./index-DBtBcav3.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DfMTMFhn.js";import"./index-Cj1pZIKL.js";import"./Label-Cdlv07NW.js";import"./index-TQA7guYE.js";import"./Button-Bt2u8cP6.js";import"./Tooltips-C-7203Cu.js";import"./index-Cyo93O8-.js";import"./i18n-defaults-B3GLB-7B.js";import"./I18nContext-RJHUyvz-.js";import"./index-DW5hgAYR.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./addCustomCSSWithScoping-CO3cnNRp.js";import"./index-bSK0E_Ur.js";import"./index-C7N0fzvx.js";import"./Avatar-DvrVWNUR.js";import"./employee-CM2OuJvM.js";import"./index-D3X7zxMg.js";import"./client-Di-4O7We.js";import"./decline-CokZCuO3.js";function o(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Recipes"}),`
`,e.jsx(t.h1,{id:"analyticaltable-recipes",children:"AnalyticalTable Recipes"}),`
`,e.jsx(s,{}),`
`,e.jsx(t.h2,{id:"how-to-add-your-own-plugin-hooks",children:"How to add your own plugin hooks?"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"AnalyticalTable"})," internally uses all plugin hooks of the ",e.jsx(t.a,{href:"https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/overview.md",rel:"nofollow",children:"react-table v7"})," except for ",e.jsx(t.code,{children:"usePagination"}),` and hooks that change the layout.
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
For further details please refer to the `,e.jsxs(t.a,{href:"https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/overview.md",rel:"nofollow",children:[e.jsx(t.code,{children:"react-table"})," v7 documentation"]}),"."]}),`
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
`,e.jsxs(t.p,{children:["For more details on this behavior you can double check the ",e.jsx(t.a,{href:"https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/faq.md#how-do-i-stop-my-table-state-from-automatically-resetting-when-my-data-changes",rel:"nofollow",children:"react-table v7 docs"}),"."]}),`
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
`,e.jsxs(t.p,{children:["For more information please take a look at the ",e.jsx(t.a,{href:"https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/overview.md",rel:"nofollow",children:"React Table v7 docs"}),"."]}),`
`,e.jsxs(t.h2,{id:"how-to-distinguish-between-onrowclick-and-onrowselect-on-selection-cell-click",children:["How to distinguish between ",e.jsx(t.code,{children:"onRowClick"})," and ",e.jsx(t.code,{children:"onRowSelect"})," on selection-cell click?"]}),`
`,e.jsxs(t.p,{children:["When a selectable cell of the table is clicked, both ",e.jsx(t.code,{children:"onRowClick"})," and ",e.jsx(t.code,{children:"onRowSelect"})," are fired. Sometimes, but especially when the selection behavior is set to ",e.jsx(t.code,{children:"RowSelector"}),", you don't want ",e.jsx(t.code,{children:"onRowClick"}),` to execute the logic you defined in your handler when clicking the selection-cell.
To achieve this, you can check the `,e.jsx(t.code,{children:"target"})," inside the ",e.jsx(t.code,{children:"onRowClick"})," handler for the ",e.jsx(t.code,{children:"data-selection-cell"})," attribute contained in the ",e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset",rel:"nofollow",children:"dataset"})," and only execute your logic if this property doesn't equal ",e.jsx(t.code,{children:'"true"'}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`// both events are fired if the clicked cell is selectable
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
`,e.jsx(t.h2,{id:"how-to-hide-columns",children:"How to hide columns?"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/useTable.md",rel:"nofollow",children:"React Table v7"})," exposes an API on the table instance to hide columns. You can leverage it for example by attaching a React Ref to the ",e.jsx(t.code,{children:"tableInstance"}),` prop.
Please note that the internal react-table is resetting its hidden state after hiding the column, which is most probably a bug. To prevent this you can set the `,e.jsx(t.code,{children:"autoResetHiddenColumns"})," table option to ",e.jsx(t.code,{children:"false"}),". (See ",e.jsx(t.a,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/data-display-analyticaltable--default-story#how-to-stop-the-table-state-from-automatically-resetting-when-the-data-changes",rel:"nofollow",children:"here"}),")"]}),`
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
`,e.jsx(t.h2,{id:"how-to-render-active-components-dialogs-and-popovers-in-custom-cells",children:"How to render active components, dialogs and popovers in custom cells?"}),`
`,e.jsxs(t.p,{children:["The table implements ",e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Event",rel:"nofollow",children:"Events"}),` for keyboard navigation, selection, etc. When rendering an active element inside a custom cell, the events of the elements are bubbling up to the table.
To prevent this you can call `,e.jsx(t.code,{children:"event.stopPropagation()"})," inside the respective handler."]}),`
`,e.jsx(t.p,{children:"Below you can find two examples of typical pain points:"}),`
`,e.jsx(t.h3,{id:"dialogs--popovers",children:"Dialogs & Popovers"}),`
`,e.jsxs(t.p,{children:["In general, we recommend mounting modals like Dialogs or Popovers outside the ",e.jsx(t.code,{children:"AnalyticalTable"}),`.
Still, it's possible to also render them inside a custom cell, but there are some things to consider:`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Use ",e.jsx(t.code,{children:"createPortal"})," to render the modal outside the ",e.jsx(t.code,{children:"AnalyticalTable"})," to prevent visual issues."]}),`
`,e.jsx(t.li,{children:"Use conditional rendering to prevent the modal from being rendered for every cell."}),`
`,e.jsxs(t.li,{children:["Call ",e.jsx(t.code,{children:"event.stopPropagation()"})," in the respective handler of the event if you're facing issues with focus handling (",e.jsx(t.code,{children:"onFocus"}),"), keyboard navigation (i.a. ",e.jsx(t.code,{children:"onKeyDown"}),"), etc."]}),`
`]}),`
`,e.jsxs(t.p,{children:["Here you can find an example of how to prevent the ",e.jsx(t.code,{children:"focus"})," event from bubbling up:"]}),`
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
`,e.jsx(t.h3,{id:"inputs",children:"Inputs"}),`
`,e.jsxs(t.p,{children:["Per default the table stops event propagation for ",e.jsx(t.code,{children:"click"})," events of ui5-webcomponent inputs. This is not the case for native inputs (",e.jsx(t.code,{children:"<input>"}),") or other events like ",e.jsx(t.code,{children:"key"})," events."]}),`
`,e.jsxs(t.p,{children:[`A typical case is moving the caret inside an input via the arrow keys, which will bubble up to the table if propagation isn't stopped.
In the example below, you can see how you could stop the `,e.jsx(t.code,{children:"keydown"})," event from bubbling up to the table if arrow keys are pressed."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const columns = [
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
`,e.jsx(a,{})]})}function Le(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{Le as default};
