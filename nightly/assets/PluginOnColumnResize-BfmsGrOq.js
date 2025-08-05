import{j as o}from"./iframe-CG2rGjbc.js";import{useMDXComponents as n}from"./index-DS69H-n6.js";import{I as r,F as m}from"./CommandsAndQueries-DskZpT92.js";import{M as l,C as s}from"./blocks-BOXfYYlZ.js";import"./Tag-B3NEGkkI.js";import"./index-BVmbnKNa.js";import"./copy-Cj_PeOWN.js";import{d as p}from"./AnalyticalTableHooks.stories-D-ri1bAM.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BEeaA3No.js";import"./index-Bm2fVwXT.js";import"./index-4ahbKnxX.js";import"./Link-BOSvSmJd.js";import"./addCustomCSSWithScoping-CQY8oQwD.js";import"./index-B3gloDnF.js";import"./index-DEr8Ja6X.js";import"./index-dno7x-xA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CBxXpI3-.js";import"./index-vBa65tZZ.js";import"./information-CUctzDB0.js";import"./sys-enter-2-58dTwXpy.js";import"./alert-xERNdQ9e.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BekTqDkh.js";import"./delete-CPTRq9yh.js";import"./settings-DWEJ_gda.js";import"./NoData-OzuE5q8j.js";import"./IllustratedMessage-fIXnbhow.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-gLosEED4.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BFsxy39e.js";import"./index-DWchyRkq.js";import"./slim-arrow-down-B6ZGeZyP.js";import"./Input-D_cunrq3.js";import"./ResponsivePopoverCommon.css-ZxvNyTGX.js";import"./ValueStateMessage.css-DQP0hkeA.js";import"./Suggestions.css-BEa1e1bh.js";import"./ListBoxItemGroupTemplate-D1PADeY5.js";import"./ComboBoxItemGroup-B6S_XDKB.js";import"./ListItemBaseTemplate-DKtp7oXq.js";import"./Token-DnsYDL6G.js";import"./ScrollEnablement-D96l-16O.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CYmen0Jk.js";import"./ToggleButton-B6A9SDf5.js";import"./SuggestionItem-DH8pT6T8.js";import"./index-Oh9WLt-q.js";import"./Option-DXBBjhZz.js";import"./index-BsAvd2zC.js";import"./SegmentedButton-CBfx5wl-.js";import"./index-JBBiy_eP.js";import"./Select-DWo_Lub7.js";import"./InvisibleMessage-C2yLfqUK.js";import"./slim-arrow-down-DmJvDhwU.js";import"./useIsRTL-CMFeNktt.js";import"./index-4G4pslYn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DHDOumVO.js";import"./group-2-CJMBKFkN.js";import"./sort-descending-DArodGTD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-Xwbj5fV9.js";import"./utils-fHUo6XIf.js";import"./index-aCo9U2xx.js";import"./index-zroShj9r.js";import"./index-2K0DQ2LF.js";import"./navigation-down-arrow-NWSQUDrt.js";import"./navigation-right-arrow-rBI3rFQp.js";import"./navigation-right-arrow-tevQ1gbb.js";import"./useCurrentTheme-DRE7X6Nh.js";import"./IndicationColor-DVw-fSM_.js";import"./index-1_NbfYEK.js";import"./debounce-D7W5PopO.js";import"./index-Lf5lWW3e.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
