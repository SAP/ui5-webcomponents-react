import{j as o}from"./iframe-FFY2S6YG.js";import{useMDXComponents as n}from"./index-BzZglwT-.js";import{I as r,F as m}from"./CommandsAndQueries-CRs7a5Er.js";import{M as l,C as s}from"./blocks-tMTQEG0b.js";import"./Tag-CY0dYkIx.js";import"./index-CR-wXzPk.js";import"./copy-DuPWkMaa.js";import{d as p}from"./AnalyticalTableHooks.stories-FtOOhuOh.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BK6LUJYp.js";import"./index-aRemyO01.js";import"./index-CYPt-1NW.js";import"./Link-ilnMyEmJ.js";import"./addCustomCSSWithScoping-L7uLJS1K.js";import"./index-BvjHl6jR.js";import"./index-Cer5_OSt.js";import"./index-dBDK7i7w.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4hY5EkXL.js";import"./index-BpfUe8Vy.js";import"./information-bHzg5lJa.js";import"./sys-enter-2-DLgVYDfp.js";import"./alert-DTO9To2T.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DewUzwnF.js";import"./delete-PyKScnn5.js";import"./settings-D8wSEnLQ.js";import"./NoData-DcvAWleu.js";import"./IllustratedMessage-CUcy7Lzq.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-B7-d5vvM.js";import"./index-DzVsJZGg.js";import"./slim-arrow-down-CDbx1-YQ.js";import"./Input-BUwXm7QE.js";import"./ResponsivePopoverCommon.css-Ns2pYP6j.js";import"./ValueStateMessage.css-Br2MqEEx.js";import"./Suggestions.css-BA_f9-0L.js";import"./ListBoxItemGroupTemplate-82b3Pwjr.js";import"./ComboBoxItemGroup-CyA2Qdmh.js";import"./ListItemBaseTemplate-D3ib4Mla.js";import"./Token-CV1Eunvp.js";import"./ScrollEnablement-DswLTbh8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-sXxgGRTN.js";import"./ToggleButton-BSn8PnZz.js";import"./SuggestionItem-m0RxQNSP.js";import"./index-CFYJFEfe.js";import"./Option-D87YgESn.js";import"./index-wgQZg_qM.js";import"./SegmentedButton-BnS-MFCM.js";import"./index-CGQSvAxs.js";import"./Select-CYN8bhUC.js";import"./InvisibleMessage-CbKgbx5O.js";import"./slim-arrow-down-Cfpa0YBm.js";import"./useIsRTL-BX8Bpdr0.js";import"./index-C_QO2GI1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-uMu8AkhM.js";import"./group-2-CMgkMPSi.js";import"./sort-descending-BvvCOZ2_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DHw5dxkC.js";import"./utils-BPc0OMuw.js";import"./index-D_RFV31k.js";import"./index-D59fZpcX.js";import"./index-DlqHiufR.js";import"./navigation-down-arrow-gws4-sx1.js";import"./navigation-right-arrow-BJmMXsZ_.js";import"./navigation-right-arrow-AZTMAkte.js";import"./useCurrentTheme-DWXrF5d1.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DQOK-fLL.js";import"./debounce-D7W5PopO.js";import"./index-DbwjuCtL.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
