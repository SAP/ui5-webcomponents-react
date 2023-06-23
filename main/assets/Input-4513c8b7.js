import{j as t}from"./jsx-runtime-5926aa06.js";import{C as a,A as n}from"./DomRefTable.module-7b7d092b.js";import{D as u}from"./DocsHeader-c1f06e8c.js";import{F as c}from"./Footer-9dcd6fb2.js";import"./index-ebeaab24.js";import{D as g}from"./DomRefTable-ebd26327.js";import{S as d}from"./SubcomponentsSection-6138f2fc.js";import{M as l,C as p,a as o}from"./chunk-PCJTTTQV-f6245022.js";import{S as f,a as x}from"./index-61e95f88.js";import{S as j,a as I}from"./SuggestionItemDescription-41eb0632.js";import{C as b,D as m,W as S}from"./Input.stories-d0979a4b.js";import{u as h}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-498a437d.js";import"./iframe-9a58d1ec.js";import"../sb-preview/runtime.js";import"./UI5Element-978c7ec7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-87626f33.js";import"./Icons-24533df9.js";import"./decline-2dc3f691.js";import"./i18n-defaults-80781f7e.js";import"./information-573ff8e0.js";import"./class-map-6a9bd920.js";import"./Button-c3cdbc47.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-99b8bbf4.js";import"./i18n-defaults-ac1c9dde.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-0421cb7d.js";import"./index-fc58bb5f.js";import"./Integer-f7f172c9.js";import"./index-832cea8d.js";import"./Avatar-02045306.js";import"./ResizeHandler-d96d99c4.js";import"./employee-397ee2c5.js";import"./index-83de8902.js";import"./index-06f0cfcb.js";import"./Link-a59da54b.js";import"./WrappingType-b81e595a.js";import"./index-4c0ab015.js";import"./TableOfContent-cf57f367.js";import"./index-90e35494.js";import"./Label-3a4ee32a.js";import"./index-9c09ad76.js";import"./index-ea8449e1.js";import"./index-e7d7a0c7.js";import"./Popover-24cfcc49.js";import"./PopupUtils-7b496d9b.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-aca8c783.js";import"./FocusableElements-ba36fca8.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./GroupHeaderListItem-7e59b74a.js";import"./ListItemBase-81a01599.js";import"./ItemNavigation-e6c8f7b0.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-34850997.js";import"./ValueState-2c5e5904.js";import"./StandardListItem-6f4cd51e.js";import"./ListItem-3c6228ec.js";import"./RadioButton-3919451e.js";import"./CheckBox-81e7fb8c.js";import"./accept-23bea3d0.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-ac42c02c.js";import"./ValueState-ab6838cc.js";import"./ResponsivePopover-9e38f9a3.js";import"./Dialog-b60b0d62.js";import"./Title-b7551974.js";import"./index-41065afa.js";import"./index-5f52c6ab.js";import"./Input-a03cbd8d.js";import"./Suggestions.css-70644f53.js";import"./ResponsivePopoverCommon.css-f329a859.js";import"./ValueStateMessage.css-fb4cc5f8.js";const y=`## Keyboard Handling

The \`Input\` provides the following keyboard shortcuts:

- \\[ESC\\] - Closes the suggestion list, if open. If closed or not enabled, cancels changes and reverts to the value which the Input field had when it got the focus.
- \\[ENTER\\] or \\[RETURN\\] - If suggestion list is open takes over the current matching item and closes it. If value state or group header is focused, does nothing.
- \\[DOWN\\] - Focuses the next matching item in the suggestion list.
- \\[UP\\] - Focuses the previous matching item in the suggestion list.
- \\[HOME\\] - If focus is in the text input, moves caret before the first character. If focus is in the list, highlights the first item and updates the input accordingly.
- \\[END\\] - If focus is in the text input, moves caret after the last character. If focus is in the list, highlights the last item and updates the input accordingly.
- \\[PAGEUP\\] - If focus is in the list, moves highlight up by page size (10 items by default). If focus is in the input, does nothing.
- \\[PAGEDOWN\\] - If focus is in the list, moves highlight down by page size (10 items by default). If focus is in the input, does nothing.
`,v=[{name:"previewItem",readonly:"true",visibility:"public",type:"sap.ui.webc.main.IInputSuggestionItem|null",description:"The suggestion item on preview."},{name:"openPicker",visibility:"public",since:"1.3.0",description:"Manually opens the suggestions popover, assuming suggestions are enabled. Items must be preloaded for it to open."}];function ui(e={}){const{wrapper:s}=Object.assign({},h(),e.components);return s?t.jsx(s,Object.assign({},e,{children:t.jsx(r,{})})):r();function r(){const i=Object.assign({h2:"h2",h1:"h1",p:"p",code:"code",strong:"strong"},h(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:b}),`
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
`,t.jsx(c,{})]})}}export{ui as default};
//# sourceMappingURL=Input-4513c8b7.js.map
