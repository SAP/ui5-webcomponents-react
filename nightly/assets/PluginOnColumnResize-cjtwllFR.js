import{j as o}from"./iframe-Brl1VNXv.js";import{useMDXComponents as n}from"./index-lkEyU_nt.js";import{I as r,F as m}from"./CommandsAndQueries-Dk6rSuK-.js";import{M as l,C as s}from"./blocks-BAqV5WPc.js";import"./Tag-CPqPqrcS.js";import"./index-BqPTl_TF.js";import"./copy-3T1gBUKn.js";import{d as p}from"./AnalyticalTableHooks.stories-DoORN7PF.js";import"./preload-helper-D9Z9MdNV.js";import"./index-cvNk3Ydm.js";import"./index-BAyaq3AZ.js";import"./index-665xf7Lj.js";import"./Link-R6QwvZvg.js";import"./addCustomCSSWithScoping-2pXmrNrJ.js";import"./index-CIiYxA_R.js";import"./index-CQN5QiqO.js";import"./index-BSJzWAI8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BAdmvlBz.js";import"./index-_G4y7meT.js";import"./information-BqiTraiu.js";import"./sys-enter-2-Br-uV94n.js";import"./alert-DWDpknyG.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CWxguO42.js";import"./delete-C1TIoMlj.js";import"./settings-D4ON83w0.js";import"./NoData-DG0JaC6_.js";import"./IllustratedMessage-DFVXGXCi.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Cnkp96WC.js";import"./index-CHolLt5w.js";import"./slim-arrow-down-CagLPUnU.js";import"./Input-udPVo4mc.js";import"./ResponsivePopoverCommon.css-D3Hv3Gxc.js";import"./ValueStateMessage.css-Bf2NqEEl.js";import"./Suggestions.css-PGPc3R_W.js";import"./ListBoxItemGroupTemplate-D-vUij60.js";import"./ComboBoxItemGroup-Cj2VhANu.js";import"./ListItemBaseTemplate-DqFXL3dn.js";import"./Token-BRypdmfh.js";import"./ScrollEnablement-vXxL4r_i.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-0gp9kpIG.js";import"./ToggleButton-Cj_pSwfJ.js";import"./SuggestionItem-eIYipz3n.js";import"./index-B120lRj9.js";import"./Option-ydTn3SF0.js";import"./index-ByUOmVwt.js";import"./SegmentedButton-B-E_kZVa.js";import"./index-DHHzjK6O.js";import"./Select-DPAi3Ppf.js";import"./InvisibleMessage-CyHbLI8k.js";import"./slim-arrow-down-BcVEw-DR.js";import"./useIsRTL-BIUxlTgz.js";import"./index-DJDgDtmd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DaykPM6n.js";import"./group-2-BE1KJkJu.js";import"./sort-descending-DtT3nEOM.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DR49-Cmt.js";import"./utils-hwxV1HAU.js";import"./index-C6euIQDK.js";import"./index-LOLgjMOa.js";import"./index-C6yhMq4f.js";import"./navigation-down-arrow-CFW-H7FC.js";import"./navigation-right-arrow-Cmd9UH9N.js";import"./navigation-right-arrow-BoSQuLX4.js";import"./useCurrentTheme-CytE6E3p.js";import"./IndicationColor-DVw-fSM_.js";import"./index-XBV3ZP6e.js";import"./debounce-D7W5PopO.js";import"./index-dtCeEGgw.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
