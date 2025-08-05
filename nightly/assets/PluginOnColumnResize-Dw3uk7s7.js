import{j as o}from"./iframe-CS0WNVf3.js";import{useMDXComponents as n}from"./index-DDJWQvBk.js";import{I as r,F as m}from"./CommandsAndQueries-DZ6pwvzq.js";import{M as l,C as p}from"./blocks-CKA1zSBc.js";import"./Tag-BP97hCxl.js";import"./index-DSXhn2lw.js";import"./copy-BAUFdAAv.js";import"./WrappingType-BBpR8qCJ.js";import{d as s}from"./AnalyticalTableHooks.stories-BDDqqarW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-6Qc8M-Ay.js";import"./index-DF926y_l.js";import"./index-BaMTSIaX.js";import"./Link-NB8Z-JgQ.js";import"./addCustomCSSWithScoping-C76Rlx9D.js";import"./index-DAA990cp.js";import"./index-CSbnywRm.js";import"./index-DDKfF0P0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BSbnBFaN.js";import"./index-CvNKNR4d.js";import"./information-CvdaSHT3.js";import"./sys-enter-2-ySqjHw_c.js";import"./alert-Gh91-OFF.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-xKp7E0Tc.js";import"./delete-B0hijpGn.js";import"./settings-DnXx7g7P.js";import"./NoData-C9hLItd-.js";import"./IllustratedMessage-D9TXjhx2.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-BcDcM98N.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-D1T3NjPX.js";import"./index-vOL_TpkT.js";import"./slim-arrow-down-13yyQzi6.js";import"./ListBoxItemGroupTemplate-B8eP-Pg5.js";import"./ComboBoxItemGroup-Tdlh_kDa.js";import"./ListItemBaseTemplate-Bs0FUKcz.js";import"./Token-DAuk9NKz.js";import"./ScrollEnablement-DtdqB5r7.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BH1fH6pr.js";import"./ResponsivePopoverCommon.css-wgN2az89.js";import"./Suggestions.css-DCRjJQiV.js";import"./ToggleButton-DlBZVgdD.js";import"./Input-908QQXPy.js";import"./ValueStateMessage.css-2utQpejI.js";import"./SuggestionItem-2mukNXq8.js";import"./index-Bg73Jmg9.js";import"./Option-ndsoEHeD.js";import"./index-B-Fd1UGS.js";import"./SegmentedButton-ByiFmvRr.js";import"./index-iSOjq3mN.js";import"./Select-B8PsMZPZ.js";import"./InvisibleMessage-BLaLHaBV.js";import"./slim-arrow-down-B0zNzNFy.js";import"./useIsRTL-CrA39wlN.js";import"./index-DXGd-dVn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-F6el_Q-P.js";import"./group-2-B5wWZfuD.js";import"./sort-descending-DQa_u9t1.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-DkO3qxML.js";import"./utils-BeyPgaeY.js";import"./index-DGoD02kv.js";import"./index-Cm98QziX.js";import"./index-YClhRCxe.js";import"./navigation-down-arrow-CZ6j5E_n.js";import"./navigation-right-arrow-DppwJMLZ.js";import"./navigation-right-arrow-BiGZf0MQ.js";import"./useCurrentTheme-BozDlVUS.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DD_eFCbd.js";import"./debounce-D7W5PopO.js";import"./index-BBfTXTIi.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(p,{sourceState:"none",of:s}),`
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
`,o.jsx(m,{})]})}function Xo(i={}){const{wrapper:e}={...n(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Xo as default};
