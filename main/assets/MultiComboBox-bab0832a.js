import{j as o}from"./jsx-runtime-5926aa06.js";import{C as l,e as s}from"./DomRefTable.module-aaa91c3e.js";import{D as h}from"./DocsHeader-aca59a02.js";import{F as c}from"./Footer-2d172c80.js";import"./index-ebeaab24.js";import{D as d}from"./DomRefTable-eeefa5fe.js";import{S as u}from"./SubcomponentsSection-6138f2fc.js";import{M as x,C as m,a as e}from"./chunk-PCJTTTQV-c7976c2e.js";import{C as f,D as p,G as b,M as C}from"./MultiComboBox.stories-d74c2721.js";import{a as j}from"./index-7587e080.js";import{u as a}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-cd00211e.js";import"./iframe-ccc94d27.js";import"../sb-preview/runtime.js";import"./UI5Element-a8445a25.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-884f99a7.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-3e9cb840.js";import"./Icons-c55d12a5.js";import"./decline-c4793abd.js";import"./i18n-defaults-80781f7e.js";import"./information-e6fe8610.js";import"./class-map-323a92fb.js";import"./Button-f1768a08.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-fca59c5d.js";import"./index-4c0ab015.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./TableOfContent-c94da2f7.js";import"./index-69465402.js";import"./Link-8b80096c.js";import"./WrappingType-b81e595a.js";import"./index-07b60e32.js";import"./Label-6cefa2d2.js";import"./index-9c09ad76.js";import"./index-372330d7.js";import"./Popover-2f417d64.js";import"./Integer-f7f172c9.js";import"./PopupUtils-b38c74c1.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-3239006e.js";import"./FocusableElements-69e44a9d.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-cea672cf.js";import"./MediaRange-25b98f31.js";import"./style-map-34e6b8f4.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./ValueState-ab6838cc.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-91425847.js";import"./Suggestions.css-2ef2fda5.js";import"./GroupHeaderListItem-bd8efaa6.js";import"./ListItemBase-124add92.js";import"./ItemNavigation-cb92b87f.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-8d822d0c.js";import"./Tokenizer-26722e19.js";import"./ScrollEnablement-4353003c.js";import"./animate-1a16ba20.js";import"./ResponsivePopover-1eb02d4a.js";import"./Dialog-effa1776.js";import"./Title-a5ea80a2.js";import"./StandardListItem-8dc8c287.js";import"./ListItem-a92cce8b.js";import"./RadioButton-021a694f.js";import"./CheckBox-33235970.js";import"./accept-2ae5e2eb.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-70b47038.js";import"./Avatar-3e4df27c.js";import"./employee-d55343ff.js";import"./ResponsivePopoverCommon.css-04f065a8.js";import"./ValueStateMessage.css-111bf458.js";import"./Token-55bee0ec.js";import"./ToggleButton-49eb273a.js";import"./ComboBoxItem-346fa075.js";const M="**Since:** 0.25.0\n\nThe `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups\n",g="The `MultiComboBoxItem` represents the item for a `MultiComboBox`\n",w=`## Structure

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
//# sourceMappingURL=MultiComboBox-bab0832a.js.map
