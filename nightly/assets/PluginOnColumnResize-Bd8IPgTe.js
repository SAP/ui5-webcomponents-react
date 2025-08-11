import{j as o}from"./iframe-C5HYk_w9.js";import{useMDXComponents as n}from"./index-NAtY6U9A.js";import{I as r,F as m}from"./CommandsAndQueries-D55ZIYIG.js";import{M as l,C as s}from"./blocks-C9zU_CnO.js";import"./Tag-B9SFZhnL.js";import"./index-DDk7xvH6.js";import"./copy-C5SWnutv.js";import{d as p}from"./AnalyticalTableHooks.stories-DueYgjic.js";import"./preload-helper-Dp1pzeXC.js";import"./index-LTyOz7tz.js";import"./index-G9j5f01x.js";import"./index-KbHDLtpi.js";import"./Link-B-N5NiBa.js";import"./addCustomCSSWithScoping-BFQWIBF3.js";import"./index-CFd9-fPm.js";import"./index-DSpr5FZx.js";import"./index-CO2rizW7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CfasPfI1.js";import"./index-BrZnxm7s.js";import"./information-CZ-iBUXB.js";import"./sys-enter-2-Dq_SL8zM.js";import"./alert-D8SJwSxQ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D_d91-3q.js";import"./delete-CqDfwzpc.js";import"./settings-BPCUWV46.js";import"./NoData-CxhWn9wv.js";import"./IllustratedMessage-GH5yVttf.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-87C3bAgH.js";import"./index-C2VnV4iR.js";import"./slim-arrow-down-CBehnyc2.js";import"./Input-BdwJJtVE.js";import"./ResponsivePopoverCommon.css-C8yEY6IR.js";import"./ValueStateMessage.css-D4-kWGJF.js";import"./Suggestions.css-Dsm1Odvr.js";import"./ListBoxItemGroupTemplate-BAGrLMDa.js";import"./ComboBoxItemGroup-B5cWhmOZ.js";import"./ListItemBaseTemplate-BHoAE_XK.js";import"./Token-CXT3NtiV.js";import"./ScrollEnablement-BPWQH0lq.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-R3eedhiG.js";import"./ToggleButton-CBUGjNrV.js";import"./SuggestionItem-CBNk3s7_.js";import"./index-0bLmG4nf.js";import"./Option-c-UVfgap.js";import"./index-1EEehj_F.js";import"./SegmentedButton-DQlrC5-R.js";import"./index-OLntaare.js";import"./Select-SEMtVca9.js";import"./InvisibleMessage-BmEFxMXz.js";import"./slim-arrow-down-CWrkxAdp.js";import"./useIsRTL-BqnKZ734.js";import"./index-CqHxCzDj.js";import"./IconDesign-DXd8PPVF.js";import"./filter-VAgj8Sfy.js";import"./group-2-BU6GeVHz.js";import"./sort-descending-CBjoWotJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-BDUto2bG.js";import"./utils-DHsQ_nK5.js";import"./index-DH8PPPSy.js";import"./index-DcqsX-Je.js";import"./index-BNbfz9XF.js";import"./navigation-down-arrow-hy_35llr.js";import"./navigation-right-arrow-ElURueQj.js";import"./navigation-right-arrow-czcZqh9Y.js";import"./useCurrentTheme-BOXRzM9h.js";import"./IndicationColor-DVw-fSM_.js";import"./index-YsMTI0nj.js";import"./debounce-D7W5PopO.js";import"./index-CIvIyHMC.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
