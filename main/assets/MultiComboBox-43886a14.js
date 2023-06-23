import{j as o}from"./jsx-runtime-5926aa06.js";import{C as l,e as m}from"./DomRefTable.module-7b7d092b.js";import{D as h}from"./DocsHeader-c1f06e8c.js";import{F as c}from"./Footer-9dcd6fb2.js";import"./index-ebeaab24.js";import{D as d}from"./DomRefTable-ebd26327.js";import{S as u}from"./SubcomponentsSection-6138f2fc.js";import{M as x,C as s,a as e}from"./chunk-PCJTTTQV-f6245022.js";import{C as f,D as p,G as b,M as C}from"./MultiComboBox.stories-881fa64e.js";import{a as j}from"./index-444d9673.js";import{u as a}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-498a437d.js";import"./iframe-9a58d1ec.js";import"../sb-preview/runtime.js";import"./UI5Element-978c7ec7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-87626f33.js";import"./Icons-24533df9.js";import"./decline-2dc3f691.js";import"./i18n-defaults-80781f7e.js";import"./information-573ff8e0.js";import"./class-map-6a9bd920.js";import"./Button-c3cdbc47.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-99b8bbf4.js";import"./i18n-defaults-ac1c9dde.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-0421cb7d.js";import"./index-fc58bb5f.js";import"./Integer-f7f172c9.js";import"./index-832cea8d.js";import"./Avatar-02045306.js";import"./ResizeHandler-d96d99c4.js";import"./employee-397ee2c5.js";import"./index-83de8902.js";import"./index-06f0cfcb.js";import"./Link-a59da54b.js";import"./WrappingType-b81e595a.js";import"./index-4c0ab015.js";import"./TableOfContent-cf57f367.js";import"./index-90e35494.js";import"./Label-3a4ee32a.js";import"./index-9c09ad76.js";import"./index-ea8449e1.js";import"./index-e7d7a0c7.js";import"./Popover-24cfcc49.js";import"./PopupUtils-7b496d9b.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-aca8c783.js";import"./FocusableElements-ba36fca8.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./ValueState-ab6838cc.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-a39cbb98.js";import"./Suggestions.css-70644f53.js";import"./GroupHeaderListItem-7e59b74a.js";import"./ListItemBase-81a01599.js";import"./ItemNavigation-e6c8f7b0.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-34850997.js";import"./Tokenizer-4f3141dc.js";import"./ScrollEnablement-5e135290.js";import"./animate-1a16ba20.js";import"./ResponsivePopover-9e38f9a3.js";import"./Dialog-b60b0d62.js";import"./Title-b7551974.js";import"./StandardListItem-6f4cd51e.js";import"./ListItem-3c6228ec.js";import"./RadioButton-3919451e.js";import"./CheckBox-81e7fb8c.js";import"./accept-23bea3d0.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-ac42c02c.js";import"./ResponsivePopoverCommon.css-f329a859.js";import"./ValueStateMessage.css-fb4cc5f8.js";import"./Token-cd012a54.js";import"./ToggleButton-ee711be0.js";import"./ComboBoxItem-cff4a911.js";const M="**Since:** 0.25.0\n\nThe `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups\n",g="The `MultiComboBoxItem` represents the item for a `MultiComboBox`\n",w=`## Structure

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
//# sourceMappingURL=MultiComboBox-43886a14.js.map
