import{j as o}from"./iframe-zpPFhmqz.js";import{useMDXComponents as r}from"./index-aGUGAxCn.js";import{I as n,F as m}from"./CommandsAndQueries-DoDYgPNU.js";import{M as p,C as s}from"./blocks-q8Nphih1.js";import"./Tag-DF5VPs_L.js";import"./index-DBWFzhv7.js";import"./i18n-DCXZOGva.js";import"./copy-CsdqLzsD.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Dx8Mn6e4.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DOk7cku9.js";import"./index-iS2pCHHF.js";import"./index-gkv542qS.js";import"./Link-Dx0W1V1U.js";import"./addCustomCSSWithScoping-welUcsP2.js";import"./index-6SGI919r.js";import"./index-DihSpOjx.js";import"./index-zsfuzf0m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CiKWeE0m.js";import"./index-C9UnmKjh.js";import"./information-BG3miSRm.js";import"./sys-enter-2-DUb0BHPN.js";import"./alert-DHhUa2Y-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-l7ytZdfT.js";import"./delete-MHv_CYg9.js";import"./settings-DDoKt4UP.js";import"./NoData-DMnUha6D.js";import"./IllustratedMessage-BejhpU64.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DjPxmqrq.js";import"./index-BsUu5ArI.js";import"./slim-arrow-down-CO2u_KNM.js";import"./Input-BcHfgIky.js";import"./ResponsivePopoverCommon.css-Cb1nsgmq.js";import"./ValueStateMessage.css-CmZvREXK.js";import"./Suggestions.css-DIfLi72j.js";import"./ListBoxItemGroupTemplate-CHNgl-Oy.js";import"./ComboBoxItemGroup-DFkgZF5e.js";import"./ListItemBaseTemplate-C2pGTkPR.js";import"./Token-PxOnpRsT.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-qOMJB75Y.js";import"./ToggleButton-C4gh6ZdD.js";import"./SuggestionItem-MnmkuIYh.js";import"./index-lxTrpBQg.js";import"./Option-BZrKzvIh.js";import"./index-Cu4m70XN.js";import"./SegmentedButton-C_Bg2ZEp.js";import"./index-v-gaF3k7.js";import"./Select-BLfR4K0O.js";import"./InvisibleMessage-CqVAFS8W.js";import"./slim-arrow-down-YWcqYD1l.js";import"./useIsRTL-eXMfvMyV.js";import"./index-B22sVMzR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DMZ8jdZi.js";import"./group-2-moJaZwxt.js";import"./sort-descending-Bn-IQCLh.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D8yCGdW8.js";import"./utils-BsKoZRvK.js";import"./index-C5MZ6k2U.js";import"./index-DVkEcyDj.js";import"./index-BJMFwgq6.js";import"./navigation-down-arrow-CahQfWLu.js";import"./navigation-right-arrow-D6aNzJYM.js";import"./navigation-right-arrow-XoXEZ7Cs.js";import"./useCurrentTheme-D03cAXDo.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CuZK89md.js";import"./debounce-D7W5PopO.js";import"./paper-plane-DDyEFRtL.js";import"./index-CLpJfXhr.js";import"./less-B0fY1ae9.js";import"./index-fd99oHag.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
