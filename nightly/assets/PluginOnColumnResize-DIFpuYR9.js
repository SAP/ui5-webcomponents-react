import{j as o}from"./iframe-Cmm295l6.js";import{useMDXComponents as r}from"./index-BXOSXmsP.js";import{I as n,F as m}from"./CommandsAndQueries-BP_0RozZ.js";import{M as p,C as s}from"./blocks-BannUWtC.js";import"./Tag-Dz2xCnCd.js";import"./index-DNlfqL0I.js";import"./copy-D4RoINZh.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-dvFW3tl2.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DjP2_XyX.js";import"./index-Ca8aNZdv.js";import"./index-CFxjX_iC.js";import"./Link-Dxfcpnmp.js";import"./addCustomCSSWithScoping-CT21Dj5u.js";import"./index-BCkLQQTq.js";import"./index-DcC0F_LL.js";import"./index-Bv1uLuLp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bxty8qUP.js";import"./index-B2P7pH2V.js";import"./information-CcrqmRhS.js";import"./sys-enter-2-hqDN1aaD.js";import"./alert-CIjWWYk9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BOW3byXA.js";import"./delete-BpJ7jMu4.js";import"./settings-DfuIK5Du.js";import"./NoData-B9fBQ-2X.js";import"./IllustratedMessage-DMoUKb2N.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DyS6OgFp.js";import"./index-D9-J-CUh.js";import"./slim-arrow-down-BPs-5Hw-.js";import"./Input-CKOQVRzo.js";import"./ResponsivePopoverCommon.css-CuPlJ6XL.js";import"./ValueStateMessage.css-CpF9zfZB.js";import"./Suggestions.css-URl81ueP.js";import"./ListBoxItemGroupTemplate-BE6yQGK-.js";import"./ComboBoxItemGroup-ZNf2Vk0l.js";import"./ListItemBaseTemplate-CToCzb2R.js";import"./Token-DKJgf7x_.js";import"./ScrollEnablement-BWqjOtqg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BSk0UJEE.js";import"./ToggleButton-zP3wC5RY.js";import"./SuggestionItem-Ct7jePU3.js";import"./index-Dpgfdfru.js";import"./Option-CXrrCfUx.js";import"./index-Ws9shfnM.js";import"./SegmentedButton-DjidyPv_.js";import"./index-D9kRi0IC.js";import"./Select-DRZNQuJi.js";import"./InvisibleMessage-BUQae6f9.js";import"./slim-arrow-down-iUDTzeiV.js";import"./useIsRTL-CEwtxJyB.js";import"./index-BzcZFawy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BqgfgZAq.js";import"./group-2-DGba-0Tt.js";import"./sort-descending-Cv9BhC3z.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DynqqBp0.js";import"./utils-CxbvwC5_.js";import"./index-CJAzT50r.js";import"./index-CggMFlL9.js";import"./index-DIyb4d_p.js";import"./navigation-down-arrow-C11LdM0-.js";import"./navigation-right-arrow-B54lSWMn.js";import"./navigation-right-arrow--DddG-Qx.js";import"./useCurrentTheme-Q0o_lrzg.js";import"./IndicationColor-DVw-fSM_.js";import"./index-YJpka7ZF.js";import"./debounce-D7W5PopO.js";import"./paper-plane-DQu_UXSp.js";import"./index-DL20h0zh.js";import"./less-CttwOBtS.js";import"./index-BtYSUoXS.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
