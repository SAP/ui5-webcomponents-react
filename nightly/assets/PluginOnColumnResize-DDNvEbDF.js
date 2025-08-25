import{j as o}from"./iframe-BZP9qxoJ.js";import{useMDXComponents as n}from"./index-CniPTHSz.js";import{I as r,F as m}from"./CommandsAndQueries-CtCNZgsU.js";import{M as l,C as s}from"./blocks-CNZWeGQ1.js";import"./Tag-BxyquP8A.js";import"./index-DxnggiYi.js";import"./copy-BNU1F6ls.js";import{d as p}from"./AnalyticalTableHooks.stories-BVqhJ6mi.js";import"./preload-helper-Ct5FWWRu.js";import"./index-C-1ECvAU.js";import"./index-Czg7RjtG.js";import"./index-xiFcJlxz.js";import"./Link-DSvye9Ik.js";import"./addCustomCSSWithScoping-BBk-9-X7.js";import"./index-CD1m4nLu.js";import"./index-DwaE3Lty.js";import"./index-CT1vfvrt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-2WJXARYL.js";import"./index--Vew3hXz.js";import"./information-BmFtf2Jh.js";import"./sys-enter-2-s2PLeJyt.js";import"./alert-Cb0aonIe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DD8g5bnM.js";import"./delete-D6-35YwG.js";import"./settings-DBoXREAT.js";import"./NoData-gZ1fjVVl.js";import"./IllustratedMessage-CFTGdX3g.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DGOgRaLa.js";import"./index-Ce-nCryE.js";import"./slim-arrow-down-BTcmIAZo.js";import"./Input-nQkDkpMo.js";import"./ResponsivePopoverCommon.css--1qcCkZD.js";import"./ValueStateMessage.css-BWItzYrT.js";import"./Suggestions.css-ByBItAub.js";import"./ListBoxItemGroupTemplate-CDWy6Nub.js";import"./ComboBoxItemGroup-CCYywqPo.js";import"./ListItemBaseTemplate-DRr4zk5s.js";import"./Token-BwRrxMD7.js";import"./ScrollEnablement-BN7kIMtj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-cIFVz4xB.js";import"./ToggleButton-chqvRgB_.js";import"./SuggestionItem-D841cpg4.js";import"./index-DfNHlgXD.js";import"./Option-BkfkZtHI.js";import"./index-Byascgrb.js";import"./SegmentedButton-DJu9oJAG.js";import"./index-BRkEXvtH.js";import"./Select-BBPMsUok.js";import"./InvisibleMessage-D-XldCbn.js";import"./slim-arrow-down-R4lWeZmU.js";import"./useIsRTL-BMHeZ9la.js";import"./index-r-PAOf5B.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DCyfWB89.js";import"./group-2-FFZDiPuh.js";import"./sort-descending--GyeITCg.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BgN_-xrJ.js";import"./utils-NBX3VAhS.js";import"./index-D-zHAvS6.js";import"./index-Bq4yDwlr.js";import"./index-Cz2QpzuG.js";import"./navigation-down-arrow-B-0Rh6AW.js";import"./navigation-right-arrow-BhFnHVa_.js";import"./navigation-right-arrow-JqBI6C2o.js";import"./useCurrentTheme-CVug1619.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CxpTF53y.js";import"./debounce-D7W5PopO.js";import"./index-C8rUm7Lp.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
