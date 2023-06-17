import{j as o}from"./jsx-runtime-5926aa06.js";import{C as l,e as s}from"./DomRefTable.module-68e320b1.js";import{D as h}from"./DocsHeader-8c718f51.js";import{F as c}from"./Footer-b48c0726.js";import"./index-ebeaab24.js";import{D as d}from"./DomRefTable-bc0743c7.js";import{S as u}from"./SubcomponentsSection-6138f2fc.js";import{M as x,C as m,a as e}from"./chunk-PCJTTTQV-8ff525e3.js";import{C as f,D as p,G as b,M as C}from"./MultiComboBox.stories-a53115b0.js";import{a as j}from"./index-1393a89a.js";import{u as a}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-98e8b5cb.js";import"./iframe-88cc6741.js";import"../sb-preview/runtime.js";import"./UI5Element-533070c8.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-2e16c08b.js";import"./Icons-67fab4b0.js";import"./decline-1d33941a.js";import"./i18n-defaults-80781f7e.js";import"./information-e88b206d.js";import"./class-map-6a9bd920.js";import"./Button-21e98691.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-2f9956dc.js";import"./index-4c0ab015.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./TableOfContent-e95236ca.js";import"./index-dbf8e929.js";import"./Link-08f0fbaf.js";import"./WrappingType-b81e595a.js";import"./index-7539bdc0.js";import"./Label-94e3ba9d.js";import"./index-9c09ad76.js";import"./index-0101973f.js";import"./Popover-167ff704.js";import"./Integer-f7f172c9.js";import"./PopupUtils-ba2b770f.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-97917f6d.js";import"./FocusableElements-eec123c0.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-aaf74c24.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./ValueState-ab6838cc.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-37bb3474.js";import"./Suggestions.css-6a7a04ae.js";import"./GroupHeaderListItem-42e56f78.js";import"./ListItemBase-bb0e7e03.js";import"./ItemNavigation-211cc58c.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-59389070.js";import"./Tokenizer-827e7644.js";import"./ScrollEnablement-4353003c.js";import"./animate-1a16ba20.js";import"./ResponsivePopover-f849f6e4.js";import"./Dialog-e7dbd17a.js";import"./Title-2e442dfb.js";import"./StandardListItem-4965eb0f.js";import"./ListItem-fa446a08.js";import"./RadioButton-a0e5c6e9.js";import"./CheckBox-724085ae.js";import"./accept-f2459768.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-e957a39c.js";import"./Avatar-01bfa415.js";import"./employee-d2874d42.js";import"./ResponsivePopoverCommon.css-a7286400.js";import"./ValueStateMessage.css-ab874ec7.js";import"./Token-2f19be4a.js";import"./ToggleButton-b0c1a404.js";import"./ComboBoxItem-bfc431f7.js";const M="**Since:** 0.25.0\n\nThe `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups\n",g="The `MultiComboBoxItem` represents the item for a `MultiComboBox`\n",w=`## Structure

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
//# sourceMappingURL=MultiComboBox-021f527d.js.map
