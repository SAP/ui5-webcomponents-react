import{j as o}from"./iframe-DQlP_6Qv.js";import{useMDXComponents as r}from"./index-BXhipMBG.js";import{I as n,F as m}from"./CommandsAndQueries-CYuC6yI9.js";import{M as p,C as s}from"./blocks-B5a3gZGW.js";import"./Tag-BSiRJmHh.js";import"./index-DhT04Xs9.js";import"./copy-DA6pIWgW.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CQH8SH2V.js";import"./preload-helper-D9Z9MdNV.js";import"./index-hxdHCcXn.js";import"./index-6SE_GYer.js";import"./index-DztBgCxB.js";import"./Link-CIr5Lw-F.js";import"./addCustomCSSWithScoping-DaYz7Ef_.js";import"./index-5WDw669T.js";import"./index-s0msSqUd.js";import"./index-CAD4wHAa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C-Sr5qI6.js";import"./index-DMuVL8ZX.js";import"./information-D9TZ110a.js";import"./sys-enter-2-DbOIPJDN.js";import"./alert-Boy3zLsV.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cg-36jCJ.js";import"./delete-CaVxvXJa.js";import"./settings-B1bN6gcG.js";import"./NoData-muKAeLMq.js";import"./IllustratedMessage-CYlCH6F8.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-B40cHQKs.js";import"./index-BK0EaxBy.js";import"./slim-arrow-down-CQHD_BrB.js";import"./Input-BsxLpfsK.js";import"./ResponsivePopoverCommon.css-DATz21Vs.js";import"./ValueStateMessage.css-CWvBG_nx.js";import"./Suggestions.css-BXPHU2eP.js";import"./ListBoxItemGroupTemplate-DZUU3Xv_.js";import"./ComboBoxItemGroup-73LiHIaA.js";import"./ListItemBaseTemplate-CTjAjayV.js";import"./Token-Z5IU-j9x.js";import"./ScrollEnablement-6VGfabhp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CGwXcYIH.js";import"./ToggleButton-DlSwnN6b.js";import"./SuggestionItem-D1wzJv1s.js";import"./index-rC-K7l_B.js";import"./Option-BNwYbhXx.js";import"./index-DorD7nUV.js";import"./SegmentedButton-BBymgHch.js";import"./index-D7ZHlrhm.js";import"./Select-BMnD9RhX.js";import"./InvisibleMessage-DX5nnJX3.js";import"./slim-arrow-down-Cwx3eZbB.js";import"./useIsRTL-0JvlMTKu.js";import"./index-sbxtCj2e.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C-UXJ6vS.js";import"./group-2-BDo86s0K.js";import"./sort-descending-_vLqc138.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CxTyPwah.js";import"./utils-C-s4mjI-.js";import"./index-BXfFluxG.js";import"./index-CYRJoMmx.js";import"./index-ChezfNZe.js";import"./navigation-down-arrow-DArtWA0U.js";import"./navigation-right-arrow-BqiGYNmk.js";import"./navigation-right-arrow-BWmOXN6t.js";import"./useCurrentTheme-C89Am9JT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-5gEQmBVM.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BjsxesMZ.js";import"./index-B7bck6f6.js";import"./less-I7yd6AVT.js";import"./index-BwUsRFpl.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
