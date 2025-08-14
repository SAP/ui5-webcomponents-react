import{j as o}from"./iframe-ecJTvqfE.js";import{useMDXComponents as n}from"./index-DboZxcYT.js";import{I as r,F as m}from"./CommandsAndQueries-BpdU-ZQD.js";import{M as l,C as s}from"./blocks-qsqxfOd3.js";import"./Tag-ZKnVgoL_.js";import"./index-BC9DFcam.js";import"./copy-BgNjKRC7.js";import{d as p}from"./AnalyticalTableHooks.stories-q6W53hwz.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DsPSpYGU.js";import"./index-CvbQPYli.js";import"./index-D-eR8SSU.js";import"./Link-BtvKGD3A.js";import"./addCustomCSSWithScoping-DjLfDywf.js";import"./index-gkiYXWNa.js";import"./index-gUQqjp18.js";import"./index-Bnh2IJ03.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CFe2wd2s.js";import"./index-F3eIUiL2.js";import"./information-DxOwMn8K.js";import"./sys-enter-2-CERMkNGF.js";import"./alert-Bvw6_neD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dz5o_lOS.js";import"./delete-CYgRSVHH.js";import"./settings-DT35qf1y.js";import"./NoData-DrA-ocSn.js";import"./IllustratedMessage-C5H2YJ5P.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-CcPkgeQz.js";import"./index-CBOwlIv-.js";import"./slim-arrow-down-3aK9z7Cc.js";import"./Input-DpcAuAe8.js";import"./ResponsivePopoverCommon.css-Cw_YH4h8.js";import"./ValueStateMessage.css-DDOE9-R1.js";import"./Suggestions.css-BnKo4JPe.js";import"./ListBoxItemGroupTemplate-Dc0Uuht2.js";import"./ComboBoxItemGroup-BlgBGSlE.js";import"./ListItemBaseTemplate-DK6hWDmp.js";import"./Token-D-orksP7.js";import"./ScrollEnablement-DP_2c2Zn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-nzNqCNC_.js";import"./ToggleButton-BnrlQMLS.js";import"./SuggestionItem-DxZuFNrZ.js";import"./index-CMRV29w9.js";import"./Option-BE8Mkbt2.js";import"./index-DjvUtexN.js";import"./SegmentedButton-BIOttP1C.js";import"./index-DgFNQXjv.js";import"./Select-BzSJCrjN.js";import"./InvisibleMessage-B5otcPql.js";import"./slim-arrow-down-DonzRt-h.js";import"./useIsRTL-BxnTzuIz.js";import"./index-DEUO6Flh.js";import"./IconDesign-DXd8PPVF.js";import"./filter-eydisheW.js";import"./group-2-BdfQMgp4.js";import"./sort-descending-C_LOfBSY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-78hG4qZ8.js";import"./utils-Ds-PVOiu.js";import"./index-DeZPoYAD.js";import"./index-q7RkmIen.js";import"./index-CKSz6s-e.js";import"./navigation-down-arrow-CH6pOINU.js";import"./navigation-right-arrow-D0LxkRmU.js";import"./navigation-right-arrow-Dr63df2n.js";import"./useCurrentTheme-DEFvZlE4.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C8Kn9EZd.js";import"./debounce-D7W5PopO.js";import"./index-DmMTzdWz.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
