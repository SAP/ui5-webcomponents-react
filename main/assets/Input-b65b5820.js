import{j as t}from"./jsx-runtime-d079401a.js";import{C as a,b as n}from"./DomRefTable.module-7b97081d.js";import{D as c}from"./DocsHeader-7c3f5bf0.js";import{F as d}from"./Footer-fe3c82cf.js";import"./index-f1f2c4b1.js";import{M as g,C as p,b as e}from"./chunk-S4VUQJ4A-1cea4592.js";import{D as l}from"./DomRefTable-50b5d35e.js";import{S as f}from"./SubcomponentsSection-6138f2fc.js";import{S as x,a as j}from"./index-dbdadb9d.js";import{S as I,a as b}from"./SuggestionItemDescription-58d79536.js";import{C as S,D as m,W as y}from"./Input.stories-1478c84a.js";import{e as h}from"./utils-b1ef2149.js";import{u}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-99c2dd11.js";import"./iframe-bfcb4651.js";import"../sb-preview/runtime.js";import"./UI5Element-a4bd3d38.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7d7e5133.js";import"./utils-626dc1bf.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-42236945.js";import"./Icons-74c917eb.js";import"./decline-3cb804de.js";import"./i18n-defaults-2d2bf0b6.js";import"./information-dbbb1c9a.js";import"./class-map-0ab40ab9.js";import"./Button-02dfef34.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-d5d083dd.js";import"./index-bb1f9706.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-d9b40dee.js";import"./index-3ed669cc.js";import"./Integer-f7f172c9.js";import"./index-4e146397.js";import"./Avatar-6c09069b.js";import"./ResizeHandler-0af4416f.js";import"./employee-05c578de.js";import"./index-d4dd2be0.js";import"./index-ce67505e.js";import"./Link-498d09c2.js";import"./WrappingType-b81e595a.js";import"./index-81cf76a5.js";import"./TableOfContent-18ec7503.js";import"./index-98e0588c.js";import"./Label-287c3220.js";import"./index-b42968db.js";import"./index-90473557.js";import"./index-34057f74.js";import"./Popover-26ef4370.js";import"./PopupsCommon.css-f12c9479.js";import"./FocusableElements-66623361.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-132a30d8.js";import"./BrowserScrollbar.css-309143b9.js";import"./index-d203965f.js";import"./mapValues-e5c6f517.js";import"./_baseForOwn-24231fc1.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-00f63d78.js";import"./_baseUniq-edf521f4.js";import"./index-356e4a49.js";import"./GroupHeaderListItem-60c5bd52.js";import"./ListItemBase-472e3755.js";import"./ItemNavigation-0734b7c0.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-ce1a2cfb.js";import"./ValueState-2c5e5904.js";import"./StandardListItem-afe74127.js";import"./ListItem-86bc8c51.js";import"./RadioButton-082fd9c9.js";import"./CheckBox-355e2cb2.js";import"./accept-aa607c05.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-b5a9fe30.js";import"./ValueState-ab6838cc.js";import"./ResponsivePopover-1151e741.js";import"./Dialog-3eddfe98.js";import"./Title-f7b3e876.js";import"./index-efc1f540.js";import"./index-ce7aa10f.js";import"./Input-aa3cf5ef.js";import"./Suggestions.css-8d6efd26.js";import"./ResponsivePopoverCommon.css-870f7136.js";import"./ValueStateMessage.css-044f6113.js";const v=`## Keyboard Handling

The \`Input\` provides the following keyboard shortcuts:

- \\[ESC\\] - Closes the suggestion list, if open. If closed or not enabled, cancels changes and reverts to the value which the Input field had when it got the focus.
- \\[ENTER\\] or \\[RETURN\\] - If suggestion list is open takes over the current matching item and closes it. If value state or group header is focused, does nothing.
- \\[DOWN\\] - Focuses the next matching item in the suggestion list.
- \\[UP\\] - Focuses the previous matching item in the suggestion list.
- \\[HOME\\] - If focus is in the text input, moves caret before the first character. If focus is in the list, highlights the first item and updates the input accordingly.
- \\[END\\] - If focus is in the text input, moves caret after the last character. If focus is in the list, highlights the last item and updates the input accordingly.
- \\[PAGEUP\\] - If focus is in the list, moves highlight up by page size (10 items by default). If focus is in the input, does nothing.
- \\[PAGEDOWN\\] - If focus is in the list, moves highlight down by page size (10 items by default). If focus is in the input, does nothing.
`,D=[{name:"previewItem",readonly:"true",visibility:"public",type:"sap.ui.webc.main.IInputSuggestionItem|null",description:"The suggestion item on preview."},{name:"openPicker",visibility:"public",since:"1.3.0",description:"Manually opens the suggestions popover, assuming suggestions are enabled. Items must be preloaded for it to open."}];function ai(o={}){const{wrapper:s}=Object.assign({},u(),o.components);return s?t.jsx(s,Object.assign({},o,{children:t.jsx(r,{})})):r();function r(){const i=Object.assign({h2:"h2",h1:"h1",p:"p",code:"code",strong:"strong"},u(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(g,{of:S}),`
`,t.jsx(c,{}),`
`,t.jsx("br",{}),`
`,t.jsx(i.h2,{id:"example",children:"Example"}),`
`,t.jsx(p,{of:m}),`
`,t.jsx(i.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(a,{of:m}),`
`,t.jsx(e,{children:v}),`
`,t.jsx(l,{rows:D}),`
`,t.jsx("br",{}),`
`,t.jsx(i.h1,{id:"more-examples",children:"More Examples"}),`
`,t.jsx("br",{}),`
`,t.jsx(i.h2,{id:"input-with-customizable-suggestionitem",children:"Input with customizable SuggestionItem"}),`
`,t.jsxs(i.p,{children:["The ",t.jsx(i.code,{children:"SuggestionItem"})," represents the suggestion item of the ",t.jsx(i.code,{children:"Input"})]}),`
`,t.jsxs(i.p,{children:[t.jsx(i.strong,{children:"Note:"})," ",t.jsx(i.code,{children:"SuggestionItems"})," will only be displayed if the required module has been imported (",t.jsx(i.code,{children:"import '@ui5/webcomponents/dist/features/InputSuggestions.js';"}),`)
and the `,t.jsx(i.code,{children:"showSuggestions"})," prop is set to ",t.jsx(i.code,{children:"true"}),"."]}),`
`,t.jsx(p,{of:y}),`
`,t.jsx(e,{children:f}),`
`,t.jsx(i.h2,{id:"suggestionitem",children:"SuggestionItem"}),`
`,t.jsx(n,{hideHTMLPropsNote:!0,exclude:h,of:x}),`
`,t.jsx(e,{children:I}),`
`,t.jsx(i.h2,{id:"suggestiongroupitem",children:"SuggestionGroupItem"}),`
`,t.jsx(n,{hideHTMLPropsNote:!0,exclude:h,of:j}),`
`,t.jsx(e,{children:b}),`
`,t.jsx(d,{})]})}}export{ai as default};
//# sourceMappingURL=Input-b65b5820.js.map
