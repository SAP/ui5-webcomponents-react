import{j as o}from"./iframe-L-onm66G.js";import{useMDXComponents as r}from"./index-B-8X1idt.js";import{I as n,F as m}from"./CommandsAndQueries-CjMnaUpZ.js";import{M as p,C as s}from"./blocks-CAXm6uro.js";import"./Tag-o6hxXhYX.js";import"./index-Dko-x7sv.js";import"./copy-CyGTlTXm.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-B6a9T0HW.js";import"./preload-helper-D9Z9MdNV.js";import"./index-JuCVJ27S.js";import"./index-CQskOaEx.js";import"./index-CLaX2vCd.js";import"./Link-CoryH5zD.js";import"./addCustomCSSWithScoping-t6gTkkzF.js";import"./index-DT1EUYqc.js";import"./index-BHqaG8Gu.js";import"./index-ChEZQsiK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D-TcA8Vj.js";import"./index-8n5QiMPz.js";import"./information-IlAVq7Cq.js";import"./sys-enter-2-CVLUP2WD.js";import"./alert-DwHKgn-N.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B1_8XGg8.js";import"./delete-BP7Y4W0Z.js";import"./settings-BSMVF4P8.js";import"./NoData-DnnW4MlD.js";import"./IllustratedMessage-CrIvOtjh.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BNsi7JET.js";import"./index-Ce5VAjSH.js";import"./slim-arrow-down-2tkvGwp5.js";import"./Input-nqzPZ96D.js";import"./ResponsivePopoverCommon.css-D-PzE_uD.js";import"./ValueStateMessage.css-BaFYLAgr.js";import"./Suggestions.css-D-XGNpUr.js";import"./ListBoxItemGroupTemplate-B6VO1di5.js";import"./ComboBoxItemGroup-DJNgoJAP.js";import"./ListItemBaseTemplate-DP9XcBYw.js";import"./Token-BVbFDKE3.js";import"./ScrollEnablement-KL0tx3I1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B_8XW66x.js";import"./ToggleButton-DCwG-sk7.js";import"./SuggestionItem-DAuqasmm.js";import"./index-B9nLBvvk.js";import"./Option-BNL500vH.js";import"./index-CpL49Q8X.js";import"./SegmentedButton-BHylJxn3.js";import"./index-rpzDZ4-g.js";import"./Select-wICm3x2r.js";import"./InvisibleMessage-Cke9mTfM.js";import"./slim-arrow-down-CT86qGUz.js";import"./useIsRTL-DCVW4Rtb.js";import"./index-DktfzuQk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C7JNINRu.js";import"./group-2-Chn_1rqX.js";import"./sort-descending-2FxNAz71.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BirFsVWW.js";import"./utils-D_L3Vszq.js";import"./index-Dvts4QuH.js";import"./index-CKeKsxlO.js";import"./index-0iYZ-1q5.js";import"./navigation-down-arrow-B6KjmG5s.js";import"./navigation-right-arrow-CESkN4Yn.js";import"./navigation-right-arrow-CV8pPszO.js";import"./useCurrentTheme-7RFsuHvO.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CojyC1AK.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BSUczLtF.js";import"./index-lxUncTW2.js";import"./less-IYmAbgpg.js";import"./index-BJt60Esi.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
