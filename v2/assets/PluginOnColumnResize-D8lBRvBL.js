import{j as o}from"./iframe-wtGyowSu.js";import{useMDXComponents as r}from"./index-CZZ2_hDJ.js";import{I as n,F as m}from"./CommandsAndQueries-DQ0OWp_s.js";import{M as p,C as s}from"./blocks-DOUzMh6P.js";import"./Tag-CF7bcptF.js";import"./index-DemLuH5_.js";import"./i18n-DCXZOGva.js";import"./copy-fNgmErhy.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DrQNTaHW.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BFewsKyD.js";import"./index-CJ5u_hE4.js";import"./index-KwEy5gb6.js";import"./Link-BV0lLBLc.js";import"./addCustomCSSWithScoping-Bg0OR_5Z.js";import"./index-CeuGV1sB.js";import"./index-klURHLLt.js";import"./index-WPEP5BQu.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BeC7vZ35.js";import"./index-CR8pF6-t.js";import"./information-B0VTD8Pg.js";import"./sys-enter-2-CvQEzb10.js";import"./alert-Cef964mc.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CqTHo6Oy.js";import"./delete-B49e3xOy.js";import"./settings-BhXfmtZo.js";import"./NoData-D-CeBPtE.js";import"./IllustratedMessage-CG9MBdLp.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Byfj7R1q.js";import"./index-eL1oL0O0.js";import"./slim-arrow-down-CiHrStr3.js";import"./Input-buaSlew7.js";import"./ResponsivePopoverCommon.css-D-1xG2-i.js";import"./ValueStateMessage.css-COGmpv8H.js";import"./Suggestions.css-BAb2ZnZd.js";import"./ListBoxItemGroupTemplate-BEADZVdq.js";import"./ComboBoxItemGroup-DljnFe5P.js";import"./ListItemBaseTemplate-D4huXPoH.js";import"./Token-CW8wTRqJ.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B54pPtmm.js";import"./ToggleButton-BY07XXUb.js";import"./SuggestionItem-C6nikC1O.js";import"./index-BBX4--Ov.js";import"./Option-DAm3n8Um.js";import"./index-DuSn1TaV.js";import"./SegmentedButton-DNZ8rr19.js";import"./index-CKpFXmKb.js";import"./Select-CpDSGnVu.js";import"./InvisibleMessage-CqVAFS8W.js";import"./slim-arrow-down-Cfpmc2nk.js";import"./useIsRTL-Qs2nxCti.js";import"./index-C0KYOG-T.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DBdDqf2s.js";import"./group-2-BVpdmttV.js";import"./sort-descending-DSpBk47E.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D_G53VOK.js";import"./utils-zWP-DA9Y.js";import"./index-5w_GDQTo.js";import"./index-BJmG4xyb.js";import"./index-UHr40Gn7.js";import"./navigation-down-arrow-T9BpYw6q.js";import"./navigation-right-arrow-CxD7_o0m.js";import"./navigation-right-arrow-B5AIzKVw.js";import"./useCurrentTheme-DameEpyT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-jyhDdUjI.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BEqQSamn.js";import"./index-DpS3Ux2E.js";import"./less-DvDpQ08n.js";import"./index-4-CbeKxN.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
