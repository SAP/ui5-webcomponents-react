import{j as o}from"./iframe-D47IesGI.js";import{useMDXComponents as n}from"./index-B-Cjj5vb.js";import{I as r,F as m}from"./CommandsAndQueries-BUssvnnv.js";import{M as l,C as s}from"./blocks-DWAQQ6EB.js";import"./Tag-DyH9Q3dA.js";import"./index-Cj_ar6Qq.js";import"./copy-CpxPPhhd.js";import{d as p}from"./AnalyticalTableHooks.stories-Dmu3Wc1Y.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CbWKu4dM.js";import"./index-CAoIqyrc.js";import"./index-D8NvhSag.js";import"./Link-Cbo0X0QC.js";import"./addCustomCSSWithScoping-vO2X2B4L.js";import"./index-Dxtyr50j.js";import"./index-CfXTMk0G.js";import"./index-ibIc4r1j.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-1XHFcI1P.js";import"./index-BYtsHb6f.js";import"./information-GnhwVE2w.js";import"./sys-enter-2-FMcsLRqn.js";import"./alert-C1Bd-ATk.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CdRf6Gn_.js";import"./delete-BdLzfl6f.js";import"./settings-D4RCu3f5.js";import"./NoData-DejRevwI.js";import"./IllustratedMessage-BUxe0n2B.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BOaFH31C.js";import"./index-DoOBs30V.js";import"./slim-arrow-down-CRL6N__0.js";import"./Input-BVNlr-7R.js";import"./ResponsivePopoverCommon.css-DcqdU9zO.js";import"./ValueStateMessage.css-Foo9e4QP.js";import"./Suggestions.css-Jvp1dCcK.js";import"./ListBoxItemGroupTemplate-C2Cbg4RB.js";import"./ComboBoxItemGroup-oNdpvv56.js";import"./ListItemBaseTemplate-xRzWPdIS.js";import"./Token-DlVRMaDD.js";import"./ScrollEnablement-DwY0RoAs.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DxLrmdZY.js";import"./ToggleButton-BnUl__nv.js";import"./SuggestionItem-v3I1qCjx.js";import"./index-Bu-eXKyI.js";import"./Option-BY9BYDVp.js";import"./index-C_AafgAi.js";import"./SegmentedButton-D7wPRwMg.js";import"./index-shpjVhsR.js";import"./Select-CR2ghGLB.js";import"./InvisibleMessage-7tcQYx8D.js";import"./slim-arrow-down-D_ImNcdv.js";import"./useIsRTL-CTOFbx1K.js";import"./index-BMjRkiVz.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BlK-n2jI.js";import"./group-2-Cp4gTzXo.js";import"./sort-descending-CDUMih-k.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-SEUed_fI.js";import"./utils-Gey8zOGR.js";import"./index-BFyflX6k.js";import"./index-BXcL-3gN.js";import"./index-CzfiA05G.js";import"./navigation-down-arrow-DcpTPJLm.js";import"./navigation-right-arrow-B9HO0DfC.js";import"./navigation-right-arrow-Brdl4Rhp.js";import"./useCurrentTheme-HVVP5WXO.js";import"./IndicationColor-DVw-fSM_.js";import"./index-qnRqtfun.js";import"./debounce-D7W5PopO.js";import"./index-SflDEuXk.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
