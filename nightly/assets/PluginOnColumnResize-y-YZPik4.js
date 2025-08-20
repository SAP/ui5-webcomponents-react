import{j as o}from"./iframe-Plj9L4DO.js";import{useMDXComponents as n}from"./index-uN80YAVR.js";import{I as r,F as m}from"./CommandsAndQueries-BWyKkggu.js";import{M as l,C as s}from"./blocks-CBjnjgp2.js";import"./Tag-Chhqj61J.js";import"./index-TPF4FnDa.js";import"./copy-DLXELO5k.js";import{d as p}from"./AnalyticalTableHooks.stories-C97ck5E1.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DdhKX7PQ.js";import"./index-BQrHmUPn.js";import"./index-B4Ji1mzc.js";import"./Link-BaW3AGMM.js";import"./addCustomCSSWithScoping-DiURvOzS.js";import"./index-q1UVXeS8.js";import"./index-8rr5Mrdg.js";import"./index-B8knOcBx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-vnxFP9T5.js";import"./index-B6F36pGT.js";import"./information-gWqn0Y75.js";import"./sys-enter-2-CA_27ms1.js";import"./alert-p9YyGNnM.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ijwk2Jq3.js";import"./delete-Bj_pcN1D.js";import"./settings-C1dsANlV.js";import"./NoData-C6Ob-Z--.js";import"./IllustratedMessage-BHtZel4v.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-YfgvGqD3.js";import"./index-BdoAGjQ2.js";import"./slim-arrow-down-bQWmrnVc.js";import"./Input-D_9FWiS-.js";import"./ResponsivePopoverCommon.css-DCdKvyYg.js";import"./ValueStateMessage.css-JOKuFUum.js";import"./Suggestions.css-CxuGFOi-.js";import"./ListBoxItemGroupTemplate-sEIue0Fw.js";import"./ComboBoxItemGroup-CXVkGl0O.js";import"./ListItemBaseTemplate-CH90Z1sT.js";import"./Token-X11-BsdP.js";import"./ScrollEnablement-C4mp0fCO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CZA0fV_-.js";import"./ToggleButton-CokJVa8f.js";import"./SuggestionItem-CZ3Cpr40.js";import"./index-H4v79u-c.js";import"./Option-CMOaJbPT.js";import"./index-D-3W9zYA.js";import"./SegmentedButton-DKNm8wW6.js";import"./index-DEFckCJE.js";import"./Select-CJ-vJLYi.js";import"./InvisibleMessage-C9ijcey0.js";import"./slim-arrow-down-D9ZL1EHX.js";import"./useIsRTL-_CpVncDg.js";import"./index-BzZ4luee.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C-Pk41C2.js";import"./group-2-BhbpIExg.js";import"./sort-descending-DSmABxuS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C5HZXdPZ.js";import"./utils-CzUFBlHA.js";import"./index-BzcyxAVY.js";import"./index-DfxHMw3J.js";import"./index-Y38PQMr-.js";import"./navigation-down-arrow-DJw6Oxgn.js";import"./navigation-right-arrow-O3aG19yG.js";import"./navigation-right-arrow-DHq6wjVC.js";import"./useCurrentTheme-DI5oXyuc.js";import"./IndicationColor-DVw-fSM_.js";import"./index-SRyOKcq5.js";import"./debounce-D7W5PopO.js";import"./index-C8EPvm6k.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
