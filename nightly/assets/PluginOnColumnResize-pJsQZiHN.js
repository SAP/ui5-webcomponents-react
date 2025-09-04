import{j as o}from"./iframe-D3WSfxnn.js";import{useMDXComponents as r}from"./index-INJaxUMc.js";import{I as n,F as m}from"./CommandsAndQueries-D0ehjJEo.js";import{M as p,C as l}from"./blocks-BRQLHU1o.js";import"./Tag-tOepiG2u.js";import"./index-BVrxhT_e.js";import"./i18n-DSpjDgSK.js";import"./copy-B0_WxO9i.js";import{d as s}from"./AnalyticalTableHooks.stories-F9P0BTGQ.js";import"./preload-helper-D9Z9MdNV.js";import"./index-C6MhXGTg.js";import"./index-RQ3mlM3E.js";import"./index-5wzk8jTN.js";import"./Link-C5psU7y5.js";import"./addCustomCSSWithScoping-CLwDIOC8.js";import"./index-BnnkB59L.js";import"./index-BSvrPTPm.js";import"./index-BedbyZ7Q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-kG1BPZBl.js";import"./index-BE0SODKX.js";import"./information-DM4h4iXJ.js";import"./sys-enter-2-U9KscTjZ.js";import"./alert-CfwYPci7.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DrnqMKPi.js";import"./delete-BOOuxbhQ.js";import"./settings-hCaP1_GJ.js";import"./NoData-CzSG2uvu.js";import"./IllustratedMessage-e0afxEz1.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-B6Yag-te.js";import"./index-DcN6Dcc5.js";import"./slim-arrow-down-D_XXp54g.js";import"./Input-B9Qhqcw-.js";import"./ResponsivePopoverCommon.css-CzEId8c-.js";import"./ValueStateMessage.css-DLLVegXt.js";import"./Suggestions.css-D771cyV0.js";import"./ListBoxItemGroupTemplate-Q3iFpAHb.js";import"./ComboBoxItemGroup-I1Y4Diaq.js";import"./ListItemBaseTemplate-D7zjd4B6.js";import"./Token-qJoofch3.js";import"./ScrollEnablement-SdEABngw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BCfXaiqR.js";import"./ToggleButton-D2RCjgKZ.js";import"./SuggestionItem-CdqfJZ2k.js";import"./index-D2MDw8cl.js";import"./Option-DfeLnjsk.js";import"./index-CGCoEsnV.js";import"./SegmentedButton-C6mK86yp.js";import"./index-CXFDuLDf.js";import"./Select-Dls2nJby.js";import"./InvisibleMessage-CxuvqbmW.js";import"./slim-arrow-down-2dqIAvum.js";import"./useIsRTL--4BOzxXK.js";import"./index-BqBHLTfL.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BrvNwjX5.js";import"./group-2-1PtLqjqY.js";import"./sort-descending-BY2QDSVP.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CZS191o9.js";import"./utils-BE8JeYQm.js";import"./index-DmfYB8pY.js";import"./index-u0S8NHsG.js";import"./index-B-8PQZmL.js";import"./navigation-down-arrow-L5mmSN-n.js";import"./navigation-right-arrow-6g9z3Q1C.js";import"./navigation-right-arrow-DwFbgTQb.js";import"./useCurrentTheme-DqJthjPR.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BX7Usk7V.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BCqncAXY.js";import"./index-DP832n5M.js";import"./less-BJ0P-Kzq.js";import"./index-B_jwusFd.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(n,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(l,{sourceState:"none",of:s}),`
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
`,o.jsx(m,{})]})}function Wo(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Wo as default};
