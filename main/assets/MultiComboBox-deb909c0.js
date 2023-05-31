import{j as o}from"./jsx-runtime-5926aa06.js";import{C as l,e as s}from"./DomRefTable.module-29894699.js";import{D as h}from"./DocsHeader-ce237d4a.js";import{F as c}from"./Footer-06816160.js";import"./index-ebeaab24.js";import{D as d}from"./DomRefTable-5e4d352d.js";import{S as u}from"./SubcomponentsSection-6138f2fc.js";import{M as x,C as m,a as e}from"./chunk-PCJTTTQV-40e2b34c.js";import{C as f,D as p,G as b,M as C}from"./MultiComboBox.stories-0447153a.js";import{a as j}from"./index-0f91d6bf.js";import{u as a}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-03769e7a.js";import"./iframe-47b31245.js";import"../sb-preview/runtime.js";import"./UI5Element-784c80b7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d61dcbbc.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-a5230073.js";import"./Icons-e56d104a.js";import"./decline-02d24632.js";import"./i18n-defaults-80781f7e.js";import"./information-aaa07e0e.js";import"./class-map-519e9c6d.js";import"./Button-0cdf0df4.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./index-4c0ab015.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./TableOfContent-97d34681.js";import"./index-7895daea.js";import"./Link-d48f545c.js";import"./WrappingType-b81e595a.js";import"./index-9f48c346.js";import"./Label-07c40881.js";import"./index-9c09ad76.js";import"./index-0649104f.js";import"./Popover-aaa493d1.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6cc8839e.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-a5a6237e.js";import"./FocusableElements-9503dbb2.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-846eb684.js";import"./MediaRange-25b98f31.js";import"./style-map-33b353d0.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./ValueState-ab6838cc.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-3616d8e2.js";import"./Suggestions.css-4e0c49ee.js";import"./GroupHeaderListItem-e2839639.js";import"./ListItemBase-e3ea9589.js";import"./ItemNavigation-18d1bc39.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-9f101f31.js";import"./Tokenizer-dbf676db.js";import"./ScrollEnablement-4353003c.js";import"./animate-1a16ba20.js";import"./ResponsivePopover-53484bae.js";import"./Dialog-5c8482e3.js";import"./Title-693a182d.js";import"./StandardListItem-68d600ed.js";import"./ListItem-9ee5a385.js";import"./RadioButton-8f2ea794.js";import"./CheckBox-0dc7f77e.js";import"./accept-83b05845.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-62d048e9.js";import"./Avatar-b9c0c6ae.js";import"./employee-0da36253.js";import"./ResponsivePopoverCommon.css-b43b8141.js";import"./ValueStateMessage.css-202e3b47.js";import"./Token-1389bba6.js";import"./ToggleButton-102a0cd2.js";import"./ComboBoxItem-5f08ce88.js";const M="**Since:** 0.25.0\n\nThe `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups\n",g="The `MultiComboBoxItem` represents the item for a `MultiComboBox`\n",w=`## Structure

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
`,k=[{name:"open",readonly:"true",visibility:"public",since:"1.0.0-rc.5",type:"boolean",description:"Indicates whether the dropdown is open. True if the dropdown is open, false otherwise.",defaultValue:"false"}];function lt(i={}){const{wrapper:r}=Object.assign({},a(),i.components);return r?o.jsx(r,Object.assign({},i,{children:o.jsx(n,{})})):n();function n(){const t=Object.assign({h2:"h2",h1:"h1"},a(),i.components);return o.jsxs(o.Fragment,{children:[o.jsx(x,{of:f}),`
`,o.jsx(h,{since:"0.4.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:p}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(l,{of:p}),`
`,o.jsx(e,{children:w}),`
`,o.jsx(d,{rows:k}),`
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
`,o.jsx(c,{})]})}}export{lt as default};
//# sourceMappingURL=MultiComboBox-deb909c0.js.map
