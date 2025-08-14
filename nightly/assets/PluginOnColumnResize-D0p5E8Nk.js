import{j as o}from"./iframe-Ckbc0Bmx.js";import{useMDXComponents as n}from"./index-DE-5xG9A.js";import{I as r,F as m}from"./CommandsAndQueries-DKucLITF.js";import{M as l,C as s}from"./blocks-D8tYWjnn.js";import"./Tag-rdyPterE.js";import"./index-Darg-j2X.js";import"./copy-B7_DIIST.js";import{d as p}from"./AnalyticalTableHooks.stories-BrJX1gFU.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CrFxuHUZ.js";import"./index-COfW_OVU.js";import"./index-CzMZkzJI.js";import"./Link-D1WHOsxc.js";import"./addCustomCSSWithScoping-Cf-O7l9b.js";import"./index-usyep8x_.js";import"./index-fzfaunU7.js";import"./index-C-9s8bgZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-oJ-6Sn3x.js";import"./index-CuHvomlB.js";import"./information-OBfwqURu.js";import"./sys-enter-2-BD7M3cvb.js";import"./alert-j4aUIFXI.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B3hM-1C4.js";import"./delete-BMskVgGy.js";import"./settings-sexh0hZI.js";import"./NoData-j-BC8fza.js";import"./IllustratedMessage-CxJ0jCDU.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BQzLLwN4.js";import"./index-D-LR4-m3.js";import"./slim-arrow-down-Dx-bO6Dc.js";import"./Input-WAgKnw3k.js";import"./ResponsivePopoverCommon.css-Ci4jtjI2.js";import"./ValueStateMessage.css-CoCSxpGR.js";import"./Suggestions.css-BqzJ2RoF.js";import"./ListBoxItemGroupTemplate-B54RG9ri.js";import"./ComboBoxItemGroup-C3E9TaGE.js";import"./ListItemBaseTemplate-CaX2s66e.js";import"./Token-mO4l_c7c.js";import"./ScrollEnablement-qE5XhDmK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C6lS1XXD.js";import"./ToggleButton-sPWid6Nl.js";import"./SuggestionItem-DlajEpIp.js";import"./index-D9f6iXNK.js";import"./Option-CCnRI1MY.js";import"./index-pp0bBggn.js";import"./SegmentedButton-Bsm15QWE.js";import"./index-B7xei630.js";import"./Select-DFcsUJ0F.js";import"./InvisibleMessage-BDhZ3h8W.js";import"./slim-arrow-down-Cx5QOJiF.js";import"./useIsRTL-Bs-OA-9D.js";import"./index-B7PUGGrO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-MZZU7k-z.js";import"./group-2-fjm2DZVJ.js";import"./sort-descending-Chh_DNEY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D4Yu1su5.js";import"./utils-BuPSeF1r.js";import"./index-BYR58szb.js";import"./index-CLHhbGX6.js";import"./index-H2RtG6-s.js";import"./navigation-down-arrow-DWNq0yGj.js";import"./navigation-right-arrow-C5VaIixC.js";import"./navigation-right-arrow-D4Oo-FUU.js";import"./useCurrentTheme-YUFjSvAg.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CMV-QIM0.js";import"./debounce-D7W5PopO.js";import"./index-6r6-8miH.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
