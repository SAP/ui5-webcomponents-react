import{j as o}from"./iframe-Dk4p-NU5.js";import{useMDXComponents as n}from"./index-CHKRtcGE.js";import{I as r,F as m}from"./CommandsAndQueries-DyjrBS1R.js";import{M as l,C as s}from"./blocks-DM1TPhC8.js";import"./Tag-DIu9mUid.js";import"./index-Dy2aDYnH.js";import"./copy-9E4-O2oJ.js";import{d as p}from"./AnalyticalTableHooks.stories-CmR8dSjn.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CltNqpOu.js";import"./index-C0BhXx34.js";import"./index-BjoQdxqk.js";import"./Link-CnlylsPy.js";import"./addCustomCSSWithScoping-YkmUIPFl.js";import"./index-CWcAFKak.js";import"./index-DSYhAS_G.js";import"./index-oVL9Luq8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CcivO6eQ.js";import"./index-C9rB5uch.js";import"./information-BsAdT-Xc.js";import"./sys-enter-2-CC2F8dSm.js";import"./alert-r293I4gz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BgKWDcWX.js";import"./delete-D_xbwIrp.js";import"./settings-BhIm0GiE.js";import"./NoData-DJVZbPGE.js";import"./IllustratedMessage-Dz5IZ3Gp.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BAIeo5U4.js";import"./index-DH8WjD5q.js";import"./slim-arrow-down-EOCFba-X.js";import"./Input-B0eKdbw0.js";import"./ResponsivePopoverCommon.css-CA4ifvoQ.js";import"./ValueStateMessage.css-B8pmh2N9.js";import"./Suggestions.css-BBewLOHr.js";import"./ListBoxItemGroupTemplate-DbB0mUIL.js";import"./ComboBoxItemGroup-teYu1d9A.js";import"./ListItemBaseTemplate-CSbf2qJ5.js";import"./Token-TOBkDVYm.js";import"./ScrollEnablement-BUDpADc-.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-_XkMLugT.js";import"./ToggleButton-Cjl-wpx7.js";import"./SuggestionItem--vngu7nQ.js";import"./index-Bmc43_Wo.js";import"./Option-jLqCQe_J.js";import"./index-CBPjXdoe.js";import"./SegmentedButton-BKR8AthM.js";import"./index-CqLI4bN3.js";import"./Select-CpzFR8eY.js";import"./InvisibleMessage-BEHSXRmN.js";import"./slim-arrow-down-DP1V9xmJ.js";import"./useIsRTL-BuDy2riY.js";import"./index-DvomD5A_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BVt2u7qE.js";import"./group-2-vNrOYBfE.js";import"./sort-descending-BVScS0Cb.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-YT5Jo3L_.js";import"./utils-Cjbny4G8.js";import"./index-m33ksqZ9.js";import"./index-XLo1LjLC.js";import"./index-DA1_rGf1.js";import"./navigation-down-arrow-CdY2_y0s.js";import"./navigation-right-arrow-D0DZxEc6.js";import"./navigation-right-arrow-DVeiYe6Q.js";import"./useCurrentTheme-O02qIIH9.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CUq2bgaj.js";import"./debounce-D7W5PopO.js";import"./index-D7XWWKWU.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
