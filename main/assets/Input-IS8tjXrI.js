import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{C as a,A as n}from"./DomRefTable.module-uud6kp12.js";import{D as c}from"./DocsHeader-C-ijEMlv.js";import{F as d}from"./Footer-huNi4IWk.js";import"./index-OjgoNOWw.js";import{M as g,C as p,b as o}from"./chunk-HLWAVYOI-Z39uswkr.js";import{D as l}from"./DomRefTable--rE1y2BA.js";import{S as f}from"./SubcomponentsSection-pzdPLcqE.js";import{S as x,a as j}from"./index-0Q8jmfAu.js";import{S as I,a as b}from"./SuggestionItemDescription-kBz3rsGb.js";import{C as S,D as m,W as y}from"./Input.stories-yNUEpkYO.js";import{e as h}from"./utils-77gZ8405.js";import{u}from"./index-RwE9nQVW.js";import"./react-jss.esm-tmBtHfec.js";import"./index-AgqVjahL.js";import"./iframe-0dhvsyBr.js";import"../sb-preview/runtime.js";import"./UI5Element-N46uHiF6.js";import"./i18nBundle-1uTNzT_G.js";import"./VersionInfo-doEI4kCH.js";import"./CustomElementsScopeUtils--FMJdKyV.js";import"./withWebComponent-m2csmhkT.js";import"./utils-7qe6Bov5.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-q2l1h21j.js";import"./Icons-JGtWxtgH.js";import"./decline-tUGLActy.js";import"./i18n-defaults-CPLPRuO1.js";import"./information-rXvvQTyd.js";import"./alert-n6PTDijY.js";import"./class-map-lkLxloiQ.js";import"./Button-5EpXIGtS.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-Hnw7H5Tc.js";import"./index-O1qeqEwP.js";import"./clsx-Zbgk8kpT.js";import"./i18n-defaults-PpubpVn0.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-Ad7wliO4.js";import"./index-QYh6idnL.js";import"./ModalsContext-0q87fkkd.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-SeojittA.js";import"./index-I7blGBYI.js";import"./Integer-kog98579.js";import"./index-UUu1i1Hb.js";import"./Avatar-3tdvLPxl.js";import"./ResizeHandler-pjwwRwdX.js";import"./employee-1rhW5wth.js";import"./index-OrjTNhR9.js";import"./index-l-Lxe9e0.js";import"./Link-GBCkwT5X.js";import"./WrappingType-avPrqc94.js";import"./index-W62_3BtY.js";import"./TableOfContent-4Qd3G1Dd.js";import"./index-osKd-wxR.js";import"./Label-lanRvJLA.js";import"./index-K00K3HTh.js";import"./index-w9tTAtsl.js";import"./Popover-QuSZvfFm.js";import"./PopupUtils-K8GVBVSe.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-T6pSPG1a.js";import"./FocusableElements-p1LB11Hl.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-2OzZTNdj.js";import"./BrowserScrollbar.css-WTCBaVgb.js";import"./react-18-1WT2dSvK.js";import"./_baseForOwn-UZJwRxDU.js";import"./mapValues-HzTlT2lF.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./index-UBYxvHMA.js";import"./GroupHeaderListItem-0JZEJTEI.js";import"./List-w9fDM7LR.js";import"./ItemNavigation-ISRYp76I.js";import"./TabbableElements-L1VqloMt.js";import"./debounce-8VpZswfd.js";import"./BusyIndicator-zAWFDEk0.js";import"./CheckBox-GrNdCf1P.js";import"./ValueState-zUcANXoY.js";import"./accept-0GqTgE93.js";import"./RadioButton-vLQ1U9YT.js";import"./StandardListItem-mKx9pfUY.js";import"./ListItem-_b2zXmKM.js";import"./HasPopup-9BAMrqbD.js";import"./slim-arrow-right-SM8dZZIS.js";import"./ValueState-I_-hGNIb.js";import"./ResponsivePopover-GO7Wi9-7.js";import"./Dialog-lUxPaYx4.js";import"./Title-LeOUAPj6.js";import"./index-PW7P_UD1.js";import"./index-fkbR6D_3.js";import"./Input-OkSwExZB.js";import"./Suggestions.css-uQ9_NsdF.js";import"./ResponsivePopoverCommon.css-upzcAADh.js";import"./ValueStateMessage.css-ohPnUUCe.js";const v=`## Keyboard Handling

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
