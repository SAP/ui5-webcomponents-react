import{j as o}from"./iframe-yjMKSaW2.js";import{useMDXComponents as n}from"./index-DX8fpWzX.js";import{I as r,F as m}from"./CommandsAndQueries-ClO5_6SR.js";import{M as l,C as s}from"./blocks-qO1HNk-b.js";import"./Tag-BxGYemBH.js";import"./index-EVdkIx1d.js";import"./copy-Bx6gkJby.js";import{d as p}from"./AnalyticalTableHooks.stories-CG1Ne1jJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BTcK53Xp.js";import"./index-tTu9lfPG.js";import"./index-CM3jZrAN.js";import"./Link-hbFO0ZkL.js";import"./addCustomCSSWithScoping-DI9eG_9m.js";import"./index-BPvXEz4B.js";import"./index-C0kheMH7.js";import"./index-BFYU0Mvp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-wtqIr7A-.js";import"./index-D2oaGTxE.js";import"./information-Cn2Ycis7.js";import"./sys-enter-2-CQXBhP7E.js";import"./alert-509BGbEm.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cwkh_r41.js";import"./delete-BtuN8EqN.js";import"./settings-Db3_TAtG.js";import"./NoData-D0tuWWQx.js";import"./IllustratedMessage-L768Lgnu.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-gLosEED4.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-7a9cOrxB.js";import"./index-B3sgNhVy.js";import"./slim-arrow-down-C3a-usnI.js";import"./Input-CTJTUFFu.js";import"./ResponsivePopoverCommon.css-DxFeQbMc.js";import"./ValueStateMessage.css-CA2fAuCP.js";import"./Suggestions.css-Ck69pShO.js";import"./ListBoxItemGroupTemplate-xaDsElnd.js";import"./ComboBoxItemGroup-BrQqIK5D.js";import"./ListItemBaseTemplate-CFF0kaEn.js";import"./Token-CLQwip2z.js";import"./ScrollEnablement-WnQFRWHc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bt6MekvC.js";import"./ToggleButton-C0wnat4A.js";import"./SuggestionItem-DfB634lH.js";import"./index-uRmgFaxR.js";import"./Option-CrJKrJ5f.js";import"./index-CaZpvffh.js";import"./SegmentedButton-37GVceHj.js";import"./index-DRSoUGaL.js";import"./Select-B7f5ZkNn.js";import"./InvisibleMessage-CpX70GFw.js";import"./slim-arrow-down-Brvh4Ud1.js";import"./useIsRTL-MY_nF6I_.js";import"./index-BymYChZy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-h9FGD-0R.js";import"./group-2-DcalmJYS.js";import"./sort-descending-BYf0SDBC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-Cs91-3HF.js";import"./utils-DOHC3Pr_.js";import"./index-CuxALFU6.js";import"./index-CElhn7R2.js";import"./index-DvKVlSVq.js";import"./navigation-down-arrow-BY4lPGb9.js";import"./navigation-right-arrow-DnvMFDg-.js";import"./navigation-right-arrow-DlglppO6.js";import"./useCurrentTheme-QOXIU8ro.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DTbfOaKr.js";import"./debounce-D7W5PopO.js";import"./index-BVFfVLn8.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
