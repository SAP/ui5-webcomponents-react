import{j as o}from"./iframe-BbyAdBbD.js";import{useMDXComponents as n}from"./index-DMrgLDcS.js";import{I as r,F as m}from"./CommandsAndQueries-DIG7kTa0.js";import{M as l,C as s}from"./blocks-BmDzJ9zc.js";import"./Tag-DFDkNEbD.js";import"./index-BOJCW3Cn.js";import"./copy-BF7pXxeM.js";import{d as p}from"./AnalyticalTableHooks.stories-DiCxz0vI.js";import"./preload-helper-Ct5FWWRu.js";import"./index-C8J3KSH2.js";import"./index-DoDw--JI.js";import"./index-B0_PQF5c.js";import"./Link-Dyaix8DR.js";import"./addCustomCSSWithScoping-C5eZLuHk.js";import"./index-CzGjDUib.js";import"./index-uwT0wEXF.js";import"./index-DOb7Y-7Q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CPnL0edq.js";import"./index-B8lW2Kcg.js";import"./information-DKaoIqMf.js";import"./sys-enter-2-CKPkjpqY.js";import"./alert-D9XuLZDQ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BSAnNVf9.js";import"./delete-BLpFcH48.js";import"./settings-5TLja6i2.js";import"./NoData-HPmKGd38.js";import"./IllustratedMessage-B647nMwC.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DvSWxm92.js";import"./index-BlUZkyup.js";import"./slim-arrow-down-B5KGIjFP.js";import"./Input-vhH4RVxo.js";import"./ResponsivePopoverCommon.css-DuxFKCqv.js";import"./ValueStateMessage.css-C-AtYoGH.js";import"./Suggestions.css-CqkZUpZv.js";import"./ListBoxItemGroupTemplate-BrOkgLPi.js";import"./ComboBoxItemGroup-Cb5cZxlO.js";import"./ListItemBaseTemplate-DKaA7HpC.js";import"./Token-DxGHBcxh.js";import"./ScrollEnablement-DpfeP5CM.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CSYeusiR.js";import"./ToggleButton-OcC6jLG_.js";import"./SuggestionItem-D3io2X0o.js";import"./index-BDvgDUVK.js";import"./Option-CEiySMCJ.js";import"./index-N78PTm1P.js";import"./SegmentedButton-D9XZlGT9.js";import"./index-Bp7YlL8u.js";import"./Select-DbKIwfyt.js";import"./InvisibleMessage-D6n4ORIu.js";import"./slim-arrow-down-Cx1RPm1s.js";import"./useIsRTL-9zlLmWw2.js";import"./index-Ck_-4Rju.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BEC6BIlW.js";import"./group-2-CwXrvgUo.js";import"./sort-descending-DaWJ7kHb.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B7ejrIsS.js";import"./utils-CCpDXmdD.js";import"./index-C54FjhOM.js";import"./index-BeMay_ho.js";import"./index-CcGMgt3M.js";import"./navigation-down-arrow-BCp3Wl54.js";import"./navigation-right-arrow-BaJ0uUCw.js";import"./navigation-right-arrow-CK5GhfeV.js";import"./useCurrentTheme-DrzZpmta.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CyWS8VSF.js";import"./debounce-D7W5PopO.js";import"./index-D2LrbRwm.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
