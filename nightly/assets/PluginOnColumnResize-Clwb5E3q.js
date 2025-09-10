import{j as o}from"./iframe-113A6qfG.js";import{useMDXComponents as r}from"./index-PjC7U6K4.js";import{I as n,F as m}from"./CommandsAndQueries-Bg85p3au.js";import{M as p,C as s}from"./blocks-D_3UdGcb.js";import"./Tag-DaeygpfO.js";import"./index-B2xOcofc.js";import"./copy-CcIFyCHE.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-D1k_r1Oo.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CcdliY9D.js";import"./index-CnEBtXKD.js";import"./index-AaWwOR4U.js";import"./Link-BPx9Yymb.js";import"./addCustomCSSWithScoping-x2rA9FdH.js";import"./index-BwzRPfoc.js";import"./index-DPN0DnRR.js";import"./index-nQhhjHf1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D-4PiXj7.js";import"./index-CWWoZsv-.js";import"./information-DODfC2QB.js";import"./sys-enter-2-CVSv3UIQ.js";import"./alert-UNIiqPMX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dd4yZKPF.js";import"./delete-CNLurm_h.js";import"./settings-nYVw-8aK.js";import"./NoData-BtjU7UM8.js";import"./IllustratedMessage-C5AcPGiL.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-CZOywhhu.js";import"./index-DPIfm0RB.js";import"./slim-arrow-down-DZJ_GP1k.js";import"./Input-Gcc3dJDl.js";import"./ResponsivePopoverCommon.css-Q_FGcyNG.js";import"./ValueStateMessage.css-D-fesA6_.js";import"./Suggestions.css-Dc3HPxH1.js";import"./ListBoxItemGroupTemplate-DD9XMKKc.js";import"./ComboBoxItemGroup-CPJ8jj3b.js";import"./ListItemBaseTemplate-Brlr3M_-.js";import"./Token-UBERC-wa.js";import"./ScrollEnablement-CKBXjPwR.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-U7_ux5-W.js";import"./ToggleButton-Z83cNU5B.js";import"./SuggestionItem-B9KyfZt1.js";import"./index-ByuG9QMH.js";import"./Option-BMD9BzbC.js";import"./index-CZccfsvW.js";import"./SegmentedButton-BHZRIVqz.js";import"./index-YaJT-7Vm.js";import"./Select-U-XxeLZb.js";import"./InvisibleMessage-D46WdJW_.js";import"./slim-arrow-down-2De9z3rU.js";import"./useIsRTL-D16EWQ1V.js";import"./index-CkQDp71V.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bh0Y-pn3.js";import"./group-2-DfqujJuP.js";import"./sort-descending-DYeXzXZk.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B8emlxkI.js";import"./utils-DMs0HaFc.js";import"./index-DgltoZoV.js";import"./index-RYBL1PBZ.js";import"./index-DGoA9cON.js";import"./navigation-down-arrow-YzBoi4OT.js";import"./navigation-right-arrow-CVjB9oy3.js";import"./navigation-right-arrow-OXaI-HJX.js";import"./useCurrentTheme-DaERdxGz.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CsZPiuCg.js";import"./debounce-D7W5PopO.js";import"./paper-plane-B5ZW5JM4.js";import"./index-D7fmcvB0.js";import"./less-B1DnNiyr.js";import"./index-Bf142AWA.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
