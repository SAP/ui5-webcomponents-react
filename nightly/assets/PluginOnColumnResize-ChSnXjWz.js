import{j as o}from"./iframe-BCRKbB-F.js";import{useMDXComponents as n}from"./index-BX-rGI6y.js";import{I as r,F as m}from"./CommandsAndQueries-B-6PqVJi.js";import{M as l,C as s}from"./blocks-7Z_E6jI9.js";import"./Tag-DS_H74jk.js";import"./index-D-3HueK4.js";import"./copy-B5cEq6fF.js";import{d as p}from"./AnalyticalTableHooks.stories-C9OZA-p9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BH2JzlMl.js";import"./index-eqaCtQgG.js";import"./index-DsSU62b9.js";import"./Link-DusYvz_E.js";import"./addCustomCSSWithScoping-DUsuu1QR.js";import"./index-Cfre80S4.js";import"./index-DNvh-56A.js";import"./index-K2GRSkK5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Mh7-FWH-.js";import"./index-C9k5hi-S.js";import"./information-DeBw_tQ-.js";import"./sys-enter-2-pSQieqxz.js";import"./alert-xw5ZZb5l.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-YwLF6LD4.js";import"./delete-Ld8CENCt.js";import"./settings-FT89pEZG.js";import"./NoData-DtHLQikX.js";import"./IllustratedMessage-VoUezW4G.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-mfRED6x5.js";import"./index-BpTW-c5S.js";import"./slim-arrow-down-BPFD1Mj1.js";import"./Input-CmmkFLaI.js";import"./ResponsivePopoverCommon.css-BpeopXwv.js";import"./ValueStateMessage.css-BJzDtIZE.js";import"./Suggestions.css-sLFaTK7q.js";import"./ListBoxItemGroupTemplate-DWt8WMfz.js";import"./ComboBoxItemGroup-LITK_YU1.js";import"./ListItemBaseTemplate-BOulBfG3.js";import"./Token-B8NvFI2b.js";import"./ScrollEnablement-CeBEvB5k.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-TvAAd95E.js";import"./ToggleButton-D6RX6jPt.js";import"./SuggestionItem-D6ESs6vy.js";import"./index-CqLDV1BV.js";import"./Option-BufIsNaK.js";import"./index-BCzW4i_i.js";import"./SegmentedButton-B0SB0VvP.js";import"./index-mpfJtdUF.js";import"./Select-BPSwgIYJ.js";import"./InvisibleMessage-BXR6Nu4L.js";import"./slim-arrow-down-COohbeSu.js";import"./useIsRTL-CHXXP87C.js";import"./index-CatAJS7G.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DGgGSPMs.js";import"./group-2-3_abcVoF.js";import"./sort-descending-B0_QNBzC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-B65Hxqqj.js";import"./utils-DGVyR8av.js";import"./index-BHZNi0Sj.js";import"./index-BMlnEbTy.js";import"./index-Kc0S7rJM.js";import"./navigation-down-arrow-BKM0aIaY.js";import"./navigation-right-arrow-BQ8D2hLB.js";import"./navigation-right-arrow-D8MlM4bu.js";import"./useCurrentTheme-SWieicam.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BduD6r77.js";import"./debounce-D7W5PopO.js";import"./index-CvdpSJTy.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
