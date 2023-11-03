import{j as t}from"./jsx-runtime-d079401a.js";import{C as a,b as n}from"./DomRefTable.module-0dbb9652.js";import{D as c}from"./DocsHeader-93510fe5.js";import{F as d}from"./Footer-2630401a.js";import"./index-f1f2c4b1.js";import{M as g,C as p,b as e}from"./chunk-HLWAVYOI-ef9124d6.js";import{D as l}from"./DomRefTable-54fb39ce.js";import{S as f}from"./SubcomponentsSection-6138f2fc.js";import{S as x,a as j}from"./index-f65d8944.js";import{S as I,a as b}from"./SuggestionItemDescription-a172e521.js";import{C as S,D as m,W as y}from"./Input.stories-56645048.js";import{e as h}from"./utils-b1ef2149.js";import{u}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-ca577f17.js";import"./iframe-98d6bf96.js";import"../sb-preview/runtime.js";import"./UI5Element-9ae3ac4a.js";import"./CustomElementsScopeUtils-a6667bf6.js";import"./withWebComponent-70ea33bf.js";import"./utils-eb830979.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-085ae741.js";import"./Icons-aa504494.js";import"./decline-06bf09c2.js";import"./i18n-defaults-bdef1cce.js";import"./information-31cb56bb.js";import"./alert-f95f2d2e.js";import"./class-map-a35dc276.js";import"./Button-a64dbe13.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-9804ffd1.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-dff384db.js";import"./index-da201040.js";import"./Integer-f7f172c9.js";import"./index-853e2444.js";import"./Avatar-d7b0dbe0.js";import"./ResizeHandler-a1ba39c5.js";import"./employee-bd01b92f.js";import"./index-e5a5ffc5.js";import"./index-f8782e5c.js";import"./Link-6d4f6070.js";import"./WrappingType-b81e595a.js";import"./index-12e0da73.js";import"./TableOfContent-316f4349.js";import"./index-82ce7147.js";import"./Label-7e3ff047.js";import"./index-c74c9f7f.js";import"./index-b72b4a11.js";import"./index-3d93527f.js";import"./Popover-f88acbeb.js";import"./PopupUtils-ebc1cf8a.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-afd5e311.js";import"./FocusableElements-ea9d71fb.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0570471d.js";import"./BrowserScrollbar.css-35e4e851.js";import"./index-f82c8853.js";import"./mapValues-6da481dc.js";import"./_baseForOwn-62af832b.js";import"./_baseUniq-27dbdc21.js";import"./index-356e4a49.js";import"./GroupHeaderListItem-01074feb.js";import"./ListItemBase-b50a0bc0.js";import"./ItemNavigation-53cee471.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-026b791b.js";import"./ValueState-2c5e5904.js";import"./StandardListItem-d133e564.js";import"./ListItem-fe5d0a08.js";import"./RadioButton-b7eec574.js";import"./CheckBox-9b5348f8.js";import"./accept-a3b0d940.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-562fbac6.js";import"./ValueState-ab6838cc.js";import"./ResponsivePopover-48c65069.js";import"./Dialog-804d40cb.js";import"./Title-9e1fec85.js";import"./index-c9e4810f.js";import"./index-63b8c9c1.js";import"./Input-cc2222c1.js";import"./Suggestions.css-07dccdad.js";import"./ResponsivePopoverCommon.css-f284520a.js";import"./ValueStateMessage.css-29f8f350.js";const v=`## Keyboard Handling

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
//# sourceMappingURL=Input-49c11204.js.map
