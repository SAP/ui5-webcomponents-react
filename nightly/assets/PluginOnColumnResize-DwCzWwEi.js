import{j as o}from"./iframe-ir6pYnmz.js";import{useMDXComponents as n}from"./index-41o0Td7A.js";import{I as r,F as m}from"./CommandsAndQueries-b6zt1eWd.js";import{M as l,C as s}from"./blocks-D_tGmZuN.js";import"./Tag-DRGeWEus.js";import"./index-e4AcpL9G.js";import"./copy-BlUsduAp.js";import{d as p}from"./AnalyticalTableHooks.stories-BgNDbnYG.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CH7s07mV.js";import"./index-1Mik_Y5f.js";import"./index-BTss8I7u.js";import"./Link-Be2dbLkV.js";import"./addCustomCSSWithScoping-DMyl69E9.js";import"./index-CZ16GD7U.js";import"./index-CKTjdAAk.js";import"./index-8VSCVlQX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D5OnWZgu.js";import"./index-BbtZuvgL.js";import"./information-B8K6izqM.js";import"./sys-enter-2-CYPsCOvo.js";import"./alert-DQylSe-I.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DwMJwtSz.js";import"./delete-CmyvenUA.js";import"./settings-Bl6bQc6H.js";import"./NoData-DxhmC_91.js";import"./IllustratedMessage-BTBpKBnW.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-sllTisPT.js";import"./index-Chn6LRAy.js";import"./slim-arrow-down-DIhPSUlE.js";import"./Input-CT2v4mLF.js";import"./ResponsivePopoverCommon.css-CAhax-LW.js";import"./ValueStateMessage.css-DXEXnL2N.js";import"./Suggestions.css-DVkCnc2y.js";import"./ListBoxItemGroupTemplate-BxUFdl0w.js";import"./ComboBoxItemGroup-CdScSe_V.js";import"./ListItemBaseTemplate-GBw0Nk1X.js";import"./Token-B1N_8NmE.js";import"./ScrollEnablement-DaGY4Jm-.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CDRG7U85.js";import"./ToggleButton-f5GCJkmp.js";import"./SuggestionItem-CuzhU48j.js";import"./index-DZ8NIWLE.js";import"./Option-CT-dyvBc.js";import"./index-aBA0PLh-.js";import"./SegmentedButton-C6EyhWUa.js";import"./index-CXc2Eu8C.js";import"./Select-De9RNiJH.js";import"./InvisibleMessage-q2TaioBA.js";import"./slim-arrow-down-DtlJr3sY.js";import"./useIsRTL-Da2zSY1x.js";import"./index-DAsbl867.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CPo0n3ee.js";import"./group-2-MQdYi-0x.js";import"./sort-descending-D2xxVNEk.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BvZ0UPF0.js";import"./utils-D-cGwZG0.js";import"./index-hBVsNMVz.js";import"./index-C1scF0QK.js";import"./index-aiDUSRvd.js";import"./navigation-down-arrow-Cwg074OW.js";import"./navigation-right-arrow-IPve_ban.js";import"./navigation-right-arrow-vWKMw0EP.js";import"./useCurrentTheme-DTjaKwLS.js";import"./IndicationColor-DVw-fSM_.js";import"./index-WEKLa-kK.js";import"./debounce-D7W5PopO.js";import"./index-1jK9MjSz.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
