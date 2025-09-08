import{j as o}from"./iframe-BxIaMIJ2.js";import{useMDXComponents as r}from"./index-DTW9WkuG.js";import{I as n,F as m}from"./CommandsAndQueries-Di8bJMhG.js";import{M as p,C as s}from"./blocks-CHJsxz9e.js";import"./Tag-exOiuXi7.js";import"./index-CiOOHqpr.js";import"./copy-DC4VamtM.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Biv7_0b_.js";import"./preload-helper-D9Z9MdNV.js";import"./index-2yLOC2-7.js";import"./index-BSQj9ICh.js";import"./index-ozaXSakq.js";import"./Link-6ZN5XN7_.js";import"./addCustomCSSWithScoping-BJIJHA0f.js";import"./index-DGNtnQKj.js";import"./index-RGR4m0WA.js";import"./index-DiLVqziG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DQcSYUZ6.js";import"./index-BrdrQHC3.js";import"./information-DrVbI7V6.js";import"./sys-enter-2-CxxS0S6m.js";import"./alert-gJnafO72.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DGn7erBf.js";import"./delete-CXC6lmer.js";import"./settings-z3Kqv_H_.js";import"./NoData-DUqssr6L.js";import"./IllustratedMessage-sPniRTYn.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Bod6JhhQ.js";import"./index-CUZI3FRG.js";import"./slim-arrow-down-b7xW5WMQ.js";import"./Input-DKCCXuXG.js";import"./ResponsivePopoverCommon.css-6wr_yrJO.js";import"./ValueStateMessage.css-BUM5hsl4.js";import"./Suggestions.css-oyFv45v2.js";import"./ListBoxItemGroupTemplate-DmarxL3_.js";import"./ComboBoxItemGroup-CA6r4V87.js";import"./ListItemBaseTemplate-YOGeNlAr.js";import"./Token-DKlGFJle.js";import"./ScrollEnablement-CGteJMp0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-xKwcd7x4.js";import"./ToggleButton-CAbhzZ4Z.js";import"./SuggestionItem-D2t-HTV4.js";import"./index-CaupuYMw.js";import"./Option-Buj1ceqN.js";import"./index-QqJahJbf.js";import"./SegmentedButton-f44xS3Ee.js";import"./index-Bh_3qXv_.js";import"./Select-Cz-kH7T0.js";import"./InvisibleMessage-DqwXOxWx.js";import"./slim-arrow-down-BI_DSc-2.js";import"./useIsRTL--3iCf25v.js";import"./index-DYj6x7NK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DLCI_AKZ.js";import"./group-2-DJsmMrGI.js";import"./sort-descending-BSw34moc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D2CaCvj_.js";import"./utils-D4lUgN_j.js";import"./index-C38ppj6_.js";import"./index-BNPI3NEr.js";import"./index-CSVTtRtP.js";import"./navigation-down-arrow-D7EJn8ch.js";import"./navigation-right-arrow-DVOIDXzO.js";import"./navigation-right-arrow-uTQcyQpq.js";import"./useCurrentTheme-NkmcojZY.js";import"./IndicationColor-DVw-fSM_.js";import"./index-ERhnquzG.js";import"./debounce-D7W5PopO.js";import"./paper-plane-DZq9mbkX.js";import"./index-Bidd9wX5.js";import"./less-D4FrIAV3.js";import"./index-Cp33MICI.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
