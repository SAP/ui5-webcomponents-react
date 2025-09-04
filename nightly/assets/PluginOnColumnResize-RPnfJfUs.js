import{j as o}from"./iframe-DOJWwQPM.js";import{useMDXComponents as r}from"./index-D4GYqxG5.js";import{I as n,F as m}from"./CommandsAndQueries-DBgPcKIy.js";import{M as p,C as s}from"./blocks-UH_Armuh.js";import"./Tag-C5qooBCQ.js";import"./index-BzlDTQAu.js";import"./i18n-DSpjDgSK.js";import"./copy-DtHn9BZF.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-C0dnXtTj.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CKKp0V8L.js";import"./index-BE18fnIz.js";import"./index-CAij4Fwu.js";import"./Link-OhZHx2sI.js";import"./addCustomCSSWithScoping-7a5LAVf5.js";import"./index-IwfXz8bd.js";import"./index-DWcAbIiW.js";import"./index-CCV0Si6x.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-lKnjzqmd.js";import"./index-DKP6N4eU.js";import"./information-BiSRDS7B.js";import"./sys-enter-2-Ct0rvJ7Z.js";import"./alert-DJAqfmG4.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-NVkIFjwc.js";import"./delete-CM1g85K0.js";import"./settings-USDe9u6F.js";import"./NoData-D8-OUFng.js";import"./IllustratedMessage-_46LaT9t.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DWXCLmFF.js";import"./index-CE1heMCb.js";import"./slim-arrow-down-CS8FeIva.js";import"./Input-Bvv54WJ3.js";import"./ResponsivePopoverCommon.css-PVlGE3yL.js";import"./ValueStateMessage.css-O1QyKtEp.js";import"./Suggestions.css-XOF_Sz64.js";import"./ListBoxItemGroupTemplate-CHQ-wV3d.js";import"./ComboBoxItemGroup-BGf30V2s.js";import"./ListItemBaseTemplate-CNX0LT1O.js";import"./Token-BFiif2w7.js";import"./ScrollEnablement-SdEABngw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BC0Wl30E.js";import"./ToggleButton-s7-qI1Yi.js";import"./SuggestionItem-BNjcGuMf.js";import"./index-B4Xc4nLk.js";import"./Option-yF138sxw.js";import"./index-CDQ3KQpW.js";import"./SegmentedButton-D7bTb4kF.js";import"./index-k5BaVA8t.js";import"./Select-BfiyHYxw.js";import"./InvisibleMessage-CxuvqbmW.js";import"./slim-arrow-down-B0GkeD5A.js";import"./useIsRTL-B0ileuje.js";import"./index-Ddj8LW1O.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CHivle49.js";import"./group-2-DIzaJsIH.js";import"./sort-descending-BVaeaXuV.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CSRHX1mS.js";import"./utils-DdmGud8i.js";import"./index-7k0YV4zV.js";import"./index-BB-Q4KiC.js";import"./index-CJrQ7TDF.js";import"./navigation-down-arrow-B2P3gfXv.js";import"./navigation-right-arrow-Bx89aBq_.js";import"./navigation-right-arrow-nJ_rru5v.js";import"./useCurrentTheme-D4MDEsF-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BWo2nEyE.js";import"./debounce-D7W5PopO.js";import"./paper-plane-DmakTfg7.js";import"./index-DNjxpIyn.js";import"./less-sSctrwpm.js";import"./index-DZ0xDHNc.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
