import{j as o}from"./iframe-D9TrNBgU.js";import{useMDXComponents as n}from"./index-DVnXt3Ou.js";import{I as r,F as m}from"./CommandsAndQueries-D4YJbg3c.js";import{M as l,C as s}from"./blocks-CZTCdXhi.js";import"./Tag-Dxsn5xSE.js";import"./index-BNvAHmYG.js";import"./copy-DLBvKbOK.js";import{d as p}from"./AnalyticalTableHooks.stories-uNW8YLYL.js";import"./preload-helper-Ct5FWWRu.js";import"./index-mrCdGkzC.js";import"./index-CUfd_MNc.js";import"./index-X8OlRuzo.js";import"./Link-BksfT5MZ.js";import"./addCustomCSSWithScoping-CilyEzf4.js";import"./index-4yoZlSR7.js";import"./index-L-4di-4u.js";import"./index-DFqe2H1-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C7V4inOY.js";import"./index-CVrKfxdZ.js";import"./information-Dq_NLOBW.js";import"./sys-enter-2-BRxN4trI.js";import"./alert-BYqnAs_s.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CBf_Dw_c.js";import"./delete-Dr-66tAO.js";import"./settings-CxnE-5K_.js";import"./NoData-DDrlL7pG.js";import"./IllustratedMessage-B2-LKJi7.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-I2HuK0dM.js";import"./index-D06Uv0Pi.js";import"./slim-arrow-down-C2JXuKwB.js";import"./Input-DQQyXJAT.js";import"./ResponsivePopoverCommon.css-C8Orn_aN.js";import"./ValueStateMessage.css-DHgdSKUd.js";import"./Suggestions.css-Bf6rrCOA.js";import"./ListBoxItemGroupTemplate-DU5UcquD.js";import"./ComboBoxItemGroup-vHrK_DQ4.js";import"./ListItemBaseTemplate-ZtPbHRna.js";import"./Token-Coz-0Psc.js";import"./ScrollEnablement-DyC328cf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DbZzwl2a.js";import"./ToggleButton-DCiP1WbP.js";import"./SuggestionItem-D_ZaevX8.js";import"./index-CP_h3Gqr.js";import"./Option-DQLWMMud.js";import"./index-DkJeF1qi.js";import"./SegmentedButton-DfvTsqIq.js";import"./index-Cc7NpnLn.js";import"./Select-DHXu7QxQ.js";import"./InvisibleMessage-B7KEwtPS.js";import"./slim-arrow-down-CjNPHzOs.js";import"./useIsRTL-CQal8GpR.js";import"./index-BxxqrhiV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B8GbiaN7.js";import"./group-2-D57pi6NC.js";import"./sort-descending-B9mtYWvv.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DahENrtL.js";import"./utils-CQ0T0LrZ.js";import"./index-CUBqq7rX.js";import"./index-CCqFcpHS.js";import"./index-BL5y2Z3x.js";import"./navigation-down-arrow-BKi4Bg3e.js";import"./navigation-right-arrow-DruaLpXf.js";import"./navigation-right-arrow-Aay7hZd4.js";import"./useCurrentTheme-D_A9Q4B2.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CKCvg6SL.js";import"./debounce-D7W5PopO.js";import"./index-DsRCr8km.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
