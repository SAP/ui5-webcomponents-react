import{j as o}from"./iframe-Dh5R3sl2.js";import{useMDXComponents as r}from"./index-D0kyY75e.js";import{I as n,F as m}from"./CommandsAndQueries-YFNvLEil.js";import{M as p,C as s}from"./blocks-IuY-WHWo.js";import"./Tag-lLVMTbba.js";import"./index-DuupinLA.js";import"./i18n-DCXZOGva.js";import"./copy-DlGd5HR3.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-C8KyoWyU.js";import"./preload-helper-D9Z9MdNV.js";import"./index-yFvmPqI1.js";import"./index-C6B4Jvhh.js";import"./index-B_8MBugC.js";import"./Link-DL-0s2QE.js";import"./addCustomCSSWithScoping-BFt5ScaE.js";import"./index-CiXXffOm.js";import"./index-BasyJdtx.js";import"./index-U9nJPHWS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ck5sFlQM.js";import"./index-jqGKriQv.js";import"./information-1k13pukw.js";import"./sys-enter-2-Bg-xb7Sg.js";import"./alert-D22kL76Q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DS0t17eg.js";import"./delete-Cqs9v5UZ.js";import"./settings-CyEtlrBV.js";import"./NoData-BWIo64AO.js";import"./IllustratedMessage-C4Y9MhXY.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DfHNJiM8.js";import"./index-DdyO6oSf.js";import"./slim-arrow-down-BKxPiX8n.js";import"./Input-D-9zBLbY.js";import"./ResponsivePopoverCommon.css-CxqRSEww.js";import"./ValueStateMessage.css-Dm13dtEh.js";import"./Suggestions.css-BrbWPJFr.js";import"./ListBoxItemGroupTemplate-C_OMzyC0.js";import"./ComboBoxItemGroup-D39JgLka.js";import"./ListItemBaseTemplate-D-qPwKzw.js";import"./Token-Be0u3QBl.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BXUKgIyV.js";import"./ToggleButton-IQUGwWke.js";import"./SuggestionItem-DdzoQa60.js";import"./index-BX9d1tne.js";import"./Option-DmWPWIPr.js";import"./index-D0SZ3ivo.js";import"./SegmentedButton-BBntDzPz.js";import"./index-BGk1wpri.js";import"./Select-5KsyfTZz.js";import"./InvisibleMessage-CqVAFS8W.js";import"./slim-arrow-down-CTLngD-X.js";import"./useIsRTL-B82EOOfT.js";import"./index-WkNiF2x7.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DYih4vHX.js";import"./group-2-D5Vb2rGk.js";import"./sort-descending-CpwdY_0n.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-aOb56p52.js";import"./utils-CrZTWPem.js";import"./index-DXERoPHz.js";import"./index-4nJOmPH_.js";import"./index-BBimiLXf.js";import"./navigation-down-arrow-BQwLi84w.js";import"./navigation-right-arrow-D_TiaYK2.js";import"./navigation-right-arrow-BKqHuSCb.js";import"./useCurrentTheme-fsd6-M81.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B-2UELL8.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BCmVS6m3.js";import"./index-_FkIPEUJ.js";import"./less-DegAqowm.js";import"./index-CPP2cAY-.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(m,{})]})}function Wo(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Wo as default};
