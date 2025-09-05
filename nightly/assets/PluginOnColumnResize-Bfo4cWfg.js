import{j as o}from"./iframe-DEht8tsT.js";import{useMDXComponents as r}from"./index-CHmvqmZV.js";import{I as n,F as m}from"./CommandsAndQueries-r7FFQXZn.js";import{M as p,C as s}from"./blocks-B9eJfK2p.js";import"./Tag-Bo7VmRFf.js";import"./index-qqa4-hS-.js";import"./i18n-DCXZOGva.js";import"./copy-DdxSmOcQ.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-rHSTGkQk.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DLGND6CU.js";import"./index-Boj5J7Ot.js";import"./index-Dwyff0cB.js";import"./Link-DQiRK5OG.js";import"./addCustomCSSWithScoping-BN-zHrab.js";import"./index-D0y5lDJX.js";import"./index--icAFx10.js";import"./index-BRdP8YZI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cl7xFzXJ.js";import"./index-v8e_2LrN.js";import"./information-qGG1TAK7.js";import"./sys-enter-2-Wo80rP1Y.js";import"./alert-BsRJ2cl_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DUPZhlNh.js";import"./delete-CIIO6cWP.js";import"./settings-BC73ny7E.js";import"./NoData-BmGlQJD3.js";import"./IllustratedMessage-DtFGh_HO.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-C2_Nt3zN.js";import"./index-DzPD0tFv.js";import"./slim-arrow-down-B6hMDuTF.js";import"./Input-hFJzw5L1.js";import"./ResponsivePopoverCommon.css-CByNGfjI.js";import"./ValueStateMessage.css-CelINsiK.js";import"./Suggestions.css-BNActsuA.js";import"./ListBoxItemGroupTemplate-C2LcXUoB.js";import"./ComboBoxItemGroup-qeNnc1ua.js";import"./ListItemBaseTemplate-EzB1Pcdn.js";import"./Token-DaOKNidD.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-6KE8nClO.js";import"./ToggleButton-kkVgC4NU.js";import"./SuggestionItem-CPdN0sMT.js";import"./index-B_kfaCxx.js";import"./Option-C5YcjUdy.js";import"./index-DqSD4c31.js";import"./SegmentedButton-C63M7we9.js";import"./index-DnPSE1-9.js";import"./Select-Z6SVspqY.js";import"./InvisibleMessage-CqVAFS8W.js";import"./slim-arrow-down-c8qc4hiX.js";import"./useIsRTL-DuD9eh_M.js";import"./index-CXm15WPn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cl7mXAP8.js";import"./group-2-Bj2HnCsV.js";import"./sort-descending-D3pMADc7.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cbf0XwND.js";import"./utils-ISKKNPcb.js";import"./index-DX3S6mf8.js";import"./index-DLQMS65N.js";import"./index-CZT4M-ks.js";import"./navigation-down-arrow-DpGvha-M.js";import"./navigation-right-arrow-DB7Ib3_i.js";import"./navigation-right-arrow-BS0T2xtE.js";import"./useCurrentTheme-Cg8J5RkG.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DJPITGZE.js";import"./debounce-D7W5PopO.js";import"./paper-plane-pbKRJ5e0.js";import"./index-p95JEi1E.js";import"./less-B7nzovk5.js";import"./index-D-8goo6_.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(n,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{sourceState:"none",of:l}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const TableComponent = (props) => {
  const handleColumResize = useCallback((e) => {
    console.log(e.columnWidth, e.header);
  }, []);

  const tableHooks = useMemo(
    () => [
      useOnColumnResize(handleColumResize, {
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
`,o.jsx(m,{})]})}function Wo(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Wo as default};
