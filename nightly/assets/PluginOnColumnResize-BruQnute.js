import{j as o}from"./iframe-Ci8pj7yy.js";import{useMDXComponents as n}from"./index-DO7eBN2z.js";import{I as r,F as m}from"./CommandsAndQueries-5z2JhX-x.js";import{M as l,C as s}from"./blocks-BOIftN09.js";import"./Tag-CtmOHQqs.js";import"./index-XXTJ5qGa.js";import"./copy-DM6AHN8T.js";import{d as p}from"./AnalyticalTableHooks.stories-CIgjSOik.js";import"./preload-helper-D9Z9MdNV.js";import"./index-D-FVVHHi.js";import"./index-B8N1oKPj.js";import"./index-DWr3iboX.js";import"./Link-CAZ1TUGZ.js";import"./addCustomCSSWithScoping-X0FVjaGM.js";import"./index-DNhpGeE9.js";import"./index-DX67Vy3i.js";import"./index-D32YSGyq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BXlYEAwh.js";import"./index-C7Xj3GeW.js";import"./information-DSfftGlH.js";import"./sys-enter-2-C76hk90F.js";import"./alert-DYFZMbbA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DqJrgc-x.js";import"./delete-CUXM36Gm.js";import"./settings-g1NOXTFX.js";import"./NoData-BfSz2Jb4.js";import"./IllustratedMessage-Bo2-9Wgw.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-1TM8C73E.js";import"./index-DXcpIB8q.js";import"./slim-arrow-down-lM8f-Uz6.js";import"./Input-D5iz8gVF.js";import"./ResponsivePopoverCommon.css-BfjHIntt.js";import"./ValueStateMessage.css-BrUNqWph.js";import"./Suggestions.css-C4ig1fd6.js";import"./ListBoxItemGroupTemplate-DxlwIkTb.js";import"./ComboBoxItemGroup-zSoS-Ov_.js";import"./ListItemBaseTemplate-CAugTCWT.js";import"./Token-D49MTHA_.js";import"./ScrollEnablement-DMp5qR-R.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D6LGiTVa.js";import"./ToggleButton-BLZC0g81.js";import"./SuggestionItem-92M1Ikia.js";import"./index-Br4cY6Qw.js";import"./Option-DI25J3kC.js";import"./index-BbuGn4PW.js";import"./SegmentedButton-FzhhcgQ0.js";import"./index-BWFbO-Lg.js";import"./Select-Iz40cZG_.js";import"./InvisibleMessage-CU9-lL93.js";import"./slim-arrow-down-2towEIQe.js";import"./useIsRTL-C1trBNR6.js";import"./index-BX3qDpDF.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CawSky8K.js";import"./group-2-dpD3se9c.js";import"./sort-descending-Dmsih093.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CGtZMLio.js";import"./utils-BhcSyhLQ.js";import"./index-DFx_hLRP.js";import"./index-BGOVEiSw.js";import"./index-ChMRRx5d.js";import"./navigation-down-arrow-BiDKnIlg.js";import"./navigation-right-arrow-AjROisR1.js";import"./navigation-right-arrow-Cn7J3EaV.js";import"./useCurrentTheme-CfVTJDKN.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CgTw5VBS.js";import"./debounce-D7W5PopO.js";import"./index-DvTGRhis.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
