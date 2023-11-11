import{j as t}from"./jsx-runtime-d079401a.js";import{C as a,b as n}from"./DomRefTable.module-82e12b8b.js";import{D as c}from"./DocsHeader-ff105567.js";import{F as d}from"./Footer-87e0ade7.js";import"./index-f1f2c4b1.js";import{M as g,C as p,b as e}from"./chunk-HLWAVYOI-70f3b028.js";import{D as l}from"./DomRefTable-d3b198f5.js";import{S as f}from"./SubcomponentsSection-6138f2fc.js";import{S as x,a as j}from"./index-bddd2b3d.js";import{S as I,a as b}from"./SuggestionItemDescription-a172e521.js";import{C as S,D as m,W as y}from"./Input.stories-0c042aaa.js";import{e as h}from"./utils-b1ef2149.js";import{u}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-b8d7ba54.js";import"./iframe-e690f6b2.js";import"../sb-preview/runtime.js";import"./UI5Element-d089e658.js";import"./CustomElementsScopeUtils-90546106.js";import"./withWebComponent-f146e44d.js";import"./utils-85c0effb.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-dc979b51.js";import"./Icons-d115de21.js";import"./decline-a017ea5c.js";import"./i18n-defaults-bdef1cce.js";import"./information-ff75d6c3.js";import"./alert-fa33aca2.js";import"./class-map-5b190712.js";import"./Button-f20bbbdf.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-a1ecaff4.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-b7e0672b.js";import"./index-217551a3.js";import"./Integer-f7f172c9.js";import"./index-e78232a0.js";import"./Avatar-d6a8bd34.js";import"./ResizeHandler-36d5a74c.js";import"./employee-0930782f.js";import"./index-fc0700ea.js";import"./index-9e529b23.js";import"./Link-0dce4afc.js";import"./WrappingType-b81e595a.js";import"./index-12e0da73.js";import"./TableOfContent-b6e03a77.js";import"./index-6f833639.js";import"./Label-025b0296.js";import"./index-c74c9f7f.js";import"./index-1d290b58.js";import"./index-07e8245f.js";import"./Popover-84fe14ea.js";import"./PopupUtils-caf3caee.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-070f9d59.js";import"./FocusableElements-320054f2.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-2f7624b7.js";import"./BrowserScrollbar.css-e63eefff.js";import"./index-f82c8853.js";import"./mapValues-6da481dc.js";import"./_baseForOwn-62af832b.js";import"./_baseUniq-27dbdc21.js";import"./index-356e4a49.js";import"./GroupHeaderListItem-bda61d02.js";import"./ListItemBase-8f94593b.js";import"./ItemNavigation-5bb0bc27.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-30d2b934.js";import"./ValueState-2c5e5904.js";import"./StandardListItem-e433cbf1.js";import"./ListItem-237bd455.js";import"./RadioButton-894dc7d7.js";import"./CheckBox-e4c9f0e7.js";import"./accept-b3993803.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-f2ee719f.js";import"./ValueState-ab6838cc.js";import"./ResponsivePopover-46599dee.js";import"./Dialog-d6d3e16c.js";import"./Title-53f5d1e4.js";import"./index-a11b040a.js";import"./index-69e224f1.js";import"./Input-d61dd383.js";import"./Suggestions.css-7aca78e8.js";import"./ResponsivePopoverCommon.css-ef6cd2ad.js";import"./ValueStateMessage.css-7d9802b8.js";const v=`## Keyboard Handling

The \`Input\` provides the following keyboard shortcuts:

- \\[ESC\\] - Closes the suggestion list, if open. If closed or not enabled, cancels changes and reverts to the value which the Input field had when it got the focus.
- \\[ENTER\\] or \\[RETURN\\] - If suggestion list is open takes over the current matching item and closes it. If value state or group header is focused, does nothing.
- \\[DOWN\\] - Focuses the next matching item in the suggestion list.
- \\[UP\\] - Focuses the previous matching item in the suggestion list.
- \\[HOME\\] - If focus is in the text input, moves caret before the first character. If focus is in the list, highlights the first item and updates the input accordingly.
- \\[END\\] - If focus is in the text input, moves caret after the last character. If focus is in the list, highlights the last item and updates the input accordingly.
- \\[PAGEUP\\] - If focus is in the list, moves highlight up by page size (10 items by default). If focus is in the input, does nothing.
- \\[PAGEDOWN\\] - If focus is in the list, moves highlight down by page size (10 items by default). If focus is in the input, does nothing.
`,D=[{name:"previewItem",readonly:"true",visibility:"public",type:"sap.ui.webc.main.IInputSuggestionItem|null",description:"The suggestion item on preview."},{name:"openPicker",visibility:"public",since:"1.3.0",description:"Manually opens the suggestions popover, assuming suggestions are enabled. Items must be preloaded for it to open."}];function ui(o={}){const{wrapper:s}=Object.assign({},u(),o.components);return s?t.jsx(s,Object.assign({},o,{children:t.jsx(r,{})})):r();function r(){const i=Object.assign({h2:"h2",h1:"h1",p:"p",code:"code",strong:"strong"},u(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(g,{of:S}),`
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
`,t.jsx(d,{})]})}}export{ui as default};
//# sourceMappingURL=Input-ccb3ee7e.js.map
