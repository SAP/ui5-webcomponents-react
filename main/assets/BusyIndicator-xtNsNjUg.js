import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{C as s}from"./DomRefTable.module-5hbnTtc6.js";import{D as a}from"./DocsHeader--ZVw0WaJ.js";import{F as c}from"./Footer-HbCiCfk3.js";import"./index-OjgoNOWw.js";import{M as h,C as p,b as d}from"./chunk-HLWAVYOI-9EpX-cNV.js";import{C as l,D as m,W as u}from"./BusyIndicator.stories-iur7dTnZ.js";import{u as n}from"./index-RwE9nQVW.js";import"./react-jss.esm-tmBtHfec.js";import"./index-yHUCDDmM.js";import"./iframe-H6F8e3nV.js";import"../sb-preview/runtime.js";import"./UI5Element-4kitL615.js";import"./i18nBundle-h5yKZf-0.js";import"./VersionInfo-yX_RFFR1.js";import"./CustomElementsScopeUtils-icazltFf.js";import"./withWebComponent-y_2h_qsG.js";import"./utils-jDGQm03y.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-ic8wGgAs.js";import"./Icons-cDXElGrC.js";import"./decline-tlNcqIac.js";import"./i18n-defaults-CPLPRuO1.js";import"./information-txDdHyyj.js";import"./alert-sbIfV1of.js";import"./class-map-aNJl42Aw.js";import"./Button-dXtUjl7w.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-zEJ36VRV.js";import"./index-IPJJPG41.js";import"./clsx-c3LcQGjR.js";import"./i18n-defaults-EHbh3l3V.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-DWXxr99t.js";import"./index-QYh6idnL.js";import"./ModalsContext-0q87fkkd.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-kI6DTjO7.js";import"./index-aPKHy7XM.js";import"./Integer-kog98579.js";import"./index-0EAbr7ih.js";import"./Avatar-DexMZin0.js";import"./ResizeHandler-_S6lmbp5.js";import"./employee-jQid-Nvn.js";import"./index-mRzrQ3Ib.js";import"./index-DyFmZaMN.js";import"./Link-yiZ7VLOd.js";import"./WrappingType-avPrqc94.js";import"./index-QJXjNZIk.js";import"./TableOfContent-fu4qxVrh.js";import"./index-psThiHUV.js";import"./Label-avDcfEez.js";import"./index-IwWjuIme.js";import"./index-ONOyfrWp.js";import"./Popover-jBPmsweJ.js";import"./PopupUtils-9DzRw33t.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-Honr3Kcv.js";import"./FocusableElements-eRJsgpvJ.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-cRo_ADDP.js";import"./BrowserScrollbar.css-IWLYYIFQ.js";import"./react-18-1WT2dSvK.js";import"./_baseForOwn-UZJwRxDU.js";import"./mapValues-HzTlT2lF.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./index-UBYxvHMA.js";import"./index-Pse_FlHL.js";import"./Select-UP3va1Gd.js";import"./InvisibleMessage-R9CLsv22.js";import"./ValueState-zUcANXoY.js";import"./slim-arrow-down-PCfpziCj.js";import"./ListItemBase-I-s_J6Ef.js";import"./ItemNavigation-ip1cTHoi.js";import"./TabbableElements-aYIPY3zp.js";import"./debounce-8VpZswfd.js";import"./BusyIndicator-X1TngKgE.js";import"./ResponsivePopover-VBH6lSRH.js";import"./Dialog-EC6yS1E8.js";import"./Title-RSxLzkgC.js";import"./StandardListItem-Yph4t32Z.js";import"./ListItem-IizPXeAh.js";import"./RadioButton-9sU8Xbqd.js";import"./CheckBox-pvchRcT5.js";import"./accept-RvtrxF_7.js";import"./HasPopup-9BAMrqbD.js";import"./slim-arrow-right-xQBn3CIQ.js";import"./ResponsivePopoverCommon.css-A5n-yhJ1.js";import"./ValueStateMessage.css-_uSbOmUY.js";import"./ValueState-I_-hGNIb.js";import"./index-l_dweYh-.js";const x=`## Usage

For the \`BusyIndicator\` you can define the size, the text and whether it is shown or hidden. In order to hide it, use the "active" property.

In order to show busy state over an HTML element, simply nest the HTML element in a \`BusyIndicator\` instance.  
**Note:** Since \`BusyIndicator\` has \`display: inline-block;\` by default and no width of its own, whenever you need to wrap a block-level element, you should set \`display: block\` to the busy indicator as well.

### When to use:

- The user needs to be able to cancel the operation.
- Only part of the application or a particular component is affected.

### When not to use:

- The operation takes less than one second.
- You need to block the screen and prevent the user from starting another activity.
- Do not show multiple busy indicators at once.
`;function mo(r={}){const{wrapper:i}=Object.assign({},n(),r.components);return i?t.jsx(i,Object.assign({},r,{children:t.jsx(e,{})})):e();function e(){const o=Object.assign({h2:"h2",h1:"h1"},n(),r.components);return t.jsxs(t.Fragment,{children:[t.jsx(h,{of:l}),`
`,t.jsx(a,{since:"0.4.0"}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(p,{of:m}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(s,{of:m}),`
`,t.jsx(d,{children:x}),`
`,t.jsx(o.h1,{id:"more-examples",children:"More Examples"}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"busyindicator-with-children",children:"BusyIndicator with children"}),`
`,t.jsx(p,{of:u}),`
`,t.jsx(c,{})]})}}export{mo as default};
