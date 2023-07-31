import{j as t}from"./jsx-runtime-d079401a.js";import{C as a,A as n}from"./DomRefTable.module-a8203547.js";import{D as u}from"./DocsHeader-3c4780ba.js";import{F as c}from"./Footer-fa2ad5a0.js";import"./index-f1f2c4b1.js";import{D as g}from"./DomRefTable-10516580.js";import{S as d}from"./SubcomponentsSection-6138f2fc.js";import{M as l,C as p,b as o}from"./chunk-PCJTTTQV-3e1a40b0.js";import{S as f,a as x}from"./index-bc8f0992.js";import{S as j,a as I}from"./SuggestionItemDescription-58d79536.js";import{C as b,D as m,W as S}from"./Input.stories-8b89b640.js";import{u as h}from"./index-59d6410c.js";import"./react-jss.esm-c310038c.js";import"./inheritsLoose-93e09647.js";import"./index-b9fdaa85.js";import"./iframe-71752497.js";import"../sb-preview/runtime.js";import"./UI5Element-11982a12.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-99b005ba.js";import"./utils-626dc1bf.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-31253496.js";import"./Icons-234bf59e.js";import"./decline-c1cc2557.js";import"./i18n-defaults-837f5aed.js";import"./information-2644a02f.js";import"./class-map-b4d8f3b0.js";import"./Button-0b5fe0db.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-1a83921e.js";import"./index-47d0a85a.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-783dc33d.js";import"./index-ffa4e16a.js";import"./Integer-f7f172c9.js";import"./index-41ed926e.js";import"./Avatar-813f92b3.js";import"./ResizeHandler-9ebe913c.js";import"./employee-e34ffee2.js";import"./index-2ab1c171.js";import"./index-49cc23d8.js";import"./Link-b0328393.js";import"./WrappingType-b81e595a.js";import"./index-13bed04c.js";import"./TableOfContent-03c1ccda.js";import"./index-0d6c9251.js";import"./Label-62dd8470.js";import"./index-c74c9f7f.js";import"./index-c2bc1de1.js";import"./index-7d4c63ce.js";import"./Popover-f3103b78.js";import"./PopupsCommon.css-552c6676.js";import"./FocusableElements-708d1a4e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-56038137.js";import"./BrowserScrollbar.css-527f9f64.js";import"./react-18-50d7df5e.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./GroupHeaderListItem-e86bcbe5.js";import"./ListItemBase-6d1fb082.js";import"./ItemNavigation-a882fb90.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-741cae1e.js";import"./ValueState-2c5e5904.js";import"./StandardListItem-7168aefd.js";import"./ListItem-429c71be.js";import"./RadioButton-80f32cef.js";import"./CheckBox-6ec8bf24.js";import"./accept-6c83709e.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-c0f59065.js";import"./ValueState-ab6838cc.js";import"./ResponsivePopover-8e47438f.js";import"./Dialog-8bf45a3e.js";import"./Title-3276c542.js";import"./index-b8f78e7d.js";import"./index-3f0106e3.js";import"./Input-91cde929.js";import"./Suggestions.css-a2899748.js";import"./ResponsivePopoverCommon.css-c96ec8b5.js";import"./ValueStateMessage.css-e53cdf31.js";const y=`## Keyboard Handling

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
//# sourceMappingURL=Input-33f4f8de.js.map
