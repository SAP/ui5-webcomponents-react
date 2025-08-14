import{j as o}from"./iframe-DrWv7kqk.js";import{useMDXComponents as n}from"./index-COfklbz7.js";import{I as r,F as m}from"./CommandsAndQueries-ChjYN9hd.js";import{M as l,C as s}from"./blocks-CanskeDB.js";import"./Tag-BpxYU6SX.js";import"./index-C2As05th.js";import"./copy-CdjvYQrK.js";import{d as p}from"./AnalyticalTableHooks.stories-CnJp7vsc.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DNisCSrq.js";import"./index-BbYicUoT.js";import"./index-WYl7sJsX.js";import"./Link-BXBCrxeL.js";import"./addCustomCSSWithScoping-BHseblXn.js";import"./index-BObiMDAc.js";import"./index-BK7UTMeJ.js";import"./index-wUQSbSJP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHbcK7Ba.js";import"./index-DJ9rRFX2.js";import"./information-BlWxhQJP.js";import"./sys-enter-2-yLdXaTo2.js";import"./alert-D-b4CjR7.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B5_dIwBF.js";import"./delete-DGWWD-0M.js";import"./settings-uroI1SHr.js";import"./NoData-BgVa5JOE.js";import"./IllustratedMessage-C_P0VKyq.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BxKcZBZF.js";import"./index-c3XofLN-.js";import"./slim-arrow-down-y4onL6ln.js";import"./Input-C_5q9_az.js";import"./ResponsivePopoverCommon.css-D-NNNw7j.js";import"./ValueStateMessage.css-B0vfJtfY.js";import"./Suggestions.css-C2ZIvTf-.js";import"./ListBoxItemGroupTemplate-zsNoICuE.js";import"./ComboBoxItemGroup-CeeS4fDE.js";import"./ListItemBaseTemplate-BLP_ZL8i.js";import"./Token-D0IgVyFO.js";import"./ScrollEnablement-yOUkUvJ6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DThva79L.js";import"./ToggleButton-DEHdTx38.js";import"./SuggestionItem-DKn3SbjY.js";import"./index-DTmtyUb2.js";import"./Option-DaChME3c.js";import"./index-2qE_INpy.js";import"./SegmentedButton-DrvmVaQv.js";import"./index-Dfk_-AT2.js";import"./Select-BC5JSduM.js";import"./InvisibleMessage-AMXG7yy6.js";import"./slim-arrow-down-CTlrm5_E.js";import"./useIsRTL-XwDO1usx.js";import"./index-3r57QoEB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C4dwn6g9.js";import"./group-2-BKV6ywji.js";import"./sort-descending-_QmakTRe.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-9mrtC8Rr.js";import"./utils-Bx9oMGrL.js";import"./index-BXypK-HU.js";import"./index-CgKvkbcK.js";import"./index-xZd7WN2d.js";import"./navigation-down-arrow-D_XU2zOL.js";import"./navigation-right-arrow-3Y1kkBwG.js";import"./navigation-right-arrow-DbCp59vu.js";import"./useCurrentTheme-gchjG-U4.js";import"./IndicationColor-DVw-fSM_.js";import"./index-3so-AfDQ.js";import"./debounce-D7W5PopO.js";import"./index-_OTZPB8a.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
