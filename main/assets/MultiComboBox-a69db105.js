import{j as o}from"./jsx-runtime-5926aa06.js";import{C as l,e as s}from"./DomRefTable.module-0ad99126.js";import{D as c}from"./DocsHeader-edc91194.js";import{F as h}from"./Footer-08cc874e.js";import"./index-ebeaab24.js";import{D as d}from"./DomRefTable-7f83f200.js";import{S as u}from"./SubcomponentsSection-6138f2fc.js";import{M as b,C as p,a as e}from"./chunk-PCJTTTQV-73b064bc.js";import{C as x,D as m,G as f,M as w}from"./MultiComboBox.stories-dbe85125.js";import{a as C}from"./index-f1b55d95.js";import{u as a}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-3d63c45a.js";import"./iframe-d5e6e2ef.js";import"../sb-preview/runtime.js";import"./UI5Element-78be0f3d.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d4224c1c.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-70a9e5b9.js";import"./Icons-26e87c01.js";import"./decline-09ce3004.js";import"./i18n-defaults-80781f7e.js";import"./information-872f55da.js";import"./class-map-18f572ce.js";import"./Button-427cd4bb.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-99b8bbf4.js";import"./i18n-defaults-f002f496.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-3e959ad1.js";import"./index-7ab98221.js";import"./Integer-f7f172c9.js";import"./index-ae58dacb.js";import"./Avatar-e1c9d8f0.js";import"./ResizeHandler-15c77712.js";import"./employee-1c1d2fc1.js";import"./index-fe336cbb.js";import"./index-91a140ca.js";import"./Link-04c4a519.js";import"./WrappingType-b81e595a.js";import"./index-4becd987.js";import"./TableOfContent-b6e25edd.js";import"./index-7826d545.js";import"./Label-263c93f2.js";import"./index-9c09ad76.js";import"./index-52b25abf.js";import"./index-e694a510.js";import"./Popover-a03c4c52.js";import"./PopupsCommon.css-1eb36bcf.js";import"./FocusableElements-53839075.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-54298215.js";import"./BrowserScrollbar.css-119d6915.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./ValueState-ab6838cc.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-59731cbb.js";import"./Suggestions.css-0bf90e55.js";import"./GroupHeaderListItem-514e58f4.js";import"./ListItemBase-d5e2b9fa.js";import"./ItemNavigation-e8f3ce94.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-4ada5b66.js";import"./Tokenizer-2f8b2cc2.js";import"./ScrollEnablement-5e135290.js";import"./animate-1a16ba20.js";import"./ResponsivePopover-5ed17489.js";import"./Dialog-35faa92e.js";import"./Title-e1d9d87f.js";import"./StandardListItem-4f4de76a.js";import"./ListItem-6bbd1cb0.js";import"./RadioButton-1b157057.js";import"./CheckBox-13a91d81.js";import"./accept-18821b02.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-ccb981dd.js";import"./ResponsivePopoverCommon.css-f39aca2a.js";import"./ValueStateMessage.css-998b8922.js";import"./Token-0d832c36.js";import"./ToggleButton-ebf9d89e.js";import"./ComboBoxItem-d87d1077.js";const g="**Since:** 0.25.0  \n**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups\n",j="**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `MultiComboBoxItem` represents the item for a `MultiComboBox`\n",M=`## Structure

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
`,k=[{name:"open",readonly:"true",visibility:"public",since:"1.0.0-rc.5",type:"boolean",description:"Indicates whether the dropdown is open. True if the dropdown is open, false otherwise.",defaultValue:"false"}];function ut(i={}){const{wrapper:r}=Object.assign({},a(),i.components);return r?o.jsx(r,Object.assign({},i,{children:o.jsx(n,{})})):n();function n(){const t=Object.assign({h2:"h2",h1:"h1"},a(),i.components);return o.jsxs(o.Fragment,{children:[o.jsx(b,{of:x}),`
`,o.jsx(c,{since:"0.4.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(p,{of:m}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(l,{of:m}),`
`,o.jsx(e,{children:M}),`
`,o.jsx(d,{rows:k}),`
`,o.jsx(t.h1,{id:"more-examples",children:"More Examples"}),`
`,o.jsx(t.h2,{id:"multicombobox-with-grouping-of-items",children:"MultiComboBox with Grouping of Items"}),`
`,o.jsx(p,{of:f}),`
`,o.jsx(e,{children:u}),`
`,o.jsx(t.h2,{id:"multicomboboxitem",children:"MultiComboBoxItem"}),`
`,o.jsx(s,{hideHTMLPropsNote:!0,of:C}),`
`,o.jsx(e,{children:j}),`
`,o.jsx(t.h2,{id:"multicomboboxgroupitem",children:"MultiComboBoxGroupItem"}),`
`,o.jsx(s,{hideHTMLPropsNote:!0,of:w}),`
`,o.jsx(e,{children:g}),`
`,o.jsx(h,{})]})}}export{ut as default};
//# sourceMappingURL=MultiComboBox-a69db105.js.map
