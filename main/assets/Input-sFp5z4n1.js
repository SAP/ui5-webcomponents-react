import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{C as a,A as n}from"./DomRefTable.module-cGhQsTrX.js";import{D as c}from"./DocsHeader-5AB6ETjb.js";import{F as d}from"./Footer-OAunTZWv.js";import"./index-OjgoNOWw.js";import{M as g,C as p,b as o}from"./chunk-HLWAVYOI-u4EZ4OML.js";import{D as l}from"./DomRefTable-PsQJPc-R.js";import{S as f}from"./SubcomponentsSection-pzdPLcqE.js";import{S as x,a as j}from"./index-OUUKARAo.js";import{S as I,a as b}from"./SuggestionItemDescription-kBz3rsGb.js";import{C as S,D as m,W as y}from"./Input.stories-iaQ3VJ4M.js";import{e as h}from"./utils-77gZ8405.js";import{u}from"./index-RwE9nQVW.js";import"./react-jss.esm-tmBtHfec.js";import"./index-s1g1nwmm.js";import"./iframe-fPeWPQAQ.js";import"../sb-preview/runtime.js";import"./UI5Element-4kitL615.js";import"./i18nBundle-h5yKZf-0.js";import"./VersionInfo-yX_RFFR1.js";import"./CustomElementsScopeUtils-icazltFf.js";import"./withWebComponent-y_2h_qsG.js";import"./utils-jDGQm03y.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-ic8wGgAs.js";import"./Icons-cDXElGrC.js";import"./decline-tlNcqIac.js";import"./i18n-defaults-CPLPRuO1.js";import"./information-txDdHyyj.js";import"./alert-sbIfV1of.js";import"./class-map-aNJl42Aw.js";import"./Button-dXtUjl7w.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-zEJ36VRV.js";import"./index-IPJJPG41.js";import"./clsx-c3LcQGjR.js";import"./i18n-defaults-EHbh3l3V.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-DWXxr99t.js";import"./index-QYh6idnL.js";import"./ModalsContext-0q87fkkd.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-kI6DTjO7.js";import"./index-OR_w4YLu.js";import"./Integer-kog98579.js";import"./index-ke_KxUQP.js";import"./Avatar-DexMZin0.js";import"./ResizeHandler-_S6lmbp5.js";import"./employee-jQid-Nvn.js";import"./index-sMQiDyUV.js";import"./index-RqJcrPhZ.js";import"./Link-yiZ7VLOd.js";import"./WrappingType-avPrqc94.js";import"./index-5ETO3hDj.js";import"./TableOfContent-yT1rxmsz.js";import"./index-byAFOvAL.js";import"./Label-avDcfEez.js";import"./index-OTkxrEWr.js";import"./index-kJpPDFqQ.js";import"./Popover-jBPmsweJ.js";import"./PopupUtils-9DzRw33t.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-Honr3Kcv.js";import"./FocusableElements-eRJsgpvJ.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-cRo_ADDP.js";import"./BrowserScrollbar.css-IWLYYIFQ.js";import"./react-18-1WT2dSvK.js";import"./_baseForOwn-UZJwRxDU.js";import"./mapValues-HzTlT2lF.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./index-UBYxvHMA.js";import"./GroupHeaderListItem-mP6Du3Xu.js";import"./ListItemBase-I-s_J6Ef.js";import"./ItemNavigation-ip1cTHoi.js";import"./TabbableElements-aYIPY3zp.js";import"./debounce-8VpZswfd.js";import"./BusyIndicator-X1TngKgE.js";import"./ValueState-zUcANXoY.js";import"./StandardListItem-Yph4t32Z.js";import"./ListItem-IizPXeAh.js";import"./RadioButton-9sU8Xbqd.js";import"./CheckBox-pvchRcT5.js";import"./accept-RvtrxF_7.js";import"./HasPopup-9BAMrqbD.js";import"./slim-arrow-right-xQBn3CIQ.js";import"./ValueState-I_-hGNIb.js";import"./ResponsivePopover-VBH6lSRH.js";import"./Dialog-EC6yS1E8.js";import"./Title-RSxLzkgC.js";import"./index-olIoaXEu.js";import"./index-m1siBD_8.js";import"./Input-L2JYwab7.js";import"./Suggestions.css-uaF39uGK.js";import"./ResponsivePopoverCommon.css-A5n-yhJ1.js";import"./ValueStateMessage.css-_uSbOmUY.js";const v=`## Keyboard Handling

The \`Input\` provides the following keyboard shortcuts:

- \\[ESC\\] - Closes the suggestion list, if open. If closed or not enabled, cancels changes and reverts to the value which the Input field had when it got the focus.
- \\[ENTER\\] or \\[RETURN\\] - If suggestion list is open takes over the current matching item and closes it. If value state or group header is focused, does nothing.
- \\[DOWN\\] - Focuses the next matching item in the suggestion list.
- \\[UP\\] - Focuses the previous matching item in the suggestion list.
- \\[HOME\\] - If focus is in the text input, moves caret before the first character. If focus is in the list, highlights the first item and updates the input accordingly.
- \\[END\\] - If focus is in the text input, moves caret after the last character. If focus is in the list, highlights the last item and updates the input accordingly.
- \\[PAGEUP\\] - If focus is in the list, moves highlight up by page size (10 items by default). If focus is in the input, does nothing.
- \\[PAGEDOWN\\] - If focus is in the list, moves highlight down by page size (10 items by default). If focus is in the input, does nothing.
`,D=[{name:"previewItem",readonly:"true",visibility:"public",type:"sap.ui.webc.main.IInputSuggestionItem|null",description:"The suggestion item on preview."},{name:"openPicker",visibility:"public",since:"1.3.0",description:"Manually opens the suggestions popover, assuming suggestions are enabled. Items must be preloaded for it to open."}];function bi(e={}){const{wrapper:r}=Object.assign({},u(),e.components);return r?t.jsx(r,Object.assign({},e,{children:t.jsx(s,{})})):s();function s(){const i=Object.assign({h2:"h2",h1:"h1",p:"p",code:"code",strong:"strong"},u(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(g,{of:S}),`
`,t.jsx(c,{}),`
`,t.jsx("br",{}),`
`,t.jsx(i.h2,{id:"example",children:"Example"}),`
`,t.jsx(p,{of:m}),`
`,t.jsx(i.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(a,{of:m}),`
`,t.jsx(o,{children:v}),`
`,t.jsx(l,{rows:D}),`
`,t.jsx("br",{}),`
`,t.jsx(i.h1,{id:"more-examples",children:"More Examples"}),`
`,t.jsx("br",{}),`
`,t.jsx(i.h2,{id:"input-with-customizable-suggestionitem",children:"Input with customizable SuggestionItem"}),`
`,t.jsxs(i.p,{children:["The ",t.jsx(i.code,{children:"SuggestionItem"})," represents the suggestion item of the ",t.jsx(i.code,{children:"Input"})]}),`
`,t.jsxs(i.p,{children:[t.jsx(i.strong,{children:"Note:"})," ",t.jsx(i.code,{children:"SuggestionItems"})," will only be displayed if the required module has been imported (",t.jsx(i.code,{children:"import '@ui5/webcomponents/dist/features/InputSuggestions.js';"}),`)
and the `,t.jsx(i.code,{children:"showSuggestions"})," prop is set to ",t.jsx(i.code,{children:"true"}),"."]}),`
`,t.jsx(p,{of:y}),`
`,t.jsx(o,{children:f}),`
`,t.jsx(i.h2,{id:"suggestionitem",children:"SuggestionItem"}),`
`,t.jsx(n,{hideHTMLPropsNote:!0,exclude:h,of:x}),`
`,t.jsx(o,{children:I}),`
`,t.jsx(i.h2,{id:"suggestiongroupitem",children:"SuggestionGroupItem"}),`
`,t.jsx(n,{hideHTMLPropsNote:!0,exclude:h,of:j}),`
`,t.jsx(o,{children:b}),`
`,t.jsx(d,{})]})}}export{bi as default};
