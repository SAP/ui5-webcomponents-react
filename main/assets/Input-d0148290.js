import{j as t}from"./jsx-runtime-5926aa06.js";import{C as a,A as n}from"./DomRefTable.module-8bb2cc9c.js";import{D as u}from"./DocsHeader-8bf31a6e.js";import{F as c}from"./Footer-a66983eb.js";import"./index-ebeaab24.js";import{D as g}from"./DomRefTable-06851249.js";import{S as d}from"./SubcomponentsSection-6138f2fc.js";import{M as l,C as p,a as o}from"./chunk-PCJTTTQV-d3c2c893.js";import{S as f,a as x}from"./index-b949aadf.js";import{S as j,a as I}from"./SuggestionItemDescription-58d79536.js";import{C as b,D as m,W as S}from"./Input.stories-0da1dfde.js";import{u as h}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-b374007c.js";import"./iframe-ef582881.js";import"../sb-preview/runtime.js";import"./UI5Element-fb9ecf93.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d4224c1c.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-ef594e9f.js";import"./Icons-2c98f222.js";import"./decline-3df8c953.js";import"./i18n-defaults-80781f7e.js";import"./information-451d615b.js";import"./class-map-18f572ce.js";import"./Button-4160b137.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-99b8bbf4.js";import"./i18n-defaults-a58643fd.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-9af65fbe.js";import"./index-ea035418.js";import"./Integer-f7f172c9.js";import"./index-e8782cbc.js";import"./Avatar-3c16d274.js";import"./ResizeHandler-36560530.js";import"./employee-f2f473ef.js";import"./index-a6e91fba.js";import"./index-91489cf8.js";import"./Link-057b3642.js";import"./WrappingType-b81e595a.js";import"./index-2c77de22.js";import"./TableOfContent-a6135d52.js";import"./index-c9e548a1.js";import"./Label-7f4aa83d.js";import"./index-9c09ad76.js";import"./index-8e7563b0.js";import"./index-5e3d3a36.js";import"./Popover-510446d9.js";import"./PopupsCommon.css-f7aa7df0.js";import"./FocusableElements-6f0cd02a.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-54298215.js";import"./BrowserScrollbar.css-0e9b1550.js";import"./react-18-95218780.js";import"./mapValues-f5a21168.js";import"./_baseForOwn-8b0cf1d5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-20c8b51e.js";import"./_baseUniq-8051c65b.js";import"./index-356e4a49.js";import"./GroupHeaderListItem-84974bca.js";import"./ListItemBase-32e7e45c.js";import"./ItemNavigation-c74bf7f7.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-80d43f0f.js";import"./ValueState-2c5e5904.js";import"./StandardListItem-049f31eb.js";import"./ListItem-bb2d09ef.js";import"./RadioButton-75d95420.js";import"./CheckBox-c44317b4.js";import"./accept-756ca6cd.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-a768cef3.js";import"./ValueState-ab6838cc.js";import"./ResponsivePopover-a7253ba3.js";import"./Dialog-2af89d50.js";import"./Title-1daec987.js";import"./index-f7f8e6b3.js";import"./index-bcc1d2c2.js";import"./Input-1e09e321.js";import"./Suggestions.css-66403272.js";import"./ResponsivePopoverCommon.css-e9e92f0e.js";import"./ValueStateMessage.css-332efe2d.js";const y=`## Keyboard Handling

The \`Input\` provides the following keyboard shortcuts:

- \\[ESC\\] - Closes the suggestion list, if open. If closed or not enabled, cancels changes and reverts to the value which the Input field had when it got the focus.
- \\[ENTER\\] or \\[RETURN\\] - If suggestion list is open takes over the current matching item and closes it. If value state or group header is focused, does nothing.
- \\[DOWN\\] - Focuses the next matching item in the suggestion list.
- \\[UP\\] - Focuses the previous matching item in the suggestion list.
- \\[HOME\\] - If focus is in the text input, moves caret before the first character. If focus is in the list, highlights the first item and updates the input accordingly.
- \\[END\\] - If focus is in the text input, moves caret after the last character. If focus is in the list, highlights the last item and updates the input accordingly.
- \\[PAGEUP\\] - If focus is in the list, moves highlight up by page size (10 items by default). If focus is in the input, does nothing.
- \\[PAGEDOWN\\] - If focus is in the list, moves highlight down by page size (10 items by default). If focus is in the input, does nothing.
`,v=[{name:"previewItem",readonly:"true",visibility:"public",type:"sap.ui.webc.main.IInputSuggestionItem|null",description:"The suggestion item on preview."},{name:"openPicker",visibility:"public",since:"1.3.0",description:"Manually opens the suggestions popover, assuming suggestions are enabled. Items must be preloaded for it to open."}];function ai(e={}){const{wrapper:s}=Object.assign({},h(),e.components);return s?t.jsx(s,Object.assign({},e,{children:t.jsx(r,{})})):r();function r(){const i=Object.assign({h2:"h2",h1:"h1",p:"p",code:"code",strong:"strong"},h(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:b}),`
`,t.jsx(u,{}),`
`,t.jsx("br",{}),`
`,t.jsx(i.h2,{id:"example",children:"Example"}),`
`,t.jsx(p,{of:m}),`
`,t.jsx(i.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(a,{of:m}),`
`,t.jsx(o,{children:y}),`
`,t.jsx(g,{rows:v}),`
`,t.jsx("br",{}),`
`,t.jsx(i.h1,{id:"more-examples",children:"More Examples"}),`
`,t.jsx("br",{}),`
`,t.jsx(i.h2,{id:"input-with-customizable-suggestionitem",children:"Input with customizable SuggestionItem"}),`
`,t.jsxs(i.p,{children:["The ",t.jsx(i.code,{children:"SuggestionItem"})," represents the suggestion item of the ",t.jsx(i.code,{children:"Input"})]}),`
`,t.jsxs(i.p,{children:[t.jsx(i.strong,{children:"Note:"})," ",t.jsx(i.code,{children:"SuggestionItems"})," will only be displayed if the required module has been imported (",t.jsx(i.code,{children:"import '@ui5/webcomponents/dist/features/InputSuggestions.js';"}),`)
and the `,t.jsx(i.code,{children:"showSuggestions"})," prop is set to ",t.jsx(i.code,{children:"true"}),"."]}),`
`,t.jsx(p,{of:S}),`
`,t.jsx(o,{children:d}),`
`,t.jsx(i.h2,{id:"suggestionitem",children:"SuggestionItem"}),`
`,t.jsx(n,{hideHTMLPropsNote:!0,of:f}),`
`,t.jsx(o,{children:j}),`
`,t.jsx(i.h2,{id:"suggestiongroupitem",children:"SuggestionGroupItem"}),`
`,t.jsx(n,{hideHTMLPropsNote:!0,of:x}),`
`,t.jsx(o,{children:I}),`
`,t.jsx(c,{})]})}}export{ai as default};
//# sourceMappingURL=Input-d0148290.js.map
