import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{C as a,A as n}from"./DomRefTable.module-HAO7vDgW.js";import{D as c}from"./DocsHeader-B-BiOesR.js";import{F as d}from"./Footer-aUUdDqRf.js";import"./index-OjgoNOWw.js";import{M as g,C as p,b as o}from"./chunk-HLWAVYOI-UvOOWukE.js";import{D as l}from"./DomRefTable-k8zhdTvV.js";import{S as f}from"./SubcomponentsSection-pzdPLcqE.js";import{S as x,a as j}from"./index-DHxc4sm9.js";import{S as I,a as b}from"./SuggestionItemDescription-kBz3rsGb.js";import{C as S,D as m,W as y}from"./Input.stories-b-koqH_L.js";import{e as h}from"./utils-77gZ8405.js";import{u}from"./index-RwE9nQVW.js";import"./react-jss.esm-tmBtHfec.js";import"./index-N7AwT1xE.js";import"./iframe-KoIkOD7m.js";import"../sb-preview/runtime.js";import"./UI5Element-Jt3C0_FN.js";import"./i18nBundle-ZoJ37UJR.js";import"./VersionInfo-LCCO4Ig5.js";import"./CustomElementsScopeUtils-M7hMRmEH.js";import"./withWebComponent-I1wSIv4y.js";import"./utils-KU8RGjGn.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-G6aW2FRW.js";import"./Icons-Nr5kgAbF.js";import"./decline-4Ez_2Sev.js";import"./i18n-defaults-CPLPRuO1.js";import"./information-bkjyqQzA.js";import"./alert-7Etxrsap.js";import"./class-map-CHDPODen.js";import"./Button-CV8gKi73.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-zEJ36VRV.js";import"./index-2_yHJzy3.js";import"./clsx-c3LcQGjR.js";import"./i18n-defaults-8YolVglE.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-bWwzC2qz.js";import"./index-QYh6idnL.js";import"./ModalsContext-0q87fkkd.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-B37rLD-H.js";import"./index-XQscmlD0.js";import"./Integer-kog98579.js";import"./index-rq4D2vOx.js";import"./Avatar-VKhV6EwI.js";import"./ResizeHandler-mTFvwsyT.js";import"./employee-9rldWxaE.js";import"./index-hVTsdAjN.js";import"./index-V-WJjz6V.js";import"./Link-ipgrhFOm.js";import"./WrappingType-avPrqc94.js";import"./index-AqaqoFfn.js";import"./TableOfContent-_DNHtYzw.js";import"./index-rbQ8EChD.js";import"./Label-Xo_6xXB6.js";import"./index-R6HiNhiD.js";import"./index-hKk6h3mc.js";import"./Popover-5ANP4Jn7.js";import"./PopupUtils-QCyiTOMI.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-NvRre6vc.js";import"./FocusableElements-sOHKyey_.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-xQ1SPtMO.js";import"./BrowserScrollbar.css-R_PDLCAQ.js";import"./react-18-1WT2dSvK.js";import"./_baseForOwn-UZJwRxDU.js";import"./mapValues-HzTlT2lF.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./index-UBYxvHMA.js";import"./GroupHeaderListItem-SENGjwAk.js";import"./ListItemBase-HHKKMj74.js";import"./ItemNavigation--ejGb_nH.js";import"./TabbableElements-aYIPY3zp.js";import"./debounce-8VpZswfd.js";import"./BusyIndicator-i2jpCQEr.js";import"./ValueState-zUcANXoY.js";import"./StandardListItem-aBJ9MdQm.js";import"./ListItem-EtFo1sxA.js";import"./RadioButton-Tsz_-gI0.js";import"./CheckBox-B5lM5OVp.js";import"./accept-ldlQyaEx.js";import"./HasPopup-9BAMrqbD.js";import"./slim-arrow-right-0wqMoc5g.js";import"./ValueState-I_-hGNIb.js";import"./ResponsivePopover-2Y5m0xbo.js";import"./Dialog-ki1YSo8q.js";import"./Title-xXK6MFOu.js";import"./index-z2fin4RT.js";import"./index-FCj_7aqB.js";import"./Input-24IzCGJD.js";import"./Suggestions.css-EG0pM5Z2.js";import"./ResponsivePopoverCommon.css-wcLb9RY0.js";import"./ValueStateMessage.css-T_IO2uU8.js";const v=`## Keyboard Handling

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
