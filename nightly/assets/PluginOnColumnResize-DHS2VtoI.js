import{j as o}from"./iframe-4VeS9m_X.js";import{useMDXComponents as n}from"./index-DEI3eVkK.js";import{I as r,F as m}from"./CommandsAndQueries-7kzg9PVA.js";import{M as l,C as s}from"./blocks-CTNIJnm8.js";import"./Tag-DU1032-S.js";import"./index-CQXZWhIk.js";import"./copy-jnb9sYPg.js";import{d as p}from"./AnalyticalTableHooks.stories-ckTPehdg.js";import"./preload-helper-Ct5FWWRu.js";import"./index-C8P7iKVZ.js";import"./index-C9GlwG2P.js";import"./index-CzN5fyXT.js";import"./Link-DgF00I8w.js";import"./addCustomCSSWithScoping-XwuX-cd5.js";import"./index-DWv4GmHu.js";import"./index-yUZ2I_oB.js";import"./index-BlbvU_99.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xOI-l5fg.js";import"./index-CftSo41I.js";import"./information-BYyVv8hA.js";import"./sys-enter-2-Yi--Cxct.js";import"./alert-BELJhRBR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DzO_7kh2.js";import"./delete-D0tqyXI3.js";import"./settings-Dh1N9l9x.js";import"./NoData-CfqmUQIq.js";import"./IllustratedMessage-Bhm6W5wf.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Bq1Dxl2N.js";import"./index-BGjDPX9c.js";import"./slim-arrow-down-BC69CAxO.js";import"./Input-7Ln5W5EQ.js";import"./ResponsivePopoverCommon.css-shdaMqe8.js";import"./ValueStateMessage.css-CGoPnYXJ.js";import"./Suggestions.css-CvvWsrep.js";import"./ListBoxItemGroupTemplate-BnggVcf_.js";import"./ComboBoxItemGroup-D6dCUoyB.js";import"./ListItemBaseTemplate-Q_ULQajv.js";import"./Token-Z2YEJAmU.js";import"./ScrollEnablement-BpLcSAvR.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ccnky39J.js";import"./ToggleButton-DYzuAOxb.js";import"./SuggestionItem-Bpa4_uLK.js";import"./index-DyTpO6UL.js";import"./Option-CFrG9aBk.js";import"./index-kL2L593_.js";import"./SegmentedButton-BfWqXCxQ.js";import"./index-aEhIJvAh.js";import"./Select-iON0Hwpr.js";import"./InvisibleMessage-Dmfd1gOp.js";import"./slim-arrow-down-DvFGLz9G.js";import"./useIsRTL-C2A7wRdc.js";import"./index-MVLgI-v_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CouX_vyD.js";import"./group-2-C0rLkZ4k.js";import"./sort-descending-DAhONQ_J.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BQqE75Ik.js";import"./utils-DVMbjWX7.js";import"./index-BLK2G4j5.js";import"./index-WwJOctFW.js";import"./index-BLDjATDM.js";import"./navigation-down-arrow-BVlOCaU1.js";import"./navigation-right-arrow-CmIckyyO.js";import"./navigation-right-arrow-C_vqXpi_.js";import"./useCurrentTheme-b3iu0jQF.js";import"./IndicationColor-DVw-fSM_.js";import"./index-jxpqFoPJ.js";import"./debounce-D7W5PopO.js";import"./index-D0TSTHqY.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
