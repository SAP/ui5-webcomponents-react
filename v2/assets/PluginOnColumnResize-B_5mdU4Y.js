import{j as o}from"./iframe-DB1hZqAv.js";import{useMDXComponents as n}from"./index-C7G5dSmF.js";import{I as r,F as m}from"./CommandsAndQueries-Btb1kQnC.js";import{M as l,C as s}from"./blocks-cg9LC1rI.js";import"./Tag-BS7zj2yL.js";import"./index-C5JoWyXC.js";import"./copy-C9f0Ezzi.js";import{d as p}from"./AnalyticalTableHooks.stories-BUext0Gv.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BbxSTqwp.js";import"./index-DfpSA-Ue.js";import"./index-AyDKBAO2.js";import"./Link-CMn1MwX0.js";import"./addCustomCSSWithScoping-aeW1jsnX.js";import"./index-C0ik2STR.js";import"./index-CDotLVrR.js";import"./index-BvRvvaxi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CMluZ7rf.js";import"./index-Dq64mUvA.js";import"./information-CQEWuKvd.js";import"./sys-enter-2-CKXMqpTE.js";import"./alert-ttvcaVxO.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DTJbIMyK.js";import"./delete-iBmDTKmT.js";import"./settings-CXX2toD-.js";import"./NoData-DrngtIPE.js";import"./IllustratedMessage-C6zf5HsA.js";import"./i18n-defaults-dyGKyNAh.js";import"./parameters-bundle.css-B8Lg4lbk.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DuVbn_Av.js";import"./index-jjwte1j7.js";import"./slim-arrow-down-B9C8_DlV.js";import"./Input-Co1Ncam9.js";import"./ResponsivePopoverCommon.css-DTbOAvZ8.js";import"./ValueStateMessage.css-DyRqN3Zi.js";import"./Suggestions.css-CfU8jDIe.js";import"./ListBoxItemGroupTemplate-Ch9CdS-e.js";import"./ComboBoxItemGroup-DccqzNyb.js";import"./ListItemBaseTemplate-CCky6bk9.js";import"./Token-CPPasJTL.js";import"./ScrollEnablement-DPTLFCJR.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BudRgS4c.js";import"./ToggleButton-BjCoIICR.js";import"./SuggestionItem-Bpp7nMj3.js";import"./index-CvaoPo7F.js";import"./Option-B4gtaKyw.js";import"./index-CydNmgP-.js";import"./SegmentedButton-CQj9NEcE.js";import"./index-BKk9Wf2M.js";import"./Select-C5E5Vmyc.js";import"./InvisibleMessage-DXb0t9Au.js";import"./slim-arrow-down-C4Fh43q_.js";import"./useIsRTL-C-GxNVoX.js";import"./index-B_yjfbdI.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DmM8q-0P.js";import"./group-2-Cwo9fREl.js";import"./sort-descending-D7mmF3VT.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BZY4Y34l.js";import"./utils-C7ou7Pk8.js";import"./index-v0oEg3Lc.js";import"./index-C4fDg-mx.js";import"./index-CfmFa_MC.js";import"./navigation-down-arrow-BeFKVpxI.js";import"./navigation-right-arrow-DMOktS7m.js";import"./navigation-right-arrow-CJKsR_Mb.js";import"./useCurrentTheme-xBPSbLDD.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D04vslG3.js";import"./debounce-D7W5PopO.js";import"./index-due6Tg_c.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
