import{j as o}from"./iframe-7wbn2r8t.js";import{useMDXComponents as r}from"./index-9iabKYe6.js";import{I as n,F as m}from"./CommandsAndQueries-ByqqJAkO.js";import{M as p,C as s}from"./blocks-DhPDsuAg.js";import"./Tag-B4Xu1fg_.js";import"./index-BbDQ_pma.js";import"./copy-BfB9wT2Y.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Bdiu9tfa.js";import"./preload-helper-D9Z9MdNV.js";import"./index--oRJYcmq.js";import"./index-s9oyD4rV.js";import"./index-BXziIIti.js";import"./Link-CMqhXbfj.js";import"./addCustomCSSWithScoping-DOSmtfkU.js";import"./index-BcN9ZXV0.js";import"./index-B507ER4a.js";import"./index-DZM58baw.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_u8Wshbe.js";import"./index-C5gTJ--F.js";import"./information-C3oesKbG.js";import"./sys-enter-2-5KLli2cX.js";import"./alert-BzwIc2o-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BnpF3OjW.js";import"./delete-Ctx4N0z9.js";import"./settings-4HzKKwXX.js";import"./NoData-BGxQDSSr.js";import"./IllustratedMessage-BveZRVBp.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-zGaMdUH3.js";import"./index-CiCpUwzE.js";import"./slim-arrow-down-C49SaQEq.js";import"./Input-Sgf07TzX.js";import"./ResponsivePopoverCommon.css-C1IHs2uD.js";import"./ValueStateMessage.css-CaopdH9_.js";import"./Suggestions.css-DMTVnUhn.js";import"./ListBoxItemGroupTemplate-Cb4Xv0to.js";import"./ComboBoxItemGroup-BWtkqgMg.js";import"./ListItemBaseTemplate-D6zjfr9k.js";import"./Token-Cu1MDCvr.js";import"./ScrollEnablement-kUlDPclg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CrLRAdo-.js";import"./ToggleButton-BWZvQxgb.js";import"./SuggestionItem-CQkQpe1M.js";import"./index-KzyioWg5.js";import"./Option-De8jxf-d.js";import"./index-CpHbzBAu.js";import"./SegmentedButton-DKw5tI_q.js";import"./index-B-j5vbZe.js";import"./Select-BNT7lrvG.js";import"./InvisibleMessage-TncjdQHo.js";import"./slim-arrow-down-OAr_tlQh.js";import"./useIsRTL-nMUuowmY.js";import"./index-DSDAeY17.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BukLYmJB.js";import"./group-2-CHK1-mKL.js";import"./sort-descending-ChAbIeqL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-gSj6aK_G.js";import"./utils-BN-TBOgu.js";import"./index-DiRW6kuR.js";import"./index-BATSsTSG.js";import"./index-CYxXsDl5.js";import"./navigation-down-arrow-K_Q8K4Ef.js";import"./navigation-right-arrow-DESaq310.js";import"./navigation-right-arrow-BqhA1WvG.js";import"./useCurrentTheme-B4pThhTq.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B2zVBKfY.js";import"./debounce-D7W5PopO.js";import"./paper-plane-Ci72_7Om.js";import"./index-ChzhF-e0.js";import"./less-CTlI8kUp.js";import"./index-BW3VTEXK.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(n,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{sourceState:"none",of:l}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const TableComponent = (props) => {
  const handleColumResize = useCallback((e) => {
    console.log(e.columnWidth, e.header);
  }, []);

  const tableHooks = useMemo(
    () => [
      useOnColumnResize(handleColumResize, {
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
`,o.jsx(m,{})]})}function So(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{So as default};
