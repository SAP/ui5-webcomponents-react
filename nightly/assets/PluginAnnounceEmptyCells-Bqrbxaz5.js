import{j as t}from"./iframe-zpPFhmqz.js";import{useMDXComponents as i}from"./index-aGUGAxCn.js";import{I as n,F as m}from"./CommandsAndQueries-DoDYgPNU.js";import{M as p,C as s}from"./blocks-q8Nphih1.js";import"./Tag-DF5VPs_L.js";import"./index-DBWFzhv7.js";import"./i18n-DCXZOGva.js";import"./copy-CsdqLzsD.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Dx8Mn6e4.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DOk7cku9.js";import"./index-iS2pCHHF.js";import"./index-gkv542qS.js";import"./Link-Dx0W1V1U.js";import"./addCustomCSSWithScoping-welUcsP2.js";import"./index-6SGI919r.js";import"./index-DihSpOjx.js";import"./index-zsfuzf0m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CiKWeE0m.js";import"./index-C9UnmKjh.js";import"./information-BG3miSRm.js";import"./sys-enter-2-DUb0BHPN.js";import"./alert-DHhUa2Y-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-l7ytZdfT.js";import"./delete-MHv_CYg9.js";import"./settings-DDoKt4UP.js";import"./NoData-DMnUha6D.js";import"./IllustratedMessage-BejhpU64.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DjPxmqrq.js";import"./index-BsUu5ArI.js";import"./slim-arrow-down-CO2u_KNM.js";import"./Input-BcHfgIky.js";import"./ResponsivePopoverCommon.css-Cb1nsgmq.js";import"./ValueStateMessage.css-CmZvREXK.js";import"./Suggestions.css-DIfLi72j.js";import"./ListBoxItemGroupTemplate-CHNgl-Oy.js";import"./ComboBoxItemGroup-DFkgZF5e.js";import"./ListItemBaseTemplate-C2pGTkPR.js";import"./Token-PxOnpRsT.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-qOMJB75Y.js";import"./ToggleButton-C4gh6ZdD.js";import"./SuggestionItem-MnmkuIYh.js";import"./index-lxTrpBQg.js";import"./Option-BZrKzvIh.js";import"./index-Cu4m70XN.js";import"./SegmentedButton-C_Bg2ZEp.js";import"./index-v-gaF3k7.js";import"./Select-BLfR4K0O.js";import"./InvisibleMessage-CqVAFS8W.js";import"./slim-arrow-down-YWcqYD1l.js";import"./useIsRTL-eXMfvMyV.js";import"./index-B22sVMzR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DMZ8jdZi.js";import"./group-2-moJaZwxt.js";import"./sort-descending-Bn-IQCLh.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D8yCGdW8.js";import"./utils-BsKoZRvK.js";import"./index-C5MZ6k2U.js";import"./index-DVkEcyDj.js";import"./index-BJMFwgq6.js";import"./navigation-down-arrow-CahQfWLu.js";import"./navigation-right-arrow-D6aNzJYM.js";import"./navigation-right-arrow-XoXEZ7Cs.js";import"./useCurrentTheme-D03cAXDo.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CuZK89md.js";import"./debounce-D7W5PopO.js";import"./paper-plane-DDyEFRtL.js";import"./index-CLpJfXhr.js";import"./less-B0fY1ae9.js";import"./index-fd99oHag.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
