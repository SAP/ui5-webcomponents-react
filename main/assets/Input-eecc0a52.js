import{j as t}from"./jsx-runtime-5926aa06.js";import{C as a,A as n}from"./DomRefTable.module-d4b8a2ca.js";import{D as u}from"./DocsHeader-2757f7f4.js";import{F as c}from"./Footer-fb464ec9.js";import"./index-ebeaab24.js";import{D as g}from"./DomRefTable-aaec1385.js";import{S as d}from"./SubcomponentsSection-6138f2fc.js";import{M as l,C as p,a as e}from"./chunk-PCJTTTQV-bcf31a10.js";import{S as f,a as x}from"./index-11d983d0.js";import{S as j,a as I}from"./SuggestionItemDescription-41eb0632.js";import{C as b,D as m,W as S}from"./Input.stories-4dcbc347.js";import{u as h}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-43e6f897.js";import"./iframe-3d188825.js";import"../sb-preview/runtime.js";import"./UI5Element-b1843653.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-aac9cdc2.js";import"./Icons-9f549e0f.js";import"./decline-d907918c.js";import"./i18n-defaults-80781f7e.js";import"./information-0f993e39.js";import"./class-map-6a9bd920.js";import"./Button-37a8c146.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-fca59c5d.js";import"./index-8330eb1d.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./TableOfContent-85f2fc26.js";import"./index-6a8f89f1.js";import"./Link-64c69167.js";import"./WrappingType-b81e595a.js";import"./index-afad28ed.js";import"./Label-350e96fc.js";import"./index-9c09ad76.js";import"./index-8a47ffb7.js";import"./Popover-a3a62d04.js";import"./Integer-f7f172c9.js";import"./PopupUtils-2f7e8748.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-38257fbf.js";import"./FocusableElements-72585d9b.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-8726336f.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./GroupHeaderListItem-c6ae3222.js";import"./ListItemBase-5d83f75f.js";import"./ItemNavigation-5f1efe0b.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-50734768.js";import"./ValueState-2c5e5904.js";import"./StandardListItem-8408d1fd.js";import"./ListItem-c43ad95c.js";import"./RadioButton-8c17b531.js";import"./CheckBox-f1563b72.js";import"./accept-31e71d55.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-82b13059.js";import"./Avatar-a15daf14.js";import"./employee-2384bc11.js";import"./ValueState-ab6838cc.js";import"./ResponsivePopover-5c5386af.js";import"./Dialog-5f3c9cfb.js";import"./Title-684c2d0e.js";import"./index-5063a25d.js";import"./index-1ad47bec.js";import"./Input-f79461a9.js";import"./Suggestions.css-c4e187f7.js";import"./ResponsivePopoverCommon.css-5e0f54ec.js";import"./ValueStateMessage.css-8827ddc0.js";const y=`## Keyboard Handling

The \`Input\` provides the following keyboard shortcuts:

- \\[ESC\\] - Closes the suggestion list, if open. If closed or not enabled, cancels changes and reverts to the value which the Input field had when it got the focus.
- \\[ENTER\\] or \\[RETURN\\] - If suggestion list is open takes over the current matching item and closes it. If value state or group header is focused, does nothing.
- \\[DOWN\\] - Focuses the next matching item in the suggestion list.
- \\[UP\\] - Focuses the previous matching item in the suggestion list.
- \\[HOME\\] - If focus is in the text input, moves caret before the first character. If focus is in the list, highlights the first item and updates the input accordingly.
- \\[END\\] - If focus is in the text input, moves caret after the last character. If focus is in the list, highlights the last item and updates the input accordingly.
- \\[PAGEUP\\] - If focus is in the list, moves highlight up by page size (10 items by default). If focus is in the input, does nothing.
- \\[PAGEDOWN\\] - If focus is in the list, moves highlight down by page size (10 items by default). If focus is in the input, does nothing.
`,v=[{name:"previewItem",readonly:"true",visibility:"public",type:"sap.ui.webc.main.IInputSuggestionItem|null",description:"The suggestion item on preview."},{name:"openPicker",visibility:"public",since:"1.3.0",description:"Manually opens the suggestions popover, assuming suggestions are enabled. Items must be preloaded for it to open."}];function ni(o={}){const{wrapper:s}=Object.assign({},h(),o.components);return s?t.jsx(s,Object.assign({},o,{children:t.jsx(r,{})})):r();function r(){const i=Object.assign({h2:"h2",h1:"h1",p:"p",code:"code",strong:"strong"},h(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:b}),`
`,t.jsx(u,{}),`
`,t.jsx("br",{}),`
`,t.jsx(i.h2,{id:"example",children:"Example"}),`
`,t.jsx(p,{of:m}),`
`,t.jsx(i.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(a,{of:m}),`
`,t.jsx(e,{children:y}),`
`,t.jsx(g,{rows:v}),`
`,t.jsx("br",{}),`
`,t.jsx(i.h1,{id:"more-examples",children:"More Examples"}),`
`,t.jsx("br",{}),`
`,t.jsx(i.h2,{id:"input-with-customizable-suggestionitem",children:"Input with customizable SuggestionItem"}),`
`,t.jsxs(i.p,{children:["The ",t.jsx(i.code,{children:"SuggestionItem"})," represents the suggestion item of the ",t.jsx(i.code,{children:"Input"})]}),`
`,t.jsxs(i.p,{children:[t.jsx(i.strong,{children:"Note:"})," ",t.jsx(i.code,{children:"SuggestionItems"})," will only be displayed if the required module has been imported (",t.jsx(i.code,{children:"import '@ui5/webcomponents/dist/features/InputSuggestions.js';"}),`)
and the `,t.jsx(i.code,{children:"showSuggestions"})," prop is set to ",t.jsx(i.code,{children:"true"}),"."]}),`
`,t.jsx(p,{of:S}),`
`,t.jsx(e,{children:d}),`
`,t.jsx(i.h2,{id:"suggestionitem",children:"SuggestionItem"}),`
`,t.jsx(n,{hideHTMLPropsNote:!0,of:f}),`
`,t.jsx(e,{children:j}),`
`,t.jsx(i.h2,{id:"suggestiongroupitem",children:"SuggestionGroupItem"}),`
`,t.jsx(n,{hideHTMLPropsNote:!0,of:x}),`
`,t.jsx(e,{children:I}),`
`,t.jsx(c,{})]})}}export{ni as default};
//# sourceMappingURL=Input-eecc0a52.js.map
