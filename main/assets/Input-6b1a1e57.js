import{j as t}from"./jsx-runtime-5926aa06.js";import{C as a,A as n}from"./DomRefTable.module-1b539386.js";import{D as u}from"./DocsHeader-a5d8fd1b.js";import{F as c}from"./Footer-cd999e94.js";import"./index-ebeaab24.js";import{D as g}from"./DomRefTable-2a6095d9.js";import{S as d}from"./SubcomponentsSection-6138f2fc.js";import{M as l,C as p,a as o}from"./chunk-PCJTTTQV-3ae44807.js";import{S as f,a as x}from"./index-0d93cb36.js";import{S as j,a as I}from"./SuggestionItemDescription-41eb0632.js";import{C as b,D as m,W as S}from"./Input.stories-f5d2d54a.js";import{u as h}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-d9639aa3.js";import"./iframe-62076298.js";import"../sb-preview/runtime.js";import"./UI5Element-d19f28b4.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d61dcbbc.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-2e1c5474.js";import"./Icons-d3203353.js";import"./decline-e129c312.js";import"./i18n-defaults-80781f7e.js";import"./information-b0c94f16.js";import"./class-map-519e9c6d.js";import"./Button-b124cb06.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./index-c65c86f0.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./Import-7dbf9833.js";import"./TableOfContent-801ccff0.js";import"./index-1bdac791.js";import"./Link-9ab31ed2.js";import"./WrappingType-b81e595a.js";import"./index-a085d11d.js";import"./Label-855a552c.js";import"./index-9c09ad76.js";import"./index-828871d8.js";import"./Popover-fe68fced.js";import"./Integer-f7f172c9.js";import"./PopupUtils-565f6d6c.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-8109da93.js";import"./FocusableElements-59b9e9bf.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-388120e7.js";import"./ResizeHandler-d7af0733.js";import"./MediaRange-25b98f31.js";import"./style-map-33b353d0.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./GroupHeaderListItem-1cdd837c.js";import"./ListItemBase-94a42b35.js";import"./ItemNavigation-44b1fe71.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-71038705.js";import"./ValueState-2c5e5904.js";import"./StandardListItem-f085c7c3.js";import"./ListItem-fb1fa31a.js";import"./RadioButton-710ba776.js";import"./CheckBox-95047ef2.js";import"./accept-6bd35a89.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-44a405c5.js";import"./Avatar-9e18acb0.js";import"./employee-1b8c669d.js";import"./ValueState-ab6838cc.js";import"./ResponsivePopover-5796c25c.js";import"./Dialog-77a1ac4d.js";import"./Title-64b66bf0.js";import"./index-5ec1ccf8.js";import"./index-6e6496bd.js";import"./Input-51927e2b.js";import"./Suggestions.css-2743800e.js";import"./ResponsivePopoverCommon.css-4f3232f2.js";import"./ValueStateMessage.css-7a219042.js";const y=`## Keyboard Handling

The \`Input\` provides the following keyboard shortcuts:

- \\[ESC\\] - Closes the suggestion list, if open. If closed or not enabled, cancels changes and reverts to the value which the Input field had when it got the focus.
- \\[ENTER\\] or \\[RETURN\\] - If suggestion list is open takes over the current matching item and closes it. If value state or group header is focused, does nothing.
- \\[DOWN\\] - Focuses the next matching item in the suggestion list.
- \\[UP\\] - Focuses the previous matching item in the suggestion list.
- \\[HOME\\] - If focus is in the text input, moves caret before the first character. If focus is in the list, highlights the first item and updates the input accordingly.
- \\[END\\] - If focus is in the text input, moves caret after the last character. If focus is in the list, highlights the last item and updates the input accordingly.
- \\[PAGEUP\\] - If focus is in the list, moves highlight up by page size (10 items by default). If focus is in the input, does nothing.
- \\[PAGEDOWN\\] - If focus is in the list, moves highlight down by page size (10 items by default). If focus is in the input, does nothing.
`,v=[{name:"previewItem",readonly:"true",visibility:"public",type:"sap.ui.webc.main.IInputSuggestionItem|null",description:"The suggestion item on preview."},{name:"openPicker",visibility:"public",since:"1.3.0",description:"Manually opens the suggestions popover, assuming suggestions are enabled. Items must be preloaded for it to open."}];function mi(e={}){const{wrapper:s}=Object.assign({},h(),e.components);return s?t.jsx(s,Object.assign({},e,{children:t.jsx(r,{})})):r();function r(){const i=Object.assign({h2:"h2",h1:"h1",p:"p",code:"code",strong:"strong"},h(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:b}),`
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
`,t.jsx(c,{})]})}}export{mi as default};
//# sourceMappingURL=Input-6b1a1e57.js.map
