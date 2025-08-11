import{j as o}from"./iframe-DwijkcSC.js";import{useMDXComponents as n}from"./index-dOTQ_8MY.js";import{I as r,F as m}from"./CommandsAndQueries-v2kYi8f6.js";import{M as l,C as s}from"./blocks-CUT7ZaGY.js";import"./Tag-Bj54Z3ZV.js";import"./index-Ksk45rXz.js";import"./copy-BSROPq_0.js";import{d as p}from"./AnalyticalTableHooks.stories-BcPBfgVl.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ctat__wp.js";import"./index-DBJu9cre.js";import"./index-BFAcwmrh.js";import"./Link-Dpz_tLr_.js";import"./addCustomCSSWithScoping-ZjminMO8.js";import"./index-CKKCTLM1.js";import"./index-BMZXXiof.js";import"./index-g3CDhi_p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CMYwIgDk.js";import"./index-4CSwoMco.js";import"./information-Cs7yxtQc.js";import"./sys-enter-2-DBwV2-51.js";import"./alert-CIuF-VCg.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CrJXNVPh.js";import"./delete-aAHersLJ.js";import"./settings-uewFS_V4.js";import"./NoData-CThXS__2.js";import"./IllustratedMessage-sD-gyUQ4.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-xiGmwW83.js";import"./index-BFyL3BDI.js";import"./slim-arrow-down-DVE3AHXn.js";import"./Input-Xke3BFuq.js";import"./ResponsivePopoverCommon.css-B6grsBrr.js";import"./ValueStateMessage.css-Bqjq4SCl.js";import"./Suggestions.css-Dr7vVlmc.js";import"./ListBoxItemGroupTemplate-xhPZ9BN8.js";import"./ComboBoxItemGroup-CMjqP94i.js";import"./ListItemBaseTemplate-DfBjNLTN.js";import"./Token-C4gwLyQC.js";import"./ScrollEnablement-sczQYiMf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BZEk89Tl.js";import"./ToggleButton-DaHW8XVq.js";import"./SuggestionItem-T5JUISxm.js";import"./index-DfwUMwnp.js";import"./Option-DpDZkHl8.js";import"./index-Beoktyb1.js";import"./SegmentedButton-D52_JIT9.js";import"./index-5UefQkCi.js";import"./Select-D322pIg_.js";import"./InvisibleMessage-Bw88KNeA.js";import"./slim-arrow-down-BsLfN3xy.js";import"./useIsRTL-Dl-PtuBT.js";import"./index-UHAME4Au.js";import"./IconDesign-DXd8PPVF.js";import"./filter-hnPTBo-V.js";import"./group-2-CEqFMcvq.js";import"./sort-descending-D0Lbw9y2.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-BJWsenK5.js";import"./index-Cs9wOeA9.js";import"./utils-DFydI20z.js";import"./index-Vq1zQZ3g.js";import"./index-9WjSegZE.js";import"./index-C85cNDYp.js";import"./navigation-down-arrow-Cq6HhR0x.js";import"./navigation-right-arrow-BNY7uCOq.js";import"./navigation-right-arrow-DcfT7hK3.js";import"./useCurrentTheme-XtkosabZ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DiCDMx0X.js";import"./debounce-D7W5PopO.js";import"./index-DexoxOrp.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
