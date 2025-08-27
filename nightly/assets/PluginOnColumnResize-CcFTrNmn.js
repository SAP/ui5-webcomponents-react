import{j as o}from"./iframe-BuT579UQ.js";import{useMDXComponents as n}from"./index-hwCnNpvR.js";import{I as r,F as m}from"./CommandsAndQueries-bkB85Yh1.js";import{M as l,C as s}from"./blocks-xCv3ALrs.js";import"./Tag-BfLQPV5Q.js";import"./index-BdhtxwT5.js";import"./copy-wEyzDN_W.js";import{d as p}from"./AnalyticalTableHooks.stories-FJkCYbWD.js";import"./preload-helper-Ct5FWWRu.js";import"./index-B5tYw3g0.js";import"./index-CKRjOfqg.js";import"./index-DcodLJdG.js";import"./Link-BRdwNtbO.js";import"./addCustomCSSWithScoping-BObqnoGh.js";import"./index-CSxL7VzK.js";import"./index-mwQcMkri.js";import"./index-t5BVUaSq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BWHNxoJ6.js";import"./index-Sm3A70Iw.js";import"./information-BpdkAt88.js";import"./sys-enter-2-fNvpiTi4.js";import"./alert-Dvzv9mH1.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bk34MmhX.js";import"./delete-DSXtlXXY.js";import"./settings-4bx0VgeV.js";import"./NoData-vp4GEOpw.js";import"./IllustratedMessage-BtlxeWXL.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-D53SZETl.js";import"./index-DJQmWM3N.js";import"./slim-arrow-down-BFpW1mmV.js";import"./Input-CvvVNEnq.js";import"./ResponsivePopoverCommon.css-qGTg7BLI.js";import"./ValueStateMessage.css-CtKS_0vT.js";import"./Suggestions.css-Bcp4Zv_G.js";import"./ListBoxItemGroupTemplate-Cui9N4wb.js";import"./ComboBoxItemGroup-CEjB3kBH.js";import"./ListItemBaseTemplate-CQO5WV5w.js";import"./Token-D5ISVM2O.js";import"./ScrollEnablement-CcsddKsW.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CHi924vm.js";import"./ToggleButton-LeeA5Zqa.js";import"./SuggestionItem-CjQuXKdn.js";import"./index-Bf2ZDXXH.js";import"./Option-DPjuNQJt.js";import"./index-BO8BCtNV.js";import"./SegmentedButton-CRrW-aTl.js";import"./index-DlawuYVu.js";import"./Select-DLIvqNcS.js";import"./InvisibleMessage-Ba38bBs7.js";import"./slim-arrow-down-BM2WIur-.js";import"./useIsRTL-5gvEDkWI.js";import"./index-oe8Gqb1X.js";import"./IconDesign-DXd8PPVF.js";import"./filter-JS7GUKDF.js";import"./group-2-BNbgPDED.js";import"./sort-descending-DV5Un8fH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Zp_0qgnt.js";import"./utils-B7fpqODC.js";import"./index-DMH9d7E6.js";import"./index-D4lxRB7c.js";import"./index-Dtnrs4JW.js";import"./navigation-down-arrow-BnJLXcXo.js";import"./navigation-right-arrow-CD_EyHiK.js";import"./navigation-right-arrow-B0yfts_H.js";import"./useCurrentTheme-CEkgdkN3.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Dtlg3XZo.js";import"./debounce-D7W5PopO.js";import"./index-D_q8YZ9X.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
