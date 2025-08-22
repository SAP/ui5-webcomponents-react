import{j as o}from"./iframe-C6IJVCey.js";import{useMDXComponents as n}from"./index-Ds5KjzB0.js";import{I as r,F as m}from"./CommandsAndQueries-Bd9H39B6.js";import{M as l,C as s}from"./blocks-DeRnr9iF.js";import"./Tag-cnX1vvNU.js";import"./index-BUG7WGA1.js";import"./copy-CbqLCcHM.js";import{d as p}from"./AnalyticalTableHooks.stories-Dx2NT3Dj.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BVcSPkXT.js";import"./index--LhHeSe7.js";import"./index-WUc2kbX8.js";import"./Link-B3ojWDNP.js";import"./addCustomCSSWithScoping-DU4SAdPD.js";import"./index-Bud7zdyR.js";import"./index-DlMuD-u3.js";import"./index-42vsznvH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DogAS-dB.js";import"./index-DmVW3kBm.js";import"./information-DqbvobJ3.js";import"./sys-enter-2-DTDb_XUo.js";import"./alert-1QQg-aMK.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Zhit5amx.js";import"./delete-aHHOuuds.js";import"./settings-CaUhFBfT.js";import"./NoData-JQj0GdaH.js";import"./IllustratedMessage-BS85q4Yt.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-B6RVTiiT.js";import"./index-qA8_yrjn.js";import"./slim-arrow-down-CwgCCUKm.js";import"./Input-x1q94poq.js";import"./ResponsivePopoverCommon.css-BVZ5OAV_.js";import"./ValueStateMessage.css-DPjopeIN.js";import"./Suggestions.css-CiUwfxD-.js";import"./ListBoxItemGroupTemplate-BIko6feT.js";import"./ComboBoxItemGroup-DPpPogP1.js";import"./ListItemBaseTemplate-BVssUnLn.js";import"./Token-ChcB-5Ws.js";import"./ScrollEnablement-DfCxcIin.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-gdtXb5F2.js";import"./ToggleButton-DWOUuGjj.js";import"./SuggestionItem-CUDCE1RV.js";import"./index-CpJZBQzM.js";import"./Option-BeuU2j7g.js";import"./index-PtBujVy-.js";import"./SegmentedButton-DhZUEkWh.js";import"./index-DxPYvRTC.js";import"./Select-C7aDvX2p.js";import"./InvisibleMessage-BZfjRnJZ.js";import"./slim-arrow-down-BAej_MsU.js";import"./useIsRTL-LYqCZWtn.js";import"./index-D_T8LUzH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BhfoG3wP.js";import"./group-2-TZSiJNJJ.js";import"./sort-descending-BaG4v9mS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-alTfv3-p.js";import"./utils-qSGpanwl.js";import"./index-DoVpOxB3.js";import"./index-62xBBkuk.js";import"./index-Bejl1epP.js";import"./navigation-down-arrow-DUB_9yJR.js";import"./navigation-right-arrow-D2MkXcV7.js";import"./navigation-right-arrow-CiZi-qcJ.js";import"./useCurrentTheme-CkuDZfer.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BFSubTk6.js";import"./debounce-D7W5PopO.js";import"./index-DuV8laoQ.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
