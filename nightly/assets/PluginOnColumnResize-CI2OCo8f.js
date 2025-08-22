import{j as o}from"./iframe-B9d6tunA.js";import{useMDXComponents as n}from"./index-CHHTqEt5.js";import{I as r,F as m}from"./CommandsAndQueries-Dbama0_5.js";import{M as l,C as s}from"./blocks-DMdqznu7.js";import"./Tag-Ct1r4fFU.js";import"./index-DEzdCF4t.js";import"./copy-DBcroaPr.js";import{d as p}from"./AnalyticalTableHooks.stories-BYRkhAc9.js";import"./preload-helper-Ct5FWWRu.js";import"./index-cLcvGVFq.js";import"./index-q-GTYwsa.js";import"./index-CqnSlkgh.js";import"./Link-DaaF9wPB.js";import"./addCustomCSSWithScoping-CmltSw6g.js";import"./index-OkovUTEs.js";import"./index-D_RM7Ke7.js";import"./index-iYjiT_bL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CvcqgxS_.js";import"./index-bjg2761A.js";import"./information-Kos-K4Y7.js";import"./sys-enter-2-2u8y4JZ8.js";import"./alert-B9GFCC-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B8Cs0Me0.js";import"./delete-CeJU5A6H.js";import"./settings-CnwemJH0.js";import"./NoData-B9Ct3Bte.js";import"./IllustratedMessage-B9S7zPJ2.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BfBfDvss.js";import"./index-CIA13LwP.js";import"./slim-arrow-down-D05V1lot.js";import"./Input-BXjsXSc_.js";import"./ResponsivePopoverCommon.css-BlZ9FToc.js";import"./ValueStateMessage.css-CAd1FQ11.js";import"./Suggestions.css-D8AOIxab.js";import"./ListBoxItemGroupTemplate-Bhrbrnfy.js";import"./ComboBoxItemGroup-2CqGaLQ_.js";import"./ListItemBaseTemplate-CHOAwn4O.js";import"./Token-BhjIixy1.js";import"./ScrollEnablement-DMZ5Ege9.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B98qKKlT.js";import"./ToggleButton-D2X4-nFe.js";import"./SuggestionItem-BqBkM0aO.js";import"./index-mMW_G7sz.js";import"./Option-BETBD_j4.js";import"./index-Dq8WXUVt.js";import"./SegmentedButton-B6qsgUfN.js";import"./index-DQgYfch-.js";import"./Select-B8g_Zr6U.js";import"./InvisibleMessage-CZwz5JoO.js";import"./slim-arrow-down-D_fYxlqY.js";import"./useIsRTL-DOJ0Jr_3.js";import"./index-DFOOm17j.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DifKOfuY.js";import"./group-2-BVw5lsTv.js";import"./sort-descending-CF7x_zfl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DpuAVaOe.js";import"./utils-Cz3NQMid.js";import"./index-CY8hMSGY.js";import"./index-4dyeEyUB.js";import"./index-Dn5LrzbR.js";import"./navigation-down-arrow-CYkXcjUC.js";import"./navigation-right-arrow-BReQAbGx.js";import"./navigation-right-arrow-DQZi3Hf6.js";import"./useCurrentTheme-CezBWnYs.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BunxPUB3.js";import"./debounce-D7W5PopO.js";import"./index-BzaLULpj.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
