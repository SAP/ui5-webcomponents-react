import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{C as a,A as n}from"./DomRefTable.module-kOrYiL4G.js";import{D as c}from"./DocsHeader-U7vIdAlf.js";import{F as d}from"./Footer-Zr-QBjlm.js";import"./index-OjgoNOWw.js";import{M as g,C as p,b as o}from"./chunk-HLWAVYOI-tlorHwmF.js";import{D as l}from"./DomRefTable-yEETQYQl.js";import{S as f}from"./SubcomponentsSection-pzdPLcqE.js";import{S as x,a as j}from"./index-KhNHhKnA.js";import{S as I,a as b}from"./SuggestionItemDescription-kBz3rsGb.js";import{C as S,D as m,W as y}from"./Input.stories-jc0yw8Uv.js";import{e as h}from"./utils-77gZ8405.js";import{u}from"./index-RwE9nQVW.js";import"./react-jss.esm-tmBtHfec.js";import"./index-WmYxa6f-.js";import"./iframe-iski3Nud.js";import"../sb-preview/runtime.js";import"./UI5Element-kBA_KQxG.js";import"./i18nBundle-7ihWi2Lo.js";import"./VersionInfo-quO5DfnC.js";import"./CustomElementsScopeUtils-QKoQ990a.js";import"./withWebComponent-22JjwLkL.js";import"./utils-3rf7SAGj.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-r6t1Zphl.js";import"./Icons-jRef6OLh.js";import"./decline-XpWJwTfv.js";import"./i18n-defaults-CPLPRuO1.js";import"./information-U_TSW4LN.js";import"./alert-kkNs8dOr.js";import"./class-map-2qwEQoLI.js";import"./Button-jlOsC8Op.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-QBShB6vc.js";import"./index-9hLZiafD.js";import"./clsx-Zbgk8kpT.js";import"./i18n-defaults-gX8Lho5I.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-YJVSj-ci.js";import"./index-QYh6idnL.js";import"./ModalsContext-T9gUbaXC.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-Ha-6ONKz.js";import"./index-5gG4A8YV.js";import"./Integer-kog98579.js";import"./index-QR5fzRaS.js";import"./Avatar-kcq5ywk4.js";import"./ResizeHandler-3FzJmCyz.js";import"./employee-APVUdoZS.js";import"./index-sqpwcLr1.js";import"./index-wMsiubdj.js";import"./Link-xIUn2Lee.js";import"./WrappingType-avPrqc94.js";import"./index-ndaVN1fR.js";import"./TableOfContent-e2OKZao_.js";import"./index--K9_xef5.js";import"./Label-yPOoTXIn.js";import"./index-ZGZQBS-t.js";import"./index-66ddNbXp.js";import"./Popover-qTobexuh.js";import"./PopupUtils-FgdW7Gkh.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-fa8QSlgN.js";import"./FocusableElements-jbTazhpM.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-duavIDje.js";import"./BrowserScrollbar.css-aT2mYiFz.js";import"./react-18-1WT2dSvK.js";import"./_baseForOwn-z3VktcOy.js";import"./mapValues-Iyc0g4nJ.js";import"./_baseUniq-PeaQ4i79.js";import"./index-PPLHz8o0.js";import"./index-ru46B3pF.js";import"./GroupHeaderListItem-Ybq9bAuu.js";import"./List-XV25F2MG.js";import"./ItemNavigation-1Qtl9Bqn.js";import"./TabbableElements-L1VqloMt.js";import"./debounce-8VpZswfd.js";import"./BusyIndicator-ic-NtdR-.js";import"./CheckBox-vOrD_Qxh.js";import"./ValueState-zUcANXoY.js";import"./accept-RviPAaVm.js";import"./RadioButton-ssFCKs8g.js";import"./StandardListItem-cf7NJ5rV.js";import"./ListItem-_0EIb7ra.js";import"./HasPopup-9BAMrqbD.js";import"./slim-arrow-right-0oBZC6Yv.js";import"./ValueState-I_-hGNIb.js";import"./ResponsivePopover-wHlXl3nI.js";import"./Dialog-Y9sM4F0U.js";import"./Title-dLDxQQ5A.js";import"./index-Zn5oZmuP.js";import"./index-WUaVtaJR.js";import"./Input-qnG8UDCs.js";import"./Suggestions.css-uuIiA8km.js";import"./ResponsivePopoverCommon.css-h8Z4T2yV.js";import"./ValueStateMessage.css-fNiak5rA.js";const v=`## Keyboard Handling

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
