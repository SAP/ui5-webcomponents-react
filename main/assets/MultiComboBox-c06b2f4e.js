import{j as o}from"./jsx-runtime-5926aa06.js";import{C as l,e as m}from"./DomRefTable.module-2d5b74b4.js";import{D as h}from"./DocsHeader-461a5494.js";import{F as c}from"./Footer-5acfe8ce.js";import"./index-ebeaab24.js";import{D as d}from"./DomRefTable-c3ed72e0.js";import{S as u}from"./SubcomponentsSection-6138f2fc.js";import{M as x,C as s,a as e}from"./chunk-PCJTTTQV-aa78ff02.js";import{C as f,D as p,G as b,M as C}from"./MultiComboBox.stories-bc1f4b3d.js";import{a as j}from"./index-482c5c0f.js";import{u as a}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-79c22084.js";import"./iframe-48dea8cd.js";import"../sb-preview/runtime.js";import"./UI5Element-b6f0d493.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-bd7f152d.js";import"./Icons-bac066a4.js";import"./decline-e64814d9.js";import"./i18n-defaults-80781f7e.js";import"./information-f9c20ced.js";import"./class-map-6a9bd920.js";import"./Button-37628041.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-99b8bbf4.js";import"./i18n-defaults-ac1c9dde.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-aaf25c56.js";import"./index-09a295bc.js";import"./Integer-f7f172c9.js";import"./index-f88d1151.js";import"./Avatar-a8f74fed.js";import"./ResizeHandler-021ae412.js";import"./employee-a1fe0822.js";import"./index-f60e9536.js";import"./index-197eeea0.js";import"./Link-fd0c7f1f.js";import"./WrappingType-b81e595a.js";import"./index-4c0ab015.js";import"./TableOfContent-928aecbe.js";import"./index-295ae1d1.js";import"./Label-77c4efbc.js";import"./index-9c09ad76.js";import"./index-ab0e5734.js";import"./index-2754203c.js";import"./Popover-ceaaf26b.js";import"./PopupUtils-46fb16e4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-27fb56a9.js";import"./FocusableElements-6ebe483a.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./ValueState-ab6838cc.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-84d27593.js";import"./Suggestions.css-7d1f049c.js";import"./GroupHeaderListItem-f070753b.js";import"./ListItemBase-d9c7b338.js";import"./ItemNavigation-9c411313.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-0490e909.js";import"./Tokenizer-27844919.js";import"./ScrollEnablement-5e135290.js";import"./animate-1a16ba20.js";import"./ResponsivePopover-a431d471.js";import"./Dialog-da422c24.js";import"./Title-6c23a67a.js";import"./StandardListItem-a8677076.js";import"./ListItem-833837ab.js";import"./RadioButton-ac0d39a7.js";import"./CheckBox-0289245d.js";import"./accept-549e2cca.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-9332e21e.js";import"./ResponsivePopoverCommon.css-50da1549.js";import"./ValueStateMessage.css-b22c5ae7.js";import"./Token-25014b91.js";import"./ToggleButton-b82e7596.js";import"./ComboBoxItem-ca8714e6.js";const M="**Since:** 0.25.0\n\nThe `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups\n",g="The `MultiComboBoxItem` represents the item for a `MultiComboBox`\n",w=`## Structure

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
`,k=[{name:"open",readonly:"true",visibility:"public",since:"1.0.0-rc.5",type:"boolean",description:"Indicates whether the dropdown is open. True if the dropdown is open, false otherwise.",defaultValue:"false"}];function xt(i={}){const{wrapper:r}=Object.assign({},a(),i.components);return r?o.jsx(r,Object.assign({},i,{children:o.jsx(n,{})})):n();function n(){const t=Object.assign({h2:"h2",h1:"h1"},a(),i.components);return o.jsxs(o.Fragment,{children:[o.jsx(x,{of:f}),`
`,o.jsx(h,{since:"0.4.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{of:p}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(l,{of:p}),`
`,o.jsx(e,{children:w}),`
`,o.jsx(d,{rows:k}),`
`,o.jsx(t.h1,{id:"more-examples",children:"More Examples"}),`
`,o.jsx(t.h2,{id:"multicombobox-with-grouping-of-items",children:"MultiComboBox with Grouping of Items"}),`
`,o.jsx(s,{of:b}),`
`,o.jsx(e,{children:u}),`
`,o.jsx(t.h2,{id:"multicomboboxitem",children:"MultiComboBoxItem"}),`
`,o.jsx(m,{hideHTMLPropsNote:!0,of:j}),`
`,o.jsx(e,{children:g}),`
`,o.jsx(t.h2,{id:"multicomboboxgroupitem",children:"MultiComboBoxGroupItem"}),`
`,o.jsx(m,{hideHTMLPropsNote:!0,of:C}),`
`,o.jsx(e,{children:M}),`
`,o.jsx(c,{})]})}}export{xt as default};
//# sourceMappingURL=MultiComboBox-c06b2f4e.js.map
