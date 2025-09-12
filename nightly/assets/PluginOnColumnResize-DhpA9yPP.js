import{j as o}from"./iframe-caVmfS0N.js";import{useMDXComponents as r}from"./index-CXGNJi-m.js";import{I as n,F as m}from"./CommandsAndQueries-DetWBOzr.js";import{M as p,C as s}from"./blocks-ZTuRQuXn.js";import"./Tag-D02fgpVR.js";import"./index-ChGg5Mmk.js";import"./copy-DWhnNq-F.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BCB-wVty.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BDC18DOY.js";import"./index-IhZ6wtTw.js";import"./index-Bs2xAB6r.js";import"./Link-CXOXdny5.js";import"./addCustomCSSWithScoping-QAXJ-c-T.js";import"./index-D2ylaH5D.js";import"./index-C-mTSqge.js";import"./index-CxKirG4i.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BGaiMck6.js";import"./index-CIcgqU5O.js";import"./information-Dyf6S5us.js";import"./sys-enter-2-D5_eC5h3.js";import"./alert-BiCZhGMN.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C3ZVADDU.js";import"./delete-Coj8x0c2.js";import"./settings-BF6yTijn.js";import"./NoData-CsITxXfr.js";import"./IllustratedMessage-CTMgPAIw.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-D20unOQc.js";import"./index-Cwz-GXgg.js";import"./slim-arrow-down-DGRzOAYw.js";import"./Input-WFpKrumU.js";import"./ResponsivePopoverCommon.css-Ce7KHyvw.js";import"./ValueStateMessage.css-BRyE1X0p.js";import"./Suggestions.css-CteNzd-N.js";import"./ListBoxItemGroupTemplate-BjfXbqSJ.js";import"./ComboBoxItemGroup-C0lfAAfP.js";import"./ListItemBaseTemplate-Cae7dQEd.js";import"./Token-Da1u6OUU.js";import"./ScrollEnablement-DgdQ7xkj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DMUaO3aP.js";import"./ToggleButton-lfA0Sh9N.js";import"./SuggestionItem-N9yMpNBd.js";import"./index-s22r0EiM.js";import"./Option-DyUZB-Rv.js";import"./index-CAkcfUNV.js";import"./SegmentedButton-CjrpYGhu.js";import"./index-ui_8MH4g.js";import"./Select-bTsVYF8t.js";import"./InvisibleMessage-X31FjsM3.js";import"./slim-arrow-down-ChlFFHmi.js";import"./useIsRTL-DKqS38_i.js";import"./index-BMPIp6h6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DRe9wWWm.js";import"./group-2-B_WAeg2W.js";import"./sort-descending-BXjAOUZq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C4SBQasY.js";import"./utils-BKtL8ae0.js";import"./index-D_Zb-Qtb.js";import"./index-ggLsWFgW.js";import"./index-DPOI5qRi.js";import"./navigation-down-arrow-BIm6SbwE.js";import"./navigation-right-arrow-mE_QgPeY.js";import"./navigation-right-arrow-oN1zG5y0.js";import"./useCurrentTheme-C15qikew.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BZoYXHai.js";import"./debounce-D7W5PopO.js";import"./paper-plane-B8WUez_T.js";import"./index-Ba33ybf0.js";import"./less-GsgW5m6X.js";import"./index-BXO50M8O.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(m,{})]})}function So(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{So as default};
