import{j as o}from"./iframe-BGPLLWda.js";import{useMDXComponents as r}from"./index-CUo1Jk3b.js";import{I as n,F as m}from"./CommandsAndQueries-CMwJiC-3.js";import{M as p,C as l}from"./blocks-indAdCXu.js";import"./Tag-BJtvEZ6A.js";import"./index-CQHuRrhk.js";import"./i18n-DSpjDgSK.js";import"./copy-BU9AAITa.js";import{d as s}from"./AnalyticalTableHooks.stories-Bz_VtBIz.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BYQsmpt9.js";import"./index-DatG_EGp.js";import"./index-DxdciquJ.js";import"./Link-7mG2PaxS.js";import"./addCustomCSSWithScoping-C37q5SY_.js";import"./index-Bm9Gzw8H.js";import"./index-7SSPTye2.js";import"./index-DkEMFegB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bg9viRhL.js";import"./index-BUzvoCUF.js";import"./information-CN6qajRX.js";import"./sys-enter-2-DEzg8GhV.js";import"./alert-CDWQg-Kt.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-TS6DhnPd.js";import"./delete-BWX4MlMm.js";import"./settings-CFgijcO_.js";import"./NoData-BGEkmZoQ.js";import"./IllustratedMessage-BD1EvJ9X.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BJmJUlHD.js";import"./index-BNy7Dn0g.js";import"./slim-arrow-down-DMfTGr50.js";import"./Input-CpVfGSwY.js";import"./ResponsivePopoverCommon.css-951IwDN3.js";import"./ValueStateMessage.css-Djn4UmzD.js";import"./Suggestions.css-DqxhEkKs.js";import"./ListBoxItemGroupTemplate-cIHi7oo8.js";import"./ComboBoxItemGroup-TToYvkYQ.js";import"./ListItemBaseTemplate-Dg-uXgOx.js";import"./Token-sHPc753X.js";import"./ScrollEnablement-SdEABngw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-gVzTb5tv.js";import"./ToggleButton-DqvQERLg.js";import"./SuggestionItem-Cxo33OCr.js";import"./index-CnuSgVMh.js";import"./Option-DtMR1hW6.js";import"./index-BtbM9UQ5.js";import"./SegmentedButton-U5MRkYAs.js";import"./index-D84y9kSV.js";import"./Select-D9d1AFpt.js";import"./InvisibleMessage-CxuvqbmW.js";import"./slim-arrow-down-CPLxRpFv.js";import"./useIsRTL-B1VPnJL4.js";import"./index-B91ASvCc.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CCfyYYk6.js";import"./group-2-Dnk-pTKH.js";import"./sort-descending-DB8J7SKA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-WIExqiEM.js";import"./utils-TBfvB8Vn.js";import"./index-C5SS4mkA.js";import"./index-I5I4BdBq.js";import"./index-I4ELerEx.js";import"./navigation-down-arrow-BxgwGxy_.js";import"./navigation-right-arrow-wPwk5NCr.js";import"./navigation-right-arrow-CuKMCHYh.js";import"./useCurrentTheme-Nu7Bfg1U.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BxdEUa6a.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BMGxioyT.js";import"./index-AkNk4559.js";import"./less-BflIj0KR.js";import"./index-Di9vvrRS.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(n,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(l,{sourceState:"none",of:s}),`
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
`,o.jsx(m,{})]})}function Wo(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Wo as default};
