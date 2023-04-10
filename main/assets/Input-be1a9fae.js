import{j as t,a as r,F as u}from"./jsx-runtime-670450c2.js";import{C as c,A as p}from"./DomRefTable.module-7ccc680d.js";import{D as g}from"./DocsHeader-f6424144.js";import{F as d}from"./Footer-02dced94.js";import"./index-f1f749bf.js";import{D as l}from"./DomRefTable-9828962a.js";import{S as f}from"./SubcomponentsSection-6138f2fc.js";import{M as I,C as m,a as o}from"./chunk-PCJTTTQV-d9e1f245.js";import{S as b,a as S}from"./index-1e35e30b.js";import{S as y,a as v}from"./SuggestionItemDescription-41eb0632.js";import{C as D,D as h,W as w}from"./Input.stories-19e96c63.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-af8e863f.js";import"./iframe-c2cea1d1.js";import"../sb-preview/runtime.mjs";import"./UI5Element-d1d93200.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-76e48863.js";import"./Icon-c8fd92f0.js";import"./Icons-efeb15d5.js";import"./decline-41212cdc.js";import"./i18n-defaults-80781f7e.js";import"./information-859245b4.js";import"./class-map-6d48ebd3.js";import"./Button-400e2491.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-94bcf4c7.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-526feece.js";import"./TableOfContent-786bd8f6.js";import"./index-60854897.js";import"./Link-706be030.js";import"./WrappingType-b81e595a.js";import"./index-4836378a.js";import"./Label-e3d88218.js";import"./index-96c5f47c.js";import"./index-3e009d02.js";import"./Popover-4088d87a.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a92cb9f4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-1644cafd.js";import"./FocusableElements-8859c874.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-ab5bee37.js";import"./ResizeHandler-f4ca1209.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./GroupHeaderListItem-e1c34f60.js";import"./ListItemBase-6757af89.js";import"./ItemNavigation-8971fb55.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-57fa4b3b.js";import"./ValueState-2c5e5904.js";import"./StandardListItem-3b715734.js";import"./ListItem-6188cfad.js";import"./RadioButton-23550da4.js";import"./CheckBox-2ada2fbd.js";import"./accept-ca825c33.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-a1ee93cb.js";import"./Avatar-9bebadfe.js";import"./employee-e0b9815e.js";import"./ValueState-ab6838cc.js";import"./ResponsivePopover-f45885b9.js";import"./Dialog-c83d8172.js";import"./Title-6041704e.js";import"./index-eb2bdc76.js";import"./index-3fd3c74e.js";import"./Input-63631743.js";import"./Suggestions.css-a2aab2ea.js";import"./ResponsivePopoverCommon.css-82b1f3cc.js";import"./ValueStateMessage.css-194378a0.js";const M=`## Keyboard Handling

The \`Input\` provides the following keyboard shortcuts:

- \\[ESC\\] - Closes the suggestion list, if open. If closed or not enabled, cancels changes and reverts to the value which the Input field had when it got the focus.
- \\[ENTER\\] or \\[RETURN\\] - If suggestion list is open takes over the current matching item and closes it. If value state or group header is focused, does nothing.
- \\[DOWN\\] - Focuses the next matching item in the suggestion list.
- \\[UP\\] - Focuses the previous matching item in the suggestion list.
- \\[HOME\\] - If focus is in the text input, moves caret before the first character. If focus is in the list, highlights the first item and updates the input accordingly.
- \\[END\\] - If focus is in the text input, moves caret after the last character. If focus is in the list, highlights the last item and updates the input accordingly.
- \\[PAGEUP\\] - If focus is in the list, moves highlight up by page size (10 items by default). If focus is in the input, does nothing.
- \\[PAGEDOWN\\] - If focus is in the list, moves highlight down by page size (10 items by default). If focus is in the input, does nothing.
`,x=[{name:"previewItem",readonly:"true",visibility:"public",type:"sap.ui.webc.main.IInputSuggestionItem|null",description:"The suggestion item on preview."},{name:"openPicker",visibility:"public",since:"1.3.0",description:"Manually opens the suggestions popover, assuming suggestions are enabled. Items must be preloaded for it to open."}];function ci(e={}){const{wrapper:n}=Object.assign({},a(),e.components);return n?t(n,Object.assign({},e,{children:t(s,{})})):s();function s(){const i=Object.assign({h2:"h2",h1:"h1",p:"p",code:"code",strong:"strong"},a(),e.components);return r(u,{children:[t(I,{of:D}),`
`,t(g,{}),`
`,t("br",{}),`
`,t(i.h2,{id:"example",children:"Example"}),`
`,t(m,{of:h}),`
`,t(i.h2,{id:"properties",children:"Properties"}),`
`,t(c,{of:h}),`
`,t(o,{children:M}),`
`,t(l,{rows:x}),`
`,t("br",{}),`
`,t(i.h1,{id:"more-examples",children:"More Examples"}),`
`,t("br",{}),`
`,t(i.h2,{id:"input-with-customizable-suggestionitem",children:"Input with customizable SuggestionItem"}),`
`,r(i.p,{children:["The ",t(i.code,{children:"SuggestionItem"})," represents the suggestion item of the ",t(i.code,{children:"Input"})]}),`
`,r(i.p,{children:[t(i.strong,{children:"Note:"})," ",t(i.code,{children:"SuggestionItems"})," will only be displayed if the required module has been imported (",t(i.code,{children:"import '@ui5/webcomponents/dist/features/InputSuggestions.js';"}),`)
and the `,t(i.code,{children:"showSuggestions"})," prop is set to ",t(i.code,{children:"true"}),"."]}),`
`,t(m,{of:w}),`
`,t(o,{children:f}),`
`,t(i.h2,{id:"suggestionitem",children:"SuggestionItem"}),`
`,t(p,{hideHTMLPropsNote:!0,of:b}),`
`,t(o,{children:y}),`
`,t(i.h2,{id:"suggestiongroupitem",children:"SuggestionGroupItem"}),`
`,t(p,{hideHTMLPropsNote:!0,of:S}),`
`,t(o,{children:v}),`
`,t(d,{})]})}}export{ci as default};
//# sourceMappingURL=Input-be1a9fae.js.map
