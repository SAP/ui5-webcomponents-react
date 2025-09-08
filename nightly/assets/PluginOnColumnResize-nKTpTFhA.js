import{j as o}from"./iframe-C-EBr6B5.js";import{useMDXComponents as r}from"./index-CsHoO3vp.js";import{I as n,F as m}from"./CommandsAndQueries-uIAr-det.js";import{M as p,C as s}from"./blocks-CW6WXKe3.js";import"./Tag-oA_76L9w.js";import"./index-w0Ow44Ci.js";import"./i18n-DCXZOGva.js";import"./copy-u5h8VvvF.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CDszC7uY.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BUutaB5D.js";import"./index-BI8WG9ur.js";import"./index-D4pu56zs.js";import"./Link-BOxP5Jij.js";import"./addCustomCSSWithScoping-DyJ9Y5R2.js";import"./index-DuvAH5uD.js";import"./index-CcO_nGqV.js";import"./index-o40X6E60.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B-BNRVJb.js";import"./index-DPNnv8Bc.js";import"./information-tqFaSeRf.js";import"./sys-enter-2-Bt0bcCDE.js";import"./alert-yTZDtevr.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DNDB_VXd.js";import"./delete-BvdG4V2u.js";import"./settings-B9da7Cna.js";import"./NoData-Bas3NaNU.js";import"./IllustratedMessage-D13zaZV5.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Ccf_YzUR.js";import"./index-BQ5w9LDa.js";import"./slim-arrow-down-BKqJdj1T.js";import"./Input-Ds_HDP4O.js";import"./ResponsivePopoverCommon.css-CDBYINKk.js";import"./ValueStateMessage.css-B0uL2WsG.js";import"./Suggestions.css-B3PqFbjl.js";import"./ListBoxItemGroupTemplate-Bgmdm98P.js";import"./ComboBoxItemGroup-BwZX_rcF.js";import"./ListItemBaseTemplate-DJJcj1Yn.js";import"./Token-BBpcnF43.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DX4UvhQJ.js";import"./ToggleButton-BFDFB0sm.js";import"./SuggestionItem-6ARptsb6.js";import"./index-C4mGZgek.js";import"./Option-CuwMUGFB.js";import"./index-Dc87r9fg.js";import"./SegmentedButton-Brturu3l.js";import"./index-C96_EYB_.js";import"./Select-CKUn7KVG.js";import"./InvisibleMessage-CqVAFS8W.js";import"./slim-arrow-down-B8bLmGYi.js";import"./useIsRTL-DGcoN34w.js";import"./index-BIxje1JV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B6YASDbP.js";import"./group-2-BAcCCF5C.js";import"./sort-descending-ClNXTwB8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CnrGkxIO.js";import"./utils-B-nKspCA.js";import"./index-C2uJtNkV.js";import"./index-B2hA18x8.js";import"./index-CDeu0SSK.js";import"./navigation-down-arrow-BhSnyc1Q.js";import"./navigation-right-arrow-t2mKxsw7.js";import"./navigation-right-arrow-JtMK9OsX.js";import"./useCurrentTheme-DANdzbsK.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CWVlJWaR.js";import"./debounce-D7W5PopO.js";import"./paper-plane-C05qekUe.js";import"./index-DOZflY0X.js";import"./less-DrtzVZnk.js";import"./index-DTEtvo1o.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
