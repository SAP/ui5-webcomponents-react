import{j as t,a as r,F as c}from"./jsx-runtime-670450c2.js";import{C as u,A as p}from"./DomRefTable.module-5a92b3aa.js";import{D as g}from"./DocsHeader-2171f118.js";import{F as l}from"./Footer-d1fa4308.js";import"./index-f1f749bf.js";import{D as d}from"./DomRefTable-e28568d7.js";import{S as f}from"./SubcomponentsSection-6138f2fc.js";import{M as I,C as m,a as o}from"./index-d168f592.js";import{S as b,a as S}from"./index-9abc0461.js";import{S as y,a as v}from"./SuggestionItemDescription-c951b692.js";import{C as D,D as h,W as w}from"./Input.stories-adb6351e.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-PCJTTTQV-7fbc680b.js";import"./iframe-ec1d1418.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-fe4dc3ff.js";import"./inheritsLoose-93e09647.js";import"./index-3519bbac.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./i18n-defaults-da1c0a37.js";import"./decline-f2b294b3.js";import"./Icons-7b82f601.js";import"./i18n-defaults-80781f7e.js";import"./information-50e1ad0f.js";import"./class-map-5d8e4b2b.js";import"./Icon-a9b28f0c.js";import"./Keys-3acbae73.js";import"./Button-b7bbfa18.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./index-57eaac56.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-2a210be2.js";import"./TableOfContent-87933f28.js";import"./index-472e8986.js";import"./Link-f8688ae9.js";import"./WrappingType-b81e595a.js";import"./index-87fa1919.js";import"./Label-040efebd.js";import"./Footer.module-f90cad7d.js";import"./index-610136b6.js";import"./Popover-661594f1.js";import"./Integer-f7f172c9.js";import"./PopupsCommon.css-be465885.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./GroupHeaderListItem-5167186a.js";import"./ListItemBase-eee2ba1b.js";import"./ItemNavigation-18222ac6.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-f47be8a3.js";import"./ValueState-2c5e5904.js";import"./StandardListItem-aeb86e64.js";import"./ListItem-fadb587b.js";import"./RadioButton-c2b6bc1d.js";import"./CheckBox-9b089db0.js";import"./accept-a98baca8.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-bbef5919.js";import"./Avatar-ff49e25a.js";import"./employee-98ce1b38.js";import"./ValueState-ab6838cc.js";import"./ResponsivePopover-c5dc5808.js";import"./Dialog-8adfbd6d.js";import"./Title-b986a4bd.js";import"./index-f8653dee.js";import"./index-1d424371.js";import"./Input-7c9432d4.js";import"./Suggestions.css-faab6178.js";import"./ResponsivePopoverCommon.css-187e38b6.js";import"./ValueStateMessage.css-37773c69.js";const M=`## Keyboard Handling

The \`Input\` provides the following keyboard shortcuts:  

*   \\[ESC\\] - Closes the suggestion list, if open. If closed or not enabled, cancels changes and reverts to the value which the Input field had when it got the focus.
*   \\[ENTER\\] or \\[RETURN\\] - If suggestion list is open takes over the current matching item and closes it. If value state or group header is focused, does nothing.
*   \\[DOWN\\] - Focuses the next matching item in the suggestion list.
*   \\[UP\\] - Focuses the previous matching item in the suggestion list.
*   \\[HOME\\] - If focus is in the text input, moves caret before the first character. If focus is in the list, highlights the first item and updates the input accordingly.
*   \\[END\\] - If focus is in the text input, moves caret after the last character. If focus is in the list, highlights the last item and updates the input accordingly.
*   \\[PAGEUP\\] - If focus is in the list, moves highlight up by page size (10 items by default). If focus is in the input, does nothing.
*   \\[PAGEDOWN\\] - If focus is in the list, moves highlight down by page size (10 items by default). If focus is in the input, does nothing.`,C=[{name:"previewItem",readonly:"true",visibility:"public",type:"sap.ui.webc.main.IInputSuggestionItem|null",description:"The suggestion item on preview."},{name:"openPicker",visibility:"public",since:"1.3.0",description:"Manually opens the suggestions popover, assuming suggestions are enabled. Items must be preloaded for it to open."}];function di(e={}){const{wrapper:n}=Object.assign({},a(),e.components);return n?t(n,Object.assign({},e,{children:t(s,{})})):s();function s(){const i=Object.assign({h2:"h2",h1:"h1",p:"p",code:"code",strong:"strong"},a(),e.components);return r(c,{children:[t(I,{of:D}),`
`,t(g,{}),`
`,t("br",{}),`
`,t(i.h2,{children:"Example"}),`
`,t(m,{of:h}),`
`,t(i.h2,{children:"Properties"}),`
`,t(u,{of:h}),`
`,t(o,{children:M}),`
`,t(d,{rows:C}),`
`,t("br",{}),`
`,t(i.h1,{children:"More Examples"}),`
`,t("br",{}),`
`,t(i.h2,{children:"Input with customizable SuggestionItem"}),`
`,r(i.p,{children:["The ",t(i.code,{children:"SuggestionItem"})," represents the suggestion item of the ",t(i.code,{children:"Input"})]}),`
`,r(i.p,{children:[t(i.strong,{children:"Note:"})," ",t(i.code,{children:"SuggestionItems"})," will only be displayed if the required module has been imported (",t(i.code,{children:"import '@ui5/webcomponents/dist/features/InputSuggestions.js';"}),`)
and the `,t(i.code,{children:"showSuggestions"})," prop is set to ",t(i.code,{children:"true"}),"."]}),`
`,t(m,{of:w}),`
`,t(o,{children:f}),`
`,t(i.h2,{children:"SuggestionItem"}),`
`,t(p,{hideHTMLPropsNote:!0,of:b}),`
`,t(o,{children:y}),`
`,t(i.h2,{children:"SuggestionGroupItem"}),`
`,t(p,{hideHTMLPropsNote:!0,of:S}),`
`,t(o,{children:v}),`
`,t(l,{})]})}}export{di as default};
//# sourceMappingURL=Input-8906e79b.js.map
