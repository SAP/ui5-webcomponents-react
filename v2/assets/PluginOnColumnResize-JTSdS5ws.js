import{j as o}from"./iframe-CGUWa3l5.js";import{useMDXComponents as r}from"./index-Cg9cAKJC.js";import{I as n,F as m}from"./CommandsAndQueries-D9MoTrLH.js";import{M as p,C as s}from"./blocks-C0vLrpaE.js";import"./Tag-BIHZtDOF.js";import"./index-CL_zuYv3.js";import"./copy-WtCMvp6x.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BDgC6LVf.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BsFrl4mG.js";import"./index-Dagge6tW.js";import"./index-Be3QtdR7.js";import"./Link-0YCTvvlv.js";import"./addCustomCSSWithScoping-C_LLLVaV.js";import"./index-M2L2LSTo.js";import"./index-G9i70mAv.js";import"./index-CqG7yhFq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dmz3vIHQ.js";import"./index-DVv4DYKP.js";import"./information-gqQAsN3Y.js";import"./sys-enter-2-CDAeFjyO.js";import"./alert-ClZlqLU4.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CIn0EWmH.js";import"./delete-D8iOVq_P.js";import"./settings-BrU77TJz.js";import"./NoData-BtKw36NF.js";import"./IllustratedMessage-roO0aRXn.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-pvKKlwIQ.js";import"./index-DdzUybfc.js";import"./slim-arrow-down-DTV0qdqM.js";import"./Input-D6uk9j64.js";import"./ResponsivePopoverCommon.css-BEg546Rm.js";import"./ValueStateMessage.css-2dCo7gv0.js";import"./Suggestions.css-BzuWn3c7.js";import"./ListBoxItemGroupTemplate-T5G4LspN.js";import"./ComboBoxItemGroup-rYdUb0dx.js";import"./ListItemBaseTemplate-DPo3rTK0.js";import"./Token-CM0KuYKd.js";import"./ScrollEnablement-CQEkGSE4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ZmC8AzlV.js";import"./ToggleButton-B7IDpjil.js";import"./SuggestionItem-B72aMk-1.js";import"./index-D3Q4XSrj.js";import"./Option-KkRC9zkJ.js";import"./index-BDLjw3vw.js";import"./SegmentedButton-BZuewes2.js";import"./index-16LEbUKu.js";import"./Select-DqU7IOqL.js";import"./InvisibleMessage-DsoM_md7.js";import"./slim-arrow-down-C2D4hy1c.js";import"./useIsRTL-CiTgDNnq.js";import"./index-DxY5n6Uu.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D2pujT4z.js";import"./group-2-Bsz1MTSG.js";import"./sort-descending-B95Vwq5b.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DQRmvIfO.js";import"./utils-Bvg3-Eiz.js";import"./index-DiFhnHjc.js";import"./index-DQtuH_ue.js";import"./index-DPKePRb-.js";import"./navigation-down-arrow-DEG608S3.js";import"./navigation-right-arrow-FljkMUDF.js";import"./navigation-right-arrow-DNwcZSXb.js";import"./useCurrentTheme-_W43-YnM.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B4ApArmi.js";import"./debounce-D7W5PopO.js";import"./paper-plane-CbfSQR9D.js";import"./index-buTEIynB.js";import"./less-CKtxa6cj.js";import"./index-R6CpitaJ.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
