import{j as o}from"./iframe-S1rR11cQ.js";import{useMDXComponents as n}from"./index-69KsrxW4.js";import{I as r,F as m}from"./CommandsAndQueries-7fbj5dZq.js";import{M as l,C as p}from"./blocks-C1kWdW5O.js";import"./Tag-Do4MK6Vd.js";import"./index-DjdMAx9G.js";import"./i18n-DSpjDgSK.js";import"./copy-DEUCxjzs.js";import{d as s}from"./AnalyticalTableHooks.stories-BXqJKOyj.js";import"./preload-helper-D9Z9MdNV.js";import"./index-qWGPhuwe.js";import"./index-0zwvIbNd.js";import"./index-FsTu0RwH.js";import"./Link-BTk9MhA4.js";import"./addCustomCSSWithScoping-B4lS8qF3.js";import"./index-BuHsyiL7.js";import"./index-PoS1N3ma.js";import"./index-R5oM6KDO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cn53W7lk.js";import"./index-BO-Ud12y.js";import"./information-C758TG9J.js";import"./sys-enter-2-Bxoe1Z_o.js";import"./alert-DLQYOv1s.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BYRCdEc9.js";import"./delete-Imu_QxJM.js";import"./settings-B_iY8jBT.js";import"./NoData-B-ELxJeH.js";import"./IllustratedMessage-B_RsJhsX.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-cZcTvwoH.js";import"./index-D3e7C-2T.js";import"./slim-arrow-down-DU0iuCt5.js";import"./Input-BFiJeabE.js";import"./ResponsivePopoverCommon.css-Dp9rYv_8.js";import"./ValueStateMessage.css-DP7y8aPL.js";import"./Suggestions.css-Ci1w_A7X.js";import"./ListBoxItemGroupTemplate-DF_dwaej.js";import"./ComboBoxItemGroup-DmqVeR1G.js";import"./ListItemBaseTemplate-DYhywRSV.js";import"./Token-r_fCtFrS.js";import"./ScrollEnablement-SdEABngw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BbQSk8O2.js";import"./ToggleButton-8UTCVYbm.js";import"./SuggestionItem-CT5TG_5O.js";import"./index-CcdBc6FW.js";import"./Option-DYLlW_F-.js";import"./index-Cqbzrt3C.js";import"./SegmentedButton-BcJorwjo.js";import"./index-Cf3c9UmM.js";import"./Select-DG78L4ow.js";import"./InvisibleMessage-CxuvqbmW.js";import"./slim-arrow-down-CRHbxhfI.js";import"./useIsRTL-DdvIXurs.js";import"./index-BE-KkdkZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BQfWDTJ0.js";import"./group-2-BLTcOHYG.js";import"./sort-descending-DwG6522S.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DC42DZTr.js";import"./utils-sSXAe6W0.js";import"./index-DN78M1wk.js";import"./index-CavZ-61D.js";import"./index-BJEczdPQ.js";import"./navigation-down-arrow-hL3YGD3q.js";import"./navigation-right-arrow-9j3TTsRx.js";import"./navigation-right-arrow-DwV_m_TK.js";import"./useCurrentTheme-CBSy01zR.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D4DGjUgH.js";import"./debounce-D7W5PopO.js";import"./index-BwzYicPU.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(p,{sourceState:"none",of:s}),`
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
`,o.jsx(m,{})]})}function Xo(i={}){const{wrapper:e}={...n(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Xo as default};
