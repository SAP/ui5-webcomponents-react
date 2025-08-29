import{j as o}from"./iframe-Dyl3L-t5.js";import{useMDXComponents as n}from"./index-DBGwXOnP.js";import{I as r,F as m}from"./CommandsAndQueries-Cb3G3ka5.js";import{M as l,C as s}from"./blocks-DynXzMxo.js";import"./Tag-CzQty8rY.js";import"./index-CqdKq5PF.js";import"./copy-CWrvVeie.js";import{d as p}from"./AnalyticalTableHooks.stories-BqQj_Ltc.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BJK3nZOd.js";import"./index-mdaYmaaO.js";import"./index-BDQQRyfA.js";import"./Link-BjutyjAG.js";import"./addCustomCSSWithScoping-B7LJv67X.js";import"./index-l7b9iK_5.js";import"./index-CON7qShv.js";import"./index-BzFXJVYV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmgV2bLI.js";import"./index-TINCTucQ.js";import"./information-B08y1s4G.js";import"./sys-enter-2-CX7GW53q.js";import"./alert-CBwUNVAj.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DdNBRyB1.js";import"./delete-C2U2A-yb.js";import"./settings-DF3NHvjE.js";import"./NoData-BFHkDIgd.js";import"./IllustratedMessage-D7DuY04R.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Dpd6t92o.js";import"./index-7q78DKDL.js";import"./slim-arrow-down-DMLXw6xT.js";import"./Input-B6peNm1t.js";import"./ResponsivePopoverCommon.css-Ba71pV2j.js";import"./ValueStateMessage.css-rpNnQiGf.js";import"./Suggestions.css-DDzb5FdX.js";import"./ListBoxItemGroupTemplate-CLDx4aFe.js";import"./ComboBoxItemGroup-0HZ5pe-M.js";import"./ListItemBaseTemplate-UHhLaiyc.js";import"./Token-BbYLeIwQ.js";import"./ScrollEnablement-D8tzMu5h.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DAw7VuyQ.js";import"./ToggleButton-C_ZfV5QP.js";import"./SuggestionItem-oeptop1Y.js";import"./index-DAqL5wGg.js";import"./Option-DAiofa7l.js";import"./index-B5JGrjgL.js";import"./SegmentedButton-CQaM9kSM.js";import"./index-BAu2trWC.js";import"./Select-CatGjmg8.js";import"./InvisibleMessage-DYgdDzKE.js";import"./slim-arrow-down-CJjWd9wb.js";import"./useIsRTL-BPkFkuhq.js";import"./index-Ba2iaRbK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BLL2_YGc.js";import"./group-2-CF46wLb5.js";import"./sort-descending-DjXzD5Vq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CcG__9zQ.js";import"./utils-BB8FlNwX.js";import"./index-ClzhVMYp.js";import"./index-ag2wqFEj.js";import"./index-COtrkj-k.js";import"./navigation-down-arrow-q-51FI4K.js";import"./navigation-right-arrow-DmrrzDkW.js";import"./navigation-right-arrow-BNGrfpXc.js";import"./useCurrentTheme-DKZ9wuBT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-2IedBLhj.js";import"./debounce-D7W5PopO.js";import"./index-z-z0N_jj.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
