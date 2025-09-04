import{j as t}from"./iframe-DOJWwQPM.js";import{useMDXComponents as i}from"./index-D4GYqxG5.js";import{I as n,F as m}from"./CommandsAndQueries-DBgPcKIy.js";import{M as p,C as s}from"./blocks-UH_Armuh.js";import"./Tag-C5qooBCQ.js";import"./index-BzlDTQAu.js";import"./i18n-DSpjDgSK.js";import"./copy-DtHn9BZF.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-C0dnXtTj.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CKKp0V8L.js";import"./index-BE18fnIz.js";import"./index-CAij4Fwu.js";import"./Link-OhZHx2sI.js";import"./addCustomCSSWithScoping-7a5LAVf5.js";import"./index-IwfXz8bd.js";import"./index-DWcAbIiW.js";import"./index-CCV0Si6x.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-lKnjzqmd.js";import"./index-DKP6N4eU.js";import"./information-BiSRDS7B.js";import"./sys-enter-2-Ct0rvJ7Z.js";import"./alert-DJAqfmG4.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-NVkIFjwc.js";import"./delete-CM1g85K0.js";import"./settings-USDe9u6F.js";import"./NoData-D8-OUFng.js";import"./IllustratedMessage-_46LaT9t.js";import"./i18n-defaults-Cjp7arcT.js";import"./parameters-bundle.css-34zgZIqy.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DWXCLmFF.js";import"./index-CE1heMCb.js";import"./slim-arrow-down-CS8FeIva.js";import"./Input-Bvv54WJ3.js";import"./ResponsivePopoverCommon.css-PVlGE3yL.js";import"./ValueStateMessage.css-O1QyKtEp.js";import"./Suggestions.css-XOF_Sz64.js";import"./ListBoxItemGroupTemplate-CHQ-wV3d.js";import"./ComboBoxItemGroup-BGf30V2s.js";import"./ListItemBaseTemplate-CNX0LT1O.js";import"./Token-BFiif2w7.js";import"./ScrollEnablement-SdEABngw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BC0Wl30E.js";import"./ToggleButton-s7-qI1Yi.js";import"./SuggestionItem-BNjcGuMf.js";import"./index-B4Xc4nLk.js";import"./Option-yF138sxw.js";import"./index-CDQ3KQpW.js";import"./SegmentedButton-D7bTb4kF.js";import"./index-k5BaVA8t.js";import"./Select-BfiyHYxw.js";import"./InvisibleMessage-CxuvqbmW.js";import"./slim-arrow-down-B0GkeD5A.js";import"./useIsRTL-B0ileuje.js";import"./index-Ddj8LW1O.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CHivle49.js";import"./group-2-DIzaJsIH.js";import"./sort-descending-BVaeaXuV.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CSRHX1mS.js";import"./utils-DdmGud8i.js";import"./index-7k0YV4zV.js";import"./index-BB-Q4KiC.js";import"./index-CJrQ7TDF.js";import"./navigation-down-arrow-B2P3gfXv.js";import"./navigation-right-arrow-Bx89aBq_.js";import"./navigation-right-arrow-nJ_rru5v.js";import"./useCurrentTheme-D4MDEsF-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BWo2nEyE.js";import"./debounce-D7W5PopO.js";import"./paper-plane-DmakTfg7.js";import"./index-DNjxpIyn.js";import"./less-sSctrwpm.js";import"./index-DZ0xDHNc.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(n,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(s,{sourceState:"none",of:l}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const tableHooks = [useAnnounceEmptyCells] // this array should be memoized

<AnalyticalTable
  data={data}
  columns={columns}
  visibleRows={5}
  tableHooks={tableHooks}
/>
`})}),`
`,t.jsx(o.p,{children:t.jsx(o.strong,{children:"First data entry with empty values or undefined fields:"})}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-js",children:`{
  age: undefined,
  friend: {
    name: '',
    age: 0
  },
  status: 'Error'
}
`})}),`
`,t.jsx(m,{})]})}function Lt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{Lt as default};
