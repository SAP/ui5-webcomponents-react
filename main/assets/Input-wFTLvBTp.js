import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{C as a,b as n}from"./DomRefTable.module-okStVzjO.js";import{D as c}from"./DocsHeader-njYznugv.js";import{F as d}from"./Footer-Q2UGtdqg.js";import"./index-OjgoNOWw.js";import{M as g,C as p,b as o}from"./chunk-HLWAVYOI-jds-GzOL.js";import{D as l}from"./DomRefTable-S_e_m901.js";import{S as f}from"./SubcomponentsSection-pzdPLcqE.js";import{S as x,a as j}from"./index-DrgTNb_6.js";import{S as I,a as b}from"./SuggestionItemDescription-kBz3rsGb.js";import{C as S,D as m,W as y}from"./Input.stories-ubnj2J_g.js";import{e as h}from"./utils-77gZ8405.js";import{u}from"./index-RwE9nQVW.js";import"./react-jss.esm-tmBtHfec.js";import"./index-4QBlUkYE.js";import"./iframe-lvwxc_BA.js";import"../sb-preview/runtime.js";import"./UI5Element-Y0uzLFOr.js";import"./i18nBundle-Crssojm_.js";import"./VersionInfo-hBCHoyLi.js";import"./CustomElementsScopeUtils-5j4ES8UU.js";import"./withWebComponent-l-jCeTa1.js";import"./utils-NoXYr8Q_.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-bdsWWJur.js";import"./Icons-WRZ8WMWs.js";import"./decline-tcMkvtbY.js";import"./i18n-defaults-n2A5pq_J.js";import"./information-bLrgXyhK.js";import"./alert-hH0G14f_.js";import"./class-map-kmjzTHDs.js";import"./Button-2q6zbrjb.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-RBzcmDt8.js";import"./index-A5agBEX2.js";import"./clsx-c3LcQGjR.js";import"./i18n-defaults-cIbBWf4j.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-_6wxL5DG.js";import"./index-8oc7nghY.js";import"./Integer-kog98579.js";import"./index-wWidHwmS.js";import"./Avatar-iPKVYLtK.js";import"./ResizeHandler-YlQCt_sN.js";import"./employee-fYGGLuhG.js";import"./index-intn_6qV.js";import"./index-JMng31W5.js";import"./Link-tRmLKUhK.js";import"./WrappingType-avPrqc94.js";import"./index-q8oiNN3v.js";import"./index-ZcOIUVJX.js";import"./index-QYh6idnL.js";import"./ModalsContext-0q87fkkd.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./TableOfContent-kF7bR0zz.js";import"./index-CCZBiJx1.js";import"./Label-ZVCbnRu4.js";import"./index-zQT3eZFN.js";import"./index-ilQ8HJne.js";import"./Popover-F3UgQy3P.js";import"./PopupUtils-7oRQuqE1.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-QWf1zPQp.js";import"./FocusableElements-SaTJsZH1.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-IagzN5gT.js";import"./BrowserScrollbar.css-aoBbOOT0.js";import"./index-GL4gBoyB.js";import"./mapValues-HzTlT2lF.js";import"./_baseForOwn-UZJwRxDU.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./GroupHeaderListItem-Fs_-kdy5.js";import"./ListItemBase-bpRWPkiV.js";import"./ItemNavigation-KSoe0GH9.js";import"./TabbableElements-aYIPY3zp.js";import"./debounce-8VpZswfd.js";import"./BusyIndicator-qZ0KGBIz.js";import"./ValueState-zUcANXoY.js";import"./StandardListItem-yowcTzq2.js";import"./ListItem-jYoROocM.js";import"./RadioButton-UJTh3ZVD.js";import"./CheckBox-0JSYmzBX.js";import"./accept-QwIZktij.js";import"./HasPopup-9BAMrqbD.js";import"./slim-arrow-right-SUiVGFkg.js";import"./ValueState-I_-hGNIb.js";import"./ResponsivePopover-7YN-L6kM.js";import"./Dialog-m8Vv8OUX.js";import"./Title-QMeEqdxD.js";import"./index-uaXTLF0Q.js";import"./index-VMm-br_l.js";import"./Input-w0RPGTV7.js";import"./Suggestions.css-gWk1MJ99.js";import"./ResponsivePopoverCommon.css-qnvKwXX1.js";import"./ValueStateMessage.css-AHMe5yzO.js";const v=`## Keyboard Handling

The \`Input\` provides the following keyboard shortcuts:

- \\[ESC\\] - Closes the suggestion list, if open. If closed or not enabled, cancels changes and reverts to the value which the Input field had when it got the focus.
- \\[ENTER\\] or \\[RETURN\\] - If suggestion list is open takes over the current matching item and closes it. If value state or group header is focused, does nothing.
- \\[DOWN\\] - Focuses the next matching item in the suggestion list.
- \\[UP\\] - Focuses the previous matching item in the suggestion list.
- \\[HOME\\] - If focus is in the text input, moves caret before the first character. If focus is in the list, highlights the first item and updates the input accordingly.
- \\[END\\] - If focus is in the text input, moves caret after the last character. If focus is in the list, highlights the last item and updates the input accordingly.
- \\[PAGEUP\\] - If focus is in the list, moves highlight up by page size (10 items by default). If focus is in the input, does nothing.
- \\[PAGEDOWN\\] - If focus is in the list, moves highlight down by page size (10 items by default). If focus is in the input, does nothing.
`,D=[{name:"previewItem",readonly:"true",visibility:"public",type:"sap.ui.webc.main.IInputSuggestionItem|null",description:"The suggestion item on preview."},{name:"openPicker",visibility:"public",since:"1.3.0",description:"Manually opens the suggestions popover, assuming suggestions are enabled. Items must be preloaded for it to open."}];function Ii(e={}){const{wrapper:r}=Object.assign({},u(),e.components);return r?t.jsx(r,Object.assign({},e,{children:t.jsx(s,{})})):s();function s(){const i=Object.assign({h2:"h2",h1:"h1",p:"p",code:"code",strong:"strong"},u(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(g,{of:S}),`
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
`,t.jsx(d,{})]})}}export{Ii as default};
//# sourceMappingURL=Input-wFTLvBTp.js.map
