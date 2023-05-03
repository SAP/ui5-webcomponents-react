import{j as o}from"./jsx-runtime-5926aa06.js";import{C as l,d as s}from"./DomRefTable.module-47e7b1ae.js";import{D as h}from"./DocsHeader-76b4e2ad.js";import{F as d}from"./Footer-0bbdb1e1.js";import"./index-ebeaab24.js";import{D as c}from"./DomRefTable-6fadeae9.js";import{S as u}from"./SubcomponentsSection-6138f2fc.js";import{M as x,C as m,a as e}from"./chunk-PCJTTTQV-c74c18e1.js";import{C as f,D as p,G as b,M as C}from"./MultiComboBox.stories-8e619f30.js";import{a as j}from"./index-5d567455.js";import{u as a}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-6a045e5e.js";import"./iframe-97e1d9cd.js";import"../sb-preview/runtime.js";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-c710bf85.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-16710c43.js";import"./Icons-5b18f7d2.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./class-map-eee65cb7.js";import"./Button-6eea99db.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./index-4c0ab015.js";import"./clsx.m-1229b3e0.js";import"./index-2495a9e4.js";import"./ThemingParameters-f4b4144e.js";import"./Import-9164dc7e.js";import"./TableOfContent-5a9559e9.js";import"./index-f196fcaf.js";import"./Link-a00cf029.js";import"./WrappingType-b81e595a.js";import"./index-71a2f66f.js";import"./Label-e22f23ee.js";import"./index-9c09ad76.js";import"./index-37dc2ef4.js";import"./Popover-34a43919.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-bfd93775.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-72af48b2.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-eb41b602.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./ValueState-ab6838cc.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-09ec0732.js";import"./Suggestions.css-d3fc0bec.js";import"./GroupHeaderListItem-f5a2d69c.js";import"./ListItemBase-49bcf604.js";import"./ItemNavigation-01761450.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-8eb05e4f.js";import"./Tokenizer-76d16d3a.js";import"./ScrollEnablement-4353003c.js";import"./animate-1a16ba20.js";import"./ResponsivePopover-37029899.js";import"./Dialog-0fdd42ca.js";import"./Title-c7a0da36.js";import"./StandardListItem-1576ed3d.js";import"./ListItem-2c0fcc20.js";import"./RadioButton-5262eb7a.js";import"./CheckBox-3275c87a.js";import"./accept-9744f30a.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-78d167a6.js";import"./Avatar-f85f46ad.js";import"./employee-0153a597.js";import"./ResponsivePopoverCommon.css-104fb5b1.js";import"./ValueStateMessage.css-af9170b8.js";import"./Token-017dd20e.js";import"./ToggleButton-bf938def.js";import"./ComboBoxItem-e034e0d9.js";const M="**Since:** 0.25.0\n\nThe `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups\n",g="The `MultiComboBoxItem` represents the item for a `MultiComboBox`\n",w=`## Structure

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
`,k=[{name:"open",readonly:"true",visibility:"public",since:"1.0.0-rc.5",type:"boolean",description:"Indicates whether the dropdown is open. True if the dropdown is open, false otherwise.",defaultValue:"false"}];function dt(i={}){const{wrapper:r}=Object.assign({},a(),i.components);return r?o.jsx(r,Object.assign({},i,{children:o.jsx(n,{})})):n();function n(){const t=Object.assign({h2:"h2",h1:"h1"},a(),i.components);return o.jsxs(o.Fragment,{children:[o.jsx(x,{of:f}),`
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
`,o.jsx(d,{})]})}}export{dt as default};
//# sourceMappingURL=MultiComboBox-5c8b359f.js.map
