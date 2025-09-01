import{j as o}from"./iframe-Bb_MgE3Z.js";import{useMDXComponents as n}from"./index-DKEbDWFi.js";import{I as r,F as m}from"./CommandsAndQueries-c2dxMxjd.js";import{M as l,C as s}from"./blocks-C_ShsaTX.js";import"./Tag-B5i1kgB9.js";import"./index-DayVNiXE.js";import"./copy-BzQS_3Hx.js";import{d as p}from"./AnalyticalTableHooks.stories-Dhea2jta.js";import"./preload-helper-D9Z9MdNV.js";import"./index-Cq06OFSr.js";import"./index-Na43IgM6.js";import"./index-Ck4df4kL.js";import"./Link-DNvb3KzX.js";import"./addCustomCSSWithScoping-Bc03fLSU.js";import"./index-Ci9Y4xV9.js";import"./index-BfQwzX8T.js";import"./index-j0v7UbS8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHOTzJyN.js";import"./index-DViW7Jtd.js";import"./information-C6jJlQn9.js";import"./sys-enter-2-CM5wN5Wl.js";import"./alert-Y-36vIFj.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BmeHBhTp.js";import"./delete-F09gA5Dh.js";import"./settings-BhGhHhJN.js";import"./NoData-D-hPe5Jl.js";import"./IllustratedMessage-DelxCU65.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-wls3tLIi.js";import"./index-YzpO1bI2.js";import"./slim-arrow-down-C2uRcD-I.js";import"./Input-cbgRVmBC.js";import"./ResponsivePopoverCommon.css-CsqmHnJg.js";import"./ValueStateMessage.css-BFdD6J-X.js";import"./Suggestions.css-Dlsv1RCW.js";import"./ListBoxItemGroupTemplate-BDkvDoJY.js";import"./ComboBoxItemGroup-BRZjTBQb.js";import"./ListItemBaseTemplate-YmJtdlBv.js";import"./Token-CxbDlSxT.js";import"./ScrollEnablement-Cg1kRRvV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BcSpEqks.js";import"./ToggleButton-CPYcC8DT.js";import"./SuggestionItem-DZHEZgAV.js";import"./index-CRZygywU.js";import"./Option-CCwPNrFZ.js";import"./index-VX_m7H3h.js";import"./SegmentedButton-BWyd7qOx.js";import"./index-BVjgfLW4.js";import"./Select-D34ayOJd.js";import"./InvisibleMessage-BjdIRmAn.js";import"./slim-arrow-down-Bf-F8L6C.js";import"./useIsRTL-DzghZux-.js";import"./index-BqrSjPk3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C_kmjLm2.js";import"./group-2-BsbnQxFh.js";import"./sort-descending-Bq0m3INq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-vwwP5RPb.js";import"./utils-DqMkz1_p.js";import"./index-DdbxcY2R.js";import"./index-BggI8XJY.js";import"./index-DN48Kmch.js";import"./navigation-down-arrow-DmtRZyiD.js";import"./navigation-right-arrow-CBj7BSte.js";import"./navigation-right-arrow-DqhSR76c.js";import"./useCurrentTheme--DIDrK0s.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DduCQwPa.js";import"./debounce-D7W5PopO.js";import"./index-CHuQc1t9.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
