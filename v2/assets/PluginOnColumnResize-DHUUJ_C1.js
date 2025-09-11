import{j as o}from"./iframe-Dxtd3Za_.js";import{useMDXComponents as r}from"./index-DCsMWBUP.js";import{I as n,F as m}from"./CommandsAndQueries-Bz3F9tKI.js";import{M as p,C as s}from"./blocks-CGoS-OC2.js";import"./Tag-2V4Q7cMJ.js";import"./index-DFbKywCe.js";import"./copy-BvP7Hkk1.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-ws7CvZMJ.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BLmvSYxU.js";import"./index-BJ_zprMk.js";import"./index-C_oxkJx9.js";import"./Link-BJCTkcGT.js";import"./addCustomCSSWithScoping-DDKOktfB.js";import"./index-Ul1D90OH.js";import"./index-V59EODhb.js";import"./index-Cb1r7zf9.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_3v8Ndp.js";import"./index-DCNonR1q.js";import"./information-DIBbce7d.js";import"./sys-enter-2-G2_64HTd.js";import"./alert-DwCbeozZ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-cGyrzAN1.js";import"./delete-CEbQnwVY.js";import"./settings-0sZ4vR_e.js";import"./NoData-AIWXEfE_.js";import"./IllustratedMessage--GJcosdL.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-hCMtoJ2P.js";import"./index-C86E5BTJ.js";import"./slim-arrow-down-BjQZQ0VY.js";import"./Input-CZb4w-Dm.js";import"./ResponsivePopoverCommon.css-IrjJke8_.js";import"./ValueStateMessage.css-Dy_ka0k-.js";import"./Suggestions.css-BdLTlAML.js";import"./ListBoxItemGroupTemplate-Hdt3xH6E.js";import"./ComboBoxItemGroup-bCOIMKds.js";import"./ListItemBaseTemplate-BTk6gcZh.js";import"./Token-B4PghaA6.js";import"./ScrollEnablement-B7k2YzpG.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CKQU_WCZ.js";import"./ToggleButton-h3hY1eXi.js";import"./SuggestionItem-CQ_pYiq6.js";import"./index-Bxa3CdJQ.js";import"./Option-D9K8emav.js";import"./index-I1slxKzD.js";import"./SegmentedButton-CLk2pLzg.js";import"./index-CpXacsPc.js";import"./Select-CQh2SqHq.js";import"./InvisibleMessage-CCKau1XL.js";import"./slim-arrow-down-CqSn_OKe.js";import"./useIsRTL-CnnkiTdh.js";import"./index-DyEvwlhn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BlXJbmnx.js";import"./group-2-D9iR7vnq.js";import"./sort-descending-BmXh_-bG.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BdK0W1ZZ.js";import"./utils-FgBaDTia.js";import"./index-DOWDpSnq.js";import"./index-Bz2uwFg5.js";import"./index-DEKh2kth.js";import"./navigation-down-arrow-DibqTE1y.js";import"./navigation-right-arrow-j4FtsvBh.js";import"./navigation-right-arrow-BmUGBCmb.js";import"./useCurrentTheme-BM5p9Se-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DF7tvuzv.js";import"./debounce-D7W5PopO.js";import"./paper-plane-BMiZOuWZ.js";import"./index-DwxEAMZ0.js";import"./less-DsihYSx8.js";import"./index-BuPb2eok.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
