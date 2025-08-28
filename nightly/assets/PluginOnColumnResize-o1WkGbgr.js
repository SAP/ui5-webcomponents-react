import{j as o}from"./iframe-BaUS3k1G.js";import{useMDXComponents as n}from"./index-BI_MoYzx.js";import{I as r,F as m}from"./CommandsAndQueries-Br4DVRUh.js";import{M as l,C as s}from"./blocks-B0L69tD0.js";import"./Tag-DBf9vhPp.js";import"./index-DRxFqLKQ.js";import"./copy-DThSO1XV.js";import{d as p}from"./AnalyticalTableHooks.stories-qcQzuxQR.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BYuYKtBV.js";import"./index-DCjJA-51.js";import"./index-DvySby2h.js";import"./Link-CWqnr4YP.js";import"./addCustomCSSWithScoping-CsHiQv5I.js";import"./index-Cf1dwhov.js";import"./index-C3F6-2iN.js";import"./index-BVDlh8LB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CNEqbSr6.js";import"./index-BYW7BxIG.js";import"./information-7Y3gJKKP.js";import"./sys-enter-2-BfkJMWkZ.js";import"./alert-BAVxkr1j.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DGZWkfq0.js";import"./delete-DhpuvOZU.js";import"./settings-HR7JgpW5.js";import"./NoData-6qkAt8Ff.js";import"./IllustratedMessage-BoVreQNe.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-U2f8pDyc.js";import"./index-Ck5H1gDo.js";import"./slim-arrow-down-D9JkdGK8.js";import"./Input-BOuUwhzq.js";import"./ResponsivePopoverCommon.css-Bo-IXKeW.js";import"./ValueStateMessage.css-BQHtB1Tv.js";import"./Suggestions.css-ChVrYUaI.js";import"./ListBoxItemGroupTemplate-BAOEqzDw.js";import"./ComboBoxItemGroup-BIKWFZF9.js";import"./ListItemBaseTemplate-DXoKIUzT.js";import"./Token-CA6Awd5t.js";import"./ScrollEnablement-2bJd9RZ5.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CyWlaMba.js";import"./ToggleButton-Bh2oTAth.js";import"./SuggestionItem-CbSqa2O4.js";import"./index-BkOfvqRQ.js";import"./Option-DS-TGLoK.js";import"./index-DIImDxSq.js";import"./SegmentedButton-C4Z1OrHK.js";import"./index-B1A2ONV2.js";import"./Select-2pNodCsm.js";import"./InvisibleMessage-vA_ZbJGm.js";import"./slim-arrow-down-BBKu_ZM0.js";import"./useIsRTL-HDA9Bb1C.js";import"./index-BWchkGL6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DvWdAtXT.js";import"./group-2-CQ4OV2J0.js";import"./sort-descending-BOWqXbHY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cy9Kjuts.js";import"./utils-Bw_xVhJf.js";import"./index-CmvusNlc.js";import"./index-BPY_plO5.js";import"./index-DNH4Ez_N.js";import"./navigation-down-arrow-DTMX2fTv.js";import"./navigation-right-arrow-CI7CsRQ5.js";import"./navigation-right-arrow-BZMs7BWv.js";import"./useCurrentTheme-DmjoUoh_.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DqvL999O.js";import"./debounce-D7W5PopO.js";import"./index-CD3_b8MJ.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
