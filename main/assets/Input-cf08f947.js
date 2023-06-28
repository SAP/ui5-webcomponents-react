import{j as t}from"./jsx-runtime-5926aa06.js";import{C as a,A as n}from"./DomRefTable.module-97dea11c.js";import{D as u}from"./DocsHeader-f8d9d835.js";import{F as c}from"./Footer-b0b252bc.js";import"./index-ebeaab24.js";import{D as g}from"./DomRefTable-ad5f4400.js";import{S as d}from"./SubcomponentsSection-6138f2fc.js";import{M as l,C as p,a as o}from"./chunk-PCJTTTQV-0fbaba0a.js";import{S as f,a as x}from"./index-ecdd15b4.js";import{S as j,a as I}from"./SuggestionItemDescription-41eb0632.js";import{C as b,D as m,W as S}from"./Input.stories-62fbe056.js";import{u as h}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-3e18e163.js";import"./iframe-19be6c09.js";import"../sb-preview/runtime.js";import"./UI5Element-01913b1f.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-0a4d58ef.js";import"./Icons-d46a51e9.js";import"./decline-1fd321dc.js";import"./i18n-defaults-80781f7e.js";import"./information-c8e84372.js";import"./class-map-6a9bd920.js";import"./Button-3960a0de.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-99b8bbf4.js";import"./i18n-defaults-ac1c9dde.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-cd9e7ac3.js";import"./index-fd395674.js";import"./Integer-f7f172c9.js";import"./index-10f8fbfe.js";import"./Avatar-0a66eae5.js";import"./ResizeHandler-edd29a36.js";import"./employee-a105984c.js";import"./index-a560bbd2.js";import"./index-eaefc98e.js";import"./Link-daa8ef8a.js";import"./WrappingType-b81e595a.js";import"./index-ea625d40.js";import"./TableOfContent-83195f10.js";import"./index-b6575e5e.js";import"./Label-a83eb715.js";import"./index-9c09ad76.js";import"./index-914be7d0.js";import"./index-a4d09408.js";import"./Popover-6ae302f4.js";import"./PopupUtils-4b9a91b6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-d689758d.js";import"./FocusableElements-426d0dfa.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./GroupHeaderListItem-cea3bb42.js";import"./ListItemBase-b0580930.js";import"./ItemNavigation-0521282e.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-6bf4f6b5.js";import"./ValueState-2c5e5904.js";import"./StandardListItem-4970aa78.js";import"./ListItem-abf45448.js";import"./RadioButton-4257c8bc.js";import"./CheckBox-caaa73da.js";import"./accept-132472e4.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-d59cc39f.js";import"./ValueState-ab6838cc.js";import"./ResponsivePopover-7f48ba13.js";import"./Dialog-1a1d34fb.js";import"./Title-d41046e1.js";import"./index-1347150d.js";import"./index-577d511e.js";import"./Input-6eb7f2f5.js";import"./Suggestions.css-0630882b.js";import"./ResponsivePopoverCommon.css-4e26f9b9.js";import"./ValueStateMessage.css-c26568b3.js";const y=`## Keyboard Handling

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
//# sourceMappingURL=Input-cf08f947.js.map
