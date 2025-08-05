import{j as o}from"./iframe-DTnEqaXa.js";import{useMDXComponents as n}from"./index-Bzwj8IeJ.js";import{I as r,F as m}from"./CommandsAndQueries-o88EZ4zv.js";import{M as l,C as s}from"./blocks-DjoWO0N0.js";import"./Tag-B9YI4L6P.js";import"./index-X9x0GvvK.js";import"./copy-CVTh1Y4e.js";import{d as p}from"./AnalyticalTableHooks.stories-DcMvISKX.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DCbmFI06.js";import"./index-L41gFWOj.js";import"./index-CPY0RkYC.js";import"./Link-DjplMcMT.js";import"./addCustomCSSWithScoping-Di76Mem5.js";import"./index-BLEhzZcH.js";import"./index-BtOoTda4.js";import"./index-Cbvl8GTm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BvuY_C9E.js";import"./index-Bmfc8Eqw.js";import"./information-Z43pYR60.js";import"./sys-enter-2-2LeoQRYT.js";import"./alert-no1g3tmv.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BqmvIRJk.js";import"./delete-DG7Qils1.js";import"./settings-CD3VS0Cp.js";import"./NoData-C6HMlKut.js";import"./IllustratedMessage-CTErdkpq.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-gLosEED4.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DiOS_Wi8.js";import"./index-ByYh-WOK.js";import"./slim-arrow-down-DWzEitHv.js";import"./Input-BX2m7kq-.js";import"./ResponsivePopoverCommon.css-Dg8IVknp.js";import"./ValueStateMessage.css-CPiQjmUi.js";import"./Suggestions.css-BEWKt8Uf.js";import"./ListBoxItemGroupTemplate-CH87aIyU.js";import"./ComboBoxItemGroup-C2WOE3Rv.js";import"./ListItemBaseTemplate-BZ506cs0.js";import"./Token-BEgAyOCd.js";import"./ScrollEnablement-j28YNdtg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Z9rWegqM.js";import"./ToggleButton-aJVgg_YY.js";import"./SuggestionItem-3mz-RJsY.js";import"./index-D24AFQZk.js";import"./Option-CJC0NEQ9.js";import"./index-guueUBkC.js";import"./SegmentedButton--brNUxa5.js";import"./index-fGwj63Fh.js";import"./Select-D-KL7nct.js";import"./InvisibleMessage--LVGVy97.js";import"./slim-arrow-down-sADW_Ldr.js";import"./useIsRTL-SG3H97q3.js";import"./index-B7kRuZUV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-2jVwpWUZ.js";import"./group-2-Dr0JsWqU.js";import"./sort-descending-CgA-kYmN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-DT1QH2dv.js";import"./utils-CHYk4Hwj.js";import"./index-DGNMCWwU.js";import"./index-Cd-W8HrQ.js";import"./index-Du_TBYm5.js";import"./navigation-down-arrow-Bt8Z5CUg.js";import"./navigation-right-arrow-2WbGTEK8.js";import"./navigation-right-arrow-D6Z39_S5.js";import"./useCurrentTheme-DTJM-7US.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Cas5z87m.js";import"./debounce-D7W5PopO.js";import"./index-C2Mlehus.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(r,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{sourceState:"none",of:p}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const TableComponent = (props) => {
  const handleColumResize = useCallback((e) => {
    console.log(e.columnWidth, e.header);
  }, []);

  const tableHooks = useMemo(
    () => [
      AnalyticalTableHooks.useOnColumnResize(handleColumResize, {
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
`,o.jsx(m,{})]})}function Po(i={}){const{wrapper:e}={...n(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Po as default};
