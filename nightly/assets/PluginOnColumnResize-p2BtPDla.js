import{j as o}from"./iframe-BM9OIWQT.js";import{useMDXComponents as n}from"./index-BmDGYHRp.js";import{I as r,F as m}from"./CommandsAndQueries-CxAAQY3-.js";import{M as l,C as s}from"./blocks-DGMiQa0Z.js";import"./Tag-Bg9SPuPk.js";import"./index-DdMY_iOX.js";import"./copy-C5RvIJ1i.js";import{d as p}from"./AnalyticalTableHooks.stories-BZ7zBJHa.js";import"./preload-helper-Ct5FWWRu.js";import"./index-9uui-4yc.js";import"./index-BFMSgsw3.js";import"./index-9kU-764p.js";import"./Link-D90fL3tj.js";import"./addCustomCSSWithScoping-DJtAPEon.js";import"./index-CLY-4HWK.js";import"./index-DnPpq_H3.js";import"./index-6r2kDh88.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B4WbvrxN.js";import"./index-DEAaUqYT.js";import"./information-Ofjl_yVD.js";import"./sys-enter-2-BDJ8zEGu.js";import"./alert-BRWAPDyh.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CyuqtK2r.js";import"./delete-onoyAsqE.js";import"./settings--1Ip8lPf.js";import"./NoData-CQH_6cEc.js";import"./IllustratedMessage-Bwpwi4hz.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-B7uotIo3.js";import"./index-_M5hu1Ve.js";import"./slim-arrow-down-DZH9bZ7T.js";import"./Input-Dn5iQQwi.js";import"./ResponsivePopoverCommon.css-C06uDNZk.js";import"./ValueStateMessage.css-45247xTr.js";import"./Suggestions.css-D3BTSrmf.js";import"./ListBoxItemGroupTemplate-DRaugEOq.js";import"./ComboBoxItemGroup-DPclcPz1.js";import"./ListItemBaseTemplate-4FD8RdDt.js";import"./Token-DULBBXqN.js";import"./ScrollEnablement-B6aqSdEO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CN3OLFlW.js";import"./ToggleButton-BiNCtIf_.js";import"./SuggestionItem-9SkfTs2v.js";import"./index-DDgoevNI.js";import"./Option-C3MxzwCu.js";import"./index-B9VkeBUH.js";import"./SegmentedButton-DYNlW9qo.js";import"./index-C4RyrHZD.js";import"./Select-BMZ7_MPl.js";import"./InvisibleMessage-B5HLZjpk.js";import"./slim-arrow-down-BTYV_0EQ.js";import"./useIsRTL-uL9buPdP.js";import"./index-4j8VosmR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BU0dRrZB.js";import"./group-2-IGI1Z0iD.js";import"./sort-descending-Ce7w9FbB.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BD-49ib6.js";import"./utils-BX52KHbp.js";import"./index-CEfW1Ie-.js";import"./index-6oxIcK4F.js";import"./index-DDsSh8_M.js";import"./navigation-down-arrow-DRy-Plf1.js";import"./navigation-right-arrow-C4LKuMFg.js";import"./navigation-right-arrow-B77x5HAj.js";import"./useCurrentTheme-BO1dkmZn.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BV7JsfdZ.js";import"./debounce-D7W5PopO.js";import"./index-SxXIoXoc.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
