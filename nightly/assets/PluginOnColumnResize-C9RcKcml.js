import{j as o}from"./iframe-Ba8pCVp8.js";import{useMDXComponents as n}from"./index-EJQOh2Id.js";import{I as r,F as m}from"./CommandsAndQueries-BwMOH1SZ.js";import{M as l,C as s}from"./blocks-CkgJFs4T.js";import"./Tag-D_p_BT-M.js";import"./index-ChA7roql.js";import"./copy-BQA3UKNo.js";import{d as p}from"./AnalyticalTableHooks.stories-DKcHsbUg.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DotiVDwk.js";import"./index-Dl3ePCz7.js";import"./index-chGFhN5O.js";import"./Link-x2Qr5Zbu.js";import"./addCustomCSSWithScoping-Bw6JZ75Q.js";import"./index-CfvbnLXm.js";import"./index-COr_Uezf.js";import"./index-D8qxJJnM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CorCBzMG.js";import"./index-D9TUnkjB.js";import"./information-D2Jo4xNl.js";import"./sys-enter-2-D153taNV.js";import"./alert-D_vJdNjC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BkBCTXa9.js";import"./delete-BHx19-Y9.js";import"./settings-C1rGZAVZ.js";import"./NoData-C9Am1g_a.js";import"./IllustratedMessage-gFpY2ARx.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Cpo8GMo1.js";import"./index-BS2xqF92.js";import"./slim-arrow-down-CjCpnDGL.js";import"./Input-BnPcYwI0.js";import"./ResponsivePopoverCommon.css-De3l4lV7.js";import"./ValueStateMessage.css-CnYMheJQ.js";import"./Suggestions.css-CcER9QIN.js";import"./ListBoxItemGroupTemplate-DFglDMjK.js";import"./ComboBoxItemGroup-D4Gs5NOL.js";import"./ListItemBaseTemplate-DFt11I0O.js";import"./Token-BKduK5BD.js";import"./ScrollEnablement-BDrNOFng.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BDVOPr0Q.js";import"./ToggleButton-C8ruj2ek.js";import"./SuggestionItem-DLLMxiuf.js";import"./index-BpVwnbz4.js";import"./Option-ydyzdS2N.js";import"./index-BahYCzWG.js";import"./SegmentedButton-Dd9nWvWy.js";import"./index-DO3t8-bw.js";import"./Select-DR14Z-d1.js";import"./InvisibleMessage-DNAVGHgD.js";import"./slim-arrow-down-DpHxo-vW.js";import"./useIsRTL-iU-OFwyb.js";import"./index-KjM22Mkn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BapOufte.js";import"./group-2-BCK94LLS.js";import"./sort-descending-DoJpvQSn.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DG5c9gPi.js";import"./utils-ta-b6IhW.js";import"./index-9Yl4D7c1.js";import"./index-CNCeO74r.js";import"./index-BtDnirP4.js";import"./navigation-down-arrow-CTzJ9Li3.js";import"./navigation-right-arrow-Sp9fSK-u.js";import"./navigation-right-arrow-NCcFjcdA.js";import"./useCurrentTheme-unQEnGqh.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CfLpzXqh.js";import"./debounce-D7W5PopO.js";import"./index-Bgmqc7Nb.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
