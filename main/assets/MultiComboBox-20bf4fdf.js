import{j as o}from"./jsx-runtime-b5ed1ca8.js";import{C as l,d as s}from"./DomRefTable.module-b85fee91.js";import{D as h}from"./DocsHeader-e044bad4.js";import{F as d}from"./Footer-3b2bf5d1.js";import"./index-64f120e9.js";import{D as c}from"./DomRefTable-93a239fc.js";import{S as u}from"./SubcomponentsSection-6138f2fc.js";import{M as x,C as m,a as e}from"./chunk-PCJTTTQV-31ae8e4c.js";import{C as f,D as p,G as b,M as C}from"./MultiComboBox.stories-b9a2d960.js";import{a as j}from"./index-c706a8d3.js";import{u as a}from"./index-de4e61b4.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-a429ae4e.js";import"./inheritsLoose-93e09647.js";import"./index-f8e6345f.js";import"./iframe-c1d752a3.js";import"../sb-preview/runtime.mjs";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d0e572fe.js";import"./utils-d29e59c7.js";import"./useIsomorphicLayoutEffect-4a8db993.js";import"./slot-76e48863.js";import"./Icon-46afc304.js";import"./Icons-5b18f7d2.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./class-map-fc32fe45.js";import"./Button-3c41aad1.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./index-dc2ff79d.js";import"./clsx.m-1229b3e0.js";import"./index-d460da36.js";import"./ThemingParameters-f4b4144e.js";import"./Import-91a145b5.js";import"./TableOfContent-a2770df8.js";import"./index-c20b6a1a.js";import"./Link-20aa90b6.js";import"./WrappingType-b81e595a.js";import"./index-ffa295b2.js";import"./Label-51e2d33c.js";import"./index-7bf58b0a.js";import"./index-4009fdee.js";import"./Popover-f0a3f494.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-2a26d007.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-e40faf20.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-02d033ae.js";import"./react-18-1e96cd1b.js";import"./mapValues-30a52a16.js";import"./_baseForOwn-931ad773.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-e1b46df2.js";import"./_baseUniq-5a3eb61c.js";import"./index-356e4a49.js";import"./ValueState-ab6838cc.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-09ec0732.js";import"./Suggestions.css-ea3e5d96.js";import"./GroupHeaderListItem-10226762.js";import"./ListItemBase-7c4b6958.js";import"./ItemNavigation-01761450.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-f42ddeb7.js";import"./Tokenizer-bdccffff.js";import"./ScrollEnablement-4353003c.js";import"./animate-1a16ba20.js";import"./ResponsivePopover-5dcc0ce6.js";import"./Dialog-e0d10674.js";import"./Title-a54d13df.js";import"./StandardListItem-cb4e34fa.js";import"./ListItem-541883fa.js";import"./RadioButton-07abdc79.js";import"./CheckBox-826a6744.js";import"./accept-9744f30a.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-78d167a6.js";import"./Avatar-5cc62690.js";import"./employee-0153a597.js";import"./ResponsivePopoverCommon.css-ac857d16.js";import"./ValueStateMessage.css-8533c022.js";import"./Token-6da786ac.js";import"./ToggleButton-38bba196.js";import"./ComboBoxItem-8915d136.js";const M="**Since:** 0.25.0\n\nThe `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups\n",g="The `MultiComboBoxItem` represents the item for a `MultiComboBox`\n",w=`## Structure

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
`,k=[{name:"open",readonly:"true",visibility:"public",since:"1.0.0-rc.5",type:"boolean",description:"Indicates whether the dropdown is open. True if the dropdown is open, false otherwise.",defaultValue:"false"}];function ct(i={}){const{wrapper:r}=Object.assign({},a(),i.components);return r?o.jsx(r,Object.assign({},i,{children:o.jsx(n,{})})):n();function n(){const t=Object.assign({h2:"h2",h1:"h1"},a(),i.components);return o.jsxs(o.Fragment,{children:[o.jsx(x,{of:f}),`
`,o.jsx(h,{since:"0.4.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:p}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(l,{of:p}),`
`,o.jsx(e,{children:w}),`
`,o.jsx(c,{rows:k}),`
`,o.jsx(t.h1,{id:"more-examples",children:"More Examples"}),`
`,o.jsx(t.h2,{id:"multicombobox-with-grouping-of-items",children:"MultiComboBox with Grouping of Items"}),`
`,o.jsx(m,{of:b}),`
`,o.jsx(e,{children:u}),`
`,o.jsx(t.h2,{id:"multicomboboxitem",children:"MultiComboBoxItem"}),`
`,o.jsx(s,{hideHTMLPropsNote:!0,of:j}),`
`,o.jsx(e,{children:g}),`
`,o.jsx(t.h2,{id:"multicomboboxgroupitem",children:"MultiComboBoxGroupItem"}),`
`,o.jsx(s,{hideHTMLPropsNote:!0,of:C}),`
`,o.jsx(e,{children:M}),`
`,o.jsx(d,{})]})}}export{ct as default};
//# sourceMappingURL=MultiComboBox-20bf4fdf.js.map
