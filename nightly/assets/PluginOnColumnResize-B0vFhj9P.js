import{j as o}from"./iframe-D1CS9P6r.js";import{useMDXComponents as n}from"./index-DKS5TQ2O.js";import{I as r,F as m}from"./CommandsAndQueries-D0Ldf7j-.js";import{M as l,C as s}from"./blocks-MP9p7uJf.js";import"./Tag-r4fVuSPw.js";import"./index-C59Ra6n3.js";import"./copy-BXLeuYzA.js";import{d as p}from"./AnalyticalTableHooks.stories-CQWW4QXL.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BYGl8AOq.js";import"./index-ChylkqIr.js";import"./index-DHqmSgZq.js";import"./Link-Q9DSvFtD.js";import"./addCustomCSSWithScoping-Djl5XvUO.js";import"./index--uuuPK6U.js";import"./index-B4Hl6Eco.js";import"./index-KmWwkr3l.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CUZwPhW2.js";import"./index-CyljgwzW.js";import"./information-BCqqCqDW.js";import"./sys-enter-2-JjIQxhse.js";import"./alert-DkFxMsXD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BqCOwuqV.js";import"./delete-iGAeC_St.js";import"./settings-Jpzz7dQg.js";import"./NoData-DzMAoC6c.js";import"./IllustratedMessage-q4ufoprM.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BkPbbsM6.js";import"./index-BFXusJ8y.js";import"./slim-arrow-down-Cm1u6CO7.js";import"./Input-BhDETh0z.js";import"./ResponsivePopoverCommon.css-Cpf4pg7D.js";import"./ValueStateMessage.css-BJKQtiUN.js";import"./Suggestions.css-Bt6O6fMa.js";import"./ListBoxItemGroupTemplate-BeK7EHkp.js";import"./ComboBoxItemGroup-BCAfoMA4.js";import"./ListItemBaseTemplate-eMuZcgjS.js";import"./Token-DHh_XbjI.js";import"./ScrollEnablement-B8q0SaPn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DceIYdr9.js";import"./ToggleButton-CkBC2tPN.js";import"./SuggestionItem-BB5SRH7J.js";import"./index-B32Z0t0a.js";import"./Option-Cn_5WxRP.js";import"./index-Dr0lxBdS.js";import"./SegmentedButton-BPcNDSX6.js";import"./index-B3d1v8UT.js";import"./Select-Cj_Q1k0q.js";import"./InvisibleMessage-D_NgDQng.js";import"./slim-arrow-down-dsGvQlwn.js";import"./useIsRTL-DcXN3FqO.js";import"./index-CkRW9lNl.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C2F3GBFF.js";import"./group-2-rVcZSb_S.js";import"./sort-descending-Dt0pCRMN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B9VlWRE3.js";import"./utils-B4q_d1dY.js";import"./index-BNFSEfAV.js";import"./index-CcM6dXm8.js";import"./index-DTQcqPnD.js";import"./navigation-down-arrow-JDYRYXcR.js";import"./navigation-right-arrow-BM1vJgO7.js";import"./navigation-right-arrow-C8xREl7p.js";import"./useCurrentTheme-CGtbEiS2.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C0BMIUOH.js";import"./debounce-D7W5PopO.js";import"./index-B8E4SwED.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
