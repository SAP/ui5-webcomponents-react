import{j as o}from"./iframe-BGSq42U4.js";import{useMDXComponents as r}from"./index-DdgODfaa.js";import{I as n,F as m}from"./CommandsAndQueries-DmG8Z04y.js";import{M as p,C as s}from"./blocks-DinJR8BJ.js";import"./Tag-DFLgZ7W6.js";import"./index-4G2XFF8s.js";import"./i18n-DCXZOGva.js";import"./copy-BkyD6IBJ.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BW4qHHwC.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CFLPIYxg.js";import"./index-DeoM-MQY.js";import"./index-DBkY9uWW.js";import"./Link-YDiGCC73.js";import"./addCustomCSSWithScoping-BoN0_mzK.js";import"./index-81YUArEn.js";import"./index-DnKOFCSh.js";import"./index-D1i96R2Q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BJV2VOx9.js";import"./index-Dv5XzTWy.js";import"./information-BYqUssqf.js";import"./sys-enter-2-dj_WkcIy.js";import"./alert-pmNi1f9N.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DFxK7J9H.js";import"./delete-Dzl_3hnA.js";import"./settings-D01zQ7hv.js";import"./NoData-DVRj1UWp.js";import"./IllustratedMessage-DGYeVb0O.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DnmQBk2g.js";import"./index-BHQkJQiK.js";import"./slim-arrow-down-DLcfp9eI.js";import"./Input-BCjEB6tM.js";import"./ResponsivePopoverCommon.css-C97v6xTI.js";import"./ValueStateMessage.css-c8cGQ3y8.js";import"./Suggestions.css-hBw8WfKI.js";import"./ListBoxItemGroupTemplate-O6bJScLD.js";import"./ComboBoxItemGroup-Cyw7FPb_.js";import"./ListItemBaseTemplate-DPLSdGuC.js";import"./Token-Bj-WnEM-.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C9eXVr7n.js";import"./ToggleButton-lj5dY9Vv.js";import"./SuggestionItem-e6p9a2qW.js";import"./index-CuzQn-ym.js";import"./Option-De9cvay_.js";import"./index-DsX1x0Cs.js";import"./SegmentedButton-Bs-9-uNd.js";import"./index-Bd7g7Uhh.js";import"./Select-s6cC4PfQ.js";import"./InvisibleMessage-CqVAFS8W.js";import"./slim-arrow-down-tJmQ7xBW.js";import"./useIsRTL-UmUMTfkT.js";import"./index-BDRoTd8f.js";import"./IconDesign-DXd8PPVF.js";import"./filter-pKZg5tZw.js";import"./group-2-OlKOx7kW.js";import"./sort-descending-DZbNeaMn.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-b3CRpkDf.js";import"./utils-BXniIs5V.js";import"./index-DV8x_VUY.js";import"./index-Bl0D5g66.js";import"./index-DHNxxH0D.js";import"./navigation-down-arrow-7ufWXDu9.js";import"./navigation-right-arrow-DL470iX4.js";import"./navigation-right-arrow-CLB8HeYS.js";import"./useCurrentTheme-CNFGjYI-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B4kj3IR9.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BihcXvWE.js";import"./index-CMcW5V3Y.js";import"./less-Cr_OeLu9.js";import"./index-CJYJTirV.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
