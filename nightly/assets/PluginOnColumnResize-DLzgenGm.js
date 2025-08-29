import{j as o}from"./iframe-D7jNN5F7.js";import{useMDXComponents as n}from"./index-DKysAdcf.js";import{I as r,F as m}from"./CommandsAndQueries-B3x-n25L.js";import{M as l,C as s}from"./blocks-CKVkbQ2U.js";import"./Tag-B3C9nXYY.js";import"./index-CnuyuUF_.js";import"./copy-DjcHAfNd.js";import{d as p}from"./AnalyticalTableHooks.stories-BmP7vUL2.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DpTP8YTk.js";import"./index-BhDv_qjx.js";import"./index-DKghAgRr.js";import"./Link-qldH56b9.js";import"./addCustomCSSWithScoping-CHnl0xaL.js";import"./index-CjFbPK-F.js";import"./index-Cmma790X.js";import"./index-D08PdQRZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CHZuE3Bl.js";import"./index-C3oU0sTK.js";import"./information-fEhQ27Xq.js";import"./sys-enter-2-BHUDT81N.js";import"./alert-dGaMHbZ_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CrWTQEUd.js";import"./delete-BMcwn6C5.js";import"./settings-ooRwGldT.js";import"./NoData-CmmWac5w.js";import"./IllustratedMessage-CGjrQDe5.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Ba41DV2y.js";import"./index-QO4ETt-1.js";import"./slim-arrow-down-ClFDM0XG.js";import"./Input-C1LBCJrC.js";import"./ResponsivePopoverCommon.css-MDF32GMH.js";import"./ValueStateMessage.css-CSvT2ncZ.js";import"./Suggestions.css-h4wD07M-.js";import"./ListBoxItemGroupTemplate-m32UL8v8.js";import"./ComboBoxItemGroup-MOGf7S7z.js";import"./ListItemBaseTemplate-Qur3Yd49.js";import"./Token-dgku7ZGE.js";import"./ScrollEnablement-DtvSga-i.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BWHZOOaU.js";import"./ToggleButton-BQaXQ2ri.js";import"./SuggestionItem-Cyq1l9Gv.js";import"./index-BHm2R3XB.js";import"./Option-_FDJMDEU.js";import"./index-njIvvZCY.js";import"./SegmentedButton-DfDY_QCz.js";import"./index-cKUCfcCB.js";import"./Select-CDYC53Ti.js";import"./InvisibleMessage-ClgnFC8X.js";import"./slim-arrow-down-B3FD46qZ.js";import"./useIsRTL-pM8eUPi3.js";import"./index-1d71x-Ip.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ClyrPaST.js";import"./group-2-D_k1jUK1.js";import"./sort-descending-BjOIqvLu.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B9wKJ0ov.js";import"./utils-BRgWD3XM.js";import"./index-B6ReJZeR.js";import"./index-BJLgpe9x.js";import"./index-DmxdgylF.js";import"./navigation-down-arrow-DMsOsTOp.js";import"./navigation-right-arrow-FztiZH_C.js";import"./navigation-right-arrow-D7gRJcL2.js";import"./useCurrentTheme-Dy1oFGaa.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B24FJ1pD.js";import"./debounce-D7W5PopO.js";import"./index-TuCRCHSI.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
