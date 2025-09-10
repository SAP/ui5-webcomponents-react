import{j as o}from"./iframe-W4A4TPxI.js";import{useMDXComponents as r}from"./index-DR9mRC8k.js";import{I as n,F as m}from"./CommandsAndQueries-CqKi30YT.js";import{M as p,C as s}from"./blocks-CEc_PJPw.js";import"./Tag-B3SXYcEs.js";import"./index-CRDes7m2.js";import"./copy-ieRXWhTl.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BzG5eXLo.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BPEyrKJO.js";import"./index-BvnHswum.js";import"./index-Bdj3qaur.js";import"./Link-DvQFsPEt.js";import"./addCustomCSSWithScoping-I8zpHlEs.js";import"./index-BhV1V4Z5.js";import"./index-lcn5JMDI.js";import"./index-COHjWP7e.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C9AqO2sR.js";import"./index-DKRTY3p_.js";import"./information-C_inBRxK.js";import"./sys-enter-2-ROh50Nf_.js";import"./alert-D2pUXI9_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C8bxKI_n.js";import"./delete-DUKwWmWr.js";import"./settings-CYLpDzMR.js";import"./NoData-CxfkBuoa.js";import"./IllustratedMessage-Bwh347Qt.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-QRx2oQO7.js";import"./index-DeQjkMj_.js";import"./slim-arrow-down-C5qHDn3A.js";import"./Input-CfoEMb7S.js";import"./ResponsivePopoverCommon.css-BiB47G1s.js";import"./ValueStateMessage.css-DMS2XS0O.js";import"./Suggestions.css-hvZmQ1kq.js";import"./ListBoxItemGroupTemplate-CZYhczcA.js";import"./ComboBoxItemGroup-CN0xa2iU.js";import"./ListItemBaseTemplate-23lrP7Tw.js";import"./Token-Dv6g3YCV.js";import"./ScrollEnablement-CshahWxZ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-uRMv37PZ.js";import"./ToggleButton-B_J6hKck.js";import"./SuggestionItem-DXkUIhz6.js";import"./index-CYKe120Z.js";import"./Option-C7q1-uNo.js";import"./index--ce0PYoF.js";import"./SegmentedButton-3PPkHsH8.js";import"./index-lpfGVQQu.js";import"./Select-CFs4yPC7.js";import"./InvisibleMessage-CUUIa9XV.js";import"./slim-arrow-down-D_x_Mhve.js";import"./useIsRTL-B3zfNNQF.js";import"./index-DcYUW_FQ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D3bf_9vf.js";import"./group-2-CfNOoVSy.js";import"./sort-descending-CwRAMBpb.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BYYxdHSO.js";import"./utils-DtxEY-Xi.js";import"./index-BtiJt7cm.js";import"./index-BXn32007.js";import"./index-D5Gw03fH.js";import"./navigation-down-arrow-CngJcBic.js";import"./navigation-right-arrow-CeZbGMLy.js";import"./navigation-right-arrow-CmleFgXi.js";import"./useCurrentTheme-CISq3YGU.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D90inOg_.js";import"./debounce-D7W5PopO.js";import"./paper-plane-zfv8vhjt.js";import"./index-DWvjkPV4.js";import"./less-pHoiGPbs.js";import"./index-RYWAVzMN.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
