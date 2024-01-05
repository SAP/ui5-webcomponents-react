import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{C as a,A as n}from"./DomRefTable.module-WYIKpEJw.js";import{D as c}from"./DocsHeader-pLo1iNo1.js";import{F as d}from"./Footer-Sel6BU1i.js";import"./index-OjgoNOWw.js";import{M as g,C as p,b as o}from"./chunk-HLWAVYOI-JIIfqdE8.js";import{D as l}from"./DomRefTable-aJ25q4hF.js";import{S as f}from"./SubcomponentsSection-pzdPLcqE.js";import{S as x,a as j}from"./index-5FtU_8Zy.js";import{S as I,a as b}from"./SuggestionItemDescription-kBz3rsGb.js";import{C as S,D as m,W as y}from"./Input.stories-Gxeeif5m.js";import{e as h}from"./utils-77gZ8405.js";import{u}from"./index-RwE9nQVW.js";import"./react-jss.esm-tmBtHfec.js";import"./index-hchuWdY3.js";import"./iframe-diMC22zl.js";import"../sb-preview/runtime.js";import"./UI5Element-4kitL615.js";import"./i18nBundle-h5yKZf-0.js";import"./VersionInfo-yX_RFFR1.js";import"./CustomElementsScopeUtils-icazltFf.js";import"./withWebComponent-y_2h_qsG.js";import"./utils-jDGQm03y.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-Js7kozs_.js";import"./Icons-4dOk8XAM.js";import"./decline-G6ZpYmOu.js";import"./i18n-defaults-CPLPRuO1.js";import"./information-8_EqQaO_.js";import"./alert-HOiYa7NP.js";import"./class-map-aNJl42Aw.js";import"./Button-pPgusm5x.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-9rb3FZ03.js";import"./index-z_kNdanE.js";import"./clsx-Zbgk8kpT.js";import"./i18n-defaults-EHbh3l3V.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-DWXxr99t.js";import"./index-QYh6idnL.js";import"./ModalsContext-0q87fkkd.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-kI6DTjO7.js";import"./index-VWfRHHDA.js";import"./Integer-kog98579.js";import"./index-NV32MP8c.js";import"./Avatar-ilP4dNAW.js";import"./ResizeHandler-_S6lmbp5.js";import"./employee-MVCfoSat.js";import"./index-F12HtoU-.js";import"./index-UfgyYn2W.js";import"./Link-GTmnzkaf.js";import"./WrappingType-avPrqc94.js";import"./index-_9C7BQQF.js";import"./TableOfContent-fcLZ7sqX.js";import"./index-IrtR6eo0.js";import"./Label-HOoOa3vg.js";import"./index-gH711dCn.js";import"./index-neQMmZfk.js";import"./Popover-7MGo300E.js";import"./PopupUtils-9DzRw33t.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-kmG9UuxN.js";import"./FocusableElements-eRJsgpvJ.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-cRo_ADDP.js";import"./BrowserScrollbar.css-IWLYYIFQ.js";import"./react-18-1WT2dSvK.js";import"./_baseForOwn-UZJwRxDU.js";import"./mapValues-HzTlT2lF.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./index-UBYxvHMA.js";import"./GroupHeaderListItem-Z_igfQ3w.js";import"./ListItemBase-MAK9PlY7.js";import"./ItemNavigation-WwQ-GsFh.js";import"./TabbableElements-aYIPY3zp.js";import"./debounce-8VpZswfd.js";import"./BusyIndicator-OqXUphwC.js";import"./ValueState-zUcANXoY.js";import"./StandardListItem-JXqWltTh.js";import"./ListItem-BEPSw87m.js";import"./RadioButton-C3splJyU.js";import"./CheckBox-gO88dNhA.js";import"./accept-vD_qClvM.js";import"./HasPopup-9BAMrqbD.js";import"./slim-arrow-right-ua4N9pvL.js";import"./ValueState-I_-hGNIb.js";import"./ResponsivePopover-EwdKzLnG.js";import"./Dialog-qvYGNCPg.js";import"./Title-RSxLzkgC.js";import"./index-X26JnBjI.js";import"./index-lMntWYUV.js";import"./Input-3kxgj_Fk.js";import"./Suggestions.css--Mic9Aj5.js";import"./ResponsivePopoverCommon.css-A5n-yhJ1.js";import"./ValueStateMessage.css-_uSbOmUY.js";const v=`## Keyboard Handling

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
