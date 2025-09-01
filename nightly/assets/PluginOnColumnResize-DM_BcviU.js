import{j as o}from"./iframe-BohNpW-0.js";import{useMDXComponents as n}from"./index-CNs9TfzQ.js";import{I as r,F as m}from"./CommandsAndQueries-dvLT1dsP.js";import{M as l,C as s}from"./blocks-BlqU8BU6.js";import"./Tag-Cz53inHB.js";import"./index-DRrOOsA_.js";import"./copy-CQ_htW6-.js";import{d as p}from"./AnalyticalTableHooks.stories-BkE12vkX.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BoJlElCR.js";import"./index-0TDPNrCO.js";import"./index-DbSbZGAD.js";import"./Link-COIjIkbU.js";import"./addCustomCSSWithScoping-k_HNs7SN.js";import"./index-BPmVkbH6.js";import"./index-DMJ_2dM-.js";import"./index-RUOWoGP0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-E0sphTwG.js";import"./index-ByPlsUCp.js";import"./information-Cnc3e4nW.js";import"./sys-enter-2-YVZ7RvKW.js";import"./alert-t6wYPrrQ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BWnuRW_a.js";import"./delete-DFm5suxj.js";import"./settings-BLCj6Ktd.js";import"./NoData-CAAIc5W6.js";import"./IllustratedMessage-Bpl_x9QE.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-1alUcvag.js";import"./index-Ch4OLcN7.js";import"./slim-arrow-down-LYXn27gh.js";import"./Input-CXgaSvQH.js";import"./ResponsivePopoverCommon.css-DuJkDvJC.js";import"./ValueStateMessage.css-BUzzgD75.js";import"./Suggestions.css-BIwwsvtG.js";import"./ListBoxItemGroupTemplate-jhhhIZpU.js";import"./ComboBoxItemGroup-CqSbXN4t.js";import"./ListItemBaseTemplate-reYvnJJM.js";import"./Token-iGWj7aCd.js";import"./ScrollEnablement-HAARTfJV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CZXGuN1Y.js";import"./ToggleButton-U_geWF_i.js";import"./SuggestionItem-Co2iHh_E.js";import"./index-BAL7ahhu.js";import"./Option-CobSYum8.js";import"./index-Bu6Tv_AS.js";import"./SegmentedButton-Cs3c2JRc.js";import"./index-DWE68V0w.js";import"./Select-BLyS4LHF.js";import"./InvisibleMessage-_2VjBh0c.js";import"./slim-arrow-down-wv1cGsxv.js";import"./useIsRTL-D6FosoIx.js";import"./index-CjyJ5jjJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C3RkhPtf.js";import"./group-2-COlpxIGz.js";import"./sort-descending-CwpmoWCE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CZkdsjgh.js";import"./utils-GVqR78hZ.js";import"./index-UheYK0zI.js";import"./index-CrORVvYl.js";import"./index-BhN4dH-m.js";import"./navigation-down-arrow-D4lgA2BL.js";import"./navigation-right-arrow-DP2bB5H7.js";import"./navigation-right-arrow-C4pGrl1t.js";import"./useCurrentTheme-CCffuhcS.js";import"./IndicationColor-DVw-fSM_.js";import"./index-KjAWBXk6.js";import"./debounce-D7W5PopO.js";import"./index-Cf2iELKC.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
