import{j as o,a as l,F as h}from"./jsx-runtime-670450c2.js";import{C as d,d as m}from"./DomRefTable.module-b3048698.js";import{D as c}from"./DocsHeader-2c815477.js";import{F as u}from"./Footer-f4421db3.js";import"./index-f1f749bf.js";import{D as f}from"./DomRefTable-4ce20b0a.js";import{S as b}from"./SubcomponentsSection-6138f2fc.js";import{M as x,C as p,a as e}from"./chunk-PCJTTTQV-dabea91d.js";import{C,D as s,G as M,M as g}from"./MultiComboBox.stories-a0e7bf38.js";import{a as w}from"./index-62582a36.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-fcfb8c4e.js";import"./iframe-8983185e.js";import"../sb-preview/runtime.mjs";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-76e48863.js";import"./Icon-27a81412.js";import"./Icons-5b18f7d2.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./class-map-6d48ebd3.js";import"./Button-fa05cadd.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-44cc9c22.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-176475de.js";import"./TableOfContent-4b8b3863.js";import"./index-2b378c96.js";import"./Link-3b8926df.js";import"./WrappingType-b81e595a.js";import"./index-b1341032.js";import"./Label-528b8168.js";import"./index-96c5f47c.js";import"./index-18619a78.js";import"./Popover-824d4d7c.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7f720278.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-382f34a2.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./ValueState-ab6838cc.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-09ec0732.js";import"./Suggestions.css-1532b733.js";import"./GroupHeaderListItem-56788105.js";import"./ListItemBase-780d7053.js";import"./ItemNavigation-01761450.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-c375cd19.js";import"./Tokenizer-e4884914.js";import"./ScrollEnablement-4353003c.js";import"./animate-1a16ba20.js";import"./ResponsivePopover-152ab708.js";import"./Dialog-610dd06c.js";import"./Title-0440ec3f.js";import"./StandardListItem-38cf6758.js";import"./ListItem-843af2c9.js";import"./RadioButton-412fbbc0.js";import"./CheckBox-f0072def.js";import"./accept-9744f30a.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-78d167a6.js";import"./Avatar-0d8d2b25.js";import"./employee-0153a597.js";import"./ResponsivePopoverCommon.css-0466170a.js";import"./ValueStateMessage.css-7363aec7.js";import"./Token-f5ffffa8.js";import"./ToggleButton-ed4cffda.js";import"./ComboBoxItem-b28bde91.js";const k="**Since:** 0.25.0\n\nThe `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups\n",y="The `MultiComboBoxItem` represents the item for a `MultiComboBox`\n",S=`## Structure

The \`MultiComboBox\` consists of the following elements:

- Tokenizer - a list of tokens with selected options.
- Input field - displays the selected option/s as token/s. Users can type to filter the list.
- Drop-down arrow - expands\\\\collapses the option list.
- Option list - the list of available options.

## Keyboard Handling

The \`MultiComboBox\` provides advanced keyboard handling.

### Picker

If the \`MultiComboBox\` is focused, you can open or close the drop-down by pressing \`F4\`, \`ALT+UP\` or \`ALT+DOWN\` keys. Once the drop-down is opened, you can use the \`UP\` and \`DOWN\` arrow keys to navigate through the available options and select one by pressing the \`Space\` or \`Enter\` keys.

### Tokens

- Left/Right arrow keys - moves the focus selection form the currently focused token to the previous/next one (if available).
- Delete - deletes the token and focuses the previous token.
- Backspace - deletes the token and focus the next token.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`MultiComboBox\` exposes the following CSS Shadow Parts:

- token-{index} - Used to style each token(where \`token-0\` corresponds to the first item)
`,D=[{name:"open",readonly:"true",visibility:"public",since:"1.0.0-rc.5",type:"boolean",description:"Indicates whether the dropdown is open. True if the dropdown is open, false otherwise.",defaultValue:"false"}];function bt(i={}){const{wrapper:r}=Object.assign({},a(),i.components);return r?o(r,Object.assign({},i,{children:o(n,{})})):n();function n(){const t=Object.assign({h2:"h2",h1:"h1"},a(),i.components);return l(h,{children:[o(x,{of:C}),`
`,o(c,{since:"0.4.0"}),`
`,o("br",{}),`
`,o(t.h2,{id:"example",children:"Example"}),`
`,o(p,{of:s}),`
`,o(t.h2,{id:"properties",children:"Properties"}),`
`,o(d,{of:s}),`
`,o(e,{children:S}),`
`,o(f,{rows:D}),`
`,o(t.h1,{id:"more-examples",children:"More Examples"}),`
`,o(t.h2,{id:"multicombobox-with-grouping-of-items",children:"MultiComboBox with Grouping of Items"}),`
`,o(p,{of:M}),`
`,o(e,{children:b}),`
`,o(t.h2,{id:"multicomboboxitem",children:"MultiComboBoxItem"}),`
`,o(m,{hideHTMLPropsNote:!0,of:w}),`
`,o(e,{children:y}),`
`,o(t.h2,{id:"multicomboboxgroupitem",children:"MultiComboBoxGroupItem"}),`
`,o(m,{hideHTMLPropsNote:!0,of:g}),`
`,o(e,{children:k}),`
`,o(u,{})]})}}export{bt as default};
//# sourceMappingURL=MultiComboBox-e69b99d6.js.map
