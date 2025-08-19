import{j as o}from"./iframe-CvU-07By.js";import{useMDXComponents as n}from"./index-DIsCDPQO.js";import{I as r,F as m}from"./CommandsAndQueries-DbBqwiyb.js";import{M as l,C as s}from"./blocks-C4k1N9hK.js";import"./Tag-ZBoRMHPo.js";import"./index-DM6nouM-.js";import"./copy-TKggWaTM.js";import{d as p}from"./AnalyticalTableHooks.stories-3G5OLr_c.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CrApm23D.js";import"./index-BIUdNoj4.js";import"./index-CeymlHoz.js";import"./Link-BhwO4QDY.js";import"./addCustomCSSWithScoping-KQt9PdZP.js";import"./index-gFOSdjyI.js";import"./index-BYwB_T6k.js";import"./index-BDAVJKqV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BXaptZ3Y.js";import"./index-DyAIHHB4.js";import"./information-BzMTjAO7.js";import"./sys-enter-2-q6_NKbGq.js";import"./alert-BRr8PNkH.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D64xpzSV.js";import"./delete-DASOuVgK.js";import"./settings-Cz4b_CQ9.js";import"./NoData-DRMV0RP5.js";import"./IllustratedMessage-Bz0pNoIO.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DO36Y4ke.js";import"./index-QYxqI47W.js";import"./slim-arrow-down-XBwwFKMk.js";import"./Input-Bk67iFBz.js";import"./ResponsivePopoverCommon.css-DtcMkK-L.js";import"./ValueStateMessage.css-DNP4kQ0q.js";import"./Suggestions.css-BgX4bA8X.js";import"./ListBoxItemGroupTemplate-D9C-1xti.js";import"./ComboBoxItemGroup-DaMMxlC9.js";import"./ListItemBaseTemplate-D_DoxqTK.js";import"./Token-B3GzMGjr.js";import"./ScrollEnablement-Cuj5W76G.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B9CyfjI3.js";import"./ToggleButton-BbTI55BR.js";import"./SuggestionItem-PZTnS_B4.js";import"./index-Tg7QXIHr.js";import"./Option-98MOnCoD.js";import"./index-B16eoqTK.js";import"./SegmentedButton-M4kts95Y.js";import"./index-B6dFmvI2.js";import"./Select-BMBrtb3I.js";import"./InvisibleMessage-DWMWQiC0.js";import"./slim-arrow-down-qxU48HTy.js";import"./useIsRTL-CCAIfBkQ.js";import"./index-CF9TteIz.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BJ3EZc78.js";import"./group-2-DYOtES-M.js";import"./sort-descending-Bm8GDKvK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-JnyUrL39.js";import"./utils-BaDcmQQs.js";import"./index-CoUCTNoo.js";import"./index-BJGfmIzj.js";import"./index-D3k1OHd9.js";import"./navigation-down-arrow-0KBRgDJV.js";import"./navigation-right-arrow-B3eoCJ9z.js";import"./navigation-right-arrow-BuzrIA7s.js";import"./useCurrentTheme-DLiAiuSO.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BrZd3Ayr.js";import"./debounce-D7W5PopO.js";import"./index-BegZFN-t.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
