import{j as o}from"./iframe-CpjYl_X5.js";import{useMDXComponents as n}from"./index-33t6PBxs.js";import{I as r,F as m}from"./CommandsAndQueries-EZVtGsJe.js";import{M as l,C as s}from"./blocks-BkWlBCqX.js";import"./Tag-DAYBa8yS.js";import"./index-joCwOwY7.js";import"./copy-BKpc5Gew.js";import{d as p}from"./AnalyticalTableHooks.stories-BVkvj-yB.js";import"./preload-helper-Dp1pzeXC.js";import"./index--ofYB3gh.js";import"./index-DdElBtDf.js";import"./index-Us1w7EKB.js";import"./Link-D3b32oQu.js";import"./addCustomCSSWithScoping-DT7KX0jQ.js";import"./index-DkiFqVtv.js";import"./index-n0koIvnW.js";import"./index-CNY9O4wi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCOGUGQL.js";import"./index-C2_ggH5f.js";import"./information-DIh11mSj.js";import"./sys-enter-2-Dq_jhMR8.js";import"./alert-D8p6gt1X.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DHG2MOGz.js";import"./delete-YCb_ChtI.js";import"./settings-QgbbNJUk.js";import"./NoData-dKh86SfT.js";import"./IllustratedMessage-BcqFKz4Y.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-PvZhdoyR.js";import"./index-CgAwMvUW.js";import"./slim-arrow-down-DwQAWsTD.js";import"./Input-BNo-hj-C.js";import"./ResponsivePopoverCommon.css-DwHdHtV9.js";import"./ValueStateMessage.css-BUAJFQ99.js";import"./Suggestions.css-CwebfgRb.js";import"./ListBoxItemGroupTemplate-CxJiZt19.js";import"./ComboBoxItemGroup-R0TCP6K_.js";import"./ListItemBaseTemplate-Bdi5-fvq.js";import"./Token-Xwtg_im0.js";import"./ScrollEnablement-wFgsvqM3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BhhUzpAY.js";import"./ToggleButton-3rZtTX4u.js";import"./SuggestionItem-BsQJnmhm.js";import"./index-ByrHtGCZ.js";import"./Option-DZvbArRC.js";import"./index-DRMZdDM7.js";import"./SegmentedButton-53xfTt5w.js";import"./index-BDUQZ20D.js";import"./Select-BbN0n5sp.js";import"./InvisibleMessage-BskeonYB.js";import"./slim-arrow-down-BdbjdxUH.js";import"./useIsRTL-BtNL1jcq.js";import"./index-BNinvQDt.js";import"./IconDesign-DXd8PPVF.js";import"./filter-nyIuTl9A.js";import"./group-2-C1vnwRBA.js";import"./sort-descending-CAIFi3VI.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-vfvgrfsh.js";import"./utils-B1Rb9HQ6.js";import"./index-D4Q9QnEI.js";import"./index-OZ--zbFt.js";import"./index-BV44GF9N.js";import"./navigation-down-arrow-CJEHhyr3.js";import"./navigation-right-arrow-bUpwQK8M.js";import"./navigation-right-arrow-D6PMGkoJ.js";import"./useCurrentTheme-POWYwZLU.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BF1MtxJr.js";import"./debounce-D7W5PopO.js";import"./index-DRmcpn9V.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
